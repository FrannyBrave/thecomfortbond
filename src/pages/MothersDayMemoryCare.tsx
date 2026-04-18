import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { openPaddleCheckout } from "@/lib/paddle";
import heroImage from "@/assets/blog-mothers-day-memory-care-hero.jpg";

const BUNDLE_PRICE_ID = "pri_01kpafqz2tc4pfc262j1dnh531";

const TITLE = "Mother's Day in Memory Care: A Family Caregiver's Guide";
const META =
  "A working guide for adult children visiting a mother in memory care on Mother's Day. Practical, dignified, and honest — what to bring, what to say, what to release.";
const URL = "https://thecomfortbond.com/blog/mothers-day-memory-care-family-guide";
const PUBLISHED = "2026-04-18";
const MODIFIED = "2026-04-18";

/* ----------------- content blocks ----------------- */

type Block =
  | { type: "p"; text: string; dropcap?: boolean }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "hr" }
  | { type: "leadCapture" };

const BLOCKS: Block[] = [
  {
    type: "p",
    dropcap: true,
    text: "The cards in the grocery store start appearing in mid-April. Brunch reservations open. Someone in the office mentions what they're sending their mom. And for the adult child whose mother lives in memory care — or in a home where the disease has quietly rewritten what visits look like — the next three weeks become a kind of held breath.",
  },
  { type: "p", text: "This guide is for you." },
  {
    type: "p",
    text: "It is not a list of crafts or &ldquo;ways to make Mother's Day special.&rdquo; It is a working document for what an actual, dignified visit can look like when the mother you knew and the mother in front of you are both real, both present, and not always the same person.",
  },

  { type: "hr" },
  { type: "h2", text: "Begin by Releasing One Thing" },
  {
    type: "p",
    text: "Before you choose a time, a gift, or an outfit, release the expectation that your mother will know it is Mother's Day.",
  },
  {
    type: "p",
    text: "She may know. Many residents do, especially in earlier stages, especially in the morning. But if the day's success depends on her recognizing it as Mother's Day — or recognizing you as her daughter — you have built the visit on a foundation that may not hold.",
  },
  { type: "p", text: "Release that, and you create room for what is still possible. Which is a great deal." },

  { type: "hr" },
  { type: "h2", text: "Choose the Time of Day Carefully" },
  {
    type: "p",
    text: "In memory care, time of day matters more than the day itself. For most residents with dementia, mornings are the most clear-headed window. By late afternoon, sundowning often begins — restlessness, confusion, sometimes agitation that bears no relationship to who is in the room.",
  },
  {
    type: "p",
    text: "If your community allows it, schedule your Mother's Day visit between 10:00 a.m. and noon. This is the window when most residents are bathed, dressed, fed, and at their gentlest.",
  },
  {
    type: "p",
    text: "Avoid Sunday afternoons if you can. Brunch crowds in memory care dining rooms tend to overstimulate residents and stretch staff thin at exactly the moment families most want attention. A quieter Saturday morning, or a weekday close to Mother's Day, often produces a far better visit than the day itself.",
  },

  { type: "hr" },
  { type: "h2", text: "What to Bring" },
  {
    type: "p",
    text: "The instinct is to bring something beautiful. Resist the pull toward complicated flower arrangements, perfume, jewelry, or anything that requires fine motor handling.",
  },
  {
    type: "p",
    text: "Bring instead a small set of things that engage her senses without asking anything of her cognition:",
  },
  {
    type: "ul",
    items: [
      "A scarf or shawl in a fabric she has loved her whole life — silk, soft wool, an old chenille throw she once owned.",
      "A handful of fresh herbs from the grocery store — rosemary, mint, basil. Aromatic, instantly familiar, forgiving.",
      "A photograph from her life that does not require explanation. Not a recent group photo. Something from her twenties, thirties, forties — when her face was the face she remembers having.",
      "Music. One or two songs she loved, queued up on your phone. Not a long playlist. A few specific songs, played quietly.",
      "One small thing to eat together if her care plan allows it — a piece of chocolate, a cookie she has loved for forty years.",
    ],
  },
  {
    type: "p",
    text: "You are not bringing gifts. You are bringing a sensory environment that will let her feel met.",
  },

  { type: "leadCapture" },

  { type: "hr" },
  { type: "h2", text: "The First Ninety Seconds" },
  {
    type: "p",
    text: "The first ninety seconds of a memory care visit set the tone for everything that follows.",
  },
  {
    type: "p",
    text: "Walk in slowly. Approach from the front, never from the side. Let her see you before you reach for her.",
  },
  {
    type: "p",
    text: "Do not say &ldquo;do you know who I am?&rdquo; Do not test. Do not begin with questions of any kind.",
  },
  {
    type: "p",
    text: "Begin with a statement. Warm, low-voiced, unhurried. <em>&ldquo;Hi, Mom. It's so good to see you.&rdquo;</em> If she lights up, you have arrived. If she looks puzzled, you have still arrived — she is just taking longer to find the room you are in.",
  },
  {
    type: "p",
    text: "Then sit down at her level. Take her hand if she has been someone who likes to be touched. Be quiet for a moment. Let her settle.",
  },

  { type: "hr" },
  { type: "h2", text: "What to Talk About (and What to Skip)" },
  { type: "p", text: "<strong>Skip:</strong>" },
  {
    type: "ul",
    items: [
      "<em>&ldquo;Do you remember when…&rdquo;</em>",
      "<em>&ldquo;Do you know who this is?&rdquo;</em>",
      "News updates about people she may no longer place",
      "Anything that requires her to retrieve a specific memory on demand",
    ],
  },
  { type: "p", text: "<strong>Try instead:</strong>" },
  {
    type: "ul",
    items: [
      "Sensory observations. <em>&ldquo;These flowers smell so nice.&rdquo;</em> <em>&ldquo;Your hands are so warm.&rdquo;</em>",
      "Stories told as gifts, not as quizzes. <em>&ldquo;I was just thinking about how you used to make pancakes on Sunday mornings. I can almost taste them.&rdquo;</em>",
      "Simple, present-moment noticing. The light through the window. The texture of her shawl.",
      "Songs hummed together — she may join in even when she cannot speak in sentences.",
    ],
  },
  {
    type: "p",
    text: "The rule is small, and it changes everything: <strong>never ask her to remember. Bring the memory to her instead.</strong>",
  },

  { type: "hr" },
  { type: "h2", text: "If She Doesn't Recognize You" },
  { type: "p", text: "She still knows you. She does not always know how." },
  {
    type: "p",
    text: "Recognition in dementia is layered. Verbal recognition — being able to name you as her daughter, her son, her grandchild — often goes early. Emotional recognition — knowing you are someone safe, someone who loves her, someone who belongs in her room — frequently remains long after the names have faded.",
  },
  {
    type: "p",
    text: "If she calls you by her sister's name, by her own mother's name, or by no name at all, do not correct her. Receive it. The love is in the room either way.",
  },

  { type: "hr" },
  { type: "h2", text: "If the Visit Gets Hard" },
  {
    type: "p",
    text: "It might. She may become agitated. She may want you to leave. She may cry. None of this is a verdict on your visit, on your relationship, or on you.",
  },
  {
    type: "p",
    text: "When a visit turns difficult, lower your voice rather than raise it. Slow your movements. Stop asking questions entirely. If music is helping, keep it on. If it is not, turn it off.",
  },
  {
    type: "p",
    text: "Step out for a moment if you need to. Find a staff member. They are not strangers to this — they navigate it every day, and they will help you re-enter the room if you want, or help you make a graceful exit if you do not.",
  },
  { type: "p", text: "A short, gentle visit is not a failed visit. Twenty calm minutes are worth more than two hard hours." },

  { type: "hr" },
  { type: "h2", text: "Bringing Siblings, Partners, and Grandchildren" },
  {
    type: "p",
    text: "If you are bringing others, bring them in waves. Memory care residents do not do well with crowds, even loving ones. A room with five new faces at once can quickly become overwhelming.",
  },
  {
    type: "p",
    text: "Stagger arrivals. Two adults at a time, ten or fifteen minutes apart. If grandchildren are coming, prepare them in advance — gently, honestly, in age-appropriate language. Let them know that Grandma may not remember their name and that this is not because she does not love them.",
  },
  {
    type: "p",
    text: "Children, given the right preparation, are often the most graceful guests in memory care. They do not bring the weight of expectation that adult children sometimes carry. They simply show up.",
  },

  { type: "hr" },
  { type: "h2", text: "The Drive Home" },
  { type: "p", text: "This is the part of the day no one warns you about." },
  {
    type: "p",
    text: "You may leave the visit and feel, against all expectation, an enormous wave of grief. Or guilt. Or strange, displaced anger at no one in particular. This is not a sign that the visit went badly. It is the cost of loving someone through a long disease.",
  },
  {
    type: "p",
    text: "It has a name in the clinical literature: <em>ambiguous loss</em>. The grief of losing someone who is still here. There is no funeral for it, no ritual, no week off from work. But it is real, and it deserves to be treated as real.",
  },
  {
    type: "p",
    text: "Give yourself room for it. Do not schedule something heavy for the evening. Call a sibling, a friend, or a therapist who understands. Eat something warm. Sleep early.",
  },
  { type: "p", text: "You did a hard, loving thing today. The fact that it cost you something does not mean you did it wrong." },

  { type: "hr" },
  { type: "h2", text: "A Note About Her Community" },
  {
    type: "p",
    text: "The team caring for your mother — the nurses, the aides, the Activity Director, the dining staff — are spending more hours with her than you can. Many of them love her. Most of them know things about her current rhythms that no one in your family knows.",
  },
  {
    type: "p",
    text: "Before you leave on Mother's Day, find one of them. Thank them by name. Ask how she has been this week. Ask the Activity Director what kinds of programming have been landing for her — the music, the sensory sessions, the small-group conversations. If her community uses structured sensory engagement programming — some communities run sessions built around themes like 1960s pop culture, household mending, or heritage gardening — ask whether any of those tools could be brought into your visit.",
  },
  {
    type: "p",
    text: "The best Mother's Day visits in memory care are usually the ones built on what the people in the room with her every day already know works.",
  },

  { type: "hr" },
  { type: "h2", text: "A Final Thought" },
  {
    type: "p",
    text: "Your mother will not remember the brunch you didn't take her to. She will not know which card you sent. She will not remember whether you came on Sunday or Saturday or the Wednesday after.",
  },
  {
    type: "p",
    text: "Her body, however, will remember being held. Her ear will remember a song. Her hand will remember a fabric. The visit lives in her in places that have nothing to do with words and nothing to do with dates.",
  },
  { type: "p", text: "You showed up." },
  { type: "p", text: "That is the thing she will feel." },
  { type: "p", text: "That is Mother's Day." },
];

