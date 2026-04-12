import { useEffect } from "react";
import logoImg from "@/assets/logo.png";

const ArrowSvg = ({ color = "#fff" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OurStory = () => {
  return (
    <div style={{ background: "var(--cream, #FAF7F2)" }}>
      {/* NAV */}
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
        {/* HERO */}
        <section style={{ background: "var(--forest-dark, #2D4A3E)", color: "#fff", padding: "clamp(5rem,12vw,10rem) clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem)" }}>
          <div className="story-container">
            <div className="story-tag">Our story</div>
            <h1 className="story-hero-heading">Our Story</h1>
          </div>
        </section>

        {/* EDITORIAL BODY */}
        <section style={{ padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem)" }}>
          <div className="story-container">

            {/* Section: She Was My Last One */}
            <h2 className="story-section-heading">She Was My Last One</h2>
            <p className="story-body">My grandmother was the kind of person who made you feel like the most important person in the room — even when the room was full.</p>
            <p className="story-body">She was my mum's mum. My last living grandparent. And for most of my life, she was my anchor.</p>
            <p className="story-body">During her final years, I wasn't able to see her the way I wanted to. Life, distance, circumstances — the reasons don't matter as much as the weight of them. But I called her. Every time, I made sure she knew how deeply I loved her. How much I looked forward to the next time I'd hear her voice in person, not just through a phone.</p>
            <p className="story-body">She became ill. And then she was gone.</p>
            <p className="story-body">There's a particular kind of quiet that follows losing someone like that. Not loud grief — just stillness. The kind that makes you look at your life and ask what you're building, and who it's for.</p>

            <div className="story-divider" />

            {/* Section: Something Worth Building */}
            <h2 className="story-section-heading">Something Worth Building</h2>
            <p className="story-body">About fourteen months after she passed, I made a decision. I wanted to build something meaningful — not just a business, but something that mattered in the kind of way she would have understood.</p>
            <p className="story-body">The first place my mind went was seniors.</p>
            <p className="story-body">Not just because I was looking for a business opportunity. Because it was deeply personal. Because the people who shaped me most — who loved me longest, who gave me the most — were the ones society seemed to quietly forget.</p>
            <p className="story-body">I started with an idea for families. Tools that could help them stay connected with their loved ones during visits — conversation starters, memory prompts, small bridges across the silence that sometimes settles when someone you love is aging and you don't quite know what to say anymore.</p>
            <p className="story-body">It was a good idea. But it wasn't the right one.</p>

            <div className="story-divider" />

            {/* Section: The People No One Sees */}
            <h2 className="story-section-heading">The People No One Sees</h2>
            <p className="story-body">As I researched further, I discovered something that changed everything.</p>
            <p className="story-body">Families visit. But they go home.</p>
            <p className="story-body">The people who show up every single day — who carry the responsibility of creating joy, sparking connection, and preserving dignity for dozens of residents at a time — are Activity Directors and Life Enrichment Coordinators.</p>
            <p className="story-body">They are the ones facilitating meaningful engagement in senior living communities and memory care neighborhoods, day in and day out. And almost no one is building for them.</p>
            <p className="story-body">That realization stopped me.</p>

            <div className="story-divider" />

            {/* Section: The Weight They Carry */}
            <h2 className="story-section-heading">The Weight They Carry</h2>
            <p className="story-body">Here's what I learned the more I researched:</p>
            <p className="story-body">These professionals are deeply committed to the people in their care. They don't see residents as room numbers. They see Margaret, who used to teach piano. James, who can still tell you every play from the '72 World Series. Helen, who lights up when someone asks about her garden.</p>
            <p className="story-body">But the systems around them aren't built to support that kind of care.</p>
            <p className="story-body">They're running multiple sessions a day with limited budgets and even more limited time. They're planning senior living activities on their lunch breaks. Searching for resources on Sunday nights. Printing things designed for children and spending hours adapting them — because what's available doesn't reflect the adults in front of them.</p>
            <p className="story-body">They do this work because they believe in it. But belief doesn't prevent burnout. And passion doesn't replace proper tools.</p>

            <div className="story-divider" />

            {/* Section: Why This Became My Work */}
            <h2 className="story-section-heading">Why This Became My Work</h2>
            <p className="story-body">I couldn't unhear what I'd learned.</p>
            <p className="story-body">The gap between what Activity Directors are expected to deliver and what they're given to work with — that gap is where dignity gets lost. Not because anyone intends it. But because there isn't something that truly respects both the professionals and the people they serve.</p>
            <p className="story-body">Just like my grandmother, every resident sitting in a community room right now deserves to be offered something that honors who they are and the life they have lived — not just who they've become.</p>
            <p className="story-body">That's the thread that connects my story to yours.</p>
            <p className="story-body">If you're someone who spends your energy creating moments of real connection for seniors — this was built with you in mind.</p>

            <div className="story-divider" />

            {/* Section: What The Comfort Bond Is */}
            <h2 className="story-section-heading">What The Comfort Bond™ Is</h2>
            <p className="story-body">The Comfort Bond™ is a collection of done-for-you engagement kits designed for the people who do this work every day.</p>
            <p className="story-body">Each kit is structured, print-ready, and built for adults with rich life experience. Discussion prompts that invite real conversation. Storytelling exercises that honor memory. Reminiscence activities seamlessly designed into your life enrichment programming. Tools that support memory care engagement without demanding hours of your personal time to prep or adapt.</p>
            
            <p className="story-body">These are not crafts borrowed from a children's curriculum. They are intentional tools created for professionals who understand that meaningful activity is not decoration — it's care.</p>

            <div className="story-divider" />

            {/* Section: What I Believe */}
            <h2 className="story-section-heading">What I Believe</h2>
            <p className="story-body">I believe the final years of a person's life should be filled with warmth, laughter, and genuine human connection.</p>
            <p className="story-body">I believe the people responsible for creating those moments deserve to be supported — not just thanked.</p>
            <p className="story-body">And I believe that when we build something with real intention, it shows. In every page. In every prompt. In every quiet moment where a resident smiles because someone finally asked them the right question.</p>
            <p className="story-body">That's what The Comfort Bond™ is for.</p>
            <p className="story-body">Not to replace what you do — but to make sure you never have to do it alone.</p>

            {/* Signature */}
            <div className="story-signature">
              — Francesca, Founder of The Comfort Bond™
            </div>
          </div>
        </section>

        {/* CTA SECTION — kept as-is */}
        <section style={{ background: "var(--forest, #3D6455)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
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
        .story-container {
          max-width: 680px;
          margin: 0 auto;
        }

        .story-tag {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--sand, #E8C99A);
          margin-bottom: 1.5rem;
        }

        .story-hero-heading {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 600;
          line-height: 1.1;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
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
          line-height: 2;
          margin-bottom: 1.5rem;
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
