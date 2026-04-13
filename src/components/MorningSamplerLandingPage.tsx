import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import samplerHero from "@/assets/sampler-breakfast-scene.png";
import samplerMoments from "@/assets/sampler-sparks-moments.png";
import logo from "@/assets/logo.png";

/* ─── Palette ─── */
const c = {
  cream: "#FAF6F0",
  warmWhite: "#FFF9F2",
  terracotta: "#C07A56",
  terracottaLight: "#D4956E",
  deepBrown: "#3D2B1F",
  warmGray: "#6B5E54",
  softGray: "#9B8E83",
  borderWarm: "#E8DDD2",
  goldMuted: "#B8935A",
  sectionAlt: "#F5EEE5",
} as const;

const serif = '"Playfair Display", Georgia, serif';
const sans = '"DM Sans", system-ui, sans-serif';

/* ─── ConvertKit email capture ─── */
function SamplerEmailCapture({
  id,
  buttonText = "Send Me the Sampler",
}: {
  id: string;
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formId = "9318696";
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
        console.error("[SamplerEmailCapture] API error:", res.status, body);
        throw new Error("Subscription failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      console.error("[SamplerEmailCapture]", err);
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          maxWidth: "460px",
          margin: "0 auto",
          backgroundColor: c.warmWhite,
          border: `1px solid ${c.borderWarm}`,
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
            color: c.deepBrown,
            margin: "0 0 0.35rem",
          }}
        >
          It's on its way!
        </p>
        <p style={{ fontSize: "0.875rem", color: c.warmGray, margin: 0, lineHeight: 1.6 }}>
          Check your inbox for the Morning Routine Sampler.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "460px",
        margin: "0 auto",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
      aria-label="Download sampler"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        aria-label="Your email address"
        disabled={status === "loading"}
        style={{
          flex: "1 1 220px",
          padding: "14px 18px",
          fontFamily: serif,
          fontSize: "15px",
          color: c.deepBrown,
          background: c.cream,
          border: `1px solid ${c.borderWarm}`,
          borderRadius: "6px",
          outline: "none",
          opacity: status === "loading" ? 0.6 : 1,
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "14px 24px",
          fontFamily: sans,
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.8px",
          color: "#fff",
          background: status === "loading" ? c.terracottaLight : c.terracotta,
          border: "none",
          borderRadius: "6px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          whiteSpace: "nowrap",
          transition: "background 0.25s",
          flex: "1 1 auto",
        }}
        onMouseEnter={(e) => {
          if (status !== "loading") e.currentTarget.style.background = c.terracottaLight;
        }}
        onMouseLeave={(e) => {
          if (status !== "loading") e.currentTarget.style.background = c.terracotta;
        }}
      >
        {status === "loading" ? "Sending..." : buttonText}
      </button>
      {status === "error" && (
        <p style={{ width: "100%", fontSize: "0.775rem", color: "#b44", marginTop: "0.25rem", marginBottom: 0 }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}

/* ─── Included card data ─── */
const INCLUDED = [
  {
    title: "Conversation Cards",
    desc: "Eight open-ended prompts about morning memories \u2014 the first cup of coffee, the sound of the percolator, getting the kids out the door, the quiet moment before the world got loud. Designed to spark 20\u201330 minutes of real, unhurried group conversation.",
  },
  {
    title: "Visual Spark Cards",
    desc: "Six image-based discussion starters. Show a card, ask what it brings to mind, and let residents lead. Perfect for mixed cognitive abilities \u2014 the image does the work, so every resident can participate.",
  },
  {
    title: "Word Link Game",
    desc: "A light, 10-round cognitive warm-up. Read two words aloud \u2014 residents find the bridge word that connects them. Quick enough to open or close any session. Engaging without being stressful. The kind of game that gets quiet residents calling out answers.",
  },
];

const STEPS = [
  { title: "Choose one prompt or card", desc: "Pick whichever feels right for the room this morning." },
  { title: "Read it aloud", desc: "No introduction needed. The prompt opens the door by itself." },
  { title: "Let the conversation unfold", desc: "No pressure to fill silence. No rushing. Just follow the stories wherever they lead." },
];

const PAIN = [
  "You don\u2019t always have time to plan something thoughtful for those first quiet minutes.",
  "Sometimes the room feels still, and you\u2019re not sure how to begin.",
  "You want something simple \u2014 but not something that feels childish or hollow.",
  "You wish you could just walk in, sit down, and start a real conversation.",
];

/* ─── Main component ─── */
export default function MorningSamplerLandingPage() {
  return (
    <div style={{ fontFamily: serif, color: c.deepBrown, background: c.cream, lineHeight: 1.75 }}>
      {/* ── Brand Bar ── */}
      <div
        style={{
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${c.borderWarm}`,
          background: c.warmWhite,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img src={logo} alt="The Comfort Bond" style={{ height: 40, width: 40, borderRadius: "50%", objectFit: "cover" }} />
          <span
            style={{
              fontFamily: serif,
              fontSize: "1.1rem",
              fontWeight: 600,
              color: c.deepBrown,
              letterSpacing: "-0.3px",
            }}
          >
            The Comfort Bond™
          </span>
        </Link>
        <Link
          to="/"
          style={{
            fontFamily: sans,
            fontSize: "13px",
            fontWeight: 500,
            color: c.softGray,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = c.terracotta; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = c.softGray; }}
        >
          ← Back to Home
        </Link>
      </div>

      {/* ── Hero ── */}
      <section style={{ padding: "80px 0 60px", textAlign: "center", background: c.warmWhite }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <span
            style={{
              fontFamily: sans,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: c.terracotta,
              marginBottom: "28px",
              display: "block",
            }}
          >
            Free Activity Sampler
          </span>
          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: 500,
              lineHeight: 1.25,
              color: c.deepBrown,
              marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}
          >
            A Calmer Way
            <br />
            to Start the Day
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: c.warmGray,
              maxWidth: 560,
              margin: "0 auto 40px",
            }}
          >
            The Morning Routine Sampler&trade; is a free, printable activity set that helps Activity
            Directors begin each morning with warmth, connection, and zero scramble. Three gentle
            activities. No prep required.
          </p>

          <SamplerEmailCapture id="hero" />
          <p
            style={{
              fontFamily: sans,
              fontSize: "12px",
              color: c.softGray,
              marginTop: "12px",
              textAlign: "center",
            }}
          >
            Free. Instant delivery. No spam, no mailing list.
          </p>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
        <img
          src={samplerHero}
          alt="The Morning Routine Sampler — conversation cards and visual sparks beside a coffee cup on a warm kitchen table"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 8px 30px rgba(61,43,31,0.1)",
            display: "block",
            margin: "48px auto",
            maxWidth: 640,
          }}
        />
      </div>

      {/* ── Set the Scene ── */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <span
            style={{
              fontFamily: sans,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: c.terracotta,
              marginBottom: "16px",
              display: "block",
              textAlign: "center",
            }}
          >
            The Morning
          </span>
          <div style={{ fontSize: "18px", lineHeight: 1.85, color: c.warmGray, maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <p style={{ marginBottom: "20px" }}>
              It&rsquo;s 8:45 AM. Residents are settled into the day room &mdash; some with coffee,
              some just sitting quietly, watching the hallway. Staff are moving between tasks.
              Breakfast trays are being cleared. The morning news drifts from a television no one
              chose to turn on.
            </p>
            <p style={{ marginBottom: 0 }}>
              There&rsquo;s a gap here. A window between breakfast and the first planned activity
              where the room feels like it&rsquo;s waiting for something &mdash; something small,
              something warm, something human. You feel it every day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pain ── */}
      <section style={{ padding: "48px 0", background: c.sectionAlt }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <ul style={{ padding: 0, maxWidth: 440, margin: "0 auto", listStyle: "none" }}>
            {PAIN.map((text, i) => (
              <li
                key={i}
                style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#1B3A4B",
                  fontWeight: 500,
                  padding: "7px 0",
                  paddingLeft: "22px",
                  position: "relative" as const,
                }}
              >
                <span style={{ position: "absolute", left: 0, color: c.terracotta }}>•</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Introduce the Sampler ── */}
      <section style={{ padding: "48px 0 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
          <span
            style={{
              fontFamily: sans,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: c.terracotta,
              marginBottom: "16px",
              display: "block",
            }}
          >
            Introducing
          </span>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(26px, 4vw, 30px)",
              fontWeight: 500,
              lineHeight: 1.35,
              color: c.deepBrown,
              marginBottom: "24px",
            }}
          >
            The Morning Routine Sampler&trade;
          </h2>
        </div>
      </section>

      {/* ── What's Inside + How It Works (forest green section) ── */}
      <section style={{ padding: "64px 0", background: "#2D4A3E" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <span
            style={{
              fontFamily: sans,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: c.terracottaLight,
              marginBottom: "16px",
              display: "block",
              textAlign: "center",
            }}
          >
            What&rsquo;s Inside
          </span>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(26px, 4vw, 30px)",
              fontWeight: 500,
              lineHeight: 1.35,
              color: c.cream,
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Three Activities. One Calm Morning.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginTop: "32px" }}>
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                style={{
                  background: c.warmWhite,
                  border: "none",
                  borderRadius: "10px",
                  padding: "32px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                <h3
                  style={{
                    fontFamily: serif,
                    fontSize: "20px",
                    fontWeight: 600,
                    color: c.terracotta,
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", color: c.warmGray, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ width: 48, height: 1, background: "rgba(250,246,240,0.2)", margin: "56px auto" }} />

          <span
            style={{
              fontFamily: sans,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: c.terracottaLight,
              marginBottom: "16px",
              display: "block",
              textAlign: "center",
            }}
          >
            How It Works
          </span>
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(26px, 4vw, 30px)",
              fontWeight: 500,
              lineHeight: 1.35,
              color: c.cream,
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            As Simple as Sitting Down
          </h2>
          <div style={{ maxWidth: 520, margin: "32px auto 0" }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "28px" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: c.terracotta,
                    color: c.cream,
                    fontFamily: serif,
                    fontSize: "18px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily: serif, fontSize: "17px", fontWeight: 600, color: c.terracottaLight, marginBottom: "4px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "rgba(250,246,240,0.75)", margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emotional Image ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 28px 0" }}>
        <img
          src={samplerMoments}
          alt="A senior's hands holding a visual spark card — this sparks real moments between people"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 8px 30px rgba(61,43,31,0.1)",
            display: "block",
            maxWidth: 640,
            margin: "0 auto",
          }}
        />
      </div>

      {/* ── CTA Section ── */}
      <section style={{ padding: "64px 0", background: "#E8D5C4" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              background: c.cream,
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 6px 24px rgba(61,43,31,0.12)",
              padding: "clamp(36px, 5vw, 52px) clamp(24px, 4vw, 40px)",
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: serif,
                fontSize: "clamp(24px, 4vw, 28px)",
                fontWeight: 500,
                lineHeight: 1.35,
                color: c.deepBrown,
                marginBottom: "16px",
              }}
            >
              Start Tomorrow Morning
              <br />
              with Something Meaningful
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: c.warmGray,
                maxWidth: 440,
                margin: "0 auto 28px",
              }}
            >
              Enter your email and the sampler arrives in your inbox &mdash; ready to print, cut, and
              use before your first session.
            </p>
            <SamplerEmailCapture id="cta" buttonText="Get the Free Sampler" />
          </div>
        </div>
      </section>

      {/* ── Brand Positioning ── */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
          <span
            style={{
              fontFamily: sans,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: c.terracotta,
              marginBottom: "16px",
              display: "block",
            }}
          >
            The Comfort Bond&trade;
          </span>
          <div style={{ width: 48, height: 1, background: c.borderWarm, margin: "40px auto" }} />
          {[
            <>Designed <em style={{ color: c.terracotta, fontStyle: "normal", fontWeight: 500 }}>specifically</em> for senior living professionals.</>,
            "Built with dignity, warmth, and the understanding that your residents deserve something better than busy work.",
            "Not generic. Not childish. Not borrowed from a classroom.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                textAlign: "center",
                color: c.warmGray,
                maxWidth: 520,
                margin: "0 auto 12px",
              }}
            >
              {text}
            </p>
          ))}
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              textAlign: "center",
              color: c.warmGray,
              maxWidth: 520,
              margin: "20px auto 0",
            }}
          >
            <em style={{ color: c.terracotta, fontStyle: "normal", fontWeight: 500 }}>
              Made for the work you actually do.
            </em>
          </p>
        </div>
      </section>

      {/* ── Final Close ── */}
      <div style={{ padding: "80px 0", textAlign: "center", background: c.warmWhite }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          {[
            "Mornings don\u2019t have to feel rushed.",
            "Connection can start with a single question.",
            "And the smallest moments \u2014 a story shared, a memory recalled, a room that feels a little warmer \u2014 are often the ones that matter most.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: "20px",
                lineHeight: 1.8,
                color: c.deepBrown,
                maxWidth: 500,
                margin: "0 auto 16px",
              }}
            >
              {text}
            </p>
          ))}
          <p
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              color: c.goldMuted,
              marginTop: "36px",
            }}
          >
            &mdash; Francesca, Founder of The Comfort Bond&trade;
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          padding: "28px 0",
          textAlign: "center",
          borderTop: `1px solid ${c.borderWarm}`,
          background: c.cream,
        }}
      >
        <span style={{ fontFamily: sans, fontSize: "12px", color: c.softGray, letterSpacing: "1px" }}>
          &copy; 2026 The Comfort Bond&trade; &middot; thecomfortbond.com
        </span>
      </footer>
    </div>
  );
}
