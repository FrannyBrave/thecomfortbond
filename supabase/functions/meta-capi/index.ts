// Meta Conversions API forwarder.
// Receives event payloads from the browser (with a shared event_id for
// deduplication against the Meta Pixel) and posts them to Meta's CAPI.
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const PIXEL_ID = Deno.env.get("META_PIXEL_ID");
const ACCESS_TOKEN = Deno.env.get("META_CAPI_ACCESS_TOKEN");
const TEST_EVENT_CODE = Deno.env.get("META_TEST_EVENT_CODE");

async function sha256Hex(input: string): Promise<string> {
  const buf = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getCookie(cookieHeader: string | null, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return undefined;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ error: "META_PIXEL_ID or META_CAPI_ACCESS_TOKEN not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json().catch(() => ({}));
    const {
      event_name,
      event_id,
      event_source_url,
      email,
      custom_data,
      fbc: fbcFromBody,
      fbp: fbpFromBody,
    } = body ?? {};

    if (!event_name || !event_id) {
      return new Response(
        JSON.stringify({ error: "event_name and event_id are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const xff = req.headers.get("x-forwarded-for") ?? "";
    const clientIp = xff.split(",")[0].trim() || undefined;
    const userAgent = req.headers.get("user-agent") ?? undefined;
    const cookieHeader = req.headers.get("cookie");
    const fbc = fbcFromBody || getCookie(cookieHeader, "_fbc");
    const fbp = fbpFromBody || getCookie(cookieHeader, "_fbp");

    const user_data: Record<string, unknown> = {};
    if (email && typeof email === "string") {
      user_data.em = [await sha256Hex(email.trim().toLowerCase())];
    }
    if (clientIp) user_data.client_ip_address = clientIp;
    if (userAgent) user_data.client_user_agent = userAgent;
    if (fbc) user_data.fbc = fbc;
    if (fbp) user_data.fbp = fbp;

    const payload: Record<string, unknown> = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id,
          action_source: "website",
          ...(event_source_url ? { event_source_url } : {}),
          user_data,
          ...(custom_data ? { custom_data } : {}),
        },
      ],
    };
    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const text = await resp.text();
    return new Response(text, {
      status: resp.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
