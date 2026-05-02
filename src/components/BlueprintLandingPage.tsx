import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import blueprintHero from "@/assets/stress-free-activity-planning-senior-living-weekly.png";

import logo from "@/assets/the-comfort-bond-logo.png";

/* ─── Brand tokens ─── */
const c = {
  cream: "#FAF7F2",
  creamAlt: "#F3EDE5",
  forest: "#2d4a3e",
  forestLight: "#3d6455",
  terracotta: "#C67B5C",
  terracottaWash: "#F3E4DB",
  bronze: "#8B6F47",
  sandGold: "#E8C99A",
  charcoal: "#1E2420",
  body: "#4A5548",
  muted: "#7A8A7A",
  mutedWarm: "#9A8E80",
  gridline: "#D5CEC7",
  calloutBg: "#FDF6E3",
  calloutBorder: "#DDD0B8",
  white: "#FFFFFF",
} as const;

const serif = '"Playfair Display", Georgia, serif';
const sans = '"DM Sans", system-ui, sans-serif';

/* ─── Reusable email form ─── */
function EmailCapture({ id, variant = "default" }: { id: string; variant?: "default" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const CK_LANDING_URL = "https://the-comfort-bond-2.kit.com/392c82fa32";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      // Fire tracking events before redirect (best-effort).
      try {
        const { trackPinterestEvent } = await import("@/lib/pinterest");
        trackPinterestEvent("signup", { lead_type: "free-blueprint" }, `signup:blueprint:${email}`);
        const { trackMetaEvent } = await import("@/lib/meta-pixel");
        trackMetaEvent(
          "Lead",
          { content_name: "Free Engagement Blueprint", content_category: "free-blueprint" },
          `lead:blueprint:${email}`
        );
      } catch (trackErr) {
        console.warn("[EmailCapture] tracking failed", trackErr);
      }
      // Redirect to ConvertKit-hosted landing form with email pre-filled.
      // ConvertKit handles subscription + incentive email delivery on their side.
      const url = `${CK_LANDING_URL}?email_address=${encodeURIComponent(email)}`;
      window.location.href = url;
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      console.error("[EmailCapture]", err);
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          maxWidth: "440px",
          width: "100%",
          backgroundColor: c.calloutBg,
          border: `1px solid ${c.calloutBorder}`,
          borderRadius: "14px",
          padding: "1.5rem 1.75rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.forest, margin: "0 0 0.35rem" }}>
          ✓ Success!
        </p>
        <p style={{ fontSize: "0.875rem", color: c.body, margin: 0, lineHeight: 1.6 }}>
          Check your inbox to download your Blueprint.
        </p>
      </div>
    );
  }

  const btnBg = variant === "dark" ? c.terracotta : c.forest;
  const btnHover = variant === "dark" ? "#b86a4d" : c.forestLight;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "440px", width: "100%" }}>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          aria-label="Email Address"
          disabled={status === "loading"}
          style={{
            flex: "1 1 220px",
            fontFamily: sans,
            fontSize: "0.9rem",
            padding: "0.85rem 1rem",
            border: `1px solid ${c.gridline}`,
            borderRadius: "10px",
            backgroundColor: c.white,
            color: c.charcoal,
            outline: "none",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            fontFamily: sans,
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            padding: "0.85rem 1.5rem",
            border: "none",
            borderRadius: "10px",
            backgroundColor: status === "loading" ? btnHover : btnBg,
            color: c.white,
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            transition: "all 0.2s ease",
            opacity: status === "loading" ? 0.7 : 1,
            boxShadow: `0 4px 14px ${btnBg}33`,
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              e.currentTarget.style.backgroundColor = btnHover;
              e.currentTarget.style.transform = "translateY(-1px)";
            }
          }}
          onMouseLeave={(e) => {
            if (status !== "loading") {
              e.currentTarget.style.backgroundColor = btnBg;
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          {status === "loading" ? "Sending..." : "Get My Free Weekly Planner"}
        </button>
      </div>
      {status === "error" && (
        <p style={{ fontSize: "0.775rem", color: "#b44", marginTop: "0.5rem", marginBottom: 0 }}>
          {errorMsg}
        </p>
      )}
      <p style={{ fontSize: "0.7rem", color: c.mutedWarm, marginTop: "0.5rem", marginBottom: 0, letterSpacing: "0.02em" }}>
        Free. Instant. Delivered straight to your inbox.
      </p>
    </form>
  );
}

/* ─── Section wrapper ─── */
function Section({
  children,
  bg = c.cream,
  style,
}: {
  children: React.ReactNode;
  bg?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section style={{ backgroundColor: bg, padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)", ...style }}>
      <div style={{ maxWidth: "1060px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/* ─── Main component ─── */
export default function BlueprintLandingPage() {
  return (
    <div style={{ fontFamily: sans, color: c.body, backgroundColor: c.cream }}>
      {/* ── Header ── */}
      <div
        style={{
          maxWidth: "1060px",
          margin: "0 auto",
          padding: "1.25rem clamp(1.25rem, 5vw, 3rem) 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <img src={logo} alt="The Comfort Bond logo — dignified engagement activities for senior living" style={{ width: "36px", height: "36px", borderRadius: "50%" }} />
          <span style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 600, color: c.forest, letterSpacing: "-0.01em" }}>
            The Comfort Bond™
          </span>
        </Link>
      </div>

      {/* ═══════ HERO ═══════ */}
      <Section style={{ paddingTop: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        <div className="bp-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }}>
          <div style={{ maxWidth: "540px" }}>
            <p style={{
              fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
              textTransform: "uppercase", color: c.terracotta, margin: "0 0 1rem",
            }}>
              Free Planning Tool
            </p>
            <h1 style={{
              fontFamily: serif, fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", fontWeight: 600,
              color: c.forest, lineHeight: 1.18, margin: "0 0 1.25rem", letterSpacing: "-0.015em",
            }}>
              It's Sunday Night — and You're Still Figuring Out Tomorrow.
            </h1>
            <p style={{ fontSize: "clamp(0.925rem, 1.6vw, 1.05rem)", lineHeight: 1.7, color: c.body, margin: "0 0 1.25rem" }}>
              A free weekly planning system designed for Activity Professionals who are tired of
              last-minute scrambling, repetitive activities, and walking into the week unprepared.
            </p>
            <p style={{ fontSize: "clamp(0.925rem, 1.6vw, 1.05rem)", lineHeight: 1.7, color: c.body, margin: "0 0 1.5rem" }}>
              <strong style={{ color: c.forest }}>Plan your entire week in under 20 minutes</strong> — with structure, variety, and confidence.
            </p>
            <ul style={{
              listStyle: "none", padding: 0, margin: "0 0 1.75rem",
              display: "flex", flexDirection: "column", gap: "0.5rem",
            }}>
              {[
                "No more \u201Cwhat should we do today?\u201D",
                "Built for mixed cognitive levels",
                "Structured, not overwhelming",
              ].map((b, i) => (
                <li key={i} style={{
                  fontSize: "0.9rem", lineHeight: 1.5, color: c.body,
                  display: "flex", gap: "0.6rem", alignItems: "baseline",
                }}>
                  <span aria-hidden="true" style={{ color: c.terracotta, fontWeight: 700, flexShrink: 0 }}>✔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <EmailCapture id="hero" />
          </div>

          <div>
            <img
              src={blueprintHero}
              alt="Premium mockup of The Blueprint and Engagement Balance Wheel"
              style={{
                width: "100%", height: "auto", borderRadius: "14px",
                boxShadow: "0 12px 40px rgba(45,74,62,0.14)", display: "block",
              }}
            />
            <p style={{
              fontFamily: serif, fontStyle: "italic", fontSize: "0.9rem",
              lineHeight: 1.6, color: c.forest, textAlign: "center",
              margin: "1.25rem auto 0", maxWidth: "440px",
            }}>
              Used by Activity Directors to plan their weeks — and scale into full 13-week
              programming with{" "}
              <Link to="/blueprint-pro" style={{ color: c.terracotta, textDecoration: "underline", fontWeight: 600 }}>
                Blueprint Pro
              </Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════ PAIN POINTS ═══════ */}
      <Section bg={c.creamAlt}>
        <h2 style={{
          fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600,
          color: c.forest, textAlign: "center", margin: "0 0 0.75rem",
        }}>
          Does This Sound Familiar?
        </h2>
        <p style={{
          fontSize: "0.85rem", color: c.terracotta, fontWeight: 600, textAlign: "center",
          letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 2.5rem",
          fontFamily: sans,
        }}>
          You're not alone
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {[
            "You spend your weekends thinking about Monday's programming instead of resting.",
            "You're printing materials at 7\u202FAM because you ran out of ideas the night before.",
            "You've done the same three activities so many times you could lead them in your sleep.",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: c.cream,
                border: `1px solid ${c.gridline}`,
                borderRadius: "14px",
                padding: "1.5rem 1.75rem",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: c.body,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(45,74,62,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, width: "3px", height: "100%",
                backgroundColor: c.terracotta, borderRadius: "3px 0 0 3px",
              }} />
              {text}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ INTRODUCING ═══════ */}
      <Section>
        <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", lineHeight: 1.7, color: c.body, margin: "0 0 2.5rem", fontFamily: serif, fontStyle: "italic" }}>
            You're not behind — you just don't have a system yet.
          </p>

          <p style={{
            fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem",
          }}>
            Introducing
          </p>
          <h2 style={{
            fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.85rem)", fontWeight: 600,
            color: c.forest, margin: "0 0 1.5rem", lineHeight: 1.25,
          }}>
            The Blueprint™
            <br />
            <span style={{ fontWeight: 400, fontSize: "0.75em", color: c.terracotta }}>
              by The Comfort Bond™
            </span>
          </h2>

          <p style={{
            fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)", lineHeight: 1.8, color: c.body, margin: 0, textAlign: "left",
          }}>
            A free, structured weekly planning tool designed specifically for Activity Directors,
            Memory Care professionals, and Life Enrichment staff. It's not a list of activities. It's
            not a calendar template from Pinterest. It's a decision-making framework that shows you
            how to structure a balanced, dignified week of programming&nbsp;— so you never start from
            scratch again.
          </p>
        </div>
      </Section>


      {/* ═══════ WHAT'S INSIDE & HOW IT WORKS ═══════ */}
      <section style={{
        background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)",
      }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <p style={{
            fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: c.terracotta, textAlign: "center", margin: "0 0 0.75rem",
          }}>
            Everything You Need
          </p>
          <h2 style={{
            fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600,
            color: c.cream, textAlign: "center", margin: "0 0 2.5rem",
          }}>
            What's Inside
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
            {[
              { icon: "📋", title: "One Pre-Planned Week", desc: "A full week of programming mapped across all 6 dimensions of meaningful engagement." },
              { icon: "📝", title: "Blank Weekly Template", desc: "A clean, reusable planning page designed for handwriting. Print it every week." },
              { icon: "🎯", title: "Engagement Balance Wheel", desc: "A visual tool to check that your week has variety, not just repetition." },
              { icon: "⚡", title: "Quick-Start Guide", desc: "Read it once. Start planning by Monday afternoon. No learning curve." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(250,247,242,0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "14px",
                  padding: "1.75rem 1.5rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 600, color: c.forest, margin: "0 0 0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.825rem", lineHeight: 1.65, color: c.body, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Inline mid-page CTA */}
          <div style={{
            maxWidth: "520px", margin: "0 auto 4rem",
            backgroundColor: "rgba(250,247,242,0.97)",
            borderRadius: "14px",
            padding: "1.75rem 1.75rem 1.5rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: serif, fontSize: "1.05rem", fontWeight: 600,
              color: c.forest, margin: "0 0 0.5rem", lineHeight: 1.35,
            }}>
              Ready to plan smarter this week?
            </p>
            <p style={{
              fontSize: "0.825rem", color: c.body, margin: "0 0 1rem", lineHeight: 1.55,
            }}>
              Get the Blueprint sent straight to your inbox — free.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <EmailCapture id="midpage" />
            </div>
          </div>

          {/* Three Steps */}
          <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{
              fontFamily: serif, fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)", fontWeight: 600,
              color: c.cream, margin: "0 0 2rem",
            }}>
              Three Steps. That's It.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left" }}>
              {[
                "Download the Blueprint.",
                "Open the pre-planned week or the blank template.",
                "Plan your entire week in under 30 minutes.",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                  <span style={{
                    fontFamily: serif, fontSize: "1.75rem", fontWeight: 600,
                    color: c.terracotta, lineHeight: 1, flexShrink: 0, minWidth: "1.75rem", textAlign: "right",
                  }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: "0.925rem", lineHeight: 1.6, color: "rgba(250,247,242,0.85)" }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BUILT FOR YOUR WORLD ═══════ */}
      <Section>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <p style={{
            fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: c.terracotta, textAlign: "center", margin: "0 0 0.75rem",
          }}>
            Designed for Senior Living
          </p>
          <h2 style={{
            fontFamily: serif, fontSize: "clamp(1.25rem, 2.8vw, 1.6rem)", fontWeight: 600,
            color: c.forest, textAlign: "center", margin: "0 0 1.25rem", lineHeight: 1.25,
          }}>
            Built for Your World.
            <br />
            Not Borrowed from Someone Else's.
          </h2>

          <p style={{
            fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)", lineHeight: 1.8, color: c.body,
            textAlign: "center", margin: "0 0 2.5rem",
          }}>
            Every prompt, template, and framework in the Blueprint was designed for senior
            living&nbsp;— from independent living to memory care. Activities adapt for mixed
            cognitive abilities. Language is always adult, never condescending. Because your residents
            aren't children. And you're not running a daycare.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <EmailCapture id="footer" variant="dark" />
          </div>

          {/* Divider */}
          <div style={{ width: "3rem", height: "2px", backgroundColor: c.terracotta, margin: "0 auto 2.5rem", borderRadius: "2px" }} />

          {/* Founder letter */}
          <blockquote style={{ borderLeft: `3px solid ${c.terracotta}`, margin: 0, padding: "0 0 0 1.5rem" }}>
            <p style={{
              fontFamily: serif, fontStyle: "italic", fontSize: "clamp(0.9rem, 1.5vw, 1.025rem)",
              lineHeight: 1.85, color: c.body, margin: "0 0 1rem",
            }}>
              You got into this work because you believe every resident deserves a good day. You
              shouldn't have to sacrifice your own evenings to make that happen. The Blueprint gives
              you a system. So you can give your residents something better. And still have your
              Sunday night.
            </p>
            <footer style={{ fontSize: "0.85rem", fontWeight: 600, color: c.terracotta }}>
              — Francesca, Founder of The Comfort Bond™
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* ═══════ FOOTER ═══════ */}
      <footer style={{
        background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
        padding: "2.5rem clamp(1.25rem, 5vw, 3rem)", textAlign: "center",
      }}>
        <p style={{
          fontFamily: serif, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.7)", margin: "0 0 0.35rem",
        }}>
          The Comfort Bond™
        </p>
        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: "0.03em" }}>
          Dignified engagement for senior living. Done for you.
        </p>
      </footer>

      {/* Responsive overrides */}
      <style>{`
        @media (min-width: 768px) {
          .bp-hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
