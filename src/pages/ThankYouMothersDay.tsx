import { useEffect, useState, type FormEvent } from "react";

const ZIP_DOWNLOAD_URL = "/downloads/The-Mothers-Day-Connection-Kit.zip";
const ZIP_FILENAME = "The-Mothers-Day-Connection-Kit.zip";

// ConvertKit incentive form for the Mother's Day Connection Kit.
// Replace CONVERTKIT_FORM_ID with the form ID of the new incentive form
// you create in ConvertKit (the one that has the kit's ZIP attached as
// the "incentive" download). API key is the same public ConvertKit v3 key
// already used by the family-visits capture.
const CONVERTKIT_FORM_ID = "9369936"; // Mother's Day Connection Kit incentive form
const CONVERTKIT_API_KEY = "LyFHhQ8J1GJ27wcL4mq-uQ";

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThankYouMothersDay = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Thank you — Your Mother's Day Kit | The Comfort Bond™";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!trimmed || trimmed.length > 255 || !/^\S+@\S+\.\S+$/.test(trimmed)) {
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
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or use the download button below.");
      // eslint-disable-next-line no-console
      console.error("[ThankYouMothersDay] ConvertKit subscribe failed", err);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24"
      style={{ background: "var(--cream, #FAF7F2)" }}
    >
      <main className="w-full max-w-[640px] text-center">
        <div
          className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 px-3 py-1 rounded-full"
          style={{
            background: "rgba(198,123,92,0.12)",
            color: "#C67B5C",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          ✓ Purchase Confirmed
        </div>

        <h1
          className="text-[36px] md:text-[52px] leading-[1.1] m-0 mb-5"
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            color: "#2D4A3E",
            fontWeight: 600,
          }}
        >
          Thank you.{" "}
          <span style={{ fontStyle: "italic", color: "#C67B5C" }}>
            Your kit is ready.
          </span>
        </h1>

        <p
          className="text-[16px] md:text-[18px] max-w-[520px] mx-auto m-0 mb-8"
          style={{
            color: "rgba(45,74,62,0.85)",
            lineHeight: 1.65,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          Enter your email below and we'll send your complete Mother's Day
          Connection Kit straight to your inbox — so you'll always have it,
          even after you close this tab.
        </p>

        {/* Email capture → ConvertKit incentive form delivers the kit */}
        {status === "success" ? (
          <div
            className="rounded-lg px-6 py-8 mb-8 text-left animate-in fade-in slide-in-from-bottom-2 duration-300"
            style={{
              background: "rgba(45,74,62,0.06)",
              border: "1.5px solid rgba(45,74,62,0.18)",
            }}
            role="status"
            aria-live="polite"
          >
            <p
              className="m-0 mb-2 text-[20px] md:text-[22px]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#2D4A3E",
                fontWeight: 600,
              }}
            >
              ✓ Check your inbox
            </p>
            <p
              className="m-0 text-[14px] md:text-[15px]"
              style={{
                color: "rgba(45,74,62,0.8)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                lineHeight: 1.6,
              }}
            >
              We just emailed your Mother's Day Connection Kit. (If you don't
              see it within a few minutes, check spam or promotions.) You can
              also download it directly using the button below.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full mb-8"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="md-kit-email" className="sr-only">
                Email address
              </label>
              <input
                id="md-kit-email"
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
                className="flex-1 h-14 px-5 rounded-full text-[15px] focus:outline-none transition disabled:opacity-60"
                style={{
                  border: "1.5px solid rgba(198,123,92,0.4)",
                  background: "#fff",
                  color: "#2D4A3E",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-14 px-7 rounded-full text-[15px] font-medium text-white whitespace-nowrap transition hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: "#C67B5C",
                  boxShadow: "0 10px 24px -10px rgba(198,123,92,0.55)",
                }}
              >
                {status === "loading" ? "Sending…" : "Email Me My Kit"}
              </button>
            </div>
            {status === "error" && errorMsg && (
              <p
                className="mt-3 text-[13px]"
                style={{ color: "#B23A3A" }}
                role="alert"
              >
                {errorMsg}
              </p>
            )}
          </form>
        )}

        <div
          className="flex items-center gap-4 mb-6"
          aria-hidden="true"
        >
          <div className="flex-1 h-px" style={{ background: "rgba(45,74,62,0.15)" }} />
          <span
            className="text-[12px] tracking-[0.18em] uppercase"
            style={{
              color: "rgba(45,74,62,0.55)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          >
            or download now
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(45,74,62,0.15)" }} />
        </div>

        <a
          href={ZIP_DOWNLOAD_URL}
          download={ZIP_FILENAME}
          className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[16px] font-medium no-underline transition-transform hover:-translate-y-0.5"
          style={{
            background: "transparent",
            border: "2px solid #C67B5C",
            color: "#C67B5C",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          <DownloadIcon />
          Download Your Kit (.zip)
        </a>

        <p
          className="text-[13px] md:text-[14px] mt-8 m-0 max-w-[480px] mx-auto"
          style={{
            color: "rgba(45,74,62,0.65)",
            lineHeight: 1.6,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          Note: Please contact me directly at{" "}
          <a
            href="mailto:francesca@thecomfortbond.com"
            style={{ color: "#C67B5C", fontWeight: 600 }}
          >
            francesca@thecomfortbond.com
          </a>{" "}
          if you need any help accessing your files.
        </p>
      </main>
    </div>
  );
};

export default ThankYouMothersDay;
