import { useState } from "react";
import logoImg from "@/assets/logo.png";

const CheckSvg = ({ color = "#2d4a3e" }: {color?: string;}) =>
<svg viewBox="0 0 10 10" fill="none">
    <path d="M2 5l2.5 2.5 3.5-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


const ArrowSvg = ({ color = "#fff" }: {color?: string;}) =>
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


const StarSvg = ({ fill }: {fill: string;}) =>
<svg width="18" height="18" viewBox="0 0 14 14">
    <polygon points="7,1 9,5.5 14,6 10.5,9.5 11.5,14 7,11.5 2.5,14 3.5,9.5 0,6 5,5.5" fill={fill} />
  </svg>;


const Index = () => {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("success"), 900);
  };

  return (
    <div>
      {/* NAV */}
      <nav className="tcb-nav">
        <a href="#" className="nav-logo">
          <img src={logoImg} alt="The Comfort Bond logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
          <div className="nav-brand">
            <span className="nav-brand-name">The Comfort Bond™</span>
            <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#products">Kits</a></li>
          <li><a href="#who">Who It's For</a></li>
          <li><a href="#bundle">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://thecomfortbond.gumroad.com/l/fullbundle" target="_blank" rel="noopener noreferrer" className="nav-cta">Shop Now</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{ padding: 0, background: "var(--cream)" }}>
        <div className="tcb-hero">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Engagement Kits for Senior Living
            </div>
            <h1>Meaningful moments,<br /><em>ready to use</em> today</h1>
            <p className="hero-desc">
              Beautifully crafted engagement kits that spark real conversation, warm memories, and genuine connection — designed for senior living professionals and caring families.
            </p>
            <div className="hero-actions">
              <a href="#products" className="btn-primary">
                Browse all kits
                <ArrowSvg />
              </a>
              <a href="#bundle" className="btn-secondary">View bundle deal</a>
            </div>
            <div className="hero-trust">
              <div className="trust-badges">
                <div className="trust-badge">
                  <svg viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              Instant digital download · No subscription · Ready in minutes
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-card-bg" />
              <div className="hero-card-mid" />
              <div className="hero-card-main">
                <div className="hc-label">The Comfort Bond™</div>
                <div className="hc-title">The <span>Holiday<br />Traditions</span> Kit</div>
                <div className="hc-divider" />
                <div className="hc-activities">
                  <div className="hc-activity"><div className="hc-activity-dot" />Conversation Cards · 5 pages</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />Holiday Trivia · 31 questions</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />Word Link Game · 15 puzzles</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />Holiday Parade BINGO</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />Musical Memory · Finish the Lyric</div>
                </div>
                <div className="hc-badge-row">
                  <div className="hc-badge">PDF · Print-ready</div>
                  <div className="hc-badge">Instant download</div>
                  <div className="hc-badge">$26</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BAR */}
      <div className="trusted-bar">
        <div className="trusted-bar-inner">
          <div className="tb-label">Designed for</div>
          <div className="tb-facilities">
            <span className="tb-facility">Senior Living Communities</span>
            <span className="tb-facility">Get a free activity kit
