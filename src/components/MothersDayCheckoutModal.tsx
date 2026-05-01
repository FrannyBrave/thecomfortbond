import { useEffect, useRef, useState, type FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { openPaddleCheckout } from "@/lib/paddle";

/**
 * Email + first-name capture that gates the Mother's Day Connection Kit
 * Paddle checkout.
 *
 * On submit:
 *   1. POST to ConvertKit `/v3/tags/:id/subscribe` — creates/updates the
 *      subscriber and applies the "Buyer: Mothers Day Kit 2026" tag in
 *      a single call.
 *   2. ONLY on a successful submission → open Paddle checkout, prefilling
 *      the email and forwarding both fields as `customData`.
 *
 * If ConvertKit fails, an inline error is shown and Paddle does NOT open.
 */

const CONVERTKIT_API_KEY = "LyFHhQ8J1GJ27wcL4mq-uQ";
const CONVERTKIT_TAG_ID = "19177239"; // Buyer: Mothers Day Kit 2026

const PRICE_ID = "pri_01kpsqv8dq9e08sjnpgpzs0a7v";

interface MothersDayCheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Identifier for the CTA that triggered the modal (used for analytics dedupe). */
  source: string;
}

export const MothersDayCheckoutModal = ({
  open,
  onOpenChange,
  source,
}: MothersDayCheckoutModalProps) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Reset transient state when the modal closes.
  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorMsg("");
    }
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const trimmedEmail = email.trim();
    const trimmedName = firstName.trim();

    if (!trimmedName || trimmedName.length > 100) {
      setStatus("error");
      setErrorMsg("Please enter your first name.");
      return;
    }
    if (!trimmedEmail || trimmedEmail.length > 255 || !trimmedEmail.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/tags/${CONVERTKIT_TAG_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email: trimmedEmail,
            first_name: trimmedName,
          }),
        }
      );

      if (!res.ok) throw new Error(`ConvertKit responded ${res.status}`);

      // Pinterest 'lead' event — only fires after a confirmed submit.
      try {
        const { trackPinterestEvent } = await import("@/lib/pinterest");
        trackPinterestEvent(
          "lead",
          { lead_type: "mothers-day-kit-buyer-intent" },
          `lead:mothers-day-kit:${source}:${trimmedEmail}`
        );
      } catch {
        /* analytics best-effort */
      }

      // Meta Pixel 'Lead' + 'InitiateCheckout' — feeds Facebook/Instagram
      // Ads optimization for warm buyer-intent + checkout-funnel signals.
      try {
        const { trackMetaEvent } = await import("@/lib/meta-pixel");
        trackMetaEvent(
          "Lead",
          {
            content_name: "Mother's Day Connection Kit",
            content_category: source,
            value: 27,
            currency: "USD",
          },
          `meta-lead:mothers-day-kit:${source}:${trimmedEmail}`
        );
        trackMetaEvent(
          "InitiateCheckout",
          {
            content_name: "Mother's Day Connection Kit",
            content_category: source,
            value: 27,
            currency: "USD",
            num_items: 1,
          },
          `meta-ic:mothers-day-kit:${source}:${trimmedEmail}`
        );
      } catch {
        /* analytics best-effort */
      }

      // Open Paddle with prefill + customData. Close the modal first so
      // the Paddle overlay isn't stacked on top of our dialog.
      onOpenChange(false);
      void openPaddleCheckout(PRICE_ID, {
        email: trimmedEmail,
        firstName: trimmedName,
      });
    } catch (err) {
      console.error("[MothersDayCheckoutModal]", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-cream border-forest/10 max-w-md p-0 overflow-hidden"
        onOpenAutoFocus={(e) => {
          // Focus the first field instead of the close button.
          e.preventDefault();
          firstFieldRef.current?.focus();
        }}
      >
        <div className="px-6 pt-7 pb-6 md:px-8 md:pt-9 md:pb-8">
          <DialogHeader className="text-left mb-5">
            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-terracotta mb-3">
              One last step
            </p>
            <DialogTitle className="font-serif text-forest text-2xl md:text-[1.65rem] leading-[1.2]">
              Where should we send your kit?
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-foreground/70 leading-relaxed mt-2">
              Enter your details to continue to secure checkout. We'll send your
              download link to this email after purchase.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <div>
              <label htmlFor="md-first-name" className="sr-only">
                First name
              </label>
              <input
                ref={firstFieldRef}
                id="md-first-name"
                type="text"
                name="first_name"
                required
                autoComplete="given-name"
                maxLength={100}
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                placeholder="First name"
                aria-label="First name"
                aria-invalid={status === "error"}
                disabled={status === "loading"}
                className="w-full h-14 px-4 rounded-md border-[1.5px] border-forest/15 bg-background text-forest placeholder:text-[#6B6358] font-sans text-base focus:outline-none focus:border-terracotta focus:shadow-[0_0_0_4px_rgba(200,101,82,0.12)] focus:ring-0 transition disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="md-email" className="sr-only">
                Email address
              </label>
              <input
                id="md-email"
                type="email"
                name="email_address"
                required
                autoComplete="email"
                inputMode="email"
                maxLength={255}
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                aria-invalid={status === "error"}
                disabled={status === "loading"}
                className="w-full h-14 px-4 rounded-md border-[1.5px] border-forest/15 bg-background text-forest placeholder:text-[#6B6358] font-sans text-base focus:outline-none focus:border-terracotta focus:shadow-[0_0_0_4px_rgba(200,101,82,0.12)] focus:ring-0 transition disabled:opacity-60"
              />
            </div>

            {status === "error" && errorMsg && (
              <p
                className="text-xs font-sans text-destructive"
                role="alert"
                aria-live="polite"
              >
                {errorMsg}
              </p>
            )}

            <Button
              type="submit"
              variant="cta-poppy"
              size="lg"
              className="w-full mt-1"
              disabled={status === "loading"}
            >
              {status === "loading" ? "One moment…" : "Continue to Secure Checkout"}
            </Button>

            <p className="text-[11px] font-sans text-muted-foreground text-center pt-1 leading-relaxed">
              Secure checkout via Paddle · Instant download · 30-day refund
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MothersDayCheckoutModal;
