import { useState, type FormEvent } from "react";

/**
 * Email capture for the /family-visits free guide.
 *
 * Submits to ConvertKit form 9358638 (Mother's Day Family Visit incentive).
 * The guide is delivered by ConvertKit's incentive email after the user
 * confirms their subscription — we do NOT auto-download the PDF here.
 *
 * Two visual variants:
 *  - "light" — for cream/light card backgrounds (Path One card)
 *  - "dark"  — for the forest CTA banner near the bottom of the page
 */

const CONVERTKIT_FORM_ID = "9358638";
const CONVERTKIT_API_KEY = "LyFHhQ8J1GJ27wcL4mq-uQ";

type Variant = "light" | "dark";

interface FamilyVisitEmailCaptureProps {
  variant?: Variant;
  /** Used to dedupe the Pinterest signup event per email per tab. */
  source: string;
}

export const FamilyVisitEmailCapture = ({
  variant = "light",
  source,
}: FamilyVisitEmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!trimmed || trimmed.length > 255) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email: trimmed }),
        }
      );
      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");

      // Pinterest 'signup' event — only after a confirmed successful submit.
      const { trackPinterestEvent } = await import("@/lib/pinterest");
      trackPinterestEvent(
        "signup",
        { lead_type: "family-visit-guide" },
        `signup:family-visit:${source}:${trimmed}`
      );
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      // eslint-disable-next-line no-console
      console.error("[FamilyVisitEmailCapture]", err);
    }
  };

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div
        className={
          isDark
            ? "rounded-md border border-cream/25 bg-cream/10 px-5 py-4 text-center"
            : "rounded-md border border-forest/15 bg-cream-dark/50 px-5 py-4 text-center"
        }
        role="status"
        aria-live="polite"
      >
        <p
          className={`font-serif text-base md:text-lg ${
            isDark ? "text-cream" : "text-forest"
          } mb-1`}
        >
          ✓ Check your inbox
        </p>
        <p
          className={`font-sans text-xs md:text-sm leading-relaxed ${
            isDark ? "text-cream/80" : "text-foreground/70"
          }`}
        >
          We just emailed you the link to download your free Mother's Day Visit
          Guide. (If you don't see it, check spam or promotions.)
        </p>
      </div>
    );
  }

  const inputClass = isDark
    ? "flex-1 min-w-0 h-14 px-4 rounded-md border-[1.5px] border-cream/30 bg-cream/10 text-cream placeholder:text-cream/60 font-sans text-sm focus:outline-none focus:border-cream focus:ring-0 transition disabled:opacity-60"
    : "flex-1 min-w-0 h-14 px-4 rounded-md border-[1.5px] border-[#C86552]/40 bg-background text-forest placeholder:text-[#8C8579] font-sans text-sm focus:outline-none focus:border-[#C86552] focus:ring-0 transition disabled:opacity-60";

  const buttonClass = isDark
    ? "h-14 px-5 rounded-md bg-terracotta text-cream font-sans font-medium text-sm whitespace-nowrap hover:bg-[#B86A4D] active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_6px_20px_-6px_rgba(198,123,92,0.55)]"
    : "h-14 px-5 rounded-md bg-forest text-cream font-sans font-medium text-sm whitespace-nowrap hover:bg-forest/90 active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_6px_20px_-6px_rgba(45,74,62,0.45)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor={`fv-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`fv-email-${source}`}
          type="email"
          name="email_address"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          aria-invalid={status === "error"}
          disabled={status === "loading"}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={buttonClass}
        >
          {status === "loading" ? "Sending…" : "Send Me the Guide"}
        </button>
      </div>
      {status === "error" && errorMsg && (
        <p
          className={`mt-2 text-xs font-sans ${
            isDark ? "text-cream/90" : "text-destructive"
          }`}
          role="alert"
        >
          {errorMsg}
        </p>
      )}
      <p
        className={`mt-3 text-[11px] font-sans tracking-wide text-center ${
          isDark ? "text-cream/60" : "text-muted-foreground"
        }`}
      >
        Free PDF · Sent straight to your inbox · Unsubscribe anytime
      </p>
    </form>
  );
};

export default FamilyVisitEmailCapture;
