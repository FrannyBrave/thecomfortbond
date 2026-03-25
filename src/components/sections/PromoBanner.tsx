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
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "12px 20px",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 680,
          width: "100%",
          borderRadius: 16,
          background: "linear-gradient(135deg, #3D5A47 0%, #2D4A3E 50%, #263F33 100%)",
          padding: "1px",
          boxShadow: "0 8px 32px rgba(45,74,62,0.18), 0 0 0 1px rgba(232,201,154,0.12)",
        }}
      >
        {/* Gradient border glow effect */}
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: 17,
            background: "linear-gradient(135deg, rgba(232,201,154,0.25) 0%, rgba(198,123,92,0.2) 50%, rgba(232,201,154,0.15) 100%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Inner card */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            borderRadius: 15,
            background: "linear-gradient(135deg, #3D5A47 0%, #2D4A3E 50%, #263F33 100%)",
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            overflow: "hidden",
          }}
        >
          {/* Radial light overlay */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

          {/* Top: label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>
            <span style={{ width: 14, height: 1, background: "#E8C99A", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#E8C99A", whiteSpace: "nowrap" }}>
              🌿 Special Offer
            </span>
            <span style={{ width: 14, height: 1, background: "#E8C99A", display: "inline-block" }} />
          </div>

          {/* Heading */}
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: "#fff", textAlign: "center", lineHeight: 1.2, position: "relative", zIndex: 1 }}>
            Save 10% on <em style={{ fontStyle: "italic", color: "#E8C99A" }}>All Kits</em>
          </span>

          {/* Code + copy row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgb(200,210,200)", whiteSpace: "nowrap" }}>Use code:</span>
            <span style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px dashed rgba(255,255,255,0.22)",
              borderRadius: 8,
              padding: "5px 18px",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#C67B5C",
            }}>
              COMFORT10
            </span>
            <button
              onClick={handleCopy}
              aria-label="Copy discount code"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 3, display: "flex", alignItems: "center" }}
            >
              {copied ? (
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 500, color: "#E8C99A", whiteSpace: "nowrap" }}>Copied!</span>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              gap: 4,
              background: "#C67B5C",
              color: "#fff",
              borderRadius: 100,
              padding: "9px 28px",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 13,
              textDecoration: "none",
              transition: "background 0.25s ease, transform 0.2s ease",
              whiteSpace: "nowrap",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#b06a4e"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#C67B5C"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Shop Now →
          </a>
        </div>
      </div>
    </motion.section>
  );
};
