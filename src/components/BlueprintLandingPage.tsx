import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/the-comfort-bond-logo.webp";

import weeklyPlanBlankImg from "@/assets/weekly-engagement-plan-blank-template-senior-living.webp";
import balanceWheelLegendImg from "@/assets/engagement-balance-wheel-six-dimensions-legend.webp";
import reflectionNotesImg from "@/assets/reflection-notes-weekly-activity-planner-example.webp";

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
function EmailCapture({ id, variant = "default", submitLabel = "Get My Free Weekly Planner" }: { id: string; variant?: "default" | "dark"; submitLabel?: string }) {
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
          {status === "loading" ? "Sending..." : submitLabel}
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
  /* Hero LCP preload is injected synchronously in index.html for /blueprint
     so the browser can fetch it in parallel with the JS bundle. */


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
        <div
          className="bp-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 5vw, 3.5rem)",
            alignItems: "center",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          {/* Left: copy + form */}
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "left" }}>
            <p style={{
              fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
              textTransform: "uppercase", color: c.terracotta, margin: "0 0 1rem",
            }}>
              Free Planning Tool
            </p>
            <h1 style={{
              fontFamily: serif, fontSize: "clamp(1.85rem, 4.4vw, 2.85rem)", fontWeight: 600,
              color: c.forest, lineHeight: 1.15, margin: "0 0 1.25rem", letterSpacing: "-0.015em",
            }}>
              It's Sunday Night — and You're Still Figuring Out Tomorrow.
            </h1>
            <p style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.075rem)", lineHeight: 1.65, color: c.body, margin: "0 0 1.4rem" }}>
              A free weekly planning system for Activity Professionals — <strong style={{ color: c.forest }}>plan your entire week in under 20 minutes</strong>, with structure, variety, and confidence.
            </p>
            <ul style={{
              listStyle: "none", padding: 0, margin: "0 0 1.75rem",
              display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem",
            }}>
              {[
                "No more \u201Cwhat should we do today?\u201D",
                "Built for mixed cognitive levels",
                "Structured, not overwhelming",
              ].map((b, i) => (
                <li key={i} style={{
                  fontSize: "0.92rem", lineHeight: 1.5, color: c.body,
                  display: "flex", gap: "0.6rem", alignItems: "baseline",
                }}>
                  <span aria-hidden="true" style={{ color: c.terracotta, fontWeight: 700, flexShrink: 0 }}>✔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <EmailCapture id="hero" />
          </div>

          {/* Right: product preview image */}
          <figure style={{ margin: 0, textAlign: "center" }}>
            <picture>
              <source
                type="image/avif"
                srcSet="/lcp/blueprint-hero-480.avif 480w, /lcp/blueprint-hero-768.avif 768w, /lcp/blueprint-hero-1280.avif 1280w"
                sizes="(max-width: 767px) 100vw, 520px"
              />
              <source
                type="image/webp"
                srcSet="/lcp/blueprint-hero-480.webp 480w, /lcp/blueprint-hero-768.webp 768w, /lcp/blueprint-hero-1280.webp 1280w"
                sizes="(max-width: 767px) 100vw, 520px"
              />
              <img
                src="/lcp/blueprint-hero-768.webp"
                alt="Filled-in example of the Weekly Engagement Plan from The Comfort Bond Blueprint — a full week of senior living activities mapped out in handwriting with morning, afternoon, dimension tags, and notes"
                width={1200}
                height={932}
                fetchPriority="high"
                decoding="async"
                style={{
                  width: "100%",
                  maxWidth: "560px",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "14px",
                  boxShadow: "0 16px 48px rgba(45,74,62,0.18)",
                  border: `1px solid ${c.gridline}`,
                  transform: "rotate(-1.25deg)",
                }}
              />
            </picture>
            <figcaption style={{ marginTop: "1rem", fontFamily: sans, fontSize: "0.78rem", color: c.mutedWarm, fontStyle: "italic", letterSpacing: "0.02em" }}>
              A real week, planned in 20 minutes. This is what arrives in your inbox.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ═══════ HERO TESTIMONIAL ═══════ */}
      <section style={{ backgroundColor: c.creamAlt, padding: "clamp(2rem, 5vw, 3rem) clamp(1.25rem, 5vw, 3rem)" }}>
        <figure style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", padding: 0 }}>
          <div aria-label="5 out of 5 stars" style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "0.85rem", color: c.sandGold, fontSize: "1.1rem", letterSpacing: "0.1em" }}>
            <span aria-hidden="true">★★★★★</span>
          </div>
          <blockquote style={{ margin: 0, fontFamily: serif, fontStyle: "italic", fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)", lineHeight: 1.55, color: c.forest }}>
            “Sunday nights used to be stressful for me — I&rsquo;d be trying to pull together a full week of activities with no structure. The Blueprint completely changed that. I now sit down for 20 minutes and my entire week is mapped out in a way that actually makes sense.”
          </blockquote>
          <figcaption style={{ marginTop: "1rem", fontFamily: sans, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.body }}>
            Shannon L.
            <span style={{ display: "block", marginTop: "0.2rem", fontSize: "0.7rem", fontWeight: 500, color: c.mutedWarm }}>
              Life Enrichment Manager
            </span>
          </figcaption>
        </figure>
      </section>

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

      {/* ═══════ MID-PAGE CTA ═══════ */}
      <section style={{
        background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
        padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 3rem)",
      }}>
        <div style={{
          maxWidth: "520px", margin: "0 auto",
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
      </section>

      {/* ═══════ INSIDE THE FREE BLUEPRINT ═══════ */}
      <Section bg={c.cream}>
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: c.body, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
            You're not behind — you just don't have a system yet.
          </p>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem" }}>
            Inside the Free Blueprint
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.4vw, 2rem)", fontWeight: 600, color: c.forest, margin: 0, lineHeight: 1.25 }}>
            What you'll actually get when you sign up.
          </h2>
        </div>

        {[
          {
            heading: "The structure that runs your week — every week.",
            body: "The same simple structure every week. Monday through Sunday, morning and afternoon, dimension tags, notes column. Five minutes to fill in. Print and reuse forever.",
            img: weeklyPlanBlankImg,
            w: 1448, h: 1086,
            alt: "Blank Weekly Engagement Plan template for senior living activity directors — Monday through Sunday morning and afternoon activity grid with dimension tags and notes column",
            caption: "The structure that turns \u201CI have no idea what we're doing tomorrow\u201D into \u201CIt's already in the plan.\u201D",
          },
          {
            heading: "Six dimensions. One simple wheel.",
            body: "The proprietary framework inside the Blueprint. Six dimensions — Cognitive, Social, Sensory, Physical, Creative, Spiritual — each with concrete examples. Spot the imbalance at a glance.",
            img: balanceWheelLegendImg,
            w: 1448, h: 1086,
            alt: "Engagement Balance Wheel for senior care with six-dimension legend — Cognitive, Social, Sensory, Physical, Creative, Spiritual — each with concrete memory care activity examples",
            caption: "The wheel is a compass, not a checklist. Most senior living programs lean 70% cognitive without realizing it — the wheel surfaces the imbalance.",
          },
          {
            heading: "Plan. Run. Reflect. Repeat.",
            body: "Each week ends with built-in reflection — highlight moment, balance check, planning ideas. Not just a planner. A tool that gets smarter every week.",
            img: reflectionNotesImg,
            w: 1288, h: 1221,
            alt: "Weekly Reflection & Notes page from the Engagement Blueprint — handwritten highlight moment, balance check across six engagement dimensions, and planning notes for next week's senior living activities",
            caption: "This is how Week 4 becomes better than Week 1. The system learns alongside you.",
          },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              marginTop: i === 0 ? 0 : "clamp(2.5rem, 6vw, 4rem)",
              paddingTop: i === 0 ? 0 : "clamp(2.5rem, 6vw, 4rem)",
              borderTop: i === 0 ? "none" : `1px solid ${c.gridline}`,
            }}
          >
            <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem" }}>
                Section {i + 1}
              </p>
              <h3 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, lineHeight: 1.25, margin: "0 0 1rem", letterSpacing: "-0.01em" }}>
                {s.heading}
              </h3>
              <p style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)", lineHeight: 1.7, color: c.body, margin: 0 }}>
                {s.body}
              </p>
            </div>
            <figure style={{ margin: "clamp(1.5rem, 3vw, 2rem) auto 0", maxWidth: "520px" }}>
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                width={s.w}
                height={s.h}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "14px",
                  boxShadow: "0 12px 40px rgba(45,74,62,0.15)",
                  border: `1px solid ${c.gridline}`,
                }}
              />
              <figcaption style={{ marginTop: "1rem", fontFamily: sans, fontSize: "0.85rem", lineHeight: 1.6, color: c.mutedWarm, fontStyle: "italic", textAlign: "center", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
                {s.caption}
              </figcaption>
            </figure>
          </div>
        ))}

        <p style={{ fontFamily: serif, fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 600, color: c.forest, lineHeight: 1.55, textAlign: "center", marginTop: "clamp(2.5rem, 5vw, 3.5rem)", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          All delivered to your inbox in under a minute. <span style={{ color: c.terracotta }}>Free. Forever yours.</span>
        </p>
      </Section>

      {/* ═══════ STATS BAR ═══════ */}
      <Section bg={c.creamAlt}>
        <div style={{ textAlign: "center", marginBottom: "2rem", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1.25rem", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 600, color: c.forest, margin: 0, lineHeight: 1.25 }}>
            Designed for Activity Directors
          </h2>
        </div>
        <div
          className="bp-stats-bar"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: c.cream,
            padding: "2rem 1.5rem",
            borderRadius: "12px",
            border: `1px solid ${c.forest}1a`,
          }}
        >
          {[
            { num: "1", label: "weekly planning structure" },
            { num: "6", label: "engagement dimensions" },
            { num: "20 min", label: "to plan your entire week" },
            { num: "$0", label: "instant delivery" },
          ].map((stat, i, arr) => (
            <div
              key={i}
              className="bp-stat-item"
              style={{
                textAlign: "center",
                padding: "0.5rem 1rem",
                borderBottom: i < arr.length - 1 ? `1px solid ${c.forest}1f` : "none",
                paddingBottom: i < arr.length - 1 ? "1.5rem" : "0.5rem",
              }}
            >
              <div style={{ fontFamily: serif, fontSize: "clamp(2rem, 4.5vw, 2.75rem)", fontWeight: 700, color: c.terracotta, lineHeight: 1, marginBottom: "0.5rem" }}>
                {stat.num}
              </div>
              <div style={{ fontFamily: sans, fontSize: "0.9rem", color: c.forest, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width: 720px) {
            .bp-stats-bar {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 0 !important;
            }
            .bp-stat-item {
              border-bottom: none !important;
              border-right: 1px solid hsl(0 0% 0% / 0.12) !important;
              padding-bottom: 0.5rem !important;
            }
            .bp-stat-item:last-child {
              border-right: none !important;
            }
          }
        `}</style>
      </Section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <Section bg={c.cream}>
        <div style={{ textAlign: "center", marginBottom: "2.25rem", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1.25rem", borderRadius: "2px" }} />
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.65rem" }}>
            What Activity Directors Say
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.2vw, 1.9rem)", fontWeight: 600, color: c.forest, margin: 0, lineHeight: 1.25 }}>
            From Sunday-Night Scramble to a System That Works
          </h2>
        </div>

        <div className="bp-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.1rem" }}>
          {[
            {
              quote: "What I didn't realize was how unbalanced my programming was until I used the Engagement Balance Wheel. I was overusing the same types of activities without noticing. This gave me a clear system to make sure residents are engaged in different ways throughout the week.",
              name: "Glennys D.",
              role: "Activity Director",
            },
            {
              quote: "I manage multiple groups with different cognitive levels, and planning used to take hours. The weekly worksheets alone saved me so much time. I'm no longer starting from scratch every week.",
              name: "Felicity M.",
              role: "Activity Coordinator",
            },
            {
              quote: "Once I had the structure in place, it became so much easier to plug in activities. I finally feel like I have a system instead of guessing every week.",
              name: "Ashley-Joyce",
              role: "Activity Coordinator",
            },
          ].map((t, i) => (
            <figure
              key={i}
              style={{
                backgroundColor: c.creamAlt,
                border: `1px solid ${c.gridline}`,
                borderRadius: "14px",
                padding: "1.5rem 1.6rem",
                margin: 0,
                position: "relative",
              }}
            >
              <span aria-hidden="true" style={{ position: "absolute", top: "0.4rem", left: "1rem", fontFamily: serif, fontSize: "2.75rem", lineHeight: 1, color: c.terracotta, opacity: 0.35 }}>
                “
              </span>
              <blockquote style={{ margin: 0, fontFamily: serif, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.65, color: c.body, paddingTop: "0.75rem" }}>
                {t.quote}
              </blockquote>
              <figcaption style={{ marginTop: "0.9rem", fontFamily: sans, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: c.forest }}>
                — {t.name}
                <span style={{ display: "block", marginTop: "0.2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", color: c.mutedWarm }}>
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <style>{`
          @media (min-width: 768px) {
            .bp-testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </Section>


      {/* ═══════ WHAT HAPPENS NEXT ═══════ */}
      <Section bg={c.creamAlt}>
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem" }}>
            What Happens Next
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 600, color: c.forest, margin: "0 0 2.5rem", lineHeight: 1.25 }}>
            From inbox to Monday morning — in three steps.
          </h2>
          <div className="bp-next-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}>
            {[
              { n: "1", t: "Check your inbox.", d: "Your Blueprint arrives in under a minute — printable PDF, ready to use." },
              { n: "2", t: "Print the templates.", d: "One Weekly Engagement Plan, the Balance Wheel, and the Reflection page." },
              { n: "3", t: "Plan Monday in 20 minutes.", d: "Sit down once. Map the week. Walk into Monday already prepared." },
            ].map((s) => (
              <div key={s.n} style={{ backgroundColor: c.cream, border: `1px solid ${c.gridline}`, borderRadius: "14px", padding: "1.5rem 1.5rem 1.4rem", textAlign: "left" }}>
                <div style={{ fontFamily: serif, fontSize: "1.6rem", fontWeight: 700, color: c.terracotta, lineHeight: 1, marginBottom: "0.6rem" }}>{s.n}</div>
                <p style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 600, color: c.forest, margin: "0 0 0.4rem", lineHeight: 1.3 }}>{s.t}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: c.body, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 720px) {
            .bp-next-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </Section>

      {/* ═══════ FOUNDER LETTER + FINAL CTA ═══════ */}
      <Section>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <EmailCapture id="footer" variant="dark" submitLabel="Yes, I Want My Sundays Back" />
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
            <footer style={{ fontSize: "0.85rem", fontWeight: 600, color: c.terracotta, marginBottom: "1.25rem" }}>
              — Francesca, Founder of The Comfort Bond™
            </footer>
          </blockquote>

          {/* Soft upsell */}
          <div style={{ marginTop: "2.5rem", padding: "1.4rem 1.6rem", backgroundColor: c.calloutBg, border: `1px solid ${c.calloutBorder}`, borderRadius: "12px", textAlign: "center" }}>
            <p style={{ fontFamily: serif, fontSize: "0.95rem", color: c.forest, margin: 0, lineHeight: 1.55 }}>
              Already love the Blueprint?{" "}
              <Link to="/blueprint-pro" style={{ color: c.terracotta, textDecoration: "underline", fontWeight: 600 }}>
                See the full 13-week system in Blueprint Pro →
              </Link>
            </p>
          </div>
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
