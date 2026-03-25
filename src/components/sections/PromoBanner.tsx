import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const PromoBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("COMFORT10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={ref}
      className="w-full bg-[#FAF7F2]"
      style={{ padding: "clamp(2.5rem, 4vw, 4rem) 0" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 780 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            background: "linear-gradient(145deg, #3D5A47 0%, #2D4A3E 50%, #1E3028 100%)",
            borderRadius: 20,
            padding: "clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          {/* Radial vignette overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Top label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ display: "inline-block", width: 20, height: 1, background: "#E8C99A" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "1.3px",
                  textTransform: "uppercase" as const,
                  color: "#E8C99A",
                }}
              >
                🌿 Special Offer
              </span>
              <span style={{ display: "inline-block", width: 20, height: 1, background: "#E8C99A" }} />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.3,
                marginBottom: "1.25rem",
              }}
            >
              Save 10% on <em style={{ fontStyle: "italic" }}>All Kits</em>
            </h2>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 400,
                color: "rgb(200, 210, 200)",
                marginBottom: "1rem",
              }}
            >
              Use code at checkout:
            </p>

            {/* Code box */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px dashed rgba(255,255,255,0.25)",
                  borderRadius: 10,
                  padding: "10px 28px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: "#C67B5C",
                  display: "inline-block",
                }}
              >
                COMFORT10
              </span>
              <button
                onClick={handleCopy}
                aria-label="Copy discount code"
                title={copied ? "Copied!" : "Copy code"}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 6,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {copied ? (
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#E8C99A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Copied!
                  </span>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>

            {/* Bottom note */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "1.5rem",
              }}
            >
              Applied to individual kits &amp; bundles · Instant digital download
            </p>

            {/* CTA */}
            <a
              href="https://thecomfortbond.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#C67B5C",
                color: "#fff",
                borderRadius: 100,
                padding: "14px 32px",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#b06a4e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C67B5C")}
            >
              Shop All Kits →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
