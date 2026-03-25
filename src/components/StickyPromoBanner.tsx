import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const StickyPromoBanner = () => {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem("promo-banner-dismissed");
  });
  const [copied, setCopied] = useState(false);

  const handleDismiss = () => {
    sessionStorage.setItem("promo-banner-dismissed", "true");
    setVisible(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("COMFORT10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!visible) return null;

  return (
    <div
      id="sticky-promo"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "linear-gradient(135deg, #3D5A47 0%, #2D4A3E 50%, #263F33 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(10px, 2vw, 24px)",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* Label + heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          <span className="hidden sm:inline-flex" style={{ alignItems: "center", gap: 5 }}>
            <span style={{ width: 10, height: 1, background: "#E8C99A", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase" as const, color: "#E8C99A", whiteSpace: "nowrap" }}>
              🌿 Special Offer
            </span>
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>
            Save 10% on <em style={{ fontStyle: "italic" }}>All Kits</em>
          </span>
        </div>

        {/* Code */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <span className="hidden sm:inline" style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgb(200,210,200)", whiteSpace: "nowrap" }}>Use code:</span>
          <span style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px dashed rgba(255,255,255,0.25)",
            borderRadius: 6,
            padding: "3px 12px",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(11px, 1.2vw, 13px)",
            fontWeight: 700,
            letterSpacing: "2px",
            color: "#C67B5C",
          }}>
            COMFORT10
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy discount code"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 2, display: "flex", alignItems: "center" }}
          >
            {copied ? (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 500, color: "#E8C99A", whiteSpace: "nowrap" }}>Copied!</span>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>

        {/* CTA */}
        <a
          href="https://thecomfortbond.gumroad.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            background: "#C67B5C",
            color: "#fff",
            borderRadius: 100,
            padding: "5px 16px",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 11,
            textDecoration: "none",
            transition: "background 0.25s ease",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#b06a4e")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#C67B5C")}
        >
          Shop Now →
        </a>

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss promotion"
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <X size={14} color="rgba(255,255,255,0.5)" />
        </button>
      </div>
    </div>
  );
};
