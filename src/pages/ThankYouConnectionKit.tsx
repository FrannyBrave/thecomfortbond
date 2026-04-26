import { useEffect, useRef } from "react";

const CONVERTKIT_FORM_HTML = `
<form action="https://app.kit.com/forms/9369936/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9369936" data-uid="bafbbac71d" data-format="inline" data-version="5" min-width="400 500 600 700 800" style="border-radius: 8px; background-color: #1B1B1B; padding: 32px;">
  <div data-style="minimal">
    <div class="formkit-header" data-element="header" style="color: #ffffff; font-weight: 700; margin-bottom: 16px;">
      <h2 style="text-align:left; font-family: 'Playfair Display', Georgia, serif; font-size: 22px; line-height: 1.3; margin: 0;">Enter your email below, and I will instantly send your Connection Kit to your inbox.</h2>
    </div>
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" class="seva-fields formkit-fields" style="display: flex; flex-direction: column; gap: 12px;">
      <div class="formkit-field">
        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required type="email" style="color: #2D4A3E; font-weight: 400; background-color: #ffffff; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); padding: 14px 16px; font-size: 15px; width: 100%; box-sizing: border-box; font-family: 'DM Sans', system-ui, sans-serif;" />
      </div>
      <button data-element="submit" class="formkit-submit" style="color: #ffffff; background-color: #C67B5C; border-radius: 6px; font-weight: 600; border: 0; padding: 14px 20px; font-size: 15px; cursor: pointer; font-family: 'DM Sans', system-ui, sans-serif;">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Send My Connection Kit</span>
      </button>
    </div>
    <div data-element="guarantee" class="formkit-guarantee" style="color: rgba(255,255,255,0.6); font-weight: 400; font-size: 12px; margin-top: 12px; font-family: 'DM Sans', system-ui, sans-serif;">
      <p style="margin: 0;">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  </div>
</form>
`;

const ThankYouConnectionKit = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Thank you — Your Connection Kit | The Comfort Bond™";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // Load ConvertKit script
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (meta.parentNode) document.head.removeChild(meta);
      if (script.parentNode) document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24"
      style={{ background: "#FAF7F2" }}
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
          className="text-[36px] md:text-[52px] leading-[1.1] m-0 mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#C67B5C",
            fontWeight: 600,
          }}
        >
          Your Connection Kit is almost here! 🤍
        </h1>

        <p
          className="text-[16px] md:text-[18px] max-w-[560px] mx-auto m-0 mb-10"
          style={{
            color: "#2D4A3E",
            lineHeight: 1.7,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          Thank you so much for your purchase. To ensure your digital files arrive
          safely, please confirm the email address you used at checkout by entering
          it below. I will instantly send your secure download link directly to your
          inbox so you can start preparing for a peaceful, meaningful visit.
        </p>

        <div
          ref={formContainerRef}
          className="text-left"
          dangerouslySetInnerHTML={{ __html: CONVERTKIT_FORM_HTML }}
        />

        <p
          className="text-[13px] md:text-[14px] mt-8 m-0 max-w-[480px] mx-auto"
          style={{
            color: "rgba(45,74,62,0.7)",
            lineHeight: 1.6,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          Need help? Email me directly at{" "}
          <a
            href="mailto:francesca@thecomfortbond.com"
            style={{ color: "#C67B5C", fontWeight: 600 }}
          >
            francesca@thecomfortbond.com
          </a>
        </p>
      </main>
    </div>
  );
};

export default ThankYouConnectionKit;
