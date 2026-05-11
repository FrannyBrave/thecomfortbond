import { useEffect } from "react";
import logoImg from "@/assets/the-comfort-bond-logo.webp";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";

const ArrowSvg = ({ color = "#fff" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OurStory = () => {
  useEffect(() => {
    document.title = "From Where I'm Sitting — A Note from Francesca | The Comfort Bond";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "The story behind The Comfort Bond — built in memory of Félicité, for the families who want their next call or visit to mean something more.";
  }, []);

  return (
    <div style={{ background: "var(--cream, #FAF7F2)" }}>
      {/* NAV — matches Index */}
      <header>
        <nav className="tcb-nav">
          <a href="/" className="nav-logo">
            <img src={logoImg} alt="The Comfort Bond logo — meaningful family connection with aging parents and grandparents" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Gentle prompts, bonding kits, and connection rituals</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/about">Our Story</a></li>
            <li><a href="/#kits">Connection Kits</a></li>
            <li><a href="/shop" className="nav-cta">Shop</a></li>
          </ul>
          <MobileMenuDrawer />
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section style={{ background: "var(--forest-dark, #2D4A3E)", color: "#fff", padding: "clamp(5rem,12vw,10rem) clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem)" }}>
          <div className="story-container">
            <div className="story-tag" style={{ color: "var(--sand, #E8C99A)" }}>A Note from Francesca</div>
            <h1 className="story-hero-heading">From Where I'm Sitting</h1>
            <p className="story-hero-sub">
              The story behind The Comfort Bond — and the call I was always grateful I made.
            </p>
          </div>
        </section>

        {/* EDITORIAL BODY */}
        <section style={{ padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)" }}>
          <div className="story-container">

            {/* Section 1 — The Story */}
            <div className="story-eyebrow">Where it began</div>
            <h2 className="story-section-heading"><em>I built this for the call I was always grateful I made.</em></h2>
            <p className="story-body">
              I built The Comfort Bond after losing my grandmother — <em>Félicité</em> — in May of 2024.
            </p>
            <p className="story-body">
              She was the only grandparent I had left, and the person I loved most in the world. She had her usual doctor visits, her small health things, but nothing serious. She was still lively. She was still spending time with my younger cousins while my aunt was at work. Nobody saw it coming.
            </p>
            <p className="story-body">
              I lived far from her. I couldn't visit the way I wanted to. I was caught up in my own life — career, relationships, the dozen things that always feel urgent until something real happens and you see, in one quiet moment, that almost none of them were. But I called her. And I made sure she always knew how much I loved her, how much she meant to me.
            </p>
            <p className="story-body">
              That is the part I am grateful for. That is the part that holds.
            </p>

            <div className="story-divider" />

            {/* Section 2 — Why This Exists */}
            <div className="story-eyebrow">Why I built it</div>
            <h2 className="story-section-heading">Something for the families still in time.</h2>
            <p className="story-body">
              When this year began, I knew I wanted to start something of my own. And the first thing that came to me — before the business plan, before the website, before the name — was that I wanted to do something for elders.
            </p>
            <p className="story-body">
              Something that helps families bond with the people they love while there is still something beautiful to hold.
            </p>
            <p className="story-body">
              Something a granddaughter could use with her grandmother. Something an adult son could use with his aging father. Something for the next phone call, or the next visit, or the next quiet Sunday across the kitchen table.
            </p>
            <p className="story-body">
              Across the country, or across the room.
            </p>
            <p className="story-body">
              That is why The Comfort Bond exists. It is the brand I wish I had had when I was wondering what to say on the next phone call.
            </p>

            <div className="story-divider" />

            {/* Section 3 — What I'm Building */}
            <div className="story-eyebrow">The work</div>
            <h2 className="story-section-heading">Three quiet truths shape every product.</h2>
            <p className="story-body">
              Every product I make sits inside one of three quiet truths:
            </p>
            <p className="story-body">
              That <strong>connection</strong> is built in small moments, not big ones — and most families have a thousand of them slipping by, simply because no one knows what to say.
            </p>
            <p className="story-body">
              That the daughter, son, or grandchild standing in the doorway often feels <strong>awkward, guilty, or stuck</strong> — and what they need most is a soft place to land and a simple thing to try.
            </p>
            <p className="story-body">
              That the <strong>stories</strong> our parents and grandparents carry — the recipes, the songs, the small everyday details — are leaving with them every day, and writing one down is an act of love.
            </p>
            <p className="story-body">
              The Comfort Bond Connection Kits give families the conversation prompts, visual sparks, gentle games, and music-based memory prompts for meaningful calls and visits. The Connection Season is a seasonal planner for the family that wants to build a rhythm. The free Coffee &amp; Connection Sampler and Connection Companion are doorways in — for the visitor who isn't quite ready, or who just wants one good question to ask Mom on Sunday.
            </p>
            <p className="story-body">
              Everything here is built for adults, never infantilizing, always dignified. And everything was built because Félicité was loved, and because I called.
            </p>

            <div className="story-divider" />

            {/* Section 4 — Who This Is For */}
            <div className="story-eyebrow">If you're reading this</div>
            <h2 className="story-section-heading">This is for you.</h2>
            <p className="story-body">
              This is for the daughter who wants the next call to feel like more.
            </p>
            <p className="story-body">
              For the son who lives across the country and visits twice a year, and feels both grief and guilt about it.
            </p>
            <p className="story-body">
              For the granddaughter who knows her grandmother has stories no one is asking about — and who's running out of time to ask.
            </p>
            <p className="story-body">
              For the family caregiver who sits with someone they love and doesn't always know what to do with the silence.
            </p>
            <p className="story-body">
              For anyone navigating distance, or busy seasons, or memory loss, or just the ordinary fact that life keeps pulling us back to the next email and the next school pickup — and who wants the time we still have to mean something.
            </p>
            <p className="story-body">
              If any of that sounds like you, you're in the right place.
            </p>

            <div className="story-divider" />

            {/* Section 5 — A Closing Note */}
            <div className="story-eyebrow">Where to begin</div>
            <h2 className="story-section-heading">Move slowly. Call them this week.</h2>
            <p className="story-body">
              Use the kits imperfectly. Call them this week.
            </p>
            <p className="story-body">
              The bond grows on purpose — not by accident.
            </p>
            <p className="story-body" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              <strong>Two soft places to start:</strong>
            </p>
            <ul className="story-list">
              <li>
                <a href="https://the-comfort-bond-2.kit.com/392c82fa32" target="_blank" rel="noopener noreferrer" className="story-link">Download the free Coffee &amp; Connection Sampler</a>
                {" "}<span className="story-list-note">— one good question for your next call.</span>
              </li>
              <li>
                <a href="https://the-comfort-bond-2.kit.com/de78d818c7" target="_blank" rel="noopener noreferrer" className="story-link">Download the free Connection Companion</a>
                {" "}<span className="story-list-note">— a gentle weekly rhythm for the season ahead.</span>
              </li>
            </ul>
            <p className="story-body" style={{ marginTop: "1.5rem" }}>
              Or, when you're ready, <a href="/kits" className="story-link">browse the full kits →</a>
            </p>

            {/* Signature */}
            <div className="story-signature">
              — Francesca, Founder of The Comfort Bond™
            </div>
          </div>
        </section>

        {/* DEDICATION */}
        <section style={{ background: "var(--clay-pale, #f5ece5)", padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
          <div className="story-container">
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
              fontStyle: "italic",
              color: "var(--forest-dark, #2D4A3E)",
              lineHeight: 1.7,
              margin: 0,
            }}>
              — In memory of Félicité.<br />
              Across the country, across the room, this brand exists because of her.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--forest, #2D4A3E)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#fff",
              marginTop: 0,
              marginBottom: "1rem",
            }}>
              Begin with one good <em style={{ fontStyle: "italic", color: "var(--sand, #E8C99A)" }}>question.</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}>
              The free Coffee &amp; Connection Sampler is a soft, immediate place to start — one printable kit you can use on the next call or visit.
            </p>
            <a
              href="https://the-comfort-bond-2.kit.com/392c82fa32"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--clay, #C67B5C)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 100,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "var(--font-sans)",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
              }}
            >
              Download the Free Sampler <ArrowSvg />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER — matches Index */}
      <footer className="tcb-footer">
        <div className="footer-inner footer-inner-3col">
          <div className="footer-brand">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", fontWeight: 600 }}>The Comfort Bond™</div>
            <p>Gentle prompts, bonding kits, and connection rituals to help you create more meaningful moments with the people who raised you.</p>
          </div>
          <div className="footer-col">
            <h4>Start free</h4>
            <ul>
              <li><a href="https://the-comfort-bond-2.kit.com/de78d818c7" target="_blank" rel="noopener noreferrer">Free Connection Companion</a></li>
              <li><a href="https://the-comfort-bond-2.kit.com/392c82fa32" target="_blank" rel="noopener noreferrer">Free Coffee &amp; Connection Sampler</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/#blueprint">The Connection Season: Summer Edition</a></li>
              <li><a href="/#kits">The Comfort Bond Connection Kits</a></li>
              <li><a href="/#collection">The Comfort Bond Collection</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">Our Story</a></li>
              <li><a href="mailto:hello@thecomfortbond.com">hello@thecomfortbond.com</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 The Comfort Bond™ · Built in memory of a grandmother loved deeply.</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>
      <CookieConsent />

      <style>{`
        .story-container {
          max-width: 680px;
          margin: 0 auto;
        }

        .story-tag,
        .story-eyebrow {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--clay, #C67B5C);
          margin-bottom: 1.25rem;
        }

        .story-hero-heading {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 600;
          font-style: italic;
          line-height: 1.1;
          color: #fff;
          margin: 0 0 1.5rem;
          letter-spacing: -0.01em;
        }

        .story-hero-sub {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin: 0;
          max-width: 560px;
        }

        .story-section-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 600;
          line-height: 1.25;
          color: var(--forest-dark, #2D4A3E);
          margin-top: 0;
          margin-bottom: 1.75rem;
          letter-spacing: -0.01em;
        }

        .story-body {
          font-family: var(--font-serif);
          font-size: clamp(1.05rem, 1.8vw, 1.15rem);
          font-weight: 400;
          color: var(--text-mid, #4A5548);
          line-height: 1.95;
          margin-bottom: 1.5rem;
        }

        .story-body strong {
          color: var(--forest-dark, #2D4A3E);
          font-weight: 600;
        }

        .story-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
        }

        .story-list li {
          font-family: var(--font-serif);
          font-size: clamp(1.05rem, 1.8vw, 1.15rem);
          line-height: 1.8;
          color: var(--text-mid, #4A5548);
          margin-bottom: 1rem;
          padding-left: 1.25rem;
          position: relative;
        }

        .story-list li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: var(--clay, #C67B5C);
        }

        .story-list-note {
          font-style: italic;
          color: var(--text-light, #7A8A7A);
        }

        .story-link {
          color: var(--clay, #C67B5C);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          transition: color 0.2s;
        }

        .story-link:hover {
          color: var(--forest-dark, #2D4A3E);
        }

        .story-divider {
          width: 48px;
          height: 1px;
          background: var(--clay, #C67B5C);
          opacity: 0.4;
          margin: 3.5rem 0;
        }

        .story-signature {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-style: italic;
          color: var(--clay, #C67B5C);
          margin-top: 3.5rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default OurStory;
