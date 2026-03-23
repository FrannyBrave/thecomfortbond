import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FoundersSamplerDisplay } from "./FoundersSamplerDisplay";

const includedItems = [
  {
    emoji: "🎯",
    bg: "#C1714F",
    title: "Guess the Era",
    subtitle: "Then vs. Now · 5 pages",
  },
  {
    emoji: "💬",
    bg: "#3D5A47",
    title: "Discussion Circle",
    subtitle: "Prompt Cards · 5 pages",
  },
  {
    emoji: "📖",
    bg: "#A0876A",
    title: "Sequential Story Cards",
    subtitle: "Storytelling · 5 pages",
  },
];

export const HoneyPotSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="honey-pot"
      ref={sectionRef}
      className="w-full py-10 md:py-14"
      style={{ background: "#F5F0E8" }}
    >
      <div className="section-container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-5xl"
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
            className="md:!grid-cols-2"
          >
            {/* Left — Interactive Display */}
            <div style={{ minHeight: "480px" }}>
              <FoundersSamplerDisplay />
            </div>

            {/* Right — Product Info */}
            <div
              style={{
                background: "#FDFAF5",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "Georgia, serif",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#3D5A47",
                  marginBottom: "12px",
                }}
              >
                THE COMFORT BOND™
              </div>

              <h2
                style={{
                  fontSize: "32px",
                  lineHeight: 1.2,
                  color: "#2C3E2D",
                  marginBottom: "16px",
                  fontWeight: 700,
                }}
              >
                The{" "}
                <span style={{ color: "#C1714F", fontStyle: "italic" }}>
                  Founder's
                </span>{" "}
                Sampler
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#5C6B5D",
                  marginBottom: "28px",
                }}
              >
                A free taste of The Comfort Bond™ — includes 3 ready-to-use
                activity types designed for meaningful connection.
              </p>

              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#C1714F",
                  marginBottom: "14px",
                }}
              >
                WHAT'S INSIDE
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                {includedItems.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: item.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        flexShrink: 0,
                      }}
                    >
                      {item.emoji}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#2C3E2D",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#8B9E8F",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://thecomfortbond.gumroad.com/l/foundersampler?wanted=true"
                data-gumroad-overlay-checkout="true"
                rel="noopener noreferrer nofollow"
                className=""
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  background: "#C1714F",
                  color: "#FDFAF5",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(193,113,79,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 14px rgba(193,113,79,0.3)";
                }}
              >
                Download Free Kit
              </a>

              <p
                style={{
                  fontSize: "11px",
                  color: "#8B9E8F",
                  marginTop: "12px",
                  textAlign: "center",
                }}
              >
                Instant digital download · No credit card required
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\!grid-cols-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
