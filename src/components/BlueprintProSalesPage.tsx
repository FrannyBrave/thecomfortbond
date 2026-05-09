import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/the-comfort-bond-logo.webp";
import quarterlyOverviewImg from "@/assets/senior-living-quarterly-activity-calendar-q3-2026.webp";
import weeklyPlanImg from "@/assets/weekly-senior-activity-plan-memory-care.webp";
import engagementWheelImg from "@/assets/engagement-balance-wheel-senior-care.webp";

import { openPaddleCheckout } from "@/lib/paddle";

/* ─── Palette ─── */
const c = {
  cream: "#F5F0EB",
  creamAlt: "#EDE8E2",
  forest: "#2d4a3e",
  forestLight: "#3d6455",
  terracotta: "#C67B5C",
  terracottaLight: "#D4937A",
  terracottaWash: "#F3E4DB",
  bronze: "#8B6F47",
  body: "#3A3A3A",
  muted: "#9A8E80",
  gridline: "#D5CEC7",
  gold: "#D4A574",
} as const;

const serif = '"Playfair Display", Georgia, serif';
const sans = '"DM Sans", system-ui, sans-serif';

const BLUEPRINT_PRO_PRICE_ID = "pri_01kpagj5jtaxcnkbtjctq616k4";

/* ─── CTA Button (terracotta) ─── */
function Cta({ children, large, variant = "primary" }: { children: React.ReactNode; large?: boolean; variant?: "primary" | "outline" }) {
  const isPrimary = variant === "primary";
  return (
    <button
      type="button"
      onClick={() => openPaddleCheckout(BLUEPRINT_PRO_PRICE_ID)}
      style={{
        display: "inline-block",
        fontFamily: sans,
        fontSize: large ? "1rem" : "0.9rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
        color: isPrimary ? "#fff" : c.terracotta,
        backgroundColor: isPrimary ? c.terracotta : "transparent",
        border: isPrimary ? "none" : `2px solid ${c.terracotta}`,
        padding: large ? "1rem 2.5rem" : "0.85rem 1.75rem",
        borderRadius: "100px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.2s ease",
        boxShadow: isPrimary ? "0 4px 16px rgba(198,123,92,0.3)" : "none",
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.currentTarget.style.backgroundColor = c.terracottaLight;
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(198,123,92,0.4)";
        } else {
          e.currentTarget.style.backgroundColor = c.terracotta;
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.backgroundColor = c.terracotta;
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(198,123,92,0.3)";
        } else {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = c.terracotta;
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {children}
    </button>
  );
}

/* ─── FAQ Accordion ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ borderBottom: `1px solid ${c.gridline}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: serif,
          fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
          fontWeight: 600,
          color: c.forest,
          textAlign: "left",
          lineHeight: 1.35,
        }}
      >
        {q}
        <span
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: open ? c.terracotta : "transparent",
            border: `2px solid ${c.terracotta}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            color: open ? "#fff" : c.terracotta,
            transition: "all 0.2s",
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ fontFamily: sans, fontSize: "0.95rem", lineHeight: 1.8, color: c.body, paddingBottom: "1.5rem" }}>
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Wide section wrapper (1100px max) ─── */
function Wide({ children, bg = c.cream, style }: { children: React.ReactNode; bg?: string; style?: React.CSSProperties }) {
  return (
    <section style={{ backgroundColor: bg, padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 3rem)", ...style }}>
      <div style={{ maxWidth: "1060px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/* ─── Narrow section wrapper (720px max) ─── */
function Narrow({ children, bg = c.cream, style }: { children: React.ReactNode; bg?: string; style?: React.CSSProperties }) {
  return (
    <section style={{ backgroundColor: bg, padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 3rem)", ...style }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function BlueprintProSalesPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: sans, color: c.body, backgroundColor: c.cream }}>
      {/* ── Nav bar ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1060px",
          margin: "0 auto",
          padding: "1rem clamp(1.25rem, 5vw, 3rem)",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <img src={logo} alt="The Comfort Bond logo — dignified engagement activities for senior living" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.forest, letterSpacing: "-0.3px" }}>
            The Comfort Bond&trade;
          </span>
        </Link>
        <Link
          to="/"
          style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 500, color: c.muted, textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = c.terracotta)}
          onMouseLeave={(e) => (e.currentTarget.style.color = c.muted)}
        >
          &larr; Back to Home
        </Link>
      </nav>

      {/* ════════════════════════════════════════
          SECTION 1 — HERO (mobile-first conversion)
         ════════════════════════════════════════ */}
      <Wide style={{ paddingTop: "clamp(1rem, 3vw, 2rem)", paddingBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.85rem" }}>
            The Blueprint™ Pro
          </p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(2rem, 5.2vw, 3.1rem)", fontWeight: 600, color: c.forest, lineHeight: 1.1, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
            Never Plan Activities at 10&nbsp;PM on Sunday Again.
          </h1>
          <p style={{ fontSize: "clamp(0.98rem, 1.6vw, 1.1rem)", lineHeight: 1.65, color: c.body, margin: "0 auto 1.4rem", maxWidth: "620px" }}>
            A done-for-you 13-week system that organizes your entire activity calendar — so you walk into every week prepared, not scrambling.
          </p>

          <ul className="bps-hero-benefits" style={{ listStyle: "none", padding: 0, margin: "0 auto 1.6rem", maxWidth: "620px", display: "grid", gridTemplateColumns: "1fr", gap: "0.55rem", textAlign: "left" }}>
            {[
              "13 weeks fully structured",
              "No more last-minute planning",
              "Balanced, dignified programming",
              "Works for real senior living environments",
            ].map((t, i) => (
              <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "center", fontSize: "0.95rem", color: c.body, lineHeight: 1.4 }}>
                <span style={{ color: c.terracotta, fontWeight: 700, flexShrink: 0 }}>✔</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="bps-hero-cta">
            <Cta large>Get Your 13-Week Plan — $34</Cta>
          </div>
          <p style={{ fontFamily: sans, fontSize: "0.82rem", color: c.muted, margin: "0.7rem 0 0" }}>
            Instant access · No subscription · Use it again and again
          </p>
          <p style={{ fontFamily: sans, fontSize: "0.9rem", margin: "0.85rem 0 0", color: c.forest }}>
            Not sure yet?{" "}
            <Link
              to="/blueprint"
              style={{ color: c.terracotta, textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
            >
              Download a free 1-week sample and try it first →
            </Link>
          </p>
        </div>
        <style>{`
          .bps-hero-cta button { width: 100%; }
          @media (min-width: 640px) {
            .bps-hero-cta button { width: auto; }
            .bps-hero-benefits { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </Wide>

      {/* ════════════════════════════════════════
          HERO ANCHOR — single testimonial + 5-star
         ════════════════════════════════════════ */}
      <section style={{ backgroundColor: c.creamAlt, padding: "clamp(2rem, 5vw, 3rem) clamp(1.25rem, 5vw, 3rem)" }}>
        <figure
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            padding: 0,
          }}
        >
          <div aria-label="5 out of 5 stars" style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "0.85rem", color: c.gold, fontSize: "1.1rem", letterSpacing: "0.1em" }}>
            <span aria-hidden="true">★★★★★</span>
          </div>
          <blockquote
            style={{
              margin: 0,
              fontFamily: serif,
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
              lineHeight: 1.55,
              color: c.forest,
            }}
          >
            “Sunday nights used to be stressful for me — I&rsquo;d be trying to pull together a full week of activities with no structure. The Blueprint completely changed that. I now sit down for 20 minutes and my entire week is mapped out in a way that actually makes sense.”
          </blockquote>
          <figcaption
            style={{
              marginTop: "1rem",
              fontFamily: sans,
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: c.body,
            }}
          >
            Shannon L.
            <span style={{ display: "block", marginTop: "0.2rem", fontSize: "0.7rem", fontWeight: 500, color: c.muted }}>
              Life Enrichment Manager
            </span>
          </figcaption>
        </figure>
      </section>

      <Wide>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem" }}>
            The Problem
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.4vw, 2rem)", fontWeight: 600, color: c.forest, margin: "0 0 1.5rem" }}>
            You know this feeling:
          </h2>
          <ul className="bps-pain-list" style={{ listStyle: "none", padding: 0, margin: "0 auto 1.75rem", maxWidth: "640px", display: "grid", gridTemplateColumns: "1fr", gap: "0.85rem", textAlign: "left" }}>
            {[
              "It's Sunday night and next week isn't planned.",
              "You're pulling ideas from Pinterest at the last minute.",
              "Activities feel repetitive — or rushed.",
              "You're trying to balance engagement, but something always gets missed.",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: c.terracotta, flexShrink: 0, marginTop: "0.45rem" }} />
                <span style={{ fontSize: "1.025rem", lineHeight: 1.6, color: c.body }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: c.muted, fontStyle: "italic", margin: "0 auto", maxWidth: "560px" }}>
            You didn&rsquo;t get into this work to feel behind. You got into it because you care.
          </p>
        </div>
        <style>{`
          @media (min-width: 720px) {
            .bps-pain-list { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 3 — THE REFRAME (terracotta accent)
         ════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
          padding: "clamp(3.5rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1.5rem", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 600, color: "#fff", lineHeight: 1.25, margin: "0 0 0.75rem" }}>
            It&rsquo;s not a creativity problem.
          </h2>
          <p style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 600, color: c.terracottaLight, lineHeight: 1.25, margin: 0 }}>
            It&rsquo;s a structure problem.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INSIDE THE BLUEPRINT — 3 sections (scope, depth, differentiator)
         ════════════════════════════════════════ */}
      <Wide bg={c.cream}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: c.terracotta, margin: 0 }}>
            Inside the Blueprint
          </p>
        </div>

        {[
          {
            heading: "Plan an entire quarter in one afternoon.",
            body: "Q3 2026 maps 13 weeks of senior living programming — every week pre-themed, pre-mapped to an engagement dimension, and tied to a real seasonal anchor or national observance. From “Red, White, and Blue Memories” on Independence Day week to “What I Know for Sure” closing out September, every theme is intentional, dignified, and ready to run.",
            img: quarterlyOverviewImg,
            w: 1280, h: 1026,
            alt: "Senior living quarterly activity calendar for Q3 2026 — 13 weeks of memory care programming themes mapped to engagement dimensions and seasonal observances",
            caption: "13 weeks, 13 themes, 13 dimension anchors — pre-mapped before you open the file.",
          },
          {
            heading: "Open Monday's plan. Run Monday's activities.",
            body: "Every week includes morning and afternoon activities, dimension tags so you instantly see which engagement area each activity covers, a notes column for real-time observations, and a Coaching Tip from the system itself. Each week is a fillable worksheet — pre-themed with activities, with space to customize for your residents and write your own notes as you go. No prep, no scrambling, no “what do we do next?” — Monday morning starts at the top of the page.",
            img: weeklyPlanImg,
            w: 1280, h: 960,
            alt: "Weekly senior activity plan for memory care — daily morning and afternoon dementia-friendly activities with engagement dimension tags and caregiver notes column",
            caption: "“Don't open with a question. Play ten seconds of a marching band first — the sounds prime the memory faster than any prompt you can read aloud.” — Coaching Tip from inside the Blueprint Pro",
          },
          {
            heading: "See your week's balance in 5 seconds.",
            body: "The Engagement Balance Wheel™ is the proprietary tool built into every Blueprint Pro edition. Six dimensions of meaningful engagement — Cognitive, Social, Sensory, Physical, Creative, Spiritual — tracked weekly so you can spot at a glance which area you've over-served and which residents have been quietly under-served. The wheel is a compass, not a checklist.",
            img: engagementWheelImg,
            w: 1280, h: 960,
            alt: "Engagement Balance Wheel for senior care — six dimensions of meaningful resident engagement (cognitive, social, sensory, physical, creative, spiritual) tracked weekly across a 13-week quarter",
            caption: "Most memory care programs run 70% cognitive activities without realizing it. The Wheel surfaces the imbalance before it becomes a problem.",
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
            <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem" }}>
                Section {i + 1}
              </p>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.4vw, 2rem)", fontWeight: 600, color: c.forest, lineHeight: 1.2, margin: "0 0 1rem", letterSpacing: "-0.01em" }}>
                {s.heading}
              </h2>
              <p style={{ fontSize: "clamp(0.98rem, 1.6vw, 1.075rem)", lineHeight: 1.7, color: c.body, margin: 0 }}>
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
              <figcaption
                style={{
                  marginTop: "1rem",
                  fontFamily: sans,
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: c.muted,
                  fontStyle: "italic",
                  textAlign: "center",
                  maxWidth: "640px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {s.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </Wide>

      {/* ════════════════════════════════════════
          STATS BAR — between Inside the Blueprint and Testimonials
         ════════════════════════════════════════ */}
      <Wide bg={c.creamAlt}>
        <div style={{ textAlign: "center", marginBottom: "2rem", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1.25rem", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 600, color: c.forest, margin: 0, lineHeight: 1.25 }}>
            What's Inside the Blueprint Pro
          </h2>
        </div>
        <div
          className="bps-stats-bar"
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
            { num: "30", label: "pages of structured planning" },
            { num: "13", label: "pre-themed weeks of programming" },
            { num: "6", label: "engagement dimensions tracked weekly" },
            { num: "1", label: "instant download (PDF + mobile-friendly digital)" },
          ].map((stat, i, arr) => (
            <div
              key={i}
              className="bps-stat-item"
              style={{
                textAlign: "center",
                padding: "0.5rem 1rem",
                borderBottom: i < arr.length - 1 ? `1px solid ${c.forest}1f` : "none",
                paddingBottom: i < arr.length - 1 ? "1.5rem" : "0.5rem",
              }}
            >
              <div style={{ fontFamily: serif, fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700, color: c.terracotta, lineHeight: 1, marginBottom: "0.5rem" }}>
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
            .bps-stats-bar {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 0 !important;
            }
            .bps-stat-item {
              border-bottom: none !important;
              border-right: 1px solid hsl(0 0% 0% / 0.12) !important;
              padding-bottom: 0.5rem !important;
            }
            .bps-stat-item:last-child {
              border-right: none !important;
            }
          }
        `}</style>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 5.5 — TESTIMONIALS (social proof before Free vs Pro)
         ════════════════════════════════════════ */}
      <Wide bg={c.cream}>
        <div style={{ textAlign: "center", marginBottom: "2.25rem", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1.25rem", borderRadius: "2px" }} />
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.65rem" }}>
            What Activity Directors Say
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.2vw, 1.9rem)", fontWeight: 600, color: c.forest, margin: 0, lineHeight: 1.25 }}>
            From Sunday-Night Scramble to a System That Works
          </h2>
        </div>

        <div className="bps-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.1rem" }}>
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
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0.4rem",
                  left: "1rem",
                  fontFamily: serif,
                  fontSize: "2.75rem",
                  lineHeight: 1,
                  color: c.terracotta,
                  opacity: 0.35,
                }}
              >
                “
              </span>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: serif,
                  fontStyle: "italic",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: c.body,
                  paddingTop: "0.75rem",
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption
                style={{
                  marginTop: "0.9rem",
                  fontFamily: sans,
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: c.forest,
                }}
              >
                — {t.name}
                <span style={{ display: "block", marginTop: "0.2rem", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", color: c.muted }}>
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <style>{`
          @media (min-width: 768px) {
            .bps-testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 6 — FREE VS PRO (single tight card)
         ════════════════════════════════════════ */}
      <Wide bg={c.terracottaWash}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1rem", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 0.5rem" }}>
            Free vs. Pro
          </h2>
        </div>
        <div style={{ backgroundColor: c.cream, borderRadius: "14px", border: `1px solid ${c.gridline}`, maxWidth: "640px", margin: "0 auto", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: "1.5rem 1.25rem", borderRight: `1px solid ${c.gridline}` }}>
              <p style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.muted, margin: "0 0 0.4rem" }}>
                Free
              </p>
              <h3 style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 600, color: c.forest, margin: "0 0 0.5rem", lineHeight: 1.3 }}>
                The Structure
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: c.body, margin: 0 }}>
                Blank weekly templates and the Engagement Balance Wheel — the empty framework.
              </p>
            </div>
            <div style={{ padding: "1.5rem 1.25rem", backgroundColor: c.forest }}>
              <p style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.terracottaLight, margin: "0 0 0.4rem" }}>
                Pro
              </p>
              <h3 style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 600, color: "#fff", margin: "0 0 0.5rem", lineHeight: 1.3 }}>
                The Complete System
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "rgba(255,255,255,0.88)", margin: 0 }}>
                13 pre-themed weeks, coaching tips, conversation starters, observance mapping, and resource guides — all filled in.
              </p>
            </div>
          </div>
        </div>
        <p style={{ fontFamily: serif, fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 600, color: c.forest, lineHeight: 1.5, textAlign: "center", marginTop: "1.75rem", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
          The free version gave you the filing cabinet.{" "}
          <span style={{ color: c.terracotta }}>The Pro version gives you the files.</span>
        </p>
      </Wide>

      {/* ════════════════════════════════════════
          HOW IT WORKS — 3 simple steps
         ════════════════════════════════════════ */}
      <Wide bg={c.cream}>
        <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1rem", borderRadius: "2px" }} />
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.5rem" }}>
            How It Works
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.2vw, 1.9rem)", fontWeight: 600, color: c.forest, margin: 0, lineHeight: 1.25 }}>
            From purchase to Monday morning &mdash; in three steps.
          </h2>
        </div>
        <div className="bps-how-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.1rem", maxWidth: "900px", margin: "0 auto" }}>
          {[
            { n: "1", t: "Buy & instant download", d: "Checkout takes 60 seconds. Your Blueprint PDF lands in your inbox immediately." },
            { n: "2", t: "Print or open digitally", d: "Use it on your tablet, your laptop, or printed and tucked into your binder." },
            { n: "3", t: "Open Week 1 — start Monday", d: "No setup. No learning curve. Open the page, run the activities, repeat next week." },
          ].map((s) => (
            <div key={s.n} style={{ backgroundColor: c.creamAlt, border: `1px solid ${c.gridline}`, borderRadius: "14px", padding: "1.5rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: "42px", height: "42px", borderRadius: "50%", backgroundColor: c.terracotta, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: serif, fontSize: "1.15rem", fontWeight: 600 }}>
                {s.n}
              </div>
              <div>
                <h3 style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.forest, margin: "0 0 0.35rem", lineHeight: 1.3 }}>{s.t}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: c.body, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width: 768px) {
            .bps-how-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </Wide>

      {/* ════════════════════════════════════════
          BUNDLE UPSELL — Blueprint Pro + 5-Kit Bundle
         ════════════════════════════════════════ */}
      <Wide bg={c.terracottaWash}>
        <div style={{ maxWidth: "720px", margin: "0 auto", backgroundColor: c.cream, borderRadius: "16px", border: `2px solid ${c.terracotta}`, padding: "clamp(1.75rem, 4vw, 2.5rem)", textAlign: "center", position: "relative" }}>
          <span style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", backgroundColor: c.terracotta, color: "#fff", fontFamily: sans, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", borderRadius: "100px" }}>
            Best Value
          </span>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0.4rem 0 0.6rem" }}>
            Get the Complete System
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 3.2vw, 1.85rem)", fontWeight: 600, color: c.forest, margin: "0 0 0.75rem", lineHeight: 1.25 }}>
            Blueprint Pro + 5-Kit Bundle
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.65, color: c.body, margin: "0 0 1.25rem", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
            Pair the planning system with the activity kits it&rsquo;s designed to run.{" "}
            <strong style={{ color: c.forest }}>$124 total &mdash; saves $38</strong> versus buying separately.
          </p>
          <p style={{ fontFamily: sans, fontSize: "0.9rem", color: c.muted, fontStyle: "italic", margin: "0 0 1.5rem" }}>
            Or add the Bundle at checkout for $124.
          </p>
          <Link
            to="/kits"
            style={{
              display: "inline-block",
              fontFamily: sans,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: c.forest,
              padding: "0.95rem 2rem",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 4px 16px rgba(45,74,62,0.25)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = c.forestLight; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = c.forest; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            See the Bundle &rarr;
          </Link>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 7 — PRICING
         ════════════════════════════════════════ */}
      <Wide>
        <div
          style={{
            background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
            borderRadius: "20px",
            padding: "clamp(2.5rem, 6vw, 4rem)",
            textAlign: "center",
            maxWidth: "580px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative accent */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg, ${c.terracotta}, ${c.gold}, ${c.terracotta})` }} />
          <p style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracottaLight, margin: "0 0 0.75rem" }}>
            The Blueprint™ Pro
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 600, color: "#fff", margin: "0 0 0.25rem", lineHeight: 1.3 }}>
            Q3 2026 Edition
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", margin: "0 0 0.5rem" }}>
            Get it now, plan ahead, run it July&ndash;September.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", margin: "0 0 1.5rem", fontStyle: "italic", maxWidth: "380px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            Currently in Q2? Still useful &mdash; print blank weeks and use the system today.
          </p>
          <p style={{ fontFamily: serif, fontSize: "clamp(2.75rem, 7vw, 3.5rem)", fontWeight: 600, color: "#fff", margin: "0 0 0.25rem", lineHeight: 1 }}>
            $34
          </p>
          <p style={{ fontSize: "0.8rem", color: c.terracottaLight, fontWeight: 500, margin: "0 0 2rem" }}>
            One quarter. Completely handled.
          </p>
          <button
            type="button"
            onClick={() => openPaddleCheckout(BLUEPRINT_PRO_PRICE_ID)}
            style={{
              display: "inline-block",
              fontFamily: sans,
              fontSize: "1rem",
              fontWeight: 600,
              color: c.forest,
              backgroundColor: c.cream,
              border: "none",
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = c.cream;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
            }}
          >
            Get the Q3 2026 Edition
          </button>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: "1.25rem" }}>
            Q4 edition arrives by August 30, 2026 &mdash; before you need it.
          </p>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 8 — FAQ
         ════════════════════════════════════════ */}
      <Narrow bg={c.creamAlt}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1rem", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: 0 }}>
            Common Questions
          </h2>
        </div>
        <div style={{ borderTop: `1px solid ${c.gridline}` }}>
          <FaqItem
            q={"How will I receive the Blueprint?"}
            a={"Instantly. As soon as checkout is complete, you\u2019ll receive an email with your download link. The Blueprint is delivered as a high-quality PDF you can open on any device \u2014 laptop, tablet, or phone \u2014 within minutes of purchase."}
          />
          <FaqItem
            q={"Can I print it, or is it only digital?"}
            a={"Both. The Blueprint is designed to look beautiful on a tablet or laptop, and it\u2019s fully optimized for printing on standard 8.5\u00d711\u201d paper. Many Activity Directors print just the current week and keep it on their desk or clipboard. Print as many times as you need \u2014 it\u2019s yours."}
          />
          <FaqItem
            q={"Does this work for assisted living, not just memory care?"}
            a={"Yes. The Blueprint is designed for the full range of senior living \u2014 independent living, assisted living, memory care, and adult day programs. The themes are adult-centered and the coaching notes include guidance for adapting depth and pacing to your residents\u2019 cognitive levels."}
          />
          <FaqItem
            q={"Do you offer refunds?"}
            a={"Because The Blueprint\u2122 Pro is an instant digital download, all sales are final once the file has been delivered. We don\u2019t offer refunds on downloaded digital products \u2014 but if something isn\u2019t working (a broken link, a missing file), email us and we\u2019ll make it right immediately."}
          />
          <FaqItem
            q={"\u201CI don\u2019t have time to learn a new system.\u201D"}
            a={"Open the Blueprint. Turn to this week\u2019s page. Read the theme and the coaching tip. Fill in your activities. Five minutes. No onboarding, no training, no learning curve."}
          />
          <FaqItem
            q={"\u201CDo I have to buy your physical kits?\u201D"}
            a={"No. Every week includes a free, zero-prep \u201CNo-Kit Alternative.\u201D The Blueprint works entirely on its own. If you own Comfort Bond\u2122 kits, the Resource Guide shows when to use them. If you don\u2019t, you won\u2019t miss a beat."}
          />
          <FaqItem
            q={"\u201CAre these activities childish?\u201D"}
            a={"No. Every theme and conversation starter was designed for adults with rich life histories. County fairs, kitchen tables, Sunday drives, handwritten letters. No coloring pages. No patronizing language."}
          />
        </div>

        {/* Buy button after FAQ */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Cta large>Get Your 13-Week Plan — $34</Cta>
          <p style={{ fontFamily: sans, fontSize: "0.8rem", color: c.muted, marginTop: "0.65rem" }}>
            Instant access · No subscription · Use it again and again
          </p>
        </div>
      </Narrow>

      {/* ════════════════════════════════════════
          SECTION 9 — FINAL CLOSE
         ════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`, padding: "clamp(3.5rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 3rem)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg, ${c.terracotta}, ${c.gold}, ${c.terracotta})` }} />
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: "#fff", margin: "0 0 2rem", lineHeight: 1.3 }}>
            Let the system handle the planning. You handle the moments that matter.
          </p>
          <Cta large>Get Your 13-Week Plan — $34</Cta>
          <p style={{ fontFamily: sans, fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", marginTop: "0.85rem" }}>
            Instant access · No subscription · Updated quarterly
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: c.cream, borderTop: `1px solid ${c.gridline}`, padding: "2rem clamp(1.25rem, 5vw, 3rem)", textAlign: "center" }}>
        <p style={{ fontFamily: serif, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.35rem" }}>
          The Comfort Bond™
        </p>
        <p style={{ fontSize: "0.65rem", color: c.muted, margin: 0, letterSpacing: "0.03em" }}>
          www.thecomfortbond.com/blueprint-pro
        </p>
      </footer>

      {/* ── Responsive ── */}
      <style>{`
        @media (min-width: 768px) {
          .bps-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .bps-pain-grid { grid-template-columns: 1.2fr 1fr !important; }
          .bps-features-grid { grid-template-columns: 1fr 1fr !important; }
          .bps-compare-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── Sticky mobile CTA (mobile only) ── */}
      <div
        className="bps-sticky-cta"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          padding: "0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom))",
          background: "linear-gradient(to top, rgba(245,240,235,1) 70%, rgba(245,240,235,0))",
          transform: stickyVisible ? "translateY(0)" : "translateY(110%)",
          opacity: stickyVisible ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          pointerEvents: stickyVisible ? "auto" : "none",
        }}
      >
        <button
          type="button"
          onClick={() => openPaddleCheckout(BLUEPRINT_PRO_PRICE_ID)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontFamily: sans,
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: c.terracotta,
            border: "none",
            padding: "0.95rem 1.25rem",
            borderRadius: "100px",
            cursor: "pointer",
            boxShadow: "0 8px 24px -6px rgba(198,123,92,0.5)",
          }}
        >
          Get Your 13-Week Plan — $34 →
        </button>
      </div>
      <style>{`
        @media (min-width: 860px) {
          .bps-sticky-cta { display: none !important; }
        }
      `}</style>
    </div>
  );
}
