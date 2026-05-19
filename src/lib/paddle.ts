/**
 * Paddle Billing (v2) integration — overlay checkout.
 *
 * Loads Paddle.js once, initializes with the live client token, and on
 * `checkout.completed` redirects the buyer to the secure download URL
 * mapped from the purchased Price ID.
 */

import { trackPinterestEvent } from "./pinterest";

const PADDLE_JS_SRC = "https://cdn.paddle.com/paddle/v2/paddle.js";
const CLIENT_TOKEN = "live_bd95fc6721aad743909ee0f4cbd";

// ============================================================
// ConvertKit purchase-tag delivery
// ============================================================
// When Paddle confirms a purchase, we tag the buyer in ConvertKit so the
// matching delivery sequence (per product) fires automatically.
//
// ⚠️ ACTION REQUIRED: Replace each "REPLACE_ME" below with the numeric
// ConvertKit tag ID for that product. Find the ID in ConvertKit →
// Subscribers → Tags → click the tag → it's in the URL
// (e.g. https://app.kit.com/subscribers?tag=19177239 → tag ID is 19177239).
// Then set each delivery automation's trigger to "Tag added: <that tag>".

const CONVERTKIT_API_KEY = "LyFHhQ8J1GJ27wcL4mq-uQ";

const PRICE_TO_CK_PURCHASE_TAG: Record<string, string> = {
  // The Blueprint™ Pro
  pri_01kpagj5jtaxcnkbtjctq616k4: "REPLACE_ME",
  // The Nostalgia Kit (Remember When)
  pri_01kpafx84h0z9z11fwc5m84dam: "REPLACE_ME",
  // The Heirloom Garden Kit (Garden Memories)
  pri_01kpafvx3erd68458p4em99141: "REPLACE_ME",
  // The Makers & Menders Kit (Hands That Made It)
  pri_01kpafv0r50q149ctgje0dmn0q: "REPLACE_ME",
  // The "Are We There Yet?" Kit (Places We've Been)
  pri_01kpafwqs0wwzatbs5721cyfmk: "REPLACE_ME",
  // The Heart of the Home Kit (Kitchen Table Memories)
  pri_01kpafxq9xrqg0qhqfttzdjswf: "REPLACE_ME",
  // The 5-Kit Bundle (Comfort Bond Collection)
  pri_01kpafqz2tc4pfc262j1dnh531: "REPLACE_ME",
  // The Mother's Day Connection Kit
  pri_01kpsqv8dq9e08sjnpgpzs0a7v: "REPLACE_ME",
};

/** Local sessionStorage de-dupe so a repeated callback can't double-fire. */
const firedPurchaseTags = new Set<string>();

async function tagConvertKitPurchase(
  tagId: string,
  email: string,
  firstName: string | undefined,
  txId: string
): Promise<void> {
  if (!tagId || tagId === "REPLACE_ME") {
    console.warn("[ConvertKit] Missing purchase tag id for transaction", txId);
    return;
  }
  const dedupeKey = `ck-purchase:${txId}:${tagId}`;
  if (firedPurchaseTags.has(dedupeKey)) return;
  firedPurchaseTags.add(dedupeKey);
  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email.trim(),
          ...(firstName ? { first_name: firstName.trim() } : {}),
        }),
      }
    );
    if (!res.ok) throw new Error(`ConvertKit responded ${res.status}`);
  } catch (err) {
    console.error("[ConvertKit] Failed to apply purchase tag", err);
  }
}



/** Map of Paddle Price ID → secure post-purchase download URL. */
export const PRICE_REDIRECTS: Record<string, string> = {
  // The Blueprint™ Pro
  pri_01kpagj5jtaxcnkbtjctq616k4: "/thank-you/blueprint-pro",
  // The Nostalgia Kit
  pri_01kpafx84h0z9z11fwc5m84dam: "/thank-you/nostalgia-kit",
  // The Heirloom Garden Kit
  pri_01kpafvx3erd68458p4em99141: "/thank-you/heirloom-garden-kit",
  // The Makers & Menders Kit
  pri_01kpafv0r50q149ctgje0dmn0q: "/thank-you/makers-and-menders-kit",
  // The "Are We There Yet?" Kit
  pri_01kpafwqs0wwzatbs5721cyfmk: "/thank-you/are-we-there-yet-kit",
  // The Heart of the Home Kit
  pri_01kpafxq9xrqg0qhqfttzdjswf: "/thank-you/heart-of-the-home-kit",
  // The 5-Kit Bundle (Complete Engagement System) — routes to a hidden access hub
  pri_01kpafqz2tc4pfc262j1dnh531: "/bundle-access",
  // The Mother's Day Connection Kit — handled exclusively by Paddle settings.successUrl
  // (see PRICE_SUCCESS_URLS below). Intentionally omitted here to avoid a redirect race.
};

declare global {
  interface Window {
    Paddle?: {
      Environment?: { set: (env: "production" | "sandbox") => void };
      Initialize: (opts: {
        token: string;
        eventCallback?: (event: { name?: string; data?: unknown }) => void;
      }) => void;
      Checkout: {
        open: (opts: {
          items: Array<{ priceId: string; quantity?: number }>;
          discountId?: string;
          settings?: Record<string, unknown>;
          customer?: { email?: string };
          customData?: Record<string, unknown>;
        }) => void;
      };
    };
  }
}

