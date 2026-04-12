import logoImg from "@/assets/logo.png";

const ArrowSvg = ({ color = "#fff" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OurStory = () => {
  return (
    <div>
      {/* NAV — minimal */}
      <header>
        <nav className="tcb-nav">
          <a href="/" className="nav-logo">
            <img src={logoImg} alt="The Comfort Bond logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/#products">Engagement Kits</a></li>
            <li><a href="/#bundles">Bundles</a></li>
            <li><a href="/#who">Who It's For</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/#products" className="nav-cta">Shop Now</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* EDITORIAL LETTER */}
        <section style={{ background: "var(--forest-dark)", color: "#fff", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {/* Tag */}
            <div className="about-tag">Our story</div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#fff",
              marginTop: 0,
              marginBottom: "2.5rem",
            }}>
              You Shouldn't Have to Spend<br />Your Weekends Planning<br /><em style={{ fontStyle: "italic", color: "var(--sand)" }}>Monday's Activities.</em>
            </h1>

            {/* Letter body */}
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              fontWeight: 300,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.85,
            }}>
              <p>You didn't choose this work to spend Sunday nights searching for something that might work.</p>
              <p style={{ paddingLeft: "1.5rem", borderLeft: "2px solid var(--clay)", margin: "2rem 0", color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.7 }}>
                Scrolling Pinterest.<br />
                Opening ten tabs.<br />
                Printing something that doesn't quite fit — then rewriting it anyway.
              </p>
              <p>You deserve better than a search engine and a prayer.</p>

              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", margin: "2.5rem 0" }} />

              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, color: "var(--sand)", fontStyle: "italic", marginBottom: "1.5rem" }}>
                Here's the reality most people never say out loud:
              </p>

              <p>You're running multiple sessions a day. You're managing personalities, energy levels, and expectations. And somehow, you're still expected to create meaningful programming from scratch — every single week.</p>

              <p>So you piece things together. A worksheet here. An idea there. And more often than not, it feels... off.</p>

              <p>Because it wasn't built for them. It was built for convenience.</p>

              <p>Meanwhile, your residents — people who lived full, complex lives — deserve something that actually meets them where they are.</p>

              <p>And you feel that.</p>

              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", margin: "2.5rem 0" }} />

              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>
                Let's be clear:
              </p>

              <p><strong style={{ color: "#fff", fontWeight: 500 }}>This is not a you problem.</strong></p>
              <p>You are not behind. You are not underperforming. You are operating inside a system that never gave you the tools to match the standard you're held to.</p>
              <p>That's not a staffing issue. It's a systems failure.</p>

              <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", margin: "2.5rem 0" }} />

              <p>When I looked at what was available, I expected gaps.</p>
              <p>What I found was nothing that truly respected the work.</p>

              <p style={{ paddingLeft: "1.5rem", borderLeft: "2px solid rgba(255,255,255,0.12)", margin: "2rem 0", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                Resources that felt generic.<br />
                Activities that felt infantilizing.<br />
                Materials that required more prep than they saved.
              </p>

              <p>And professionals like you — doing deeply meaningful work — left to figure it out alone.</p>
              <p>That didn't sit right with me.</p>
              <p style={{ color: "#fff", fontWeight: 400 }}>So I built what should have existed all along.</p>
            </div>

            {/* Signature */}
            <div style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontStyle: "italic",
              color: "var(--sand)",
              marginTop: "3rem",
            }}>
              — Francesca, Founder of The Comfort Bond™
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section style={{ background: "var(--cream)", padding: "clamp(3rem,7vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="section-tag">The solution</div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "var(--forest-dark)",
              marginTop: 0,
              marginBottom: "2rem",
            }}>
              A system you can <em style={{ fontStyle: "italic", color: "var(--clay)" }}>actually rely on.</em>
            </h2>

            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              fontWeight: 300,
              color: "var(--text-mid)",
              lineHeight: 1.85,
            }}>
              <p>The Comfort Bond™ is a structured library of engagement kits designed specifically for senior living and memory care.</p>
              <p>Each kit is fully built, fully organized, and ready to use. No adapting. No guessing. No late-night planning.</p>
              <p>You open the file. You print what you need. You walk into the session ready.</p>
              <p>And for the first time, the focus shifts back where it belongs:</p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, color: "var(--forest-dark)", fontStyle: "italic", margin: "1.5rem 0" }}>
                Connection. Conversation. Presence.
              </p>

              <div style={{ width: 40, height: 1, background: "var(--border)", margin: "2.5rem 0" }} />

              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 600, color: "var(--forest-dark)", marginBottom: "1rem" }}>
                Every detail is intentional.
              </p>
              <p>These are not activities to "fill time." They are designed to spark recognition, memory, and real engagement.</p>
              <p>Because your residents are not children. They are adults with history, identity, and stories that still deserve to be seen.</p>
              <p>And everything you use with them should reflect that.</p>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section style={{ background: "var(--sand-pale)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div className="section-tag" style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>In practice</div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "var(--forest-dark)",
              textAlign: "center",
              marginTop: 0,
              marginBottom: "3rem",
            }}>
              What this actually looks like <em style={{ fontStyle: "italic", color: "var(--clay)" }}>in practice</em>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="feature-cards-grid">
              {[
                {
                  num: "5 Minutes",
                  title: "From Download to Facilitation",
                  desc: "No prep. No reworking. Just ready.",
                },
                {
                  num: "30+ Sessions",
                  title: "A Growing Library",
                  desc: "You can rely on this week, next week, and beyond.",
                },
                {
                  num: "100%",
                  title: "Adult-Centered",
                  desc: "No crafts. No coloring pages. No compromise on dignity.",
                },
              ].map((card, i) => (
                <div key={i} style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "2rem",
                  textAlign: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--forest)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}>
                    {card.num}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--forest-dark)",
                    marginBottom: "0.5rem",
                  }}>
                    {card.title}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "var(--text-mid)",
                    lineHeight: 1.6,
                  }}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ background: "var(--forest)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
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
              See it for <em style={{ fontStyle: "italic", color: "var(--sand)" }}>yourself.</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}>
              Start with The Morning Routine Sampler — a free, session-ready kit you can use immediately. No commitment. No guesswork. Just something you can open and run.
            </p>
            <a
              href="/free-sampler"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--clay)",
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

      {/* FOOTER */}
      <footer className="tcb-footer">
        <div className="footer-bottom">
          <span className="footer-copy">&copy; 2026 The Comfort Bond™ &middot; All rights reserved</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .feature-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default OurStory;
