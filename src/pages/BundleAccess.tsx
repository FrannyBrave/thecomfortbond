import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FooterSection } from "@/components/sections/FooterSection";

const DOWNLOADS = [
  { label: "The Nostalgia Kit", href: "/downloads/nostalgia-kit.pdf", filename: "nostalgia-kit.pdf" },
  { label: "The Heirloom Garden Kit", href: "/downloads/heirloom-garden-kit.pdf", filename: "heirloom-garden-kit.pdf" },
  { label: "The Makers & Menders Kit", href: "/downloads/makers-menders-kit.pdf", filename: "makers-menders-kit.pdf" },
  { label: "The Are We There Yet Kit", href: "/downloads/Are-We-There-Yet.pdf", filename: "Are-We-There-Yet.pdf" },
  { label: "The Heart of the Home Kit", href: "/downloads/Heart-of-the-Home.pdf", filename: "Heart-of-the-Home.pdf" },
];

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BundleAccess = () => {
  // Mark page as noindex/nofollow at runtime (in addition to per-page meta tag)
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Your 5-Kit Bundle | The Comfort Bond™";

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
    <div className="min-h-screen flex flex-col" style={{ background: "var(--cream, #FAF7F2)" }}>
      <main className="flex-1 px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[820px] mx-auto">
          {/* Header card */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(145deg, #3D5A47 0%, #2C4235 100%)",
              boxShadow: "0 20px 50px -20px rgba(45,74,62,0.4)",
            }}
          >
            <div
              className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(232,201,154,0.15)", color: "#E8C99A" }}
            >
              ✓ Purchase Confirmed
            </div>
            <h1
              className="text-[32px] md:text-[44px] leading-[1.15] m-0 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#FAF7F2", fontWeight: 600 }}
            >
              Welcome to The Comfort Bond™
              <br />
              <span style={{ fontStyle: "italic", color: "#E8C99A" }}>5-Kit Bundle</span>
            </h1>
            <p
              className="text-[15px] md:text-[16px] max-w-[560px] mx-auto m-0"
              style={{ color: "rgba(250,247,242,0.85)", lineHeight: 1.65, fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Thank you for your purchase! Click the buttons below to download each of
              your engagement kits securely.
            </p>
          </div>

          {/* Download list */}
          <div className="mt-10 grid grid-cols-1 gap-4">
            {DOWNLOADS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                download={item.filename}
                className="group flex items-center justify-between gap-4 rounded-xl px-5 md:px-7 py-5 no-underline transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(45,74,62,0.12)",
                  boxShadow: "0 4px 14px -6px rgba(45,74,62,0.15)",
                }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-semibold flex-shrink-0"
                    style={{
                      background: "rgba(198,123,92,0.12)",
                      color: "#C67B5C",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-[16px] md:text-[18px] truncate"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: "#2D4A3E",
                        fontWeight: 600,
                      }}
                    >
                      Download {item.label}
                    </div>
                    <div
                      className="text-[12px] mt-0.5"
                      style={{ color: "rgba(45,74,62,0.6)", fontFamily: "'DM Sans', system-ui, sans-serif" }}
                    >
                      PDF · Print-ready · Yours forever
                    </div>
                  </div>
                </div>
                <span
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 md:px-5 py-2.5 text-[13px] font-medium text-white whitespace-nowrap flex-shrink-0 transition-colors"
                  style={{ background: "#C67B5C", fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  <DownloadIcon />
                  <span className="hidden sm:inline">Download</span>
                </span>
              </a>
            ))}
          </div>

          {/* Help / footer note */}
          <div
            className="mt-10 rounded-xl p-6 text-center"
            style={{ background: "rgba(232,201,154,0.18)", border: "1px solid rgba(198,123,92,0.2)" }}
          >
            <p
              className="text-[13px] md:text-[14px] m-0"
              style={{ color: "#2D4A3E", fontFamily: "'DM Sans', system-ui, sans-serif", lineHeight: 1.6 }}
            >
              Bookmark this page for easy access. Need help with a download?{" "}
              <a
                href="mailto:hello@thecomfortbond.com"
                style={{ color: "#C67B5C", fontWeight: 600 }}
              >
                Email us
              </a>{" "}
              and we'll resend your kits right away.
            </p>
            <Link
              to="/"
              className="inline-block mt-4 text-[13px] font-medium no-underline"
              style={{ color: "#2D4A3E", fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              ← Back to The Comfort Bond™
            </Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default BundleAccess;
