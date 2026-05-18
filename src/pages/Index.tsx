import React from "react";
import logoImg from "@/assets/the-comfort-bond-logo.webp";
import kitRememberWhen from "@/assets/remember-when-kit-conversation-cards-grandparents-family-memories.jpg";
import kitKitchenTable from "@/assets/kitchen-table-memories-kit-family-recipes-conversation-starters.jpg";
import kitPlacesWeveBeen from "@/assets/places-weve-been-kit-family-travel-stories-aging-parents.jpg";
import kitGardenMemories from "@/assets/garden-memories-kit-conversation-cards-grandparents-yard-stories.jpg";
import kitHandsThatMadeIt from "@/assets/hands-that-made-it-kit-family-recipes-heirloom-stories.jpg";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TagPills } from "@/pages/Shop";

const SAMPLER_URL = "https://the-comfort-bond-2.kit.com/3dfe0171af";

const HomeExitIntentModal = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const KEY = "home-exit-intent-shown";
    if (sessionStorage.getItem(KEY)) return;
    let armed = false;
    const armTimer = window.setTimeout(() => { armed = true; }, 8000);
    const trigger = () => {
      if (!armed || sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
      setOpen(true);
      cleanup();
    };
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      if (e.clientY > 0) return;
      trigger();
    };
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total > 0.6) trigger();
    };
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) window.addEventListener("scroll", onScroll, { passive: true });
    else document.addEventListener("mouseout", onMouseOut);
    function cleanup() {
      window.clearTimeout(armTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    }
    return cleanup;
  }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-cream border-[1.5px] border-terracotta/30 p-7 md:p-9 rounded-md">
        <div className="text-center">
          <div className="font-sans text-[10px] uppercase tracking-[0.32em] text-terracotta mb-4">
            Before you go
          </div>
          <DialogTitle className="font-serif text-forest text-[26px] md:text-[30px] leading-[1.15] tracking-tight">
            Take a free taste of The Comfort Bond with you.
          </DialogTitle>
          <DialogDescription className="mt-3 font-sans text-sm md:text-base text-foreground/75 leading-relaxed">
            The free Coffee & Connection Sampler — gentle conversation cards, visual spark cards, and a word link game for your next slow morning together.
          </DialogDescription>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={SAMPLER_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-terracotta text-cream font-sans font-medium text-[15px] rounded-full px-7 py-3 shadow-[0_8px_24px_-6px_rgba(198,123,92,0.5)] hover:bg-terracotta/90 transition"
          >
            Download the Free Coffee Sampler →
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const B2C_KEYWORDS = "conversation cards for aging parents, conversation cards for grandparents, conversation starters for elderly parents, questions to ask your grandparents, meaningful gifts for aging parents, family memory keepsake, legacy interview questions, family conversation starters, Mother's Day gift for elderly mom, Father's Day gift for aging dad, Grandparents Day gift ideas";
const SHARED_DESCRIPTION = "Gentle conversation cards, picture prompts, and connection kits for families, children and grandchildren who want deeper calls and visits with the people who raised them.";

const ArrowSvg = ({ color = "#fff" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Brand tokens (resolve to CSS vars)
const C = {
  forest: "var(--forest)",
  forestDark: "var(--forest-dark)",
  clay: "var(--clay)",
  sand: "var(--sand)",
  sandPale: "var(--sand-pale)",
  cream: "var(--cream)",
  creamDark: "var(--cream-dark, #EDE8E0)",
  textDark: "var(--text-dark)",
  textMid: "var(--text-mid)",
  border: "var(--border)",
};

// Image placeholder — used until real photography is uploaded
const ImagePlaceholder = ({ label, ratio = "4 / 3" }: { label: string; ratio?: string }) => (
  <div
    style={{
      aspectRatio: ratio,
      width: "100%",
      borderRadius: 16,
      background: `linear-gradient(135deg, ${C.creamDark}, var(--sand-pale))`,
      border: `1px dashed rgba(45,74,62,0.18)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: C.textMid,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      textAlign: "center",
      padding: "1rem",
    }}
    aria-hidden="true"
  >
    {label}
  </div>
);

const KITS: { icon: string; name: string; tags: string[]; image?: string }[] = [
  { icon: "💭", name: "The Remember When Kit", tags: ["Best-Seller", "Story Starters", "Gentle Games", "Start Here"], image: kitRememberWhen },
  { icon: "🍞", name: "The Kitchen Table Memories Kit", tags: ["Best-Seller", "Family Gatherings", "Family Stories", "Slow Visits"], image: kitKitchenTable },
  { icon: "🚗", name: "The Places We've Been Kit", tags: ["Long-Distance Friendly", "Story Starters", "Picture Prompts"], image: kitPlacesWeveBeen },
  { icon: "🌻", name: "The Garden Memories Kit", tags: ["Picture Prompts", "Slow Visits", "Gentle Favorite"], image: kitGardenMemories },
  { icon: "🔧", name: "The Hands That Made It Kit", tags: ["Story Starters", "Keepsake Friendly", "Heirloom Gift"], image: kitHandsThatMadeIt },
];

const PILLARS = [
  {
    title: "Connection",
    desc: "Simple prompts and rituals that help calls, visits, and shared moments feel meaningful — across distance, busy seasons, and the time you still have.",
  },
  {
    title: "Relief",
    desc: "A starting point for the moments you don't know what to say or do. Less awkwardness, less guilt — a soft place to land and a way back into the conversation.",
  },
  {
    title: "Legacy",
    desc: "Capture the recipes, sayings, songs, and ordinary stories that make them who they are — while there is still something beautiful to hold.",
  },
];

const Index = () => {
  const { pathname } = useLocation();
  const isFreeSampler = pathname === "/free-sampler";
  usePageMeta({
    title: isFreeSampler
      ? "Free Coffee & Connection Sampler | The Comfort Bond™"
      : "The Comfort Bond™ — Family Conversation Cards & Connection Kits for the People Who Raised You",
    description: SHARED_DESCRIPTION,
    keywords: B2C_KEYWORDS,
  });
  return (
    <div>
      <a href="#main" className="skip-nav">Skip to main content</a>

      {/* NAV */}
      <header>
        <nav className="tcb-nav">
          <a href="/" className="nav-logo">
            <img
              src={logoImg}
              alt="The Comfort Bond logo — meaningful family connection with aging parents and grandparents"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
            />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="#kits">Connection Kits</a></li>
            <li><a href="/shop" className="nav-cta">Shop</a></li>
          </ul>
          <MobileMenuDrawer />
        </nav>
      </header>

      <main id="main">

        {/* HERO */}
        <section style={{ padding: 0, background: C.cream }}>
          <div className="tcb-hero">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                FOR THE DAUGHTERS, SONS, AND GRANDCHILDREN
              </div>
              <h1>
                Meaningful moments with the people who raised you <span className="hero-h1-sub">— across calls, visits, distance, and the time you still have <em>together.</em></span>
              </h1>
              <div className="hero-actions">
                <a href={SAMPLER_URL} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary">
                  Download the Free Coffee Sampler
                </a>
                <a
                  href="#kits"
                  className="kits-outline-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "var(--cream)",
                    color: "#7a4a2e",
                    padding: "10px 18px",
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    border: "1.5px solid #7a4a2e",
                    fontFamily: "var(--font-sans)",
                    transition: "background 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
                  }}
                >
                  Explore the Connection Kits
                </a>
              </div>
              <div className="hero-trust">
                Instant digital download · Yours forever
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <picture>
                  <source type="image/avif" srcSet="/lcp/home-hero-480.avif 480w, /lcp/home-hero-768.avif 768w, /lcp/home-hero-1024.avif 1024w, /lcp/home-hero-1280.avif 1280w" sizes="(max-width: 768px) 100vw, 50vw" />
                  <source type="image/webp" srcSet="/lcp/home-hero-480.webp 480w, /lcp/home-hero-768.webp 768w, /lcp/home-hero-1024.webp 1024w, /lcp/home-hero-1280.webp 1280w" sizes="(max-width: 768px) 100vw, 50vw" />
                  <img
                    src="/lcp/home-hero-768.webp"
                    alt="The Connection Companion, conversation prompts, and memory cards laid out on a warm wooden table — tools for meaningful calls and visits with an aging parent or grandparent."
                    className="hero-photo"
                    width={768}
                    height={432}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* START HERE — 3 PATHS */}
        <section style={{ background: C.cream, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <div className="section-tag" style={{ display: "inline-flex" }}>Start here</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 0.75rem" }}>
              Start with <em style={{ color: C.clay }}>one meaningful moment.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: C.textMid, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 3rem" }}>
              Three simple paths, depending on where you want to begin.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", textAlign: "left" }}>
              {[
                {
                  prompt: "I want help planning more meaningful calls and visits.",
                  product: "The Connection Companion",
                  cta: "Download the free planner",
                  href: "https://the-comfort-bond-2.kit.com/de78d818c7",
                  badge: "Free",
                },
                {
                  prompt: "I want to try a simple activity with my loved one.",
                  product: "The Coffee & Connection Sampler",
                  cta: "Try the free sampler",
                  href: "https://the-comfort-bond-2.kit.com/3dfe0171af",
                  badge: "Free",
                },
                {
                  prompt: "I want the full toolkit for deeper bonding.",
                  product: "The Comfort Bond Collection",
                  cta: "Explore the collection",
                  href: "#collection",
                  badge: "Paid",
                },
              ].map((p, i) => {
                const palettes = [
                  { bg: "rgba(45,74,62,0.06)", border: C.forest, accent: C.forest },
                  { bg: "rgba(198,123,92,0.10)", border: C.clay, accent: C.clay },
                  { bg: "rgba(45,74,62,0.06)", border: C.forest, accent: C.forest },
                ];
                const tone = palettes[i % palettes.length];
                return (
                <a
                  key={i}
                  href={p.href}
                  {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{
                    background: tone.bg,
                    border: `2px solid ${tone.border}`,
                    borderRadius: 16,
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    textDecoration: "none",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: `0 4px 14px ${tone.border}22`,
                  }}
                  className="path-card"
                >
                  <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: p.badge === "Free" ? C.forest : C.clay, background: p.badge === "Free" ? "rgba(45,74,62,0.08)" : "rgba(198,123,92,0.1)", padding: "4px 10px", borderRadius: 100 }}>
                    {p.badge}
                  </span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.35, color: C.forestDark, margin: 0 }}>
                    “{p.prompt}”
                  </p>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.textMid, marginTop: "auto" }}>
                    {p.product}
                  </div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: tone.accent, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {p.cta} <ArrowSvg color={tone.accent} />
                  </span>
                </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* A NOTE FROM THE FOUNDER */}
        <section style={{ background: C.creamDark, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }} className="founder-grid">
            <div>
              <picture>
                <source type="image/avif" srcSet="/lcp/home-founder-480.avif 480w, /lcp/home-founder-768.avif 768w" sizes="(max-width: 768px) 100vw, 35vw" />
                <source type="image/webp" srcSet="/lcp/home-founder-480.webp 480w, /lcp/home-founder-768.webp 768w" sizes="(max-width: 768px) 100vw, 35vw" />
                <img src="/lcp/home-founder-768.webp" alt="Francesca, founder of The Comfort Bond" width={768} height={768} loading="lazy" decoding="async" style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 12, display: "block" }} />
              </picture>
            </div>
            <div>
              <div className="section-tag">A note from the founder</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,2.6vw,2rem)", fontWeight: 600, lineHeight: 1.25, color: C.forestDark, margin: "0.5rem 0 1rem" }}>
                I built this for the call I was always grateful I made.
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 0.75rem" }}>
                I built The Comfort Bond after losing my grandmother, Félicité, in May 2024.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1.25rem" }}>
                This brand is for anyone who wants the next call or visit with a parent or grandparent to feel deeper than &ldquo;How are you?&rdquo;{" "}
                <a href="/our-story" style={{ fontWeight: 500, color: C.clay, textDecoration: "none", borderBottom: `1px solid ${C.clay}` }}>
                  Read the full story →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* THE BONDING BLUEPRINT — flagship paid */}
        <section id="blueprint" style={{ background: C.cream, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }} className="founder-grid">
            <div>
              <div className="section-tag">Flagship · The Connection Season — Summer Edition</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 0.85rem" }}>
                Turn July through September into a <em style={{ color: C.clay }}>rhythm of meaningful calls, visits, and shared memories.</em>
              </h2>
              <TagPills tags={["Weekly Rhythm", "Seasonal Favorite", "Family Gatherings"]} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1.25rem" }}>
                A 41-page seasonal companion for the daughter, son, or grandchild who wants the next
                conversation to feel deeper than &ldquo;How are you?&rdquo; — with 13 themed weeks, a
                letter from the founder, and pages for the stories you don&rsquo;t want to lose.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: C.forestDark, margin: "0 0 1.5rem", letterSpacing: "0.02em", whiteSpace: "pre-line" }}>
                {"\n"}
              </p>
              <a href="/shop" className="btn-primary">
                View The Summer Edition
                <ArrowSvg />
              </a>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.textMid, margin: "0.75rem 0 0", opacity: 0.85 }}>
                $34 · Instant download · Use it printed, on a tablet, or right from your phone
              </p>
            </div>
            <div style={{ aspectRatio: "4 / 5", background: C.cream, borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <picture>
                <source type="image/avif" srcSet="/lcp/summer-edition-480.avif 480w, /lcp/summer-edition-768.avif 768w, /lcp/summer-edition-1100.avif 1100w" sizes="(max-width: 768px) 100vw, 45vw" />
                <source type="image/webp" srcSet="/lcp/summer-edition-480.webp 480w, /lcp/summer-edition-768.webp 768w, /lcp/summer-edition-1100.webp 1100w" sizes="(max-width: 768px) 100vw, 45vw" />
                <img src="/lcp/summer-edition-768.webp" alt="The Connection Season: Summer Edition — printable 13-week summer family connection planner for meaningful calls and visits with aging parents and grandparents" width={768} height={1024} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </picture>
            </div>
          </div>
        </section>

        {/* BONDING & CONNECTION KITS */}
        <section id="kits" style={{ background: C.creamDark, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="section-tag">The Comfort Bond Connection Kits</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 1rem" }}>
              Five themed kits, built around <em style={{ color: C.clay }}>familiar life moments.</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginTop: "2.5rem" }}>
              {KITS.map((k, i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  {k.image ? (
                    <img
                      src={k.image}
                      alt={`${k.name} — printable Comfort Bond Connection Kit with conversation cards, reminiscence prompts, trivia and memory BINGO for aging parents and grandparents`}
                      loading="lazy"
                      style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <ImagePlaceholder label={k.name} ratio="4 / 3" />
                  )}
                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, color: C.forestDark, margin: 0, lineHeight: 1.3 }}>
                      {k.name}
                    </h3>
                    <TagPills tags={k.tags} />
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 14, fontWeight: 600, color: C.clay, marginTop: "0.25rem" }}>
                      $34
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href="/shop" className="btn-primary" style={{ display: "inline-flex" }}>
                Find the Kit That Fits Your Loved One
                <ArrowSvg />
              </a>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.textMid, margin: "0.75rem 0 0", opacity: 0.85 }}>
                $34 each · Instant download · Use it printed, on a tablet, or right from your phone
              </p>
            </div>
          </div>
        </section>

        {/* THE COMFORT BOND COLLECTION */}
        <section id="collection" style={{ background: C.forestDark, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)", color: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }} className="founder-grid">
            <div style={{ borderRadius: 12, overflow: "hidden", display: "block" }}>
              <picture>
                <source type="image/avif" srcSet="/lcp/collection-480.avif 480w, /lcp/collection-768.avif 768w, /lcp/collection-1100.avif 1100w" sizes="(max-width: 768px) 100vw, 45vw" />
                <source type="image/webp" srcSet="/lcp/collection-480.webp 480w, /lcp/collection-768.webp 768w, /lcp/collection-1100.webp 1100w" sizes="(max-width: 768px) 100vw, 45vw" />
                <img src="/lcp/collection-768.webp" alt="The Comfort Bond Collection — complete bundle of all five printable family connection kits plus The Connection Season: Summer Edition seasonal planner" width={1100} height={825} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", borderRadius: 12 }} />
              </picture>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.sand, marginBottom: 8 }}>
                The complete toolkit
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", margin: "0 0 0.85rem" }}>
                The Comfort Bond <em style={{ color: C.sand }}>Collection.</em>
              </h2>
              <TagPills tags={["Best Value", "Heirloom Gift", "Family Gatherings"]} light />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.78)", margin: "0 0 1.5rem" }}>
                All five Comfort Bond Connection Kits plus The Connection Season: Summer Edition —
                every theme, every era, every conversation worth having. For the family ready to
                commit to a full season of meaningful moments together.
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "0 0 1rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 600, color: "#fff" }}>$147</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: C.sand, textDecoration: "line-through", opacity: 0.7 }}>$204</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.sand, fontWeight: 500 }}>
                  Save $57
                </span>
              </div>
              <a href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.sand, color: C.forestDark, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, padding: "12px 24px", borderRadius: 999, textDecoration: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.22)" }}>
                View the Collection
                <ArrowSvg color={C.forestDark} />
              </a>
            </div>
          </div>
        </section>

        {/* CONNECTION ACROSS DISTANCE — visual band */}
        <section style={{ background: C.forestDark, padding: "0 clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <picture>
              <source type="image/avif" srcSet="/lcp/home-collection-480.avif 480w, /lcp/home-collection-768.avif 768w, /lcp/home-collection-1100.avif 1100w" sizes="(max-width: 1100px) 100vw, 1100px" />
              <source type="image/webp" srcSet="/lcp/home-collection-480.webp 480w, /lcp/home-collection-768.webp 768w, /lcp/home-collection-1100.webp 1100w" sizes="(max-width: 1100px) 100vw, 1100px" />
              <img src="/lcp/home-collection-1100.webp" alt="Adult daughter on a video call with her aging mother — using The Comfort Bond Collection conversation cards across distance" width={1100} height={619} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", borderRadius: 12, display: "block", objectFit: "contain" }} />
            </picture>
          </div>
        </section>

        {/* FREE RESOURCES */}
        <section style={{ background: C.sandPale, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="section-tag">Free resources</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 2.5rem" }}>
              Two free ways <em style={{ color: C.clay }}>to begin.</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {[
                {
                  eyebrow: "Primary freebie · Weekly planner",
                  title: "The Connection Companion",
                  tags: ["Start Here", "Free", "Slow Visits"],
                  desc: "A free weekly guide for planning more meaningful calls, visits, and shared moments with a parent or grandparent.",
                  insideLabel: "What's inside this free guide:",
                  inside: [
                    "A weekly connection planner — Monday through Sunday",
                    "The Six Dimensions of Bonding compass for richer weeks",
                    "A themed week starter with 5 conversation prompts",
                  ],
                  cta: "Download the Free Connection Companion",
                  href: "https://the-comfort-bond-2.kit.com/de78d818c7",
                  imgLabel: "Connection Companion mockup",
                },
                {
                  eyebrow: "Secondary freebie · Mini connection kit",
                  title: "The Coffee & Connection Sampler",
                  tags: ["Start Here", "Free", "Sunday Calls"],
                  desc: "A free mini connection kit with conversation prompts, visual memory cards, and a gentle word game built around familiar morning rituals.",
                  insideLabel: "What's inside this free sampler:",
                  inside: [
                    "8 gentle conversation cards for slow morning visits",
                    "6 image-based visual spark cards",
                    "A 10-round word link game",
                  ],
                  cta: "Try the Free Coffee & Connection Sampler",
                  href: "https://the-comfort-bond-2.kit.com/3dfe0171af",
                  imgLabel: "Coffee & Connection Sampler mockup",
                },
              ].map((f, i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "1.25rem 1.25rem 0" }}>
                    {f.title === "The Connection Companion" || f.title === "The Coffee & Connection Sampler" ? (
                      <div style={{ aspectRatio: "16 / 10", width: "100%", borderRadius: 16, background: `linear-gradient(135deg, ${C.creamDark}, var(--sand-pale))`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        {(() => {
                          const base = f.title === "The Connection Companion" ? "home-connection-companion" : "home-coffee-sampler";
                          const alt = f.title === "The Connection Companion"
                            ? "The Connection Companion free weekly planner — cover and inside spreads showing the Six Dimensions of Bonding wheel, weekly connection plan, and reflection notes."
                            : "The Coffee & Connection Sampler — cover and inside spreads showing conversation cards, visual spark cards, and the word link game.";
                          return (
                            <picture>
                              <source type="image/avif" srcSet={`/lcp/${base}-480.avif 480w, /lcp/${base}-768.avif 768w`} sizes="(max-width: 768px) 100vw, 33vw" />
                              <source type="image/webp" srcSet={`/lcp/${base}-480.webp 480w, /lcp/${base}-768.webp 768w`} sizes="(max-width: 768px) 100vw, 33vw" />
                              <img src={`/lcp/${base}-768.webp`} alt={alt} width={768} height={576} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            </picture>
                          );
                        })()}
                      </div>
                    ) : (
                      <ImagePlaceholder label={f.imgLabel} ratio="16 / 10" />
                    )}
                  </div>
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.clay }}>
                      {f.eyebrow}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 600, color: C.forestDark, margin: 0, lineHeight: 1.25 }}>
                      {f.title}
                    </h3>
                    <TagPills tags={f.tags} />
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: C.textMid, margin: 0 }}>
                      {f.desc}
                    </p>
                    <div style={{ background: "var(--sand-pale)", borderRadius: 12, padding: "0.85rem 1rem", marginTop: "0.25rem" }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.forestDark, marginBottom: 6 }}>
                        {f.insideLabel}
                      </div>
                      <ul style={{ margin: 0, paddingLeft: 20, fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.6, color: C.textMid, listStyleType: "disc", listStylePosition: "outside" }}>
                        {f.inside.map((item, j) => (
                          <li key={j} style={{ marginBottom: 4, display: "list-item" }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a href={f.href} {...(f.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
                      {f.cta}
                      <ArrowSvg />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section style={{ background: C.cream, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <div className="section-tag" style={{ display: "inline-flex" }}>What we believe</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 2.5rem" }}>
              Three quiet pillars hold <em style={{ color: C.clay }}>the work.</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
              {PILLARS.map((p, i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.clay, marginBottom: 8 }}>
                    Pillar 0{i + 1}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 600, color: C.forestDark, margin: "0 0 0.75rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: C.textMid, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="tcb-footer">
        <div className="footer-inner footer-inner-3col">
          <div className="footer-brand">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", fontWeight: 600 }}>The Comfort Bond™</div>
            <p>Nurturing Comfort, Inspiring Connection.</p>
          </div>
          <div className="footer-col">
            <h4>Start free</h4>
            <ul>
              <li><a href="https://the-comfort-bond-2.kit.com/de78d818c7" target="_blank" rel="noopener noreferrer">Free Connection Companion</a></li>
              <li><a href="https://the-comfort-bond-2.kit.com/3dfe0171af" target="_blank" rel="noopener noreferrer">Free Coffee & Connection Sampler</a></li>
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
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="mailto:hello@thecomfortbond.com">hello@thecomfortbond.com</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "18px 0 6px", borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 8 }}>
          <span style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Secure checkout</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { slug: "visa", alt: "Visa" },
              { slug: "mastercard", alt: "Mastercard" },
              { slug: "amex", alt: "American Express" },
              { slug: "paypal", alt: "PayPal" },
            ].map((p) => (
              <img
                key={p.slug}
                src={`https://cdn.jsdelivr.net/gh/aaronfagan/svg-credit-card-payment-icons@main/flat/${p.slug}.svg`}
                alt={p.alt}
                loading="lazy"
                width={38}
                height={24}
                style={{ height: 24, width: "auto", borderRadius: 3, background: "#fff", padding: 1 }}
              />
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 The Comfort Bond™ · Made with care in Texas 🤍 ·</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>
      <CookieConsent />
      <StickyMobileCTA href={SAMPLER_URL} label="Get the Free Coffee Sampler" showAfter={500} />
      <HomeExitIntentModal />

      <style>{`
        @media (max-width: 720px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
        .path-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(45,74,62,0.08); }
        .kits-outline-cta:hover {
          background: #7a4a2e !important;
          color: var(--cream) !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(122,74,46,0.28);
        }
        .kits-outline-cta:focus-visible {
          outline: 2px solid #7a4a2e;
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
};

export default Index;
