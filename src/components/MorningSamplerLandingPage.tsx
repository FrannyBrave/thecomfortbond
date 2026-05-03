import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import samplerMoments from "@/assets/dementia-friendly-activity-cards-for-engagement.png";
import samplerActivities from "@/assets/senior-living-activity-printable-kit-overview.png";
import logo from "@/assets/the-comfort-bond-logo.png";

/* ─── Brand palette ─── */
const c = {
  cream: "#FAF7F2",
  warmWhite: "#FFF9F2",
  forest: "#2D4A3E",
  forestLight: "#3D6455",
  terracotta: "#C67B5C",
  terracottaLight: "#D4956E",
  terracottaWash: "#F3E4DB",
  deepBrown: "#3D2B1F",
  warmGray: "#6B5E54",
  softGray: "#9B8E83",
  borderWarm: "#E8DDD2",
  goldMuted: "#B8935A",
  sectionAlt: "#F3EDE5",
  white: "#FFFFFF",
} as const;

const serif = '"Playfair Display", Georgia, serif';
const sans = '"DM Sans", system-ui, sans-serif';

/* ─── Email capture ─── */
function SamplerEmailCapture({
  id,
  buttonText = "Send Me the Sampler",
  variant = "default",
}: {
  id: string;
  buttonText?: string;
  variant?: "default" | "terracotta";
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
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ api_key: apiKey, email }) }
      );
      if (!res.ok) throw new Error("Subscription failed");
      setStatus("success");
      // Pinterest 'signup' event — only after a confirmed successful submit.
      const { trackPinterestEvent } = await import("@/lib/pinterest");
      trackPinterestEvent("signup", { lead_type: "free-sampler" }, `signup:sampler:${email}`);
      // Meta Pixel 'Lead' event — feeds Facebook/Instagram Ads optimization.
      const { trackMetaEvent } = await import("@/lib/meta-pixel");
      trackMetaEvent(
        "Lead",
        { content_name: "Free Morning Sampler", content_category: "free-sampler" },
        `lead:sampler:${email}`
      );
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      console.error("[SamplerEmailCapture]", err);
    }
  };

  if (status === "success") {
    return (
      <div style={{
        maxWidth: "460px", margin: "0 auto", backgroundColor: c.warmWhite,
        border: `1px solid ${c.borderWarm}`, borderRadius: "14px", padding: "1.5rem 1.75rem", textAlign: "center",
      }}>
        <p style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.forest, margin: "0 0 0.35rem" }}>
          ✓ It's on its way!
        </p>
        <p style={{ fontSize: "0.875rem", color: c.warmGray, margin: 0, lineHeight: 1.6 }}>
          Check your inbox for the Morning Routine Sampler.
        </p>
      </div>
    );
  }

  const btnBg = variant === "terracotta" ? c.terracotta : c.forest;
  const btnHover = variant === "terracotta" ? "#b86a4d" : c.forestLight;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "460px", margin: "0 auto", display: "flex", gap: "10px", flexWrap: "wrap" }} aria-label="Download sampler">
      <input
        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address" aria-label="Your email address" disabled={status === "loading"}
        style={{
          flex: "1 1 220px", padding: "14px 18px", fontFamily: sans, fontSize: "15px",
          color: c.deepBrown, background: c.white, border: `1px solid ${c.borderWarm}`,
          borderRadius: "10px", outline: "none", opacity: status === "loading" ? 0.6 : 1,
        }}
      />
      <button
        type="submit" disabled={status === "loading"}
        style={{
          padding: "14px 24px", fontFamily: sans, fontSize: "13px", fontWeight: 600,
          letterSpacing: "0.8px", color: "#fff", background: status === "loading" ? btnHover : btnBg,
          border: "none", borderRadius: "10px", cursor: status === "loading" ? "not-allowed" : "pointer",
          whiteSpace: "nowrap", transition: "all 0.2s ease", flex: "1 1 auto",
          boxShadow: `0 4px 14px ${btnBg}33`,
        }}
        onMouseEnter={(e) => { if (status !== "loading") { e.currentTarget.style.background = btnHover; e.currentTarget.style.transform = "translateY(-1px)"; } }}
        onMouseLeave={(e) => { if (status !== "loading") { e.currentTarget.style.background = btnBg; e.currentTarget.style.transform = "translateY(0)"; } }}
      >
        {status === "loading" ? "Sending..." : buttonText}
      </button>
      {status === "error" && <p style={{ width: "100%", fontSize: "0.775rem", color: "#b44", marginTop: "0.25rem", marginBottom: 0 }}>{errorMsg}</p>}
    </form>
  );
}

