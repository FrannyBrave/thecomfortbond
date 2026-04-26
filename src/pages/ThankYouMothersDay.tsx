import { useEffect } from "react";

const ZIP_DOWNLOAD_URL = "/downloads/The-Mothers-Day-Connection-Kit.zip";
const ZIP_FILENAME = "The-Mothers-Day-Connection-Kit.zip";

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
          className="text-[16px] md:text-[18px] max-w-[520px] mx-auto m-0 mb-10"
          style={{
            color: "rgba(45,74,62,0.85)",
            lineHeight: 1.65,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          We are so honored to help you prepare for this visit. Click below to
          download your complete Mother's Day Connection Kit.
        </p>

        <a
          href={ZIP_DOWNLOAD_URL}
          download={ZIP_FILENAME}
          className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[16px] font-medium text-white no-underline transition-transform hover:-translate-y-0.5"
          style={{
            background: "#C67B5C",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            boxShadow: "0 10px 24px -10px rgba(198,123,92,0.55)",
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