/* ----------------- inline lead-capture component ----------------- */

const LeadCaptureCallout = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Hand off to the existing /family-visits flow which manages
    // ConvertKit + delivery of the Visit Starter Guide.
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `/family-visits?email=${encodeURIComponent(email)}`;
    }, 600);
  };

  return (
    <aside
      aria-label="Free Visit Starter Guide"
      style={{
        margin: "3.5rem 0",
        background: "var(--sand-pale)",
        border: "1px solid rgba(198,123,92,0.25)",
        borderRadius: "var(--radius)",
        padding: "clamp(1.75rem, 4vw, 2.5rem)",
        textAlign: "center",
        boxShadow: "0 2px 14px rgba(45,74,62,0.06)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--clay)",
          marginBottom: "0.75rem",
        }}
      >
        Free Companion Download
      </span>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.4rem, 2.6vw, 1.75rem)",
          fontWeight: 600,
          color: "var(--forest-dark)",
          margin: "0 0 0.75rem",
          lineHeight: 1.25,
        }}
      >
        The Visit Starter Guide
      </h3>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 16,
          color: "var(--text-mid)",
          lineHeight: 1.7,
          margin: "0 auto 1.5rem",
          maxWidth: 460,
        }}
      >
        A printable, one-page guide you can fold into your bag — what to bring, what to say,
        and what to release before you walk in.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "0.5rem",
          maxWidth: 460,
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          style={{
            flex: "1 1 220px",
            minWidth: 0,
            padding: "12px 16px",
            fontSize: 15,
            fontFamily: "var(--font-sans)",
            color: "var(--text-dark)",
            background: "#fff",
            border: "1px solid rgba(45,74,62,0.18)",
            borderRadius: 100,
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={submitted}
          style={{
            background: "var(--forest)",
            color: "#fff",
            padding: "12px 24px",
            border: "none",
            borderRadius: 100,
            fontSize: 15,
            fontWeight: 500,
            fontFamily: "var(--font-sans)",
            cursor: submitted ? "default" : "pointer",
            transition: "background 0.2s, transform 0.15s",
            opacity: submitted ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!submitted) (e.currentTarget as HTMLElement).style.background = "var(--forest-light)";
          }}
          onMouseLeave={(e) => {
            if (!submitted) (e.currentTarget as HTMLElement).style.background = "var(--forest)";
          }}
        >
          {submitted ? "Sending…" : "Download Now"}
        </button>
      </form>
      <p
        style={{
          fontSize: 12,
          color: "var(--text-light)",
          fontFamily: "var(--font-sans)",
          margin: "1rem 0 0",
        }}
      >
        Free forever. Unsubscribe anytime.
      </p>
    </aside>
  );
};