let loadPromise: Promise<void> | null = null;

function loadPaddleScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("SSR"));
  if (window.Paddle) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${PADDLE_JS_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Paddle.js failed to load")));
      return;
    }
    const script = document.createElement("script");
    script.src = PADDLE_JS_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Paddle.js failed to load"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

let initialized = false;

async function initPaddle(): Promise<void> {
  await loadPaddleScript();
  if (initialized || !window.Paddle) return;

  // Production environment is the default for live tokens, but set explicitly.
  window.Paddle.Environment?.set("production");

  window.Paddle.Initialize({
    token: CLIENT_TOKEN,
    eventCallback: (event) => {
      if (event?.name !== "checkout.completed") return;
      const data = event.data as
        | {
            id?: string;
            transaction_id?: string;
            items?: Array<{ price_id?: string; priceId?: string }>;
            customer?: { email?: string };
            custom_data?: { email?: string; first_name?: string };
            customData?: { email?: string; first_name?: string };
          }
        | undefined;
      const purchasedId = data?.items?.find(
        (it) => it.price_id || it.priceId
      );
      const priceId = purchasedId?.price_id ?? purchasedId?.priceId;

      // Pinterest 'purchase' event — fires only on a confirmed Paddle
      // checkout.completed event. De-duplicated by transaction id so
      // re-rendering or repeat callbacks never double-fire.
      const txId = data?.transaction_id ?? data?.id ?? priceId ?? "unknown";
      trackPinterestEvent(
        "purchase",
        priceId ? { line_items: [{ product_id: priceId, quantity: 1 }] } : undefined,
        `purchase:${txId}`
      );

      // ConvertKit purchase tag — fires the per-product delivery sequence.
      // Pulls email from Paddle's customer object, falling back to customData
      // we forwarded from the pre-checkout modal.
      const buyerEmail =
        data?.customer?.email ??
        data?.custom_data?.email ??
        data?.customData?.email;
      const buyerFirstName =
        data?.custom_data?.first_name ?? data?.customData?.first_name;
      const purchaseTagId = priceId ? PRICE_TO_CK_PURCHASE_TAG[priceId] : undefined;
      if (buyerEmail && purchaseTagId) {
        void tagConvertKitPurchase(purchaseTagId, buyerEmail, buyerFirstName, txId);
      }

      // If this price uses Paddle's native successUrl, let Paddle handle the
      // redirect — do NOT run our own JS redirect (it would race and win on
      // the current host, sending users to the wrong domain).
      const hasSuccessUrl = priceId ? Boolean(PRICE_SUCCESS_URLS[priceId]) : false;
      const target = priceId ? PRICE_REDIRECTS[priceId] : undefined;
      if (target && !hasSuccessUrl) {
        // Brief delay so Paddle can finish its overlay close animation.
        setTimeout(() => {
          window.location.href = target;
        }, 600);
      }
    },

  });

  initialized = true;
}

/** Map of Paddle Price ID → Discount ID to auto-apply at checkout. */
const PRICE_DISCOUNTS: Record<string, string> = {
  // The 5-Kit Bundle — 10% off
  pri_01kpafqz2tc4pfc262j1dnh531: "dsc_01kpbrz4n63ahb07e9dvwbjb0n",
};

/** Map of Paddle Price ID → external success URL (overrides PRICE_REDIRECTS). */
const PRICE_SUCCESS_URLS: Record<string, string> = {
  // The Mother's Day Connection Kit — own-domain thank-you page
  pri_01kpsqv8dq9e08sjnpgpzs0a7v: "https://thecomfortbond.com/thank-you",
};

/**
 * Open the Paddle Billing overlay checkout for a single Price ID.
 * Auto-loads + initializes Paddle.js on first call.
 *
 * Optional `customer` prefills the checkout email field and is also
 * forwarded into Paddle `customData` so the values are available on
 * the resulting transaction (webhook + dashboard).
 */
export async function openPaddleCheckout(
  priceId: string,
  customer?: { email?: string; firstName?: string }
): Promise<void> {
  // Pinterest 'checkout' event — fires the moment the user intentionally
  // initiates a Paddle checkout (button click), before the overlay opens.
  trackPinterestEvent("checkout", {
    line_items: [{ product_id: priceId, quantity: 1 }],
  });
  try {
    await initPaddle();
    if (!window.Paddle) throw new Error("Paddle not available");
    const discountId = PRICE_DISCOUNTS[priceId];
    const successUrl = PRICE_SUCCESS_URLS[priceId];
    const email = customer?.email?.trim();
    const firstName = customer?.firstName?.trim();
    const hasCustomData = Boolean(email || firstName);
    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      ...(discountId ? { discountId } : {}),
      ...(successUrl ? { settings: { successUrl } } : {}),
      ...(email ? { customer: { email } } : {}),
      ...(hasCustomData
        ? {
            customData: {
              ...(email ? { email } : {}),
              ...(firstName ? { first_name: firstName } : {}),
            },
          }
        : {}),
    });
  } catch (err) {
    console.error("[Paddle] Failed to open checkout", err);
    // Fallback: send the user to the secure download mapping page if any,
    // otherwise no-op so the UI doesn't break.
  }
}

/** Eagerly warm up Paddle.js (e.g. on app mount) for faster first checkout. */
export function preloadPaddle(): void {
  void initPaddle().catch(() => {
    /* swallow — will retry on click */
  });
}
