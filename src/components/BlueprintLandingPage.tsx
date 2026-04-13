import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import blueprintHero from "@/assets/blueprint-hero-mockup.png";
import logo from "@/assets/logo.png";

/* ─── Brand tokens ─── */
const c = {
  cream: "#F5F0EB",
  creamAlt: "#EDE8E2",
  teal: "#2d4a3e",
  tealLight: "#3d6455",
  bronze: "#8B6F47",
  terracotta: "#C4956A",
  charcoal: "#2E2E2E",
  body: "#3A3A3A",
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
function EmailCapture({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Button was clicked! Starting submission...");
    setStatus("loading");
    setErrorMsg("");

    const formId = "9317013";
    const apiKey = "LyFHhQ8J1GJ27wcL4mq-uQ";

    try {
      const res = await fetch(
        "https://api.convertkit.com/v3/forms/" + formId + "/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: apiKey, email }),
        }
      );

      if (!res.ok) {
        const body = await res.text();
        console.error("[EmailCapture] API error:", res.status, body);
        throw new Error("Subscription failed");
      }

      setStatus("success");
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
          maxWidth: "420px",
          width: "100%",
          backgroundColor: c.calloutBg,
          border: `1px solid ${c.calloutBorder}`,
          borderRadius: "8px",
          padding: "1.25rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: serif,
            fontSize: "1.05rem",
            fontWeight: 600,
            color: c.teal,
            margin: "0 0 0.35rem",
          }}
        >
          Success!
        </p>
        <p style={{ fontSize: "0.875rem", color: c.body, margin: 0, lineHeight: 1.6 }}>
          Check your inbox to download your Blueprint.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "420px", width: "100%" }}>
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
            padding: "0.8rem 1rem",
            border: `1px solid ${c.gridline}`,
            borderRadius: "6px",
            backgroundColor: c.white,
            color: c.charcoal,
            outline: "none",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          onClick={() => console.log("[EmailCapture] Button onClick fired")}
          style={{
            fontFamily: sans,
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: status === "loading" ? c.tealLight : c.teal,
            color: c.white,
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            transition: "background-color 0.15s",
            opacity: status === "loading" ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") e.currentTarget.style.backgroundColor = c.tealLight;
          }}
          onMouseLeave={(e) => {
            if (status !== "loading") e.currentTarget.style.backgroundColor = c.teal;
          }}
        >
          {status === "loading" ? "Sending..." : "Download Your Free Blueprint"}
        </button>
      </div>
      {status === "error" && (
        <p
          style={{
            fontSize: "0.775rem",
            color: "#b44",
            marginTop: "0.5rem",
            marginBottom: 0,
          }}
        >
          {errorMsg}
        </p>
      )}
      <p
        style={{
          fontSize: "0.7rem",
          color: c.mutedWarm,
          marginTop: "0.5rem",
          marginBottom: 0,
          letterSpacing: "0.02em",
        }}
      >
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
    <section
      style={{
        backgroundColor: bg,
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem)",
        ...style,
      }}
    >
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
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="The Comfort Bond logo"
            style={{ width: "36px", height: "36px", borderRadius: "50%" }}
          />
          <span
            style={{
              fontFamily: serif,
              fontSize: "1rem",
              fontWeight: 600,
              color: c.teal,
              letterSpacing: "-0.01em",
            }}
          >
            The Comfort Bond™
          </span>
        </Link>
        <Link
          to="/"
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: c.mutedWarm,
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = c.teal)}
          onMouseLeave={(e) => (e.currentTarget.style.color = c.mutedWarm)}
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 1 — HERO
         ════════════════════════════════════════════ */}
      <Section style={{ paddingTop: "clamp(1.5rem, 4vw, 2.5rem)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="bp-hero-grid"
        >
          {/* Left — copy + form */}
          <div style={{ maxWidth: "540px" }}>
            <h1
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                fontWeight: 600,
                color: c.teal,
                lineHeight: 1.18,
                margin: "0 0 1.25rem",
                letterSpacing: "-0.015em",
              }}
            >
              It's Sunday Night.
              <br />
              You Still Don't Have a Plan for Monday.
            </h1>

            <p
              style={{
                fontSize: "clamp(0.925rem, 1.6vw, 1.05rem)",
                lineHeight: 1.75,
                color: c.body,
                margin: "0 0 2rem",
              }}
            >
              <strong style={{ color: c.teal }}>The Programming Blueprint™</strong> is a free,
              structured weekly planning tool that helps you stop scrambling and start showing up
              prepared. Download it now. Plan your week in under 30 minutes.
            </p>

            <EmailCapture id="hero" />
          </div>

          {/* Right — image placeholder */}
          <img
            src={blueprintHero}
            alt="Premium mockup of The Programming Blueprint and Engagement Balance Wheel"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 8px 30px rgba(45,74,62,0.12)",
              display: "block",
            }}
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 2 — THE PAIN
         ════════════════════════════════════════════ */}
      <Section bg={c.creamAlt}>
        <h2
          style={{
            fontFamily: serif,
            fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
            fontWeight: 600,
            color: c.teal,
            textAlign: "center",
            margin: "0 0 2.5rem",
          }}
        >
          Does This Sound Familiar?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            "You spend your weekends thinking about Monday\u2019s programming instead of resting.",
            "You\u2019re printing materials at 7\u202FAM because you ran out of ideas the night before.",
            "You\u2019ve done the same three activities so many times you could lead them in your sleep.",
            "Your residents are waiting for something meaningful\u2009\u2014\u2009and you want to give it to them, but there\u2019s never enough time to plan it well.",
            "You care deeply about this work. And you\u2019re exhausted by it.",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: c.cream,
                border: `1px solid ${c.gridline}`,
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: c.body,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 3 — THE REFRAME
         ════════════════════════════════════════════ */}
      <Section>
        <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "clamp(0.925rem, 1.5vw, 1.05rem)",
              lineHeight: 1.85,
              color: c.body,
              margin: "0 0 1.75rem",
            }}
          >
            Here's what nobody tells you:{" "}
            <strong style={{ color: c.teal }}>
              The problem isn't that you're not doing enough.
            </strong>{" "}
            The problem is that you don't have a system. You're not behind. You're just building from
            scratch every single week&nbsp;— because no one ever gave you a framework to build from.
          </p>

          <p
            style={{
              fontFamily: serif,
              fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
              fontWeight: 600,
              color: c.teal,
              lineHeight: 1.3,
              margin: "0 0 0.35rem",
            }}
          >
            That changes now.
          </p>

          <div
            style={{
              width: "3rem",
              height: "1.5px",
              backgroundColor: c.terracotta,
              margin: "2rem auto",
              borderRadius: "1px",
            }}
          />

          <p
            style={{
              fontFamily: serif,
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: c.bronze,
              margin: "0 0 0.75rem",
            }}
          >
            Introducing
          </p>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
              fontWeight: 600,
              color: c.teal,
              margin: "0 0 1.5rem",
              lineHeight: 1.25,
            }}
          >
            The Programming Blueprint™
            <br />
            <span style={{ fontWeight: 400, fontSize: "0.75em", color: c.bronze }}>
              by The Comfort Bond™
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)",
              lineHeight: 1.8,
              color: c.body,
              margin: 0,
              textAlign: "left",
            }}
          >
            A free, structured weekly planning tool designed specifically for Activity Directors,
            Memory Care professionals, and Life Enrichment staff. It's not a list of activities. It's
            not a calendar template from Pinterest. It's a decision-making framework that shows you
            how to structure a balanced, dignified week of programming&nbsp;— so you never start from
            scratch again.
          </p>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 4 — WHAT'S INSIDE & HOW IT WORKS
         ════════════════════════════════════════════ */}
      <Section bg={c.teal}>
        {/* What's Inside */}
        <h2
          style={{
            fontFamily: serif,
            fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
            fontWeight: 600,
            color: c.cream,
            textAlign: "center",
            margin: "0 0 2rem",
          }}
        >
          What's Inside
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            {
              title: "One Pre-Planned Week",
              desc: "A full week of programming mapped across all 6 dimensions of meaningful engagement.",
            },
            {
              title: "Blank Weekly Template",
              desc: "A clean, reusable planning page designed for handwriting. Print it every week.",
            },
            {
              title: "Engagement Balance Wheel",
              desc: "A visual tool to check that your week has variety, not just repetition.",
            },
            {
              title: "Quick-Start Guide",
              desc: "Read it once. Start planning by Monday afternoon. No learning curve.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: c.cream,
                border: "none",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: c.teal,
                  margin: "0 0 0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.825rem", lineHeight: 1.65, color: c.body, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div style={{ maxWidth: "580px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
              fontWeight: 600,
              color: c.cream,
              margin: "0 0 2rem",
            }}
          >
            Three Steps. That's It.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              textAlign: "left",
            }}
          >
            {[
              "Download the Blueprint.",
              "Open the pre-planned week or the blank template.",
              "Plan your entire week in under 30 minutes.",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                <span
                  style={{
                    fontFamily: serif,
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: c.terracotta,
                    opacity: 1,
                    
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: "1.75rem",
                    textAlign: "right",
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: "0.925rem", lineHeight: 1.6, color: "rgba(245,240,235,0.85)" }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 5 — FINAL CTA & SIGN-OFF
         ════════════════════════════════════════════ */}
      <Section>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          {/* Built for your world */}
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(1.25rem, 2.8vw, 1.6rem)",
              fontWeight: 600,
              color: c.teal,
              textAlign: "center",
              margin: "0 0 1.25rem",
              lineHeight: 1.25,
            }}
          >
            Built for Your World.
            <br />
            Not Borrowed from Someone Else's.
          </h2>

          <p
            style={{
              fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)",
              lineHeight: 1.8,
              color: c.body,
              textAlign: "center",
              margin: "0 0 2.5rem",
            }}
          >
            Every prompt, template, and framework in the Blueprint was designed for senior
            living&nbsp;— from independent living to memory care. Activities adapt for mixed
            cognitive abilities. Language is always adult, never condescending. Because your residents
            aren't children. And you're not running a daycare.
          </p>

          {/* CTA form */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            <EmailCapture id="footer" />
          </div>

          {/* Divider */}
          <div
            style={{
              width: "3rem",
              height: "1.5px",
              backgroundColor: c.terracotta,
              margin: "0 auto 2.5rem",
              borderRadius: "1px",
            }}
          />

          {/* Founder letter */}
          <blockquote
            style={{
              borderLeft: `2.5px solid ${c.terracotta}`,
              margin: 0,
              padding: "0 0 0 1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: serif,
                fontStyle: "italic",
                fontSize: "clamp(0.9rem, 1.5vw, 1.025rem)",
                lineHeight: 1.85,
                color: c.body,
                margin: "0 0 1rem",
              }}
            >
              You got into this work because you believe every resident deserves a good day. You
              shouldn't have to sacrifice your own evenings to make that happen. The Blueprint gives
              you a system. So you can give your residents something better. And still have your
              Sunday night.
            </p>
            <footer
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: c.bronze,
              }}
            >
              — Francesca, Founder of The Comfort Bond™
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════════ */}
      <footer
        style={{
          backgroundColor: c.teal,
          padding: "2rem clamp(1.25rem, 5vw, 3rem)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: serif,
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            margin: "0 0 0.35rem",
          }}
        >
          The Comfort Bond™
        </p>
        <p
          style={{
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.45)",
            margin: 0,
            letterSpacing: "0.03em",
          }}
        >
          Dignified engagement for senior living. Done for you.
        </p>
      </footer>

      {/* ─── Responsive overrides ─── */}
      <style>{`
        @media (min-width: 768px) {
          .bp-hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
