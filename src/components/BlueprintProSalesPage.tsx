import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/the-comfort-bond-logo.png";
import heroMockup from "@/assets/memory-care-activity-calendar-template.png";
import beforeAfter from "@/assets/activity-planning-before-after-senior-living-calendar.png";

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
  const [open, setOpen] = useState(false);
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
        <div className="bps-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(1.75rem, 4vw, 2.5rem)", alignItems: "center" }}>
          {/* Copy + CTA */}
          <div>
            <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.85rem" }}>
              The Programming Blueprint™ Pro
            </p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(2rem, 5.2vw, 2.95rem)", fontWeight: 600, color: c.forest, lineHeight: 1.1, margin: "0 0 0.9rem", letterSpacing: "-0.02em" }}>
              Never Plan Activities at 10&nbsp;PM on Sunday Again.
            </h1>
            <p style={{ fontSize: "clamp(0.98rem, 1.6vw, 1.08rem)", lineHeight: 1.65, color: c.body, margin: "0 0 1.1rem", maxWidth: "90%" }}>
              A done-for-you 13-week system that organizes your entire activity calendar — so you walk into every week prepared, not scrambling.
            </p>

            {/* Benefit strip */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.4rem", display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem" }}>
              {[
                "13 weeks fully structured",
                "No more last-minute planning",
                "Balanced, dignified programming",
                "Works for real senior living environments",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "center", fontSize: "0.92rem", color: c.body, lineHeight: 1.4 }}>
                  <span style={{ color: c.terracotta, fontWeight: 700, flexShrink: 0 }}>✔</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* Who this is for — credibility card with thread lines */}
            <div
              style={{
                margin: "0 0 1.4rem",
                padding: "1.1rem 1.15rem",
                borderTop: `1px solid ${c.terracotta}`,
                borderBottom: `1px solid ${c.terracotta}`,
                background: "rgba(198, 123, 92, 0.05)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-0.55rem",
                  left: "1rem",
                  background: c.cream,
                  padding: "0 0.5rem",
                  fontFamily: sans,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: c.terracotta,
                }}
              >
                Built for the field
              </span>
              <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.5, color: c.forest, margin: "0 0 0.45rem", fontWeight: 500 }}>
                Created for real Activity Professionals navigating daily engagement challenges.
              </p>
              <p style={{ fontFamily: sans, fontSize: "0.85rem", lineHeight: 1.55, color: c.muted, margin: 0 }}>
                Built based on real challenges faced in senior living communities.
              </p>
            </div>

            {/* Primary CTA — full width on mobile */}
            <div className="bps-hero-cta">
              <Cta large>Get Your 13-Week Plan — $27</Cta>
            </div>
            <p style={{ fontFamily: sans, fontSize: "0.82rem", color: c.muted, margin: "0.7rem 0 0", textAlign: "center" }}>
              Instant access · No subscription · Use it again and again
            </p>
            <p style={{ fontFamily: sans, fontSize: "0.78rem", color: c.terracotta, margin: "0.4rem 0 0", textAlign: "center", fontWeight: 600 }}>
              Updated quarterly · Limited release per edition
            </p>
            <p style={{ fontFamily: sans, fontSize: "0.9rem", margin: "0.85rem 0 0", textAlign: "center", color: c.forest }}>
              Not sure yet?{" "}
              <Link
                to="/blueprint"
                style={{ color: c.terracotta, textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
              >
                Download a free 1-week sample and try it first →
              </Link>
            </p>
          </div>

          {/* Product mockup */}
          <img
            src={heroMockup}
            alt="The Programming Blueprint Pro on a tablet"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 20px 56px rgba(45,74,62,0.22)",
              display: "block",
              marginTop: "0.25rem",
            }}
          />
        </div>
        <style>{`
          .bps-hero-cta :global(button), .bps-hero-cta button { width: 100%; }
          @media (min-width: 860px) {
            .bps-hero-cta button { width: auto; }
          }
        `}</style>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 2 — THE PAIN
         ════════════════════════════════════════ */}
      <Wide>
        <div className="bps-pain-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.75rem" }}>
              The Problem
            </p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 1rem" }}>
              You know this feeling:
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
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
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: c.muted, fontStyle: "italic", margin: 0, borderLeft: `3px solid ${c.terracotta}`, paddingLeft: "1rem" }}>
              You didn&rsquo;t get into this work to feel behind. You got into it because you care.
            </p>
          </div>
          <img
            src={beforeAfter}
            alt="Planning without a system vs with a system"
            style={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 8px 30px rgba(45,74,62,0.1)", display: "block" }}
          />
        </div>
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
          SECTION 5 — WHAT'S INSIDE (feature grid)
         ════════════════════════════════════════ */}
      <Wide bg={c.creamAlt}>
        {/* Product Introduction */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1.25rem", borderRadius: "2px" }} />
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.85rem" }}>
            Meet the Blueprint
          </p>
          <p style={{ fontFamily: serif, fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)", fontWeight: 500, color: c.forest, lineHeight: 1.45, margin: 0 }}>
            The Programming Blueprint™ Pro is your complete 13-week engagement system — designed to give you structure, variety, and confidence without the overwhelm.
          </p>
        </div>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 0.5rem" }}>
            What This Actually Does for You
          </h2>
        </div>

        <div className="bps-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.1rem" }}>
          {[
            { title: "You don't have to figure out what goes where.", text: "A fully structured 13-week framework that balances cognitive, social, sensory, physical, creative, and spiritual engagement — automatically." },
            { title: "You stop second-guessing your programming.", text: "Weekly planning worksheets guide your schedule, ensure variety, and prevent burnout — for both you and your residents." },
            { title: "You know your programming is actually balanced.", text: "The Engagement Balance Wheel helps you instantly see if your programming is well-rounded — or missing something important." },
            { title: "You always know what to run.", text: "Built-in resource mapping connects each planning slot to ready-to-use activities — so you're never staring at a blank schedule." },
            { title: "You're never starting from scratch again.", text: "Pre-built quarterly themes, seasonal anchors, and conversation prompts — ready the moment you open the plan." },
            { title: "You can plan anywhere, anytime.", text: "Mobile-friendly version for on-the-go planning and quick adjustments during your day." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: c.cream,
                border: `1px solid ${c.gridline}`,
                borderLeft: `4px solid ${c.terracotta}`,
                borderRadius: "12px",
                padding: "1.25rem 1.4rem",
              }}
            >
              <h3 style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 600, color: c.forest, margin: "0 0 0.45rem", lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: c.body, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Mid-page buy button */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <div className="bps-hero-cta" style={{ display: "inline-block", width: "100%", maxWidth: "420px" }}>
            <Cta large>Get Your 13-Week Plan — $27</Cta>
          </div>
          <p style={{ fontFamily: sans, fontSize: "0.8rem", color: c.muted, marginTop: "0.65rem" }}>
            Instant access · No subscription · Use it again and again
          </p>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 5b — RELIEF / VISUALIZATION
         ════════════════════════════════════════ */}
      <Wide>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.terracotta, margin: "0 0 0.85rem" }}>
            Picture Monday Morning
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 3.2vw, 1.9rem)", fontWeight: 600, color: c.forest, lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            Imagine walking into Monday morning knowing:
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem", textAlign: "left", maxWidth: "440px", marginLeft: "auto", marginRight: "auto" }}>
            {[
              "Your entire week is already structured.",
              "Every activity has purpose and balance.",
              "You're not scrambling for ideas.",
              "Your residents are actually engaged.",
            ].map((t, i) => (
              <li key={i} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", fontSize: "1rem", lineHeight: 1.5, color: c.body }}>
                <span style={{ color: c.terracotta, fontWeight: 700, flexShrink: 0, marginTop: "0.05rem" }}>✔</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 5c — DIFFERENTIATION
         ════════════════════════════════════════ */}
      <section
        style={{
          background: c.terracottaWash,
          padding: "clamp(2.75rem, 6vw, 4rem) clamp(1.25rem, 5vw, 3rem)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, lineHeight: 1.3, margin: "0 0 1rem" }}>
            This isn&rsquo;t another list of activity ideas.
          </h2>
          <p style={{ fontFamily: sans, fontSize: "1rem", color: c.body, margin: "0 0 1.25rem", lineHeight: 1.6 }}>
            It&rsquo;s a system that tells you:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.6rem", maxWidth: "320px", marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
            {["What to do", "When to do it", "And how to keep everything balanced"].map((t, i) => (
              <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "center", fontFamily: serif, fontSize: "1.05rem", color: c.forest, fontWeight: 500 }}>
                <span style={{ color: c.terracotta, fontWeight: 700 }}>→</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 6 — FREE VS PRO (visual comparison)
         ════════════════════════════════════════ */}
      <Wide bg={c.terracottaWash}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: "48px", height: "3px", backgroundColor: c.terracotta, margin: "0 auto 1rem", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 0.5rem" }}>
            Free vs. Pro
          </h2>
        </div>
        <div className="bps-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", maxWidth: "720px", margin: "0 auto" }}>
          {/* Free card */}
          <div style={{ backgroundColor: c.cream, borderRadius: "14px", padding: "2rem", border: `1px solid ${c.gridline}` }}>
            <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.muted, margin: "0 0 0.5rem" }}>
              Free Blueprint
            </p>
            <h3 style={{ fontFamily: serif, fontSize: "1.25rem", fontWeight: 600, color: c.forest, margin: "0 0 1rem" }}>
              The Structure
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Blank weekly planning templates", "Engagement Balance Wheel (empty)", "Weekly grid layout"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "center", fontSize: "0.925rem", color: c.body }}>
                  <span style={{ color: c.muted }}>○</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Pro card */}
          <div style={{ backgroundColor: c.forest, borderRadius: "14px", padding: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "0.75rem", right: "1rem", fontFamily: sans, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: c.terracotta, padding: "0.25rem 0.75rem", borderRadius: "100px", color: "#fff" }}>
              Recommended
            </div>
            <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.terracottaLight, margin: "0 0 0.5rem" }}>
              Blueprint Pro
            </p>
            <h3 style={{ fontFamily: serif, fontSize: "1.25rem", fontWeight: 600, color: "#fff", margin: "0 0 1rem" }}>
              The Complete System
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                "13 pre-themed weeks with content",
                "Expert facilitator coaching notes",
                "Conversation starters for every theme",
                "National observance mapping",
                "6-dimension balance tracking (filled)",
                "Resource connection guides",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "center", fontSize: "0.925rem", color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ color: c.terracottaLight }}>●</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ fontFamily: serif, fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 600, color: c.forest, lineHeight: 1.4, textAlign: "center", marginTop: "2rem", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
          The free version gave you the filing cabinet.
          <br />
          <span style={{ color: c.terracotta }}>The Pro version gives you the files.</span>
        </p>
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
            The Programming Blueprint™ Pro
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 600, color: "#fff", margin: "0 0 0.25rem", lineHeight: 1.3 }}>
            Q3 2026 Edition
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", margin: "0 0 1.75rem" }}>
            July – September &middot; 13 weeks &middot; Fully planned
          </p>
          <p style={{ fontFamily: serif, fontSize: "clamp(2.75rem, 7vw, 3.5rem)", fontWeight: 600, color: "#fff", margin: "0 0 0.25rem", lineHeight: 1 }}>
            $27
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
            a={"Because The Programming Blueprint\u2122 Pro is an instant digital download, all sales are final once the file has been delivered. We don\u2019t offer refunds on downloaded digital products \u2014 but if something isn\u2019t working (a broken link, a missing file), email us and we\u2019ll make it right immediately."}
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
          <Cta large>Get Your 13-Week Plan — $27</Cta>
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
          <Cta large>Get Your 13-Week Plan — $27</Cta>
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
          Get My 13-Week Plan — $27 →
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