straight to your inbox</span>
            <span className="tb-facility">Assisted Living Centers</span>
            <span className="tb-facility">In-Home Caregivers</span>
            <span className="tb-facility">Families &amp; Loved Ones</span>
          </div>
        </div>
      </div>

      {/* FREE DOWNLOAD */}
      <section className="tcb-section" id="freebie" style={{ background: "var(--forest)" }}>
        <div className="section-inner" style={{ maxWidth: 1100 }}>
          <div className="email-capture-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(232,201,154,0.15)", border: "1px solid rgba(232,201,154,0.25)", color: "var(--sand)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "6px 14px", borderRadius: 100, marginBottom: "1.5rem" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--clay)", display: "inline-block" }} />
                Free download
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", marginBottom: "1rem" }}>
                Get The Founder's Sampler
                <br /><em style={{ fontStyle: "italic", color: "var(--sand)" }}>free, straight to your inbox</em>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "0.75rem" }}>
                Sign up and we'll send you a free variety pack of engagement activities — three complete activity types, 15 pages total — so you can experience The Comfort Bond before you buy.
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: "1.75rem" }}>
                No pressure, no spam. Just a warm welcome and something genuinely useful.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { bold: "Then vs. Now · Guess the Era", desc: " — 5 pages across 4 topic categories with answer key" },
                  { bold: "Discussion Circle Prompt Cards", desc: " — 5 pages covering home & family, school days, music, travel & career" },
                  { bold: "Sequential Storytelling Cards", desc: " — 5 pages with 4 cut-and-laminate story themes to sequence & share" },
                ].map((item, i) =>
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(198,123,92,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#C67B5C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span><strong style={{ color: "rgba(255,255,255,0.9)" }}>{item.bold}</strong>{item.desc}</span>
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(198,123,92,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="#C67B5C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  15 print-ready pages — PDF instant delivery, no subscription needed
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius)", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontStyle: "italic", color: "var(--sand)", marginBottom: "0.4rem" }}>The Founder's Sampler</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>16 pages · 3 activity types · Free PDF</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { emoji: "🎯", title: "Then vs. Now · Guess the Era", meta: "5 pages · 4 categories · Answer key included" },
                  { emoji: "💬", title: "Discussion Circle Prompt Cards", meta: "5 pages · Home, school, music, travel & career" },
                  { emoji: "🎬", title: "Sequential Storytelling Cards", meta: "5 pages · 4 story themes · Cut & laminate" },
                ].map((item, i) =>
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 2 }}>{item.title}</p>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{item.meta}</p>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="https://thecomfortbond.gumroad.com/l/foundersampler?wanted=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--clay)", color: "#fff", border: "none", borderRadius: 100,
                  padding: "16px 28px", fontSize: 16, fontWeight: 500, fontFamily: "var(--font-sans)",
                  cursor: "pointer", transition: "background 0.2s", textAlign: "center",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  textDecoration: "none",
                }}
              >
                Get the free kit <ArrowSvg />
              </a>

              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", lineHeight: 1.5 }}>
                Free via Gumroad · Instant PDF download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="tcb-section" id="who">
        <div className="section-inner">
          <div className="section-tag">Who it's for</div>
          <h2 className="tcb-section-title">Built for the people<br />who show up every day</h2>
          <p className="section-sub">Whether you run activities for dozens of residents or you're simply trying to connect more deeply with a parent — The Comfort Bond meets you where you are.</p>
          <div className="audience-grid">
            <div className="audience-card primary">
              <div className="audience-icon forest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2d4a3e" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="7" r="4" stroke="#2d4a3e" strokeWidth="1.5" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2d4a3e" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="audience-who">Senior Living Professionals</div>
              <h3>Activity Directors &amp; Enrichment Teams</h3>
              <p className="audience-desc">You need programming that's meaningful, easy to facilitate, and ready to go without hours of prep. These kits deliver.</p>
              <ul className="audience-list">
                {["Ready-to-print, no prep required", "Includes facilitation guides for every activity", "Works for all cognitive levels — no wrong answers", "One-time purchase — use it forever"].map((item, i) =>
                <li key={i}><span className="check forest"><CheckSvg /></span>{item}</li>
                )}
              </ul>
            </div>
            <div className="audience-card secondary">
              <div className="audience-icon clay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#C67B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="audience-who">Families &amp; In-Home Caregivers</div>
              <h3>Caring for a Loved One at Home</h3>
              <p className="audience-desc">Visits don't have to be silent or awkward. These kits give you a natural, joyful way to connect and create shared memories.</p>
              <ul className="audience-list">
                {["Spark warm conversation with prompts that work", "Designed to include everyone — even with memory loss", "Available instantly — no waiting for shipping", "Thoughtful gift idea for aging parents"].map((item, i) =>
                <li key={i}><span className="check clay"><CheckSvg color="#C67B5C" /></span>{item}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="tcb-section products-bg" id="products">
        <div className="section-inner">
          <div className="section-tag">The full collection</div>
          <h2 className="tcb-section-title">Five ways to nurture<br />comfort &amp; connection</h2>
          <p className="section-sub">Each kit is a complete activity package — conversation cards, trivia, word games, BINGO, and musical memory — ready to print and use today.</p>
          <div className="products-grid">
            {[
            { emoji: "🗺️", bg: "rgba(45,74,62,0.1)", name: "The Road Trip Kit", desc: "Classic Americana road stories, map games, and open-road nostalgia", features: ["Conversation Cards — 4 categories", "Famous U.S. Highways Trivia", "State Nicknames BINGO", "Road Trip Word Links", "On-the-Road Musical Memory"], url: "https://thecomfortbond.gumroad.com/l/theroadtripkit?wanted=true" },
            { emoji: "📻", bg: "rgba(198,123,92,0.1)", name: "The Nostalgia Kit", desc: "Memory Lane from the 1950s through the 1990s — decades of rich shared history", features: ["Decade-by-decade Conversation Cards", "Historical Moments & Fashion Trivia", "Flashback Word Links — 15 puzzles", "Memory Lane BINGO", "Nostalgia Musical Memory"], url: "https://thecomfortbond.gumroad.com/l/nostalgiakit?wanted=true" },
            { emoji: "🍳", bg: "rgba(232,201,154,0.3)", name: "The Kitchen & Comfort Kit", desc: "Family recipes, kitchen memories, and the heart of every home", features: ["Family Table Conversation Cards", "Vintage Food Brands Trivia", "Kitchen & Comfort Food BINGO", "Pantry Word Links", "Sweet Tooth Humming Game"], url: "https://thecomfortbond.gumroad.com/l/kitchencomfortkit?wanted=true" },
            { emoji: "🎄", bg: "rgba(45,74,62,0.08)", name: "The Holiday Traditions Kit", desc: "Seasonal celebrations, shared rituals, and the magic of every holiday", features: ["Year of Celebration — 5 seasons", "Holiday Trivia — 31 questions", "Holiday Parade BINGO", "Celebration Word Links", "Musical Memory — Finish the Lyric"], url: "https://thecomfortbond.gumroad.com/l/holidaytraditionskit?wanted=true" }].
            map((kit, i) =>
            <div className="product-card" key={i}>
                <div className="product-header">
                  <div className="product-icon-row">
                    <div className="product-icon" style={{ background: kit.bg }}>{kit.emoji}</div>
                    <span className="product-tag">Kit</span>
                  </div>
                  <div className="product-name">{kit.name}</div>
                  <div className="product-desc">{kit.desc}</div>
                </div>
                <div className="product-body">
                  <ul className="product-features">
                    {kit.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                </div>
                <div className="product-footer">
                  <div>
                    <div className="product-price">$26</div>
                    <div className="product-price-note">Instant download · PDF</div>
                  </div>
                  <a href={kit.url} target="_blank" rel="noopener noreferrer" className="product-cta">Get kit →</a>
                </div>
              </div>
            )}

            {/* Serenity Suite */}
            <div className="serenity-card product-card">
              <div>
                <div className="serenity-label">Comfort Flow™ Video Experience</div>
                <div className="serenity-title">The <em>Serenity</em> Suite</div>
                <p className="serenity-desc">A handcrafted collection of peaceful nature videos — gentle rain, ocean waves, mountain sunrises, flowing waterfalls, and more. Designed to promote calm, reduce anxiety, and spark warm memories in senior living environments.</p>
                <div className="serenity-stat-row">
                  <div className="serenity-stat"><div className="serenity-stat-num">10</div><div className="serenity-stat-label">Nature Scenes</div></div>
                  <div className="serenity-stat"><div className="serenity-stat-num">89</div><div className="serenity-stat-label">Total Minutes</div></div>
                  <div className="serenity-stat"><div className="serenity-stat-num">∞</div><div className="serenity-stat-label">Continuous Loop</div></div>
                </div>
                <div>
                  <div className="serenity-price">$35 <span>one-time purchase</span></div>
                  <a href="https://thecomfortbond.gumroad.com/l/serenityvideosuite?wanted=true" target="_blank" rel="noopener noreferrer" className="serenity-cta">Get the Serenity Suite →</a>
                </div>
              </div>
              <div className="serenity-scenes">
                {["Butterflies & Garden", "Clouds in the Sky", "Flowers Blooming", "Gentle Rain", "The Peaceful Lake", "Countryside View", "Forest Walk", "Mountain Sunrise", "Flowing Waterfalls", "Ocean Waves"].map((scene, i) =>
                <div className="scene-pill" key={i}>
                    <span className="scene-num">{String(i + 1).padStart(2, "0")}</span> {scene}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUNDLE */}
      <section className="tcb-section bundle-section" id="bundle">
        <div className="section-inner">
          <div className="section-tag">Best value</div>
          <h2 className="tcb-section-title">All four kits, together —<br />for less</h2>
          <p className="section-sub">Get every engagement kit in one download and save — then add The Serenity Suite whenever you're ready.</p>
          <div className="bundle-card">
            <div className="bundle-header">
              <div>
                <div className="bundle-badge">The Full Comfort Bundle</div>
                <h3 className="bundle-title">Every Kit.<br /><em>One price.</em></h3>
                <div className="bundle-sub">All 4 engagement kits — instant download</div>
              </div>
              <div className="bundle-pricing">
                <div className="bundle-was">$104 if bought separately</div>
                <div className="bundle-price">$95</div>
                <div className="bundle-save">Save $9 — best way to start</div>
              </div>
            </div>
            <div className="bundle-body">
              <div className="bundle-includes-label">What's included</div>
              <div className="bundle-items">
                {[
                { emoji: "🗺️", name: "The Road Trip Kit" },
                { emoji: "📻", name: "The Nostalgia Kit" },
                { emoji: "🍳", name: "The Kitchen & Comfort Kit" },
                { emoji: "🎄", name: "The Holiday Traditions Kit" }].
                map((item, i) =>
                <div className="bundle-item" key={i}>
                    <span className="bundle-item-icon">{item.emoji}</span>
                    {item.name}
                  </div>
                )}
              </div>
              <div style={{ background: "var(--sand-pale)", border: "1px solid rgba(198,123,92,0.18)", borderRadius: "var(--radius-sm)", padding: "14px 18px", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>🌿</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--forest-dark)" }}>Want The Serenity Suite too?</div>
                    <div style={{ fontSize: 12, color: "var(--text-light)" }}>Add it separately for $35 — 10 nature scenes, 89 minutes</div>
                  </div>
                </div>
                <a href="https://thecomfortbond.gumroad.com/l/serenityvideosuite?wanted=true" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, color: "var(--clay)", textDecoration: "none", whiteSpace: "nowrap" }}>Add Serenity Suite →</a>
              </div>
              <div className="bundle-cta-row">
                <a href="https://thecomfortbond.gumroad.com/l/fullbundle" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get the full bundle — $95
                  <ArrowSvg />
                </a>
                <div className="bundle-guarantee">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5V7c0 2.8 2 5.3 5 6 3-0.7 5-3.2 5-6V3.5L7 1z" stroke="#7a8a7a" strokeWidth="1.2" /></svg>
                  Instant delivery · PDF download
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="tcb-section" id="reviews" style={{ background: "var(--sand-pale)" }}>
        <div className="section-inner" style={{ maxWidth: 620, margin: "0 auto" }}>
          <div className="section-tag">Reviews</div>
          <h2 className="tcb-section-title">Be the first to share<br />your experience</h2>
          <p className="section-sub">We're just getting started — and we'd love to hear from you. If you've used a kit, your words help other activity directors and families find what they need.</p>

          <div style={{ marginTop: "2.5rem" }}>
            <div className="review-cta-card">
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--sand)", marginBottom: "0.75rem" }}>Share your story</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "#fff", lineHeight: 1.25, marginBottom: "0.75rem" }}>
                  Tried a kit?<br /><em style={{ fontStyle: "italic", color: "var(--sand)" }}>We'd love to hear from you.</em>
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                  Your feedback helps other activity directors and families find what they need — and helps us keep improving every kit.
                </p>
              </div>
              <a
                href="mailto:info@thecomfortbond.com"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--clay)", color: "#fff", padding: "12px 22px", borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "background 0.2s", width: "fit-content" }}>
                Leave a review
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="tcb-section about-section" id="about">
        <div className="section-inner" style={{ padding: 0 }}>
          <div className="about-inner">
            <div>
              <div className="about-tag">About the founder</div>
              <h2 className="about-title">Created with care,<br />by someone who<br /><em>truly understands</em></h2>
              <div className="about-body">
                <p>Hi, I'm Francesca — the founder and sole creator behind The Comfort Bond. I built this because I know how hard it can be to find activities that actually feel meaningful, rather than just filling time.</p>
                <p>Every kit is crafted with real intention: conversation prompts that open doors, games designed to spark joy without pressure, and activities that meet people exactly where they are — including residents living with memory challenges.</p>
                <p>My mission is simple: to make genuine connection feel easy and accessible, for the professionals who dedicate their days to seniors, and for the families who love them.</p>
              </div>
              <div className="about-sig">— Francesca</div>
            </div>
            <div className="about-visual">
              <div className="about-stat-card">
                <div className="asc-num">5</div>
                <div className="asc-label">Complete engagement products, ready to use today</div>
              </div>
              <div className="about-stat-card">
                <div className="asc-num">89+</div>
                <div className="asc-label">Minutes of calming nature video in The Serenity Suite</div>
              </div>
              <ul className="about-value-list">
                {[
                "Every activity is designed to welcome all participants — no wrong answers, no pressure to perform",
                "Instant PDF download — in your inbox within minutes, not days",
                "One-time purchase — print and use as many times as you need, forever"].
                map((item, i) =>
                <li key={i}><span className="avl-dot" />{item}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div className="fcs-eyebrow">The Comfort Bond™ · Ready when you are</div>
          <h2 className="fcs-title">Start creating <em>real moments</em><br />today</h2>
          <p className="fcs-desc">Download instantly, print what you need, and walk into your next session — or your next visit — with something genuinely beautiful to share.</p>
          <div className="fcs-actions">
            <a href="https://thecomfortbond.gumroad.com/l/fullbundle" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Shop all kits
              <ArrowSvg />
            </a>
            <a href="#bundle" className="btn-secondary">View bundle — $95</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tcb-footer">
        <div className="footer-inner footer-inner-3col">
          <div className="footer-brand">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", fontWeight: 600 }}>The Comfort Bond™</div>
            <p>Nurturing Comfort, Inspiring Connection — high-quality engagement kits designed for senior living communities and caring families.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Road Trip Kit</a></li>
              <li><a href="#">Nostalgia Kit</a></li>
              <li><a href="#">Kitchen &amp; Comfort Kit</a></li>
              <li><a href="#">Holiday Traditions Kit</a></li>
              <li><a href="#">The Serenity Suite</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Francesca</a></li>
              <li><a href="mailto:info@thecomfortbond.com">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 The Comfort Bond™ · All rights reserved</span>
          <a href="mailto:info@thecomfortbond.com" className="footer-email">info@thecomfortbond.com</a>
        </div>
      </footer>
    </div>);

};

export default Index;