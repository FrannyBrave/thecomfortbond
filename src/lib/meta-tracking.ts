/**
 * Meta Pixel + Conversions API dual tracking.
 *
 * Each event fires both:
 *   1. Browser-side via fbq('track', ...) with a generated event_id
 *   2. Server-side via the meta-capi edge function with the SAME event_id
 *
 * Meta dedupes the two using event_name + event_id, so coverage stays
 * accurate even when the Pixel is blocked (ad blockers, iOS, etc).
 */

import { supabase } from "@/integrations/supabase/client";


type EventName =
  | "ViewContent"
  | "AddToCart"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead";

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

function callPixel(event: EventName, params: Record<string, unknown>, eventID: string): void {
  if (typeof window === "undefined") return;
  const fbq = window.fbq;
  const fire = () => {
    try {
      window.fbq?.("track", event, params, { eventID });
    } catch {
      /* noop */
    }
  };
  if (typeof fbq === "function") fire();
  else window.setTimeout(fire, 2000); // Pixel base is deferred ~1.5s
}

async function sendCapi(
  event: EventName,
  customData: Record<string, unknown>,
  eventId: string,
  email?: string
): Promise<void> {
  try {
    await supabase.functions.invoke("meta-capi", {
      body: {
        event_name: event,
        event_id: eventId,
        event_source_url: typeof window !== "undefined" ? window.location.href : undefined,
        email,
        fbc: readCookie("_fbc"),
        fbp: readCookie("_fbp"),
        custom_data: customData,
      },
    });
  } catch (err) {
    // Never let analytics break the app.
    // eslint-disable-next-line no-console
    console.warn("[meta-capi] failed", err);
  }
}

const fired = new Set<string>();

function dedupe(key: string): boolean {
  if (fired.has(key)) return true;
  fired.add(key);
  return false;
}

export function trackViewContent(
  productName: string,
  value?: number,
  currency: string = "USD",
  dedupeKey?: string
): void {
  if (dedupeKey && dedupe(`vc:${dedupeKey}`)) return;
  const eventId = uuid();
  const data: Record<string, unknown> = {
    content_name: productName,
    content_type: "product",
    currency,
  };
  if (typeof value === "number") data.value = value;
  callPixel("ViewContent", data, eventId);
  void sendCapi("ViewContent", data, eventId);
}

export function trackAddToCart(
  productName: string,
  value: number,
  currency: string = "USD"
): void {
  const eventId = uuid();
  const data = {
    content_name: productName,
    content_type: "product",
    value,
    currency,
  };
  callPixel("AddToCart", data, eventId);
  void sendCapi("AddToCart", data, eventId);
}

export function trackInitiateCheckout(
  value: number,
  currency: string = "USD",
  productName?: string
): void {
  const eventId = uuid();
  const data: Record<string, unknown> = { value, currency };
  if (productName) data.content_name = productName;
  callPixel("InitiateCheckout", data, eventId);
  void sendCapi("InitiateCheckout", data, eventId);
}

export function trackPurchase(
  value: number,
  currency: string = "USD",
  orderId: string,
  productName?: string,
  email?: string
): void {
  if (dedupe(`purchase:${orderId}`)) return;
  const eventId = `purchase-${orderId}`; // stable across reloads of confirmation page
  const data: Record<string, unknown> = {
    value,
    currency,
    order_id: orderId,
  };
  if (productName) data.content_name = productName;
  callPixel("Purchase", data, eventId);
  void sendCapi("Purchase", data, eventId, email);
}

export function trackLead(source: string, email?: string): void {
  const eventId = uuid();
  const data = { content_name: source };
  callPixel("Lead", data, eventId);
  void sendCapi("Lead", data, eventId, email);
}
