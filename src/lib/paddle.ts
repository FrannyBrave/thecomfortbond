/**
 * Paddle Billing (v2) integration — overlay checkout.
 *
 * Loads Paddle.js once, initializes with the live client token, and on
 * `checkout.completed` redirects the buyer to the secure download URL
 * mapped from the purchased Price ID.
 */

import { trackPinterestEvent } from "./pinterest";
import { trackInitiateCheckout, trackPurchase } from "./meta-tracking";


const PADDLE_JS_SRC = "https://cdn.paddle.com/paddle/v2/paddle.js";
const CLIENT_TOKEN = "live_bd95fc6721aad743909ee0f4cbd";

// ============================================================
// ConvertKit purchase-tag delivery
// ============================================================
// When Paddle confirms a purchase, we tag the buyer in ConvertKit so the
// matching delivery sequence (per product) fires automatically. Each tag ID
// below corresponds to a "Purchased - <Product>" tag in ConvertKit; the
// matching automation in ConvertKit is set to trigger on that tag.

const CONVERTKIT_API_KEY = "LyFHhQ8J1GJ27wcL4mq-uQ";

const PRICE_TO_CK_PURCHASE_TAG: Record<string, string> = {
  // The Connection Season: Summer Edition (formerly Blueprint Pro price ID)
  pri_01kpagj5jtaxcnkbtjctq616k4: "19660238",
  // The Remember When Kit
  pri_01kpafx84h0z9z11fwc5m84dam: "19660230",
  // The Garden Memories Kit
  pri_01kpafvx3erd68458p4em99141: "19660234",
  // The Hands That Made It Kit
  pri_01kpafv0r50q149ctgje0dmn0q: "19660235",
  // The Places We've Been Kit
  pri_01kpafwqs0wwzatbs5721cyfmk: "19660237",
  // The Kitchen Table Memories Kit
  pri_01kpafxq9xrqg0qhqfttzdjswf: "19660232",
  // The Comfort Bond Collection (5-Kit Bundle)
  pri_01kpafqz2tc4pfc262j1dnh531: "19660239",
};

/** Per-product metadata for analytics events (Pinterest, Meta, etc). */
const PRICE_TO_PRODUCT_META: Record<
  string,
  { name: string; slug: string; price: number; category: string }
> = {
  pri_01kpagj5jtaxcnkbtjctq616k4: {
    name: "The Connection Season: Summer Edition",
    slug: "connection-season-summer",
    price: 34,
    category: "Seasonal Editions",
  },
  pri_01kpafx84h0z9z11fwc5m84dam: {
    name: "The Remember When Kit",
    slug: "remember-when",
    price: 34,
    category: "Connection Kits",
  },
  pri_01kpafvx3erd68458p4em99141: {
    name: "The Garden Memories Kit",
    slug: "garden-memories",
    price: 34,
    category: "Connection Kits",
  },
  pri_01kpafv0r50q149ctgje0dmn0q: {
    name: "The Hands That Made It Kit",
    slug: "hands-that-made-it",
    price: 34,
    category: "Connection Kits",
  },
  pri_01kpafwqs0wwzatbs5721cyfmk: {
    name: "The Places We've Been Kit",
    slug: "places-weve-been",
    price: 34,
    category: "Connection Kits",
  },
  pri_01kpafxq9xrqg0qhqfttzdjswf: {
    name: "The Kitchen Table Memories Kit",
    slug: "kitchen-table-memories",
    price: 34,
    category: "Connection Kits",
  },
  pri_01kpafqz2tc4pfc262j1dnh531: {
    name: "The Comfort Bond Collection",
    slug: "collection",
    price: 147,
    category: "Gift Bundles",
  },
};

/** Local sessionStorage de-dupe so a repeated callback can't double-fire. */
const firedPurchaseTags = new Set<string>();


async function tagConvertKitPurchase(
  tagId: string,
  email: string,
  firstName: string | undefined,
  txId: string
): Promise<void> {
  if (!tagId) {
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
            currency_code?: string;
            items?: Array<{ price_id?: string; priceId?: string; quantity?: number }>;
            totals?: { total?: number | string; grand_total?: number | string };
            customer?: { email?: string };
            custom_data?: { email?: string; first_name?: string };
            customData?: { email?: string; first_name?: string };
          }
        | undefined;
      const purchasedId = data?.items?.find(
        (it) => it.price_id || it.priceId
      );
      const priceId = purchasedId?.price_id ?? purchasedId?.priceId;
      const meta = priceId ? PRICE_TO_PRODUCT_META[priceId] : undefined;

      // Pinterest 'checkout' event — fires on confirmed Paddle checkout.completed,
      // de-duplicated by transaction id. Uses Paddle's actual transaction total
      // (handles discounts/bundles/currency), falling back to static product price.
      const txId = data?.transaction_id ?? data?.id ?? priceId ?? "unknown";
      const rawTotal = data?.totals?.total ?? data?.totals?.grand_total;
      const txValue =
        rawTotal !== undefined ? Number(rawTotal) : meta?.price;
      const quantity = purchasedId?.quantity ?? 1;
      trackPinterestEvent(
        "checkout",
        {
          ...(txValue !== undefined && !Number.isNaN(txValue) ? { value: txValue } : {}),
          order_quantity: quantity,
          currency: data?.currency_code ?? "USD",
          line_items: [
            {
              ...(meta ? { product_name: meta.name, product_id: meta.slug } : { product_id: priceId }),
              ...(meta ? { product_price: meta.price } : {}),
              product_quantity: quantity,
            },
          ],
        },
        `checkout:${txId}`
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

      // Meta Pixel + CAPI Purchase event — deduped on transaction id.
      const purchaseValue =
        txValue !== undefined && !Number.isNaN(txValue) ? txValue : meta?.price;
      if (purchaseValue !== undefined) {
        trackPurchase(
          purchaseValue,
          data?.currency_code ?? "USD",
          txId,
          meta?.name,
          buyerEmail
        );
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
const PRICE_SUCCESS_URLS: Record<string, string> = {};

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
  const ckMeta = PRICE_TO_PRODUCT_META[priceId];
  if (ckMeta) trackInitiateCheckout(ckMeta.price, "USD", ckMeta.name);

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