/* ----------------- page ----------------- */

const MothersDayMemoryCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${TITLE} — The Comfort Bond™`;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", META);
    setMeta("property", "og:title", `${TITLE} — The Comfort Bond™`);
    setMeta("property", "og:description", META);
    setMeta("name", "twitter:title", `${TITLE} — The Comfort Bond™`);
    setMeta("name", "twitter:description", META);

    const ldId = "mothers-day-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      description: META,
      author: { "@type": "Person", name: "Francesca" },
      publisher: {
        "@type": "Organization",
        name: "The Comfort Bond",
        logo: { "@type": "ImageObject", url: "https://thecomfortbond.com/logo.png" },
      },
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      mainEntityOfPage: URL,
      image: "https://thecomfortbond.com/og-image.jpg",
    });

    return () => {
      document.getElementById(ldId)?.remove();
    };
  }, []);

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navigation />

      {/* Breadcrumb */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "6.5rem 1.5rem 0" }}>
        <Link
          to="/resources"
          style={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "var(--text-light)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          ← Back to Articles
        </Link>
      </div>

      {/* Hero — image first, title beneath in editorial style */}
      <header style={{ padding: "2rem 1.5rem 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <figure style={{ margin: 0 }}>
            <img
              src={heroImage}
              alt="An older mother and her adult daughter holding hands across a sunlit table, peonies and lavender nearby — a tender Mother's Day moment in memory care."
              width={1280}
              height={768}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 14,
                boxShadow: "0 12px 40px rgba(45,74,62,0.18)",
                filter: "saturate(0.92)",
              }}
            />
          </figure>

          <div style={{ textAlign: "center", padding: "clamp(2rem, 4vw, 3rem) 0 0" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--clay)",
                marginBottom: "1.25rem",
              }}
            >
              For Families · Memory Care
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4.4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.18,
                color: "var(--forest-dark)",
                margin: "0 auto 1.25rem",
                maxWidth: 680,
                letterSpacing: "-0.01em",
              }}
            >
              {TITLE}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "var(--text-mid)",
                lineHeight: 1.6,
                margin: "0 auto",
                maxWidth: 560,
                fontWeight: 400,
              }}
            >
              A working document for the visits we do not know how to prepare for.
            </p>
            <div
              style={{
                marginTop: "1.5rem",
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--text-light)",
                letterSpacing: "0.04em",
              }}
            >
              By Francesca · 8 min read
            </div>

            {/* Editorial divider rule */}
            <div
              aria-hidden
              style={{
                margin: "2.5rem auto 0",
                width: 60,
                height: 1,
                background: "var(--clay)",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </header>

      {/* Body */}
      <main
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "clamp(2.5rem, 5vw, 3.5rem) 1.5rem",
        }}
      >
        {BLOCKS.map((block, i) => {
          if (block.type === "hr") {
            return (
              <hr
                key={i}
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(45,74,62,0.15)",
                  margin: "3rem auto",
                  width: "100%",
                }}
              />
            );
          }

          if (block.type === "h2") {
            return (
              <h2
                key={i}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.6vw, 1.85rem)",
                  fontWeight: 600,
                  color: "var(--forest-dark)",
                  lineHeight: 1.25,
                  margin: "0 0 1.5rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "ul") {
            return (
              <ul
                key={i}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)",
                  color: "var(--text-dark)",
                  lineHeight: 1.85,
                  margin: "0 0 1.75rem",
                  paddingLeft: "1.5rem",
                }}
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    style={{ marginBottom: "0.75rem" }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            );
          }

          if (block.type === "leadCapture") {
            return <LeadCaptureCallout key={i} />;
          }

          // paragraph
          return (
            <p
              key={i}
              className={block.dropcap ? "article-dropcap" : undefined}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.08rem, 1.7vw, 1.2rem)",
                color: "var(--text-dark)",
                lineHeight: 1.95,
                margin: "0 0 1.5rem",
                fontWeight: 400,
              }}
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          );
        })}

        {/* Closing italic note */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(45,74,62,0.15)",
            margin: "3rem auto",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "var(--text-mid)",
            lineHeight: 1.85,
            margin: "0",
          }}
        >
          Looking for gentle, structured support for your next visit? If you are dreading
          the silence or wondering how to connect when the conversation stops, you don't
          have to wing it. Our <strong style={{ color: "var(--forest-dark)" }}>Memory &
          Connection Kits</strong> ($27) provide guided conversation starters, tactile
          prompts, and a beautiful framework for your time together.
        </p>
      </main>

      {/* Footer CTA — 5-Kit Bundle */}
      <section
        aria-label="Explore the 5-Kit Bundle"
        style={{
          background: "var(--forest)",
          padding: "clamp(3.5rem, 7vw, 5.5rem) 1.5rem",
          color: "var(--cream)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft decorative wash */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at top, rgba(232,201,154,0.18), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 880,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--sand)",
              fontFamily: "var(--font-sans)",
            }}
          >
            The Complete Collection
          </span>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Bring meaning to every visit.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              margin: "0 auto",
              maxWidth: 560,
            }}
          >
            Five themed Engagement Kits — printable, ready to use, no prep needed.
            Conversation prompts, sensory cues, and music pairings for the moments
            words alone won't carry.
          </p>

          {/* Price row */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "0.85rem",
              fontFamily: "var(--font-serif)",
            }}
          >
            <span
              aria-hidden
              style={{
                fontSize: "1.4rem",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "line-through",
                fontWeight: 400,
              }}
            >
              $135
            </span>
            <span
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.4rem)",
                fontWeight: 600,
                color: "var(--sand)",
                lineHeight: 1,
              }}
            >
              $97
            </span>
            <span
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-sans)",
              }}
            >
              one-time · instant download
            </span>
          </div>

          <div>
            <button
              onClick={() => openPaddleCheckout(BUNDLE_PRICE_ID)}
              data-paddle-price-id={BUNDLE_PRICE_ID}
              style={{
                background: "var(--clay)",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 500,
                padding: "16px 38px",
                border: "none",
                borderRadius: 100,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(198,123,92,0.35)",
                transition: "transform 0.15s, background 0.2s, box-shadow 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--clay-light)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--clay)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Explore the Kits →
            </button>
            <div style={{ marginTop: "1.25rem" }}>
              <Link
                to="/kits"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                }}
              >
                See what's inside each kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />

      {/* Drop-cap styling — scoped to this page via class */}
      <style>{`
        .article-dropcap::first-letter {
          font-family: var(--font-serif);
          font-weight: 600;
          float: left;
          font-size: 4.6rem;
          line-height: 0.9;
          padding: 0.35rem 0.75rem 0 0;
          color: var(--clay);
        }
        .article-dropcap {
          text-indent: 0;
        }
      `}</style>
    </div>
  );
};

export default MothersDayMemoryCare;
