import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const PromoBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("COMFORT10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, #3D5A47 0%, #2D4A3E 50%, #263F33 100%)",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      {/* Radial overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(16px, 3vw, 32px)",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: label + heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 14, height: 1, background: "#E8C99A", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 500, letterSpacing: "1.3px", textTransform: "uppercase" as const, color: "#E8C99A", whiteSpace: "nowrap" }}>
              🌿 Special Offer
            </span>
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(17px, 2vw, 21px)", fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>
            Save 10% on <em style={{ fontStyle: "italic" }}>All Kits</em>
          </span>
        </div>

        {/* Center: code */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgb(200,210,200)", whiteSpace: "nowrap" }}>Use code:</span>
          <span style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px dashed rgba(255,255,255,0.25)",
            borderRadius: 8,
            padding: "6px 20px",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontWeight: 700,
            letterSpacing: "2.5px",
            color: "#C67B5C",
          }}>
            COMFORT10
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy discount code"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", position: "relative" }}
          >
            {copied ? (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, color: "#E8C99A", whiteSpace: "nowrap" }}>Copied!</span>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>

        {/* Right: CTA */}
        <a
          href="https://thecomfortbond.gumroad.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: "#C67B5C",
            color: "#fff",
            borderRadius: 100,
            padding: "10px 24px",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 13,
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
      </div>
    </motion.section>
  );
};
