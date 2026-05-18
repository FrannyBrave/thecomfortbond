import { useEffect, useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import logoImg from "@/assets/the-comfort-bond-logo.webp";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { openPaddleCheckout } from "@/lib/paddle";
import { usePageMeta } from "@/hooks/usePageMeta";
import { KIT_DETAILS, type KitDetail, type CrossSell } from "@/data/kitDetails";
import { TagPills } from "@/pages/Shop";

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

const ArrowSvg = ({ color = "#fff" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div
    style={{
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: light ? C.sand : C.clay,
      marginBottom: 10,
    }}
  >
    {children}
  </div>
);

function PrimaryButton({ kit, dark = false }: { kit: KitDetail; dark?: boolean }) {
  const handleClick = () => {
    if (kit.externalCheckoutHref) {
      window.open(kit.externalCheckoutHref, "_blank", "noopener,noreferrer,nofollow");
    } else if (kit.priceId) {
      void openPaddleCheckout(kit.priceId);
    }
  };
  if (dark) {
    return (
      <button
        type="button"
        onClick={handleClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: C.sand,
          color: C.forestDark,
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 600,
          padding: "12px 24px",
          borderRadius: 999,
          border: 0,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.22)",
        }}
      >
        {kit.ctaText} <ArrowSvg color={C.forestDark} />
      </button>
    );
  }
  return (
    <button type="button" className="btn-primary" onClick={handleClick} style={{ border: 0, cursor: "pointer" }}>
      {kit.ctaText} <ArrowSvg />
    </button>
  );
}

function CrossSellCard({ item }: { item: CrossSell }) {
  const isExternal = /^https?:\/\//.test(item.href);
  const inner = (
    <>
      <div style={{ aspectRatio: "4 / 3", overflow: "hidden", background: C.creamDark }}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ padding: "1rem 1.1rem 1.15rem" }}>
        <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600, color: C.forestDark, margin: "0 0 0.4rem", lineHeight: 1.3 }}>
          {item.title}
        </h4>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.6, color: C.textMid, margin: 0 }}>
          {item.blurb}
        </p>
        <span style={{ display: "inline-block", marginTop: "0.7rem", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: C.clay }}>
          View details →
        </span>
      </div>
    </>
  );
  const cardStyle: React.CSSProperties = {
    display: "block",
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: 14,
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
  };
  return isExternal ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer nofollow" style={cardStyle}>{inner}</a>
  ) : (
    <Link to={item.href} style={cardStyle}>{inner}</Link>
  );
}