/* ─── Data ─── */
const INCLUDED = [
  { icon: "💬", title: "Conversation Cards", desc: "Eight open-ended prompts about morning memories — the first cup of coffee, the sound of the percolator, getting the kids out the door. Designed to spark 20–30 minutes of real, unhurried group conversation." },
  { icon: "🖼️", title: "Visual Spark Cards", desc: "Six image-based discussion starters. Show a card, ask what it brings to mind, and let residents lead. Perfect for mixed cognitive abilities — the image does the work." },
  { icon: "🧩", title: "Word Link Game", desc: "A light, 10-round cognitive warm-up. Read two words aloud — residents find the bridge word. Quick enough to open or close any session. Engaging without being stressful." },
];

const STEPS = [
  { title: "Choose one prompt or card", desc: "Pick whichever feels right for the room this morning." },
  { title: "Read it aloud", desc: "No introduction needed. The prompt opens the door by itself." },
  { title: "Let the conversation unfold", desc: "No pressure to fill silence. No rushing. Just follow the stories." },
];

const PAIN = [
  "You don't have time to plan something thoughtful",
  "The room feels quiet, and you're not sure how to begin",
  "You want something simple — but not childish",
  "You want to walk in and start a real conversation",
];

/* ─── Main ─── */
export default function MorningSamplerLandingPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowStickyCTA(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToHeroEmail = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const input = heroRef.current?.querySelector<HTMLInputElement>('input[type="email"]');
      input?.focus({ preventScroll: true });
    }, 600);
  };

  return (
    <div style={{ fontFamily: sans, color: c.deepBrown, background: c.cream, lineHeight: 1.75 }}>
      {/* ── Brand Bar ── */}
      <style>{`
        .sampler-navbar { padding: 12px clamp(1rem, 4vw, 3rem); display: flex; align-items: center; justify-content: space-between; gap: 12px; background: ${c.warmWhite}; border-bottom: 1px solid ${c.borderWarm}; position: sticky; top: 0; z-index: 50; }
        .sampler-navbar__brand-text { font-family: ${serif}; font-size: 1rem; font-weight: 600; color: ${c.forest}; letter-spacing: -0.01em; white-space: nowrap; }
        .sampler-navbar__actions { display: flex; align-items: center; gap: 10px; }
        .sampler-navbar__upgrade { font-family: ${sans}; font-size: 0.8rem; font-weight: 600; color: ${c.cream}; background: ${c.terracotta}; text-decoration: none; padding: 10px 14px; border-radius: 999px; min-height: 40px; display: inline-flex; align-items: center; line-height: 1; transition: background 0.15s; white-space: nowrap; }
        .sampler-navbar__upgrade:hover { background: ${c.forest}; }
        .sampler-navbar__back { font-family: ${sans}; font-size: 0.8rem; font-weight: 500; color: ${c.softGray}; text-decoration: none; padding: 8px 4px; min-height: 40px; display: inline-flex; align-items: center; transition: color 0.15s; white-space: nowrap; }
        .sampler-navbar__back:hover { color: ${c.forest}; }
        .sampler-navbar__upgrade-short { display: none; }
        @media (max-width: 640px) {
          .sampler-navbar__brand-text { font-size: 0.9rem; }
          .sampler-navbar__back { display: none; }
          .sampler-navbar__upgrade-full { display: none; }
          .sampler-navbar__upgrade-short { display: inline; }
          .sampler-navbar__upgrade { padding: 9px 12px; font-size: 0.78rem; }
        }
        @media (max-width: 380px) {
          .sampler-navbar__brand-text { display: none; }
        }
      `}</style>
      <div className="sampler-navbar">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", minWidth: 0 }}>
          <img src={logo} alt="The Comfort Bond logo — dignified engagement activities for senior living" style={{ height: 36, width: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
          <span className="sampler-navbar__brand-text">The Comfort Bond™</span>
        </Link>
        <div className="sampler-navbar__actions">
          <Link to="/kits" className="sampler-navbar__upgrade" aria-label="Upgrade to Engagement Kits">
            <span className="sampler-navbar__upgrade-full">Upgrade to Engagement Kits →</span>
            <span className="sampler-navbar__upgrade-short">Upgrade →</span>
          </Link>
          <Link to="/" className="sampler-navbar__back">← Home</Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} style={{ padding: "48px 0 40px", textAlign: "center", background: c.warmWhite }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <span style={{
            fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: c.terracotta, marginBottom: "18px", display: "block",
          }}>
            Free Activity Sampler
          </span>
          <h1 style={{
            fontFamily: serif, fontSize: "clamp(30px, 6vw, 46px)", fontWeight: 600,
            lineHeight: 1.15, color: "#3D5A4C", marginBottom: "16px", letterSpacing: "-0.5px",
          }}>
            Mornings Feel Quiet…
            <br />
            and Hard to Start?
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: c.warmGray, maxWidth: "90%", margin: "0 auto 24px" }}>
            A free, printable activity set that helps you start the day with connection, structure, and zero scrambling.
          </p>

          {/* What you get */}
          <div style={{
            maxWidth: 460, margin: "0 auto 20px", textAlign: "left",
            background: "rgba(139,157,131,0.08)", border: "1px solid rgba(139,157,131,0.25)",
            borderRadius: "12px", padding: "16px 20px",
          }}>
            <p style={{ fontFamily: sans, fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#5C7355", margin: "0 0 10px" }}>
              Inside your free sampler:
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "3 ready-to-use morning activities",
                "Conversation prompts that feel natural",
                "Visual cards for quiet moments",
                "No prep required",
              ].map((t) => (
                <li key={t} style={{ fontSize: "14.5px", lineHeight: 1.55, color: "#5C7355", paddingLeft: "18px", position: "relative", marginBottom: "4px" }}>
                  <span style={{ position: "absolute", left: 0, color: "#8B9D83" }}>•</span>{t}
                </li>
              ))}
            </ul>
          </div>

          <SamplerEmailCapture id="hero" buttonText="Get My Free Morning Plan" />
          <p style={{ fontFamily: sans, fontSize: "12px", color: c.softGray, marginTop: "10px", textAlign: "center" }}>
            Instant download. Use it today.
          </p>
          <p style={{ fontFamily: sans, fontSize: "12.5px", color: c.warmGray, marginTop: "14px", textAlign: "center", maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
            Used by Activity Directors to start calmer, more connected mornings.
          </p>
        </div>
      </section>

      {/* ── Hero Image (responsive AVIF/WebP, preloaded) ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
        <picture>
          <source
            type="image/avif"
            srcSet="/lcp/sampler-hero-480.avif 480w, /lcp/sampler-hero-768.avif 768w, /lcp/sampler-hero-1280.avif 1280w"
            sizes="(max-width: 720px) 100vw, 640px"
          />
          <source
            type="image/webp"
            srcSet="/lcp/sampler-hero-480.webp 480w, /lcp/sampler-hero-768.webp 768w, /lcp/sampler-hero-1280.webp 1280w"
            sizes="(max-width: 720px) 100vw, 640px"
          />
          <img
            src="/lcp/sampler-hero-768.webp"
            alt="Memory care morning activity routine for seniors: conversation cards and visual sparks from The Morning Routine Sampler beside a coffee cup in a calm day room"
            width={1280}
            height={853}
            fetchPriority="high"
            decoding="async"
            style={{ width: "100%", height: "auto", borderRadius: "14px", boxShadow: "0 12px 40px rgba(61,43,31,0.1)", display: "block", margin: "32px auto", maxWidth: 640 }}
          />
        </picture>
      </div>

      {/* ── Pain Points ── */}
      <section style={{ padding: "56px 0", background: c.sectionAlt }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <ul style={{ padding: 0, maxWidth: 460, margin: "0 auto", listStyle: "none" }}>
            {PAIN.map((text, i) => (
              <li key={i} style={{
                fontSize: "17px", lineHeight: 1.7, color: "#1B3A4B", fontWeight: 500,
                padding: "7px 0", paddingLeft: "22px", position: "relative",
              }}>
                <span style={{ position: "absolute", left: 0, color: c.terracotta, fontSize: "1.1em" }}>•</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Activities Overview Image ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px 48px" }}>
        <img src={samplerActivities}
          alt="Senior living activity printable kit overview: The Morning Routine Sampler conversation cards, visual sparks, and word link game laid out on a linen surface"
          style={{ width: "100%", height: "auto", borderRadius: "14px", boxShadow: "0 12px 40px rgba(61,43,31,0.1)", display: "block", maxWidth: 640, margin: "0 auto" }}
        />
      </div>

      {/* ── What's Inside + How It Works (forest green gradient) ── */}
      <section style={{
        padding: "clamp(3rem, 8vw, 5rem) 0",
        background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <span style={{
            fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: c.terracotta, marginBottom: "12px", display: "block", textAlign: "center",
          }}>
            What's Inside
          </span>
          <h2 style={{
            fontFamily: serif, fontSize: "clamp(26px, 4vw, 30px)", fontWeight: 500,
            lineHeight: 1.35, color: c.cream, marginBottom: "12px", textAlign: "center",
          }}>
            Three Activities. One Calm Morning.
          </h2>

          <div className="sampler-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", marginTop: "36px" }}>
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(250,247,242,0.95)", backdropFilter: "blur(10px)",
                  borderRadius: "14px", padding: "1.75rem 1.75rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)", transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.65rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.terracotta, marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: c.warmGray, margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ width: 48, height: 2, background: c.terracotta, margin: "3.5rem auto", borderRadius: "2px", opacity: 0.6 }} />

          <span style={{
            fontFamily: sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: c.terracotta, marginBottom: "12px", display: "block", textAlign: "center",
          }}>
            How It Works
          </span>
          <h2 style={{
            fontFamily: serif, fontSize: "clamp(26px, 4vw, 30px)", fontWeight: 500,
            lineHeight: 1.35, color: c.cream, marginBottom: "24px", textAlign: "center",
          }}>
            As Simple as Sitting Down
          </h2>

          <div style={{ maxWidth: 520, margin: "32px auto 0" }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "28px" }}>
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
                  background: c.terracotta, color: c.cream, fontFamily: serif,
                  fontSize: "18px", fontWeight: 600, display: "flex", alignItems: "center",
                  justifyContent: "center", boxShadow: `0 4px 12px ${c.terracotta}44`,
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily: serif, fontSize: "17px", fontWeight: 600, color: c.terracotta, marginBottom: "4px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "rgba(250,247,242,0.8)", margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emotional Image ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 28px 0" }}>
        <img src={samplerMoments}
          alt="Dementia-friendly activity cards for engagement: a senior resident's hands holding a visual spark card during a guided memory care conversation"
          style={{ width: "100%", height: "auto", borderRadius: "14px", boxShadow: "0 12px 40px rgba(61,43,31,0.1)", display: "block", maxWidth: 640, margin: "0 auto" }}
        />
      </div>

      {/* ── CTA Section ── */}
      <section style={{ padding: "64px 0", background: c.terracottaWash }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <div style={{
            background: c.cream, borderRadius: "24px",
            boxShadow: "0 8px 30px rgba(61,43,31,0.1)", padding: "clamp(36px, 5vw, 52px) clamp(24px, 4vw, 40px)",
            textAlign: "center", maxWidth: 600, margin: "0 auto",
          }}>
            <h2 style={{
              fontFamily: serif, fontSize: "clamp(24px, 4vw, 28px)", fontWeight: 500,
              lineHeight: 1.35, color: c.deepBrown, marginBottom: "16px",
            }}>
              Start Tomorrow Morning
              <br />
              with Something Meaningful
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: c.warmGray, maxWidth: 440, margin: "0 auto 28px" }}>
              Enter your email and the sampler arrives in your inbox — ready to print, cut, and
              use before your first session.
            </p>
            <SamplerEmailCapture id="cta" buttonText="Get the Free Sampler" variant="terracotta" />
          </div>
        </div>
      </section>

      {/* ── Final Close ── */}
      <section style={{
        padding: "64px 0", textAlign: "center",
        background: `linear-gradient(135deg, ${c.forest} 0%, ${c.forestLight} 100%)`,
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 28px" }}>
          <p style={{
            fontFamily: serif, fontSize: "22px", lineHeight: 1.6, fontStyle: "italic",
            color: "rgba(250,247,242,0.95)", maxWidth: 520, margin: "0 auto",
          }}>
            Mornings don't have to feel rushed. Connection can start with a single question.
          </p>
          <p style={{ fontSize: "14px", fontStyle: "italic", color: c.terracotta, marginTop: "24px" }}>
            — Francesca, Founder of The Comfort Bond™
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: "2rem 0", textAlign: "center", background: c.forest,
      }}>
        <p style={{ fontFamily: serif, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", margin: "0 0 0.35rem" }}>
          The Comfort Bond™
        </p>
        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: "0.03em" }}>
          Dignified engagement for senior living. Done for you.
        </p>
      </footer>

      {/* ── Sticky Mobile CTA (mobile only, fades in after hero) ── */}
      <div
        aria-hidden={!showStickyCTA}
        style={{
          position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60,
          padding: "10px 14px calc(10px + env(safe-area-inset-bottom))",
          background: "rgba(255,249,242,0.97)", backdropFilter: "blur(10px)",
          borderTop: `1px solid ${c.borderWarm}`, boxShadow: "0 -4px 20px rgba(61,43,31,0.08)",
          transform: showStickyCTA ? "translateY(0)" : "translateY(110%)",
          opacity: showStickyCTA ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          display: "none",
        }}
        className="sampler-sticky-cta"
      >
        <button
          onClick={scrollToHeroEmail}
          style={{
            width: "100%", padding: "14px 18px", fontFamily: sans, fontSize: "15px",
            fontWeight: 700, letterSpacing: "0.3px", color: "#fff", background: c.forest,
            border: "none", borderRadius: "12px", cursor: "pointer",
            boxShadow: `0 6px 18px ${c.forest}55`,
          }}
        >
          Get My Free Morning Plan →
        </button>
        <p style={{ fontFamily: sans, fontSize: "11px", color: c.softGray, margin: "6px 0 0", textAlign: "center" }}>
          Instant download. Use it today.
        </p>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .sampler-sticky-cta { display: block !important; }
        }
      `}</style>
    </div>
  );
}
