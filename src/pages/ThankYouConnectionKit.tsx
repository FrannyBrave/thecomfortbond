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

        <a
          href="https://the-comfort-bond-2.kit.com/bafbbac71d"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto px-10 py-5 rounded-lg text-[17px] md:text-[19px] font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
          style={{
            background: "#C67B5C",
            color: "#FAF7F2",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            boxShadow: "0 8px 24px -8px rgba(198,123,92,0.5)",
            letterSpacing: "0.01em",
          }}
        >
          Click Here to Enter Your Email & Get Your Kit →
        </a>

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
