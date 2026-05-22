import { Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import logoImg from "@/assets/the-comfort-bond-logo.webp";
import handsHeroImg from "@/assets/the-comfort-bond-hands-that-made-it-kit-conversation-cards-fathers-day-gift-grandpa.jpg";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { isFathersDayActive } from "@/lib/fathersDay";

const C = {
  forest: "var(--forest)",
  forestDark: "var(--forest-dark)",
  clay: "var(--clay)",
  sand: "var(--sand)",
  sandPale: "var(--sand-pale)",
  cream: "var(--cream)",
  creamDark: "var(--cream-dark, #EDE8E0)",
  textMid: "var(--text-mid)",
  border: "var(--border)",
};

type FeaturedKit = {
  name: string;
  price: string;
  href: string;
  blurb: string;
};

const FEATURED: FeaturedKit[] = [
  {
    name: "The Hands That Made It Kit",
    price: "$34",
    href: "/kits/hands-that-made-it",
    blurb:
      "For the dad whose hands built the household — workshops, sewing rooms, tools, the quiet patience of doing something right.",
  },
  {
    name: "The Places We've Been Kit",
    price: "$34",
    href: "/kits/places-weve-been",
    blurb:
      "For the dad with a strong sense of geography — Sunday drives, road trips, the neighborhoods he knew the corners of.",
  },
  {
    name: "The Remember When Kit",
    price: "$34",
    href: "/kits/remember-when",
    blurb:
      "For any father or grandfather — vintage trivia, picture prompts, and musical memory built around the decades that shaped him.",
  },
  {
    name: "The Comfort Bond Collection",
    price: "$147",
    href: "/kits/collection",
    blurb:
      "All five connection kits plus The Connection Season: Summer Edition — $147 instead of $204.",
  },
];

export default function FathersDay() {
  usePageMeta({
    title: "For Father's Day — The Comfort Bond™",
    description:
      "Four kits curated for Father's Day, June 21 — made for the dads and grandfathers who built things.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // After Father's Day, redirect to /shop. The page itself stays for reuse next year.
  if (!isFathersDayActive()) return <Navigate to="/shop" replace />;

  return (
    <div style={{ background: C.cream, minHeight: "100vh" }}>
      <header>
        <nav className="tcb-nav">
          <a href="/" className="nav-logo">
            <img
              src={logoImg}
              alt="The Comfort Bond logo"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
            />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/about">Our Story</a></li>
            <li><a href="/shop#kits">Connection Kits</a></li>
            <li><a href="/shop" className="nav-cta">Shop</a></li>
          </ul>
          <MobileMenuDrawer />
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section style={{ padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem) clamp(1.5rem,4vw,3rem)" }}>
          <div
            className="fd-hero-grid"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
              gap: "clamp(1.5rem,4vw,3.5rem)",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.clay,
                  marginBottom: 14,
                }}
              >
                A Seasonal Curation
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem,4.5vw,3.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: C.forestDark,
                  margin: "0 0 1rem",
                }}
              >
                For the dads and grandfathers who built things
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.05rem,2vw,1.2rem)",
                  color: C.textMid,
                  lineHeight: 1.55,
                  margin: "0 0 1rem",
                }}
              >
                Father's Day, June 21 — four thoughtful gifts curated for the way he actually shows love.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.95rem,1.6vw,1.05rem)",
                  color: C.textMid,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Printable conversation kits that help you ask better questions, hear old stories, and make the next call or visit feel more meaningful.
              </p>
            </div>
            <div
              style={{
                aspectRatio: "4 / 5",
                borderRadius: 14,
                overflow: "hidden",
                background: C.creamDark,
                boxShadow: "0 20px 48px -24px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={handsHeroImg}
                alt="The Hands That Made It Kit — workshop scene with tools and conversation cards"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section style={{ background: C.creamDark, padding: "clamp(2rem,5vw,3.5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              gap: "clamp(1.5rem,4vw,2.5rem)",
            }}
            className="fd-quotes"
          >
            {[
              {
                quote: "This helped my dad talk about old road trips we took as a family when I was younger.",
                cite: "Michelle M., May 2026",
              },
              {
                quote: "My grandfather lit up flipping through the picture prompts — he told stories I'd never heard before.",
                cite: "Daniel R., May 2026",
              },
            ].map((r) => (
              <div key={r.cite} style={{ textAlign: "center" }}>
                <div aria-label="5 out of 5 stars" style={{ color: C.clay, fontSize: 20, letterSpacing: 4, marginBottom: 12 }}>
                  ★ ★ ★ ★ ★
                </div>
                <blockquote
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.05rem,2vw,1.2rem)",
                    lineHeight: 1.6,
                    color: C.forestDark,
                    margin: "0 0 0.85rem",
                  }}
                >
                  “{r.quote}”
                </blockquote>
                <cite
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "normal",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: C.textMid,
                  }}
                >
                  — {r.cite}
                </cite>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section style={{ padding: "clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.clay,
                  marginBottom: 10,
                }}
              >
                Curated for Father's Day
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.55rem,3.2vw,2.2rem)",
                  fontWeight: 600,
                  color: C.forestDark,
                  margin: 0,
                }}
              >
                <em>Four kits, ordered by relevance.</em>
              </h2>
            </div>

            <div
              className="fd-cards"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                gap: "1.25rem",
              }}
            >
              {FEATURED.map((k) => (
                <Link
                  key={k.href}
                  to={k.href}
                  style={{
                    background: "#fff",
                    border: `1px solid ${C.border}`,
                    borderRadius: 14,
                    padding: "1.5rem 1.4rem 1.6rem",
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 8px 24px -18px rgba(0,0,0,0.25)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      background: "var(--clay, #C67B5C)",
                      color: "var(--cream, #F7F1E8)",
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      padding: "4px 10px",
                      borderRadius: 999,
                      marginBottom: 14,
                    }}
                  >
                    Perfect for Father's Day
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: C.forestDark,
                      margin: "0 0 0.55rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {k.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: C.clay,
                      margin: "0 0 0.85rem",
                    }}
                  >
                    {k.price}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: C.textMid,
                      margin: "0 0 1.1rem",
                      flex: 1,
                    }}
                  >
                    {k.blurb}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.clay,
                    }}
                  >
                    View kit →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING REFLECTION */}
        <section style={{ background: C.sandPale, padding: "clamp(2.5rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem,2.2vw,1.3rem)",
                lineHeight: 1.7,
                color: C.forestDark,
                margin: 0,
              }}
            >
              What you give him this Father's Day matters. What you ask him afterward may matter
              even more. Each of these kits is built to keep the conversation going, long after the
              card has been put away.
            </p>
          </div>
        </section>
      </main>

      <CookieConsent />

      <style>{`
        @media (max-width: 900px) {
          .fd-hero-grid { grid-template-columns: 1fr !important; }
          .fd-cards { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
          .fd-quotes { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .fd-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
