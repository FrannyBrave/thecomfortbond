import { useEffect } from "react";

const ThankYouConnectionKit = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Thank you — Your Connection Kit | The Comfort Bond™";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      if (meta.parentNode) document.head.removeChild(meta);
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
          Thank you — your kit is on its way 🤍
        </h1>

        <p
          className="text-[16px] md:text-[18px] max-w-[560px] mx-auto m-0 mb-6"
          style={{
            color: "#2D4A3E",
            lineHeight: 1.7,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          Your secure download link is being sent to the email address you
          entered at checkout. It should arrive within the next few minutes.
        </p>

        <div
          className="rounded-xl px-6 py-5 mb-8 text-left max-w-[520px] mx-auto"
          style={{
            background: "rgba(198,123,92,0.08)",
            border: "1px solid rgba(198,123,92,0.18)",
          }}
        >
          <p
            className="text-[14px] md:text-[15px] m-0"
            style={{
              color: "#2D4A3E",
              lineHeight: 1.65,
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          >
            <strong style={{ color: "#C67B5C" }}>Don't see it yet?</strong>{" "}
            Please check your spam, promotions, or junk folder — and add{" "}
            <strong>francesca@thecomfortbond.com</strong> to your contacts so
            future emails land safely in your inbox.
          </p>
        </div>

        <p
          className="text-[13px] md:text-[14px] m-0 max-w-[480px] mx-auto"
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
