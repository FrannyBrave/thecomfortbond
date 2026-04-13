import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import heroMockup from "@/assets/hero-mockup.png";
import beforeAfter from "@/assets/before-after.png";
import balanceWheel from "@/assets/balance-wheel.png";

/* ─── Palette (forest green only — no teal, no orange) ─── */
const c = {
  cream: "#F5F0EB",
  creamAlt: "#EDE8E2",
  forest: "#2d4a3e",
  forestLight: "#3d6455",
  bronze: "#8B6F47",
  body: "#3A3A3A",
  muted: "#9A8E80",
  gridline: "#D5CEC7",
} as const;

const serif = '"Playfair Display", Georgia, serif';
const sans = '"DM Sans", system-ui, sans-serif';

const GUMROAD_URL = "https://thecomfortbond.gumroad.com/l/blueprint-pro";

/* ─── CTA Button ─── */
function Cta({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href={GUMROAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        fontFamily: sans,
        fontSize: large ? "1rem" : "0.9rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
        color: c.cream,
        backgroundColor: c.forest,
        padding: large ? "1rem 2.5rem" : "0.85rem 1.75rem",
        borderRadius: "100px",
        textDecoration: "none",
        transition: "background-color 0.15s, transform 0.1s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = c.forestLight;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = c.forest;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
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
            fontSize: "1.25rem",
            color: c.bronze,
            transition: "transform 0.2s",
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
          <img src={logo} alt="The Comfort Bond" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.forest, letterSpacing: "-0.3px" }}>
            The Comfort Bond&trade;
          </span>
        </Link>
        <Link
          to="/"
          style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 500, color: c.muted, textDecoration: "none", transition: "color 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = c.forest)}
          onMouseLeave={(e) => (e.currentTarget.style.color = c.muted)}
        >
          &larr; Back to Home
        </Link>
      </nav>

      {/* ════════════════════════════════════════
          SECTION 1 — HERO (2-column)
         ════════════════════════════════════════ */}
      <Wide style={{ paddingTop: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        <div className="bps-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }}>
          {/* Left — copy + CTA */}
          <div>
            <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.bronze, margin: "0 0 1rem" }}>
              The Programming Blueprint™ Pro
            </p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(2rem, 5vw, 2.85rem)", fontWeight: 600, color: c.forest, lineHeight: 1.15, margin: "0 0 1.25rem", letterSpacing: "-0.02em" }}>
              Your Next 13 Weeks of Programming. Already Planned.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.7vw, 1.1rem)", lineHeight: 1.8, color: c.body, margin: "0 0 2rem", maxWidth: "520px" }}>
              A 13-week quarterly engagement system for Activity Directors who are done searching
              Pinterest at 10 PM on a Sunday. Every theme. Every coaching tip. Every resource
              connection. Ready the moment you open it.
            </p>
            <Cta large>Get the Q3 2026 Edition — $32.99</Cta>
          </div>

          {/* Right — product mockup */}
          <img
            src={heroMockup}
            alt="The Programming Blueprint Pro on a tablet"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 12px 40px rgba(45,74,62,0.15)",
              display: "block",
            }}
          />
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 2 — THE PAIN (trimmed)
         ════════════════════════════════════════ */}
      <Wide>
        <div className="bps-pain-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 1rem" }}>
              Sound Familiar?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: c.body, margin: "0 0 1.5rem" }}>
              Every week, the same cycle:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                "Staring at a blank monthly calendar on a Sunday night.",
                "Scrolling past childish, tissue-paper craft ideas.",
                "Rebuilding your schedule from zero, every single week.",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: c.bronze, flexShrink: 0, marginTop: "0.5rem" }} />
                  <span style={{ fontSize: "1.025rem", lineHeight: 1.7, color: c.body }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: c.muted, fontStyle: "italic", margin: 0 }}>
              You didn&rsquo;t get into this work to feel behind. You got into it because you care.
            </p>
          </div>
          <img
            src={beforeAfter}
            alt="Planning without a system vs with a system"
            style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 8px 30px rgba(45,74,62,0.1)", display: "block" }}
          />
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 3 — THE REFRAME (forest green bg)
         ════════════════════════════════════════ */}
      <Narrow bg={c.forest} style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 600, color: "#fff", lineHeight: 1.25, margin: "0 0 0.75rem" }}>
          You don&rsquo;t have a time problem.
        </h2>
        <p style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 600, color: c.cream, lineHeight: 1.25, margin: 0, opacity: 0.7 }}>
          You have a systems problem.
        </p>
      </Narrow>

      {/* ════════════════════════════════════════
          SECTION 4 — INTRODUCTION (2-column)
         ════════════════════════════════════════ */}
      <Wide>
        <div style={{ maxWidth: "660px" }}>
          <p style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.bronze, margin: "0 0 0.5rem" }}>
            Introducing
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 600, color: c.forest, margin: "0 0 1.25rem", lineHeight: 1.2 }}>
            The Programming Blueprint™ Pro
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: c.body, margin: "0 0 1rem" }}>
            A complete 13-week quarterly engagement system. Every week is pre-themed, mapped to
            national observances, balanced across six dimensions of wellness, and paired with expert
            coaching &mdash; so you walk into Monday knowing exactly what the week looks like.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.85, color: c.body, margin: "0 0 1rem" }}>
            The Q3 2026 Edition covers July through September. Thirteen themes from
            &ldquo;Red, White, and Blue Memories&rdquo; to &ldquo;What I Know for Sure.&rdquo;
            Each one adult-centered, nostalgia-grounded, and designed to spark real engagement.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: c.muted }}>
            A new edition arrives every 90 days. Q4 ships by August 30, 2026.
          </p>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 5 — WHAT'S INSIDE (feature grid)
         ════════════════════════════════════════ */}
      <Wide bg={c.creamAlt}>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, textAlign: "center", margin: "0 0 0.5rem" }}>
          What&rsquo;s Inside
        </h2>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: c.muted, margin: "0 0 2rem" }}>
          Everything you need. Nothing you don&rsquo;t.
        </p>
        <div className="bps-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}>
          {[
            { title: "13-Week Framework", text: "Every theme mapped to national observances at a glance. Structured planning pages with space for morning/afternoon activities, dimension tracking, and session notes." },
            { title: "13 Weekly Theme Guides", text: "Curated conversation starters, dimension mapping, and resource connections for each week. The content is done \u2014 you just facilitate." },
            { title: "Engagement Balance Wheel", text: "Visual tracker for six dimensions: Cognitive, Social, Sensory, Physical, Creative, Spiritual. See gaps at a glance." },
            { title: "Facilitator Coaching Notes", text: "Expert guidance for the person running the session \u2014 practical, in-the-room advice that separates a good session from a great one." },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: c.cream, border: `1px solid ${c.gridline}`, borderRadius: "10px", padding: "1.5rem 1.75rem" }}>
              <h3 style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.forest, margin: "0 0 0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.925rem", lineHeight: 1.75, color: c.body, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Balance Wheel visual */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <img
            src={balanceWheel}
            alt="The Engagement Balance Wheel"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              borderRadius: "12px",
              display: "inline-block",
            }}
          />
          <p style={{ fontFamily: sans, fontSize: "0.8rem", color: c.muted, fontStyle: "italic", marginTop: "0.75rem" }}>
            The Engagement Balance Wheel &mdash; your visual compass for balanced programming.
          </p>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 6 — FREE VS PRO
         ════════════════════════════════════════ */}
      <Narrow bg="#F0EAE0">
        <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 1.25rem" }}>
          Free vs. Pro
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: c.body, margin: "0 0 1rem" }}>
          The free Blueprint gives you the structure &mdash; blank templates, the dimension tracker,
          the weekly grid. The Pro edition fills it in with 13 weeks of specific themes, coaching
          tips, conversation starters, and resource connections.
        </p>
        <p style={{ fontFamily: serif, fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)", fontWeight: 600, color: c.forest, lineHeight: 1.3, margin: 0 }}>
          The free version gave you the filing cabinet.
          <br />
          The Pro version gives you the files.
        </p>
      </Narrow>

      {/* ════════════════════════════════════════
          SECTION 7 — PRICING (cream bg, forest card)
         ════════════════════════════════════════ */}
      <Wide>
        <div
          style={{
            backgroundColor: c.forest,
            borderRadius: "16px",
            padding: "clamp(2.5rem, 6vw, 3.5rem)",
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          <p style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.cream, opacity: 0.6, margin: "0 0 0.75rem" }}>
            The Programming Blueprint™ Pro
          </p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 600, color: "#fff", margin: "0 0 0.25rem", lineHeight: 1.3 }}>
            Q3 2026 Edition
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", margin: "0 0 1.75rem" }}>
            July – September &middot; 13 weeks &middot; Fully planned
          </p>
          <p style={{ fontFamily: serif, fontSize: "clamp(2.75rem, 7vw, 3.5rem)", fontWeight: 600, color: "#fff", margin: "0 0 0.5rem", lineHeight: 1 }}>
            $32.99
          </p>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", margin: "0 0 2rem" }}>
            One quarter. Completely handled.
          </p>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontFamily: sans,
              fontSize: "1rem",
              fontWeight: 600,
              color: c.forest,
              backgroundColor: c.cream,
              padding: "1rem 2.5rem",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "background-color 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = c.cream;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get the Q3 2026 Edition
          </a>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginTop: "1.25rem" }}>
            Q4 edition arrives by August 30, 2026 &mdash; before you need it.
          </p>
        </div>
      </Wide>

      {/* ════════════════════════════════════════
          SECTION 8 — FAQ
         ════════════════════════════════════════ */}
      <Narrow bg={c.creamAlt}>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: c.forest, margin: "0 0 1.5rem" }}>
          Common Questions
        </h2>
        <div style={{ borderTop: `1px solid ${c.gridline}` }}>
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
      </Narrow>

      {/* ════════════════════════════════════════
          SECTION 9 — FINAL CLOSE (forest bg)
         ════════════════════════════════════════ */}
      <section style={{ backgroundColor: c.forest, padding: "clamp(3.5rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 3rem)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: serif, fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: "0 0 1.25rem" }}>
            You chose this work because the people in your community still have stories to tell and
            still deserve to feel seen &mdash; not managed. Let the system handle the planning.
          </p>
          <p style={{ fontFamily: serif, fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 600, color: "#fff", margin: "0 0 2rem" }}>
            You handle the moments that matter.
          </p>
          <Cta large>Get Your Q3 Blueprint — $32.99</Cta>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: c.cream, borderTop: `1px solid ${c.gridline}`, padding: "2rem clamp(1.25rem, 5vw, 3rem)", textAlign: "center" }}>
        <p style={{ fontFamily: serif, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: c.bronze, margin: "0 0 0.35rem" }}>
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
        }
      `}</style>
    </div>
  );
}
