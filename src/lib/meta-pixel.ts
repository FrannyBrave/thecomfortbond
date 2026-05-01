/**
 * Meta (Facebook) Pixel event tracking helpers.
 *
 * The base Meta Pixel is loaded (deferred) in `index.html`, which exposes
 * `window.fbq`. These helpers wrap it so we can:
 *   - Safely no-op if the pixel is blocked or hasn't loaded yet.
 *   - Prevent duplicate firing of high-value events (Lead, Purchase) per tab.
 *   - Buffer calls that happen before the deferred init runs.
 */

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | "trackCustom",
      eventName?: string,
      data?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

const firedOnce = new Set<string>();

function callFbq(...args: Parameters<NonNullable<Window["fbq"]>>): void {
  if (typeof window === "undefined") return;
  const fn = window.fbq;
  if (typeof fn !== "function") {
    // Pixel not loaded yet (deferred). Retry once after a short delay so
    // we don't lose the event if the user submits before window.load fires.
    window.setTimeout(() => {
      const later = window.fbq;
      if (typeof later === "function") {
        try {
          later(...args);
        } catch {
          /* noop */
        }
      }
    }, 2000);
    return;
  }
  try {
    fn(...args);
  } catch (err) {
    // Never let analytics break the app.
    // eslint-disable-next-line no-console
    console.warn("[meta-pixel] tracking call failed", err);
  }
}

/**
 * Fire a standard Meta Pixel event (Lead, CompleteRegistration, Purchase, …).
 * Pass a `dedupeKey` to ensure the same event fires only once per browser tab.
 */
export function trackMetaEvent(
  event:
    | "Lead"
    | "CompleteRegistration"
    | "Purchase"
    | "InitiateCheckout"
    | "AddToCart"
    | "ViewContent"
    | "Subscribe",
  data?: Record<string, unknown>,
  dedupeKey?: string
): void {
  if (dedupeKey) {
    if (firedOnce.has(dedupeKey)) return;
    firedOnce.add(dedupeKey);
  }
  if (data && Object.keys(data).length > 0) {
    callFbq("track", event, data);
  } else {
    callFbq("track", event);
  }
}
