/**
 * Pinterest event tracking helpers.
 *
 * The base Pinterest tag is loaded globally in `index.html`, which exposes
 * `window.pintrk`. These helpers wrap it so we can:
 *   - Safely no-op if the tag failed to load or is blocked.
 *   - Prevent duplicate firing of high-value events (purchase, signup).
 */

declare global {
  interface Window {
    pintrk?: (
      command: "load" | "page" | "track" | "set",
      eventOrId?: string,
      data?: Record<string, unknown>
    ) => void;
  }
}

const firedOnce = new Set<string>();

function callPintrk(...args: Parameters<NonNullable<Window["pintrk"]>>): void {
  if (typeof window === "undefined") return;
  const fn = window.pintrk;
  if (typeof fn !== "function") return;
  try {
    fn(...args);
  } catch (err) {
    // Never let analytics break the app.
    // eslint-disable-next-line no-console
    console.warn("[pinterest] tracking call failed", err);
  }
}

/** Fire a Pinterest page-visit event (for SPA route changes). */
export function trackPinterestPage(): void {
  callPintrk("page");
}

/**
 * Fire `track` for a named event (signup, checkout, purchase, …).
 * Pass a `dedupeKey` to ensure the same event only fires once per browser tab
 * (e.g. one purchase per Paddle transaction id).
 */
export function trackPinterestEvent(
  event: "signup" | "checkout" | "purchase" | "lead" | "addtocart" | "search" | "viewcategory",
  data?: Record<string, unknown>,
  dedupeKey?: string
): void {
  if (dedupeKey) {
    if (firedOnce.has(dedupeKey)) return;
    firedOnce.add(dedupeKey);
  }
  if (data && Object.keys(data).length > 0) {
    callPintrk("track", event, data);
  } else {
    callPintrk("track", event);
  }
}
