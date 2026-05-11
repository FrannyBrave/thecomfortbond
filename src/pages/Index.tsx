import React from "react";
import logoImg from "@/assets/the-comfort-bond-logo.webp";
import heroPhoto from "@/assets/hero-family-connection.png";
import finalCtaPhoto from "@/assets/final-cta-family-table.png";
import kitRememberWhen from "@/assets/kit-remember-when.jpg";
import kitKitchenTable from "@/assets/kit-kitchen-table.jpg";
import kitPlacesWeveBeen from "@/assets/kit-places-weve-been.jpg";
import kitGardenMemories from "@/assets/kit-garden-memories.jpg";
import kitHandsThatMadeIt from "@/assets/kit-hands-that-made-it.jpg";
import connectionCompanionMockup from "@/assets/connection-companion-mockup.png";
import coffeeConnectionSamplerMockup from "@/assets/coffee-connection-sampler-mockup.png";
import connectionSeasonSummerMockup from "@/assets/connection-season-summer-mockup.png";
import comfortBondCollectionMockup from "@/assets/comfort-bond-collection-mockup.png";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";

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

const KITS: { icon: string; name: string; theme: string; image?: string }[] = [
  { icon: "💭", name: "The Remember When Kit", theme: "Decades, family history & childhood", image: kitRememberWhen },
  { icon: "🍞", name: "The Kitchen Table Memories Kit", theme: "Sunday suppers & family meals", image: kitKitchenTable },
  { icon: "🚗", name: "The Places We've Been Kit", theme: "Road trips, travel & home places", image: kitPlacesWeveBeen },
  { icon: "🌻", name: "The Garden Memories Kit", theme: "Seasons, growing & the outdoors", image: kitGardenMemories },
  { icon: "🔧", name: "The Hands That Made It Kit", theme: "Crafts, trades & things built to last", image: kitHandsThatMadeIt },
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
            <li><a href="#blueprint" className="nav-blueprint">The Connection Season: Summer Edition</a></li>
            <li><a href="/blueprint" className="nav-blueprint">Free Connection Companion</a></li>
            <li><a href="#collection" className="nav-cta">The Collection</a></li>
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
                For families who love someone aging
              </div>
              <h1>
                For the daughter, son, or grandchild who wishes the conversations <em>went deeper.</em>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: C.textMid,
                  marginTop: "1.25rem",
                  maxWidth: 560,
                }}
              >
                The Comfort Bond helps you create meaningful moments with your aging parent or
                grandparent — across phone calls, visits, distance, memory loss, and the time
                you still have.
              </p>
              <div className="hero-actions">
                <a href="/blueprint" className="btn-primary">
                  Download the Free Connection Companion
                  <ArrowSvg />
                </a>
                <a href="#kits" className="btn-secondary">Explore the Bonding Kits</a>
              </div>
              <div className="hero-trust">
                Free instant download · A weekly guide for more meaningful calls and visits
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <img
                  src={heroPhoto}
                  alt="The Connection Companion, conversation prompts, and memory cards laid out on a warm wooden table — tools for meaningful calls and visits with an aging parent or grandparent."
                  className="hero-photo"
                  loading="eager"
                  decoding="async"
                />
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
                  href: "/blueprint",
                  badge: "Free",
                },
                {
                  prompt: "I want to try a simple activity with my loved one.",
                  product: "The Coffee & Connection Sampler",
                  cta: "Try the free sampler",
                  href: "/free-sampler",
                  badge: "Free",
                },
                {
                  prompt: "I want the full toolkit for deeper bonding.",
                  product: "The Comfort Bond Collection",
                  cta: "Explore the collection",
                  href: "#collection",
                  badge: "Paid",
                },
              ].map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  style={{
                    background: "#fff",
                    border: `1px solid ${C.border}`,
                    borderRadius: 16,
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    textDecoration: "none",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 1px 2px rgba(45,74,62,0.04)",
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
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: C.clay, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {p.cta} <ArrowSvg color="var(--clay)" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* A NOTE FROM THE FOUNDER */}
        <section style={{ background: C.creamDark, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }} className="founder-grid">
            <div>
              <ImagePlaceholder label="Founder portrait" ratio="1 / 1" />
            </div>
            <div>
              <div className="section-tag">A note from the founder</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,2.6vw,2rem)", fontWeight: 600, lineHeight: 1.25, color: C.forestDark, margin: "0.5rem 0 1rem" }}>
                I built this for the call I was always grateful I made.
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1rem" }}>
                I built The Comfort Bond after losing my grandmother in May of 2024 — my only
                grandparent left, and one of the most important people in my life.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1rem" }}>
                I lived far from her. I could not visit the way I wanted to. But I called her, and
                I made sure she always knew how deeply she was loved. That is the part I am
                grateful for. That is the part that holds.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1.25rem" }}>
                The Comfort Bond is the brand I wish I had when I wanted our calls to feel deeper
                than “How are you?” — for daughters, sons, grandchildren, and anyone who loves a
                parent or grandparent, across the country or across the room.
              </p>
              <a href="/our-story" style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: C.clay, textDecoration: "none", borderBottom: `1px solid ${C.clay}`, paddingBottom: 2 }}>
                Read the full story →
              </a>
            </div>
          </div>
        </section>

        {/* THE BONDING BLUEPRINT — flagship paid */}
        <section id="blueprint" style={{ background: C.cream, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }} className="founder-grid">
            <div>
              <div className="section-tag">Flagship · The Connection Season — Summer Edition</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 1rem" }}>
                Turn July through September into a <em style={{ color: C.clay }}>rhythm of meaningful calls, visits, and shared memories.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1.25rem" }}>
                Made for the daughter, son, or grandchild who wants the next conversation to feel
                deeper than &ldquo;How are you?&rdquo; — for phone calls, video calls, or in-person visits.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "grid", gap: "0.5rem" }}>
                {[
                  "13 themed weeks of summer bonding prompts",
                  "Weekly planning pages for calls, visits, and shared moments",
                  "\u201CWhat They Told Me\u201D — legacy pages for the recipes, sayings, and stories worth keeping",
                ].map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: 14.5, color: C.textMid, lineHeight: 1.6 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(198,123,92,0.12)", color: C.clay, fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#collection" className="btn-primary">
                View The Connection Season: Summer Edition
                <ArrowSvg />
              </a>
            </div>
            <div style={{ aspectRatio: "4 / 5", background: C.cream, borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={connectionSeasonSummerMockup}
                alt="The Connection Season: Summer Edition mockup"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* BONDING & CONNECTION KITS */}
        <section id="kits" style={{ background: C.creamDark, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="section-tag">Bonding &amp; Connection Kits</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0.5rem 0 1rem" }}>
              Five themed kits, built around <em style={{ color: C.clay }}>familiar life moments.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: C.textMid, lineHeight: 1.75, maxWidth: 680, margin: "0 0 1.5rem" }}>
              Each Bonding &amp; Connection Kit is built around a familiar life theme your loved
              one will already know in their bones — kitchens, gardens, road trips, music,
              handmade work, and everyday memories. Make the next call or visit feel less
              awkward, more personal, and more worth remembering.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", maxWidth: 680, display: "grid", gap: "0.5rem" }}>
              {[
                "Conversation prompts that spark real stories",
                "Visual cards for recognition and memory",
                "BINGO, trivia, word games, and music prompts",
                "Reflection space to capture what they shared",
                "Works for phone calls, video calls, and in-person visits",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: C.textMid, lineHeight: 1.6, display: "flex", gap: "0.6rem" }}>
                  <span style={{ color: C.clay, fontWeight: 600 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {KITS.map((k, i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  {k.image ? (
                    <img
                      src={k.image}
                      alt={k.name}
                      loading="lazy"
                      style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <ImagePlaceholder label={k.name} ratio="4 / 3" />
                  )}
                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <div style={{ fontSize: 22 }} aria-hidden="true">{k.icon}</div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, color: C.forestDark, margin: 0, lineHeight: 1.3 }}>
                      {k.name}
                    </h3>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: C.textMid, lineHeight: 1.5 }}>
                      {k.theme}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href="#collection" className="btn-primary" style={{ display: "inline-flex" }}>
                Find the Kit That Fits Your Loved One
                <ArrowSvg />
              </a>
            </div>
          </div>
        </section>

        {/* THE COMFORT BOND COLLECTION */}
        <section id="collection" style={{ background: C.forestDark, padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)", color: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }} className="founder-grid">
            <div style={{ aspectRatio: "4 / 5", borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={comfortBondCollectionMockup}
                alt="The Comfort Bond Collection — all five Bonding & Connection Kits"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                loading="lazy"
              />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.sand, marginBottom: 8 }}>
                The complete toolkit
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", margin: "0 0 1rem" }}>
                The Comfort Bond <em style={{ color: C.sand }}>Collection.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.78)", margin: "0 0 1.5rem" }}>
                The complete family connection toolkit — all five Bonding &amp; Connection Kits plus
                bonus guidance for families who want a fuller way to connect, remember, and
                preserve stories across a season.
              </p>
              <a href="/kits" className="btn-primary">
                View the Collection
                <ArrowSvg />
              </a>
            </div>
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
                  desc: "A free weekly guide for planning more meaningful calls, visits, and shared moments with an aging parent or grandparent.",
                  cta: "Download the Free Connection Companion",
                  href: "/blueprint",
                  imgLabel: "Connection Companion mockup",
                },
                {
                  eyebrow: "Secondary freebie · Mini connection kit",
                  title: "The Coffee & Connection Sampler",
                  desc: "A free mini connection kit with conversation prompts, visual memory cards, and a gentle word game built around familiar morning rituals.",
                  cta: "Try the Free Coffee & Connection Sampler",
                  href: "/free-sampler",
                  imgLabel: "Coffee & Connection Sampler mockup",
                },
              ].map((f, i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "1.25rem 1.25rem 0" }}>
                    {f.title === "The Connection Companion" || f.title === "The Coffee & Connection Sampler" ? (
                      <div style={{ aspectRatio: "16 / 10", width: "100%", borderRadius: 16, background: `linear-gradient(135deg, ${C.creamDark}, var(--sand-pale))`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        <img
                          src={f.title === "The Connection Companion" ? connectionCompanionMockup : coffeeConnectionSamplerMockup}
                          alt={f.title === "The Connection Companion"
                            ? "The Connection Companion free weekly planner — cover and inside spreads showing the Six Dimensions of Bonding wheel, weekly connection plan, and reflection notes."
                            : "The Coffee & Connection Sampler — cover and inside spreads showing conversation cards, visual spark cards, and the word link game."}
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          loading="lazy"
                          decoding="async"
                        />
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
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: C.textMid, margin: 0 }}>
                      {f.desc}
                    </p>
                    <a href={f.href} className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
                      {f.cta}
                      <ArrowSvg />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta-section">
          <div className="final-cta-inner final-cta-inner-with-image">
            <div className="fcs-image-wrap">
              <img
                src={finalCtaPhoto}
                alt="Adult daughter and her elderly mother sharing a Comfort Bond conversation card at the kitchen table"
                className="fcs-image"
                loading="lazy"
              />
            </div>
            <div className="fcs-content">
              <div className="fcs-eyebrow">The Comfort Bond™ · For families who want the time to matter</div>
              <h2 className="fcs-title">
                Your next call or visit can <em>feel different.</em>
              </h2>
              <p className="fcs-desc">
                Start with one simple guide made to help you create a more meaningful moment with
                someone you love.
              </p>
              <div className="fcs-actions">
                <a href="/blueprint" className="btn-primary">
                  Download the Free Connection Companion
                  <ArrowSvg />
                </a>
                <a href="/free-sampler" className="btn-secondary">Try the Free Coffee & Connection Sampler</a>
              </div>
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
            <p>Nurturing Comfort, Inspiring Connection. Tools, prompts, and rituals to help families create meaningful moments with the people who raised them.</p>
          </div>
          <div className="footer-col">
            <h4>Start free</h4>
            <ul>
              <li><a href="/blueprint">Free Connection Companion</a></li>
              <li><a href="/free-sampler">Free Coffee & Connection Sampler</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#blueprint">The Connection Season: Summer Edition</a></li>
              <li><a href="#kits">Bonding &amp; Connection Kits</a></li>
              <li><a href="#collection">The Comfort Bond Collection</a></li>
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
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 The Comfort Bond™ · Built in memory of a grandmother loved deeply.</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>
      <CookieConsent />

      <style>{`
        @media (max-width: 720px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
        .path-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(45,74,62,0.08); }
      `}</style>
    </div>
  );
};

export default Index;