export default function KitDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const kit = KIT_DETAILS[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta({
    title: kit ? `${kit.name} — ${kit.tagline} | The Comfort Bond™` : "The Comfort Bond™",
    description: kit ? kit.description.slice(0, 160) : "",
  });

  // FAQPage schema
  useEffect(() => {
    if (!kit) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faqpage", `kit-${kit.slug}`);
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: kit.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [kit]);

  // Preload the LCP hero image. Prefers AVIF srcset, falls back to WebP, then
  // the bundled JPG. Browsers that don't understand imagesrcset will use href.
  useEffect(() => {
    if (!kit) return;
    const avif = kit.heroPictureSources?.find((s) => s.type === "image/avif");
    const webp = kit.heroPictureSources?.find((s) => s.type === "image/webp");
    const chosen = avif ?? webp;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.fetchPriority = "high";
    if (chosen) {
      link.setAttribute("imagesrcset", chosen.srcSet);
      link.setAttribute("imagesizes", chosen.sizes);
      if (avif) link.type = "image/avif";
      else if (webp) link.type = "image/webp";
    }
    link.href = kit.heroImage;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [kit]);

  if (!kit) return <Navigate to="/shop" replace />;

  const isCollection = kit.slug === "collection";

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
        {/* Breadcrumb */}
        <div style={{ background: C.cream, padding: "1rem clamp(1.5rem,5vw,4rem) 0", maxWidth: 1180, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.textMid }}>
            <Link to="/shop" style={{ color: C.clay, textDecoration: "none" }}>Shop</Link>
            <span style={{ margin: "0 0.5rem", opacity: 0.5 }}>/</span>
            <span>{kit.name}</span>
          </nav>
        </div>

        {/* HERO */}
        <section style={{ background: C.cream, padding: "clamp(1.5rem,4vw,3rem) clamp(1.5rem,5vw,4rem) clamp(2rem,5vw,4rem)" }}>
          <div className="kit-hero-grid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(1.5rem,4vw,3.5rem)", alignItems: "center" }}>
            <div style={{ aspectRatio: kit.heroWidth && kit.heroHeight ? `${kit.heroWidth} / ${kit.heroHeight}` : (isCollection ? "4 / 3" : "4 / 5"), borderRadius: 14, overflow: "hidden", background: C.creamDark, boxShadow: "0 20px 48px -24px rgba(0,0,0,0.35)" }}>
              <picture>
                {kit.heroPictureSources?.map((s, i) => (
                  <source key={i} type={s.type} srcSet={s.srcSet} sizes={s.sizes} />
                ))}
                <img
                  src={kit.heroImage}
                  alt={kit.heroAlt ?? `${kit.name} — ${kit.tagline}`}
                  width={kit.heroWidth}
                  height={kit.heroHeight}
                  style={{ width: "100%", height: "100%", objectFit: kit.heroObjectFit ?? "cover", display: "block" }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <div>
              <Eyebrow>{isCollection ? "The Complete Collection" : "Connection Kit"}</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,4vw,2.85rem)", fontWeight: 600, lineHeight: 1.15, color: C.forestDark, margin: "0 0 0.65rem" }}>
                {kit.name}
              </h1>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: C.clay, margin: "0 0 1.1rem" }}>
                {kit.tagline}
              </p>
              <TagPills tags={kit.tags} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", margin: "0.5rem 0 1.25rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", color: C.clay, fontWeight: 600 }}>{kit.price}</span>
                {kit.priceCompare && (
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "rgba(45,74,62,0.45)", textDecoration: "line-through" }}>{kit.priceCompare}</span>
                )}
                {kit.priceSavings && (
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: C.clay, fontWeight: 600, letterSpacing: "0.02em" }}>{kit.priceSavings}</span>
                )}
              </div>
              {kit.pageNote && (
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700, fontSize: "0.95rem", color: "#8B9D83", margin: "-0.5rem 0 1.1rem" }}>
                  {kit.pageNote}
                </p>
              )}
              <PrimaryButton kit={kit} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.textMid, margin: "0.85rem 0 0", opacity: 0.85 }}>
                Instant download · Use it printed, on a tablet, or right from your phone
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        {kit.gallery && kit.gallery.length > 0 && (
          <section style={{ background: C.creamDark, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Eyebrow>A closer look</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.45rem,3vw,2rem)", fontWeight: 600, color: C.forestDark, margin: 0 }}>
                  <em>See it on the table.</em>
                </h2>
              </div>
              <div className="kit-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "1rem" }}>
                {kit.gallery.map((g, i) => (
                  <div key={i} style={{ aspectRatio: g.width && g.height ? `${g.width} / ${g.height}` : "4 / 3", overflow: "hidden", borderRadius: 14, background: C.cream, boxShadow: "0 10px 30px -18px rgba(0,0,0,0.3)" }}>
                    <picture>
                      {g.pictureSources?.map((s, j) => (
                        <source key={j} type={s.type} srcSet={s.srcSet} sizes={s.sizes} />
                      ))}
                      <img
                        src={g.src}
                        alt={g.alt}
                        width={g.width}
                        height={g.height}
                        loading="lazy"
                        decoding="async"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* DESCRIPTION */}
        <section style={{ background: C.sandPale, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.05rem,2vw,1.2rem)", lineHeight: 1.7, color: C.forestDark, margin: 0 }}>
              {kit.description}
            </p>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ background: C.cream, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Eyebrow>What's inside</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.45rem,3vw,2rem)", fontWeight: 600, color: C.forestDark, margin: "0 0 1.5rem" }}>
              <em>Everything in the kit.</em>
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              {kit.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: C.textMid }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(198,123,92,0.12)", color: C.clay, fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SAMPLE PROMPTS */}
        <section style={{ background: C.creamDark, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 920, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Eyebrow>Sample prompts</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.45rem,3vw,2rem)", fontWeight: 600, color: C.forestDark, margin: 0 }}>
                <em>{kit.promptsHeadline}</em>
              </h2>
            </div>
            <div style={{ display: "grid", gap: "1rem" }}>
              {kit.prompts.map((p, i) => (
                <blockquote
                  key={i}
                  style={{
                    background: "#fff",
                    border: `1px solid ${C.border}`,
                    borderLeft: `4px solid ${C.clay}`,
                    borderRadius: 12,
                    padding: "1.25rem 1.5rem",
                    margin: 0,
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: C.forestDark,
                  }}
                >
                  <span aria-hidden="true" style={{ color: C.clay, fontSize: "1.4rem", marginRight: 6 }}>“</span>
                  {p}
                  <span aria-hidden="true" style={{ color: C.clay, fontSize: "1.4rem", marginLeft: 2 }}>”</span>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: C.cream, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Eyebrow>Good Questions</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.45rem,3vw,2rem)", fontWeight: 600, color: C.forestDark, margin: 0 }}>
                <em>Questions you might have</em>
              </h2>
            </div>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {kit.faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "transparent",
                        border: 0,
                        padding: "1.1rem 1.25rem",
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: C.forestDark,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <span>{f.q}</span>
                      <span aria-hidden="true" style={{ color: C.clay, fontSize: 20, fontWeight: 400, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none", flexShrink: 0 }}>+</span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 1.25rem 1.25rem", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.75, color: C.textMid }}>
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BEST FOR */}
        <section style={{ background: C.sandPale, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <Eyebrow>Best for…</Eyebrow>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,2.2vw,1.35rem)", lineHeight: 1.6, color: C.forestDark, margin: 0 }}>
              {kit.bestFor}
            </p>
          </div>
        </section>

        {/* PAIRS WELL WITH */}
        <section style={{ background: C.cream, padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Eyebrow>Pairs well with</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.45rem,3vw,2rem)", fontWeight: 600, color: C.forestDark, margin: 0 }}>
                <em>Other kits families reach for next.</em>
              </h2>
            </div>
            <div className="kit-pairs-grid" style={{ display: "grid", gridTemplateColumns: kit.pairsWith.length > 1 ? "repeat(2, minmax(0,1fr))" : "minmax(0, 420px)", gap: "1.25rem", justifyContent: "center" }}>
              {kit.pairsWith.map((p) => (
                <CrossSellCard key={p.href} item={p} />
              ))}
            </div>
          </div>
        </section>

        {/* SECONDARY CTA */}
        <section style={{ background: C.forestDark, color: "#fff", padding: "clamp(2.5rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.55rem,3.2vw,2.3rem)", fontWeight: 600, lineHeight: 1.25, color: "#fff", margin: "0 0 1.5rem" }}>
              <em>{kit.tagline}</em>
            </h2>
            <PrimaryButton kit={kit} dark />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0.85rem 0 0" }}>
              Instant download · Use it printed, on a tablet, or right from your phone
            </p>
          </div>
        </section>
      </main>

      <footer className="tcb-footer">
        <div className="footer-inner footer-inner-3col">
          <div className="footer-brand">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", fontWeight: 600 }}>The Comfort Bond™</div>
            <p>Nurturing Comfort, Inspiring Connection.</p>
          </div>
          <div className="footer-col">
            <h4>Start free</h4>
            <ul>
              <li><a href="https://the-comfort-bond-2.kit.com/de78d818c7" target="_blank" rel="noopener noreferrer nofollow">Free Connection Companion</a></li>
              <li><a href="https://the-comfort-bond-2.kit.com/3dfe0171af" target="_blank" rel="noopener noreferrer nofollow">Free Coffee & Connection Sampler</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/shop">Shop All</a></li>
              <li><a href="/kits/connection-season-summer">The Connection Season: Summer</a></li>
              <li><a href="/kits/collection">The Comfort Bond Collection</a></li>
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
          <span className="footer-copy">© 2026 The Comfort Bond™ · Made with care in Texas 🤍 ·</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>

      <CookieConsent />
      <StickyMobileCTA
        label={kit.stickyCta}
        onClick={() => {
          if (kit.externalCheckoutHref) {
            window.open(kit.externalCheckoutHref, "_blank", "noopener,noreferrer,nofollow");
          } else if (kit.priceId) {
            void openPaddleCheckout(kit.priceId);
          }
        }}
        showAfter={400}
      />

      <style>{`
        @media (max-width: 820px) {
          .kit-hero-grid { grid-template-columns: 1fr !important; }
          .kit-pairs-grid { grid-template-columns: 1fr !important; }
          .kit-gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
