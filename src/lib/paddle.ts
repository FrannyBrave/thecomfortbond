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

/** Map of Paddle Price ID → secure post-purchase download URL. */
export const PRICE_REDIRECTS: Record<string, string> = {
  // The Programming Blueprint™ Pro
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
  // The Mother's Day Connection Kit
  pri_01kpsqv8dq9e08sjnpgpzs0a7v: "/thank-you/mothers-day-kit",
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

      const target = priceId ? PRICE_REDIRECTS[priceId] : undefined;
      if (target) {
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

/**
 * Open the Paddle Billing overlay checkout for a single Price ID.
 * Auto-loads + initializes Paddle.js on first call.
 */
export async function openPaddleCheckout(priceId: string): Promise<void> {
  // Pinterest 'checkout' event — fires the moment the user intentionally
  // initiates a Paddle checkout (button click), before the overlay opens.
  trackPinterestEvent("checkout", {
    line_items: [{ product_id: priceId, quantity: 1 }],
  });
  try {
    await initPaddle();
    if (!window.Paddle) throw new Error("Paddle not available");
    const discountId = PRICE_DISCOUNTS[priceId];
    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      ...(discountId ? { discountId } : {}),
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
