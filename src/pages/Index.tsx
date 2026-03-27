import logoImg from "@/assets/logo.png";
import { CookieConsent } from "@/components/CookieConsent";
import { PromoBanner } from "@/components/sections/PromoBanner";

const CheckSvg = ({ color = "#2d4a3e" }: {color?: string;}) =>
<svg viewBox="0 0 10 10" fill="none">
    <path d="M2 5l2.5 2.5 3.5-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


import React from "react";

const ArrowSvg = React.forwardRef<SVGSVGElement, {color?: string;}>(({ color = "#fff", ...props }, ref) =>
<svg ref={ref} width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
ArrowSvg.displayName = "ArrowSvg";


const StarSvg = ({ fill }: {fill: string;}) =>
<svg width="18" height="18" viewBox="0 0 14 14">
    <polygon points="7,1 9,5.5 14,6 10.5,9.5 11.5,14 7,11.5 2.5,14 3.5,9.5 0,6 5,5.5" fill={fill} />
  </svg>;


const Index = () => {

  return (
    <div>
      <a href="#main" className="skip-nav">Skip to main content</a>
      {/* NAV */}
      <header>
        <nav className="tcb-nav">
          <a href="#" className="nav-logo">
            <img src={logoImg} alt="The Comfort Bond logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#products">Engagement Kits</a></li>
            <li><a href="#who">Who It's For</a></li>
            <li><a href="#bundle">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><button onClick={() => {setTimeout(() => {const w = window.open("about:blank", "_blank");if (w) w.location.href = "https://thecomfortbond.gumroad.com/";}, 0);}} className="nav-cta">Shop Now</button></li>
          </ul>
        </nav>
      </header>

      <main id="main">

      {/* HERO */}
      <section style={{ padding: 0, background: "var(--cream)" }}>
        <div className="tcb-hero">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Engagement & Activity Kits for Senior Living
            </div>
            <h1>Senior Living Engagement Kits,<br /><em>Ready to Use</em> Today.</h1>
            <p className="hero-desc">Printable activity kits that spark real conversation, warm memories, and genuine connection — designed for senior living professionals and caring families.

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
                <div className="hc-title">The <span>Nostalgia</span> Kit</div>
                <div className="hc-divider" />
                <div className="hc-activities">
                  <div className="hc-activity"><div className="hc-activity-dot" />15+ Conversation Starter Cards</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />20 Themed Trivia Questions</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />24-Term BINGO + Caller Prompts</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />Word Link Cognitive Game</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />Musical Memory · Finish the Lyric</div>
                  <div className="hc-activity"><div className="hc-activity-dot" />10 Bonus "Visual Spark" Cards</div>
                </div>
                <div className="hc-badge-row">
                  <div className="hc-badge">PDF · Cut &amp; Laminate Ready</div>
                  <div className="hc-badge">Instant download</div>
                  <div className="hc-badge">$34.99</div>
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
            <span className="tb-facility">Nursing Homes</span>
            
              
            <span className="tb-facility">Assisted Living & Memory Care Centers</span>
            <span className="tb-facility">In-Home Caregivers</span>
            <span className="tb-facility">Families &amp; Loved Ones</span>
          </div>
        </div>
      </div>


      {/* FREE DOWNLOAD */}
      <section className="tcb-section" id="freebie" style={{ background: "var(--forest)", padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem)" }}>
        <div className="section-inner" style={{ maxWidth: 1100 }}>
          <div className="email-capture-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(232,201,154,0.15)", border: "1px solid rgba(232,201,154,0.25)", color: "var(--sand)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "5px 12px", borderRadius: 100, marginBottom: "1rem" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--clay)", display: "inline-block" }} />
                Free download
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", marginBottom: "0.75rem" }}>
                Get a free activity kit<br />
                <em style={{ fontStyle: "italic", color: "var(--sand)" }}>straight to your inbox</em>
              </h2>
              <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "0.5rem" }}>
                Sign up and we'll send you a free printable activity kit so you can experience The Comfort Bond before you buy.
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, marginBottom: "1rem" }}>
                No pressure, no spam. Just a warm welcome and something genuinely useful.
              </p>

            </div>

            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius)", padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontStyle: "italic", color: "var(--sand)", marginBottom: "0.25rem" }}>The Founder's Sampler</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>16 pages · 3 activity types · Free PDF</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { emoji: "🎯", title: "Then vs. Now · Guess the Era", meta: "5 pages · 4 categories · Answer key included" },
                  { emoji: "💬", title: "Discussion Circle Prompt Cards", meta: "5 pages · Home, school, music, travel & career" },
                  { emoji: "🎬", title: "Sequential Storytelling Cards", meta: "5 pages · 4 story themes · Cut & laminate" }].
                  map((item, i) =>
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 1 }}>{item.title}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{item.meta}</p>
                    </div>
                  </div>
                  )}
              </div>

              <a
                  href="https://thecomfortbond.gumroad.com/l/foundersampler?wanted=true"
                  data-gumroad-overlay-checkout="true"
                  rel="noopener noreferrer nofollow"
                  style={{
                    background: "var(--clay)", color: "#fff", border: "none", borderRadius: 100,
                    padding: "13px 24px", fontSize: 15, fontWeight: 500, fontFamily: "var(--font-sans)",
                    cursor: "pointer", transition: "background 0.2s", textAlign: "center",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    textDecoration: "none"
                  }}>
                  
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
          <h2 className="tcb-section-title">Built for the People<br />Who Show Up Every Day</h2>
          <p className="section-sub">Whether you run engagement activities for dozens of residents or you're connecting with a loved one at home — these activity kits meet you where you are.</p>
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
      {/* PROMO BANNER */}
      <PromoBanner />

      <section id="products" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--sand-pale)", paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">The full collection</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            Five Done-for-You Engagement Kits,<br /><em className="italic" style={{ color: "var(--clay)" }}>Ready to Print &amp; Facilitate Today</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[600px]" style={{ color: "var(--text-mid)" }}>
            Each kit is a complete, themed activity package — zero prep, maximum engagement. Print what you need and walk into your next session with confidence.
          </p>

          {/* Universal Features Banner */}
          <div className="mt-10 rounded-2xl px-6 py-5 md:px-8 md:py-6" style={{ background: "var(--forest)" }}>
            <div className="flex items-center gap-2 mb-4 text-[10px] font-medium tracking-[0.14em] uppercase" style={{ color: "var(--sand)" }}>
              Included in every kit
              <span className="flex-1 h-px bg-white/[0.12]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["15+ Conversation Starter Cards", "20 Themed Trivia Questions", "Word Link Cognitive Game", "24-Term BINGO + Caller Prompts", "Musical Memory Game", '10 Bonus "Visual Spark" Photo Cards', "Digital PDF · Cut & Laminate Ready"].map((feature, i) =>
                <div key={i} className="inline-flex items-center gap-[7px] rounded-full px-3.5 py-1.5 text-xs text-white/[0.85] whitespace-nowrap bg-white/[0.07] border border-white/[0.1]">
                  <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: "var(--clay)" }} />
                  {feature}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid — 5 Kits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              {
                id: "nostalgia-kit",
                icon: "📻",
                name: "The Nostalgia Kit",
                theme: "1950s–1970s Pop Culture & Daily Life",
                desc: "Take residents back to the golden age of drive-in movies, jukeboxes, and poodle skirts. Designed to spark joyful memories of 1950s–1970s pop culture and daily life.",
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/nostalgiakit?wanted=true"
              },
              {
                id: "heart-of-the-home-kit",
                icon: "🍞",
                name: "The Heart of the Home Kit",
                theme: "Family Meals, Sunday Suppers & Baking Days",
                desc: "Centered around the warmth of family meals, Sunday suppers, and baking days. Deeply comforting prompts to engage the senses and recall cherished culinary traditions.",
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/heartofthehomekit?wanted=true"
              },
              {
                id: "are-we-there-yet-kit",
                icon: "🚗",
                name: 'The "Are We There Yet?" Kit',
                theme: "The Great American Road Trip",
                desc: "The ultimate great American road trip in a box. From packed station wagons to roadside diners and national parks, this kit brings the adventure of summer vacations right to the table.",
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/arewethereyetkit?wanted=true"
              },
              {
                id: "heirloom-garden-kit",
                icon: "🌻",
                name: "The Heirloom Garden Kit",
                theme: "Nature, Seasons & the Joy of Growing",
                desc: "Grounded in nature and the changing seasons. Residents will connect over memories of planting spring bulbs, harvesting backyard vegetables, and the satisfaction of a well-tended garden.",
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/heirloomgardenkit?wanted=true"
              },
              {
                id: "makers-and-menders-kit",
                icon: "🔧",
                name: "The Makers & Menders Kit",
                theme: "Hands-On Work, Craftsmanship & Things Built to Last",
                desc: "Celebrating the pride of hands-on work. Bridges demographics by engaging both men and women with memories of the tool shed, the sewing basket, the garage, and things built to last.",
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/makersandmenderskit?wanted=true"
              }
            ].map((kit, i) =>
              <div
                key={i}
                id={kit.id}
                className="bg-white border border-[rgba(45,74,62,0.12)] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,74,62,0.1)]"
              >
                {/* Card Header */}
                <div className="p-6 pb-4 border-b border-[rgba(45,74,62,0.12)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] bg-[rgba(198,123,92,0.08)] border border-[rgba(198,123,92,0.15)]">
                      {kit.icon}
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full" style={{ color: "var(--clay)", background: "rgba(198,123,92,0.1)" }}>
                      Engagement Kit
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.2rem] font-semibold leading-[1.2] mb-1" style={{ color: "var(--forest-dark)" }}>
                    {kit.name}
                  </h3>
                  <div className="text-[11px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: "var(--clay)" }}>
                    {kit.theme}
                  </div>
                  <p className="text-[13px] leading-[1.6] min-h-[3.2em]" style={{ color: "var(--text-mid)" }}>
                    {kit.desc}
                  </p>
                </div>

                {/* Card Body */}
                <div className="px-6 py-4 flex-1">
                  <div className="text-[10px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "var(--text-light)" }}>
                    What's inside
                  </div>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {["15+ Conversation Starter Cards", "20 Themed Trivia Questions", "Word Link Cognitive Game", "24-Term BINGO + Caller Prompts", "Musical Memory (Finish the Lyric & Name That Tune)", '10 Bonus "Visual Spark" Photo Cards'].map((f, j) =>
                      <li key={j} className="flex items-center gap-[7px] text-[12.5px]" style={{ color: "var(--text-mid)" }}>
                        <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: "var(--clay)" }} />
                        {f}
                      </li>
                    )}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium" style={{ background: "rgba(45,74,62,0.06)", color: "var(--forest)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Digital PDF · Print &amp; Laminate Ready
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-[rgba(45,74,62,0.12)] flex items-center justify-between gap-3">
                  <div>
                    <div className="font-serif text-2xl font-semibold" style={{ color: "var(--forest-dark)" }}>{kit.price}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "var(--text-mid)" }}>One-time purchase · Instant download</div>
                  </div>
                  <a
                    href={kit.url}
                    data-gumroad-overlay-checkout="true"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-medium text-white no-underline whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}
                  >
                    Get This Kit <ArrowSvg />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BUNDLE */}
      <section id="bundle" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--clay-pale)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">Best value</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            The Complete Comfort Bundle<br /><em className="italic" style={{ color: "var(--clay)" }}>All 5 Kits + VIP Bonus</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[600px]" style={{ color: "var(--text-mid)" }}>
            Over a month's worth of premium, done-for-you programming. Get all 5 themed kits in one download and win your time back.
          </p>

          <div className="bg-white rounded-2xl border border-[rgba(198,123,92,0.2)] overflow-hidden max-w-[900px] mx-auto mt-12">
            {/* Bundle Header */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-10" style={{ background: "var(--forest)" }}>
              <div>
                <span className="inline-block text-[11px] font-medium tracking-[0.08em] uppercase text-white px-3.5 py-1.5 rounded-full mb-4" style={{ background: "var(--clay)" }}>
                  The Complete Comfort Bundle
                </span>
                <h3 className="font-serif text-[2rem] font-semibold text-white leading-[1.2] m-0">
                  Every Kit. Every Activity.<br /><em className="italic" style={{ color: "var(--sand)" }}>One unbeatable price.</em>
                </h3>
                <div className="text-sm text-white/[0.65] mt-2">All 5 engagement kits + The Serenity Suite — instant download</div>
              </div>
              <div className="md:text-right">
                <div className="text-sm text-white/70 line-through mb-1">$174.95 if bought separately</div>
                <div className="font-serif text-5xl font-semibold leading-none" style={{ color: "var(--sand)" }}>$150.99</div>
                <div className="text-xs mt-1 tracking-[0.05em]" style={{ color: "var(--sand)" }}>Save over $23 — best value</div>
              </div>
            </div>

            {/* Bundle Body */}
            <div className="p-8 md:p-10">
              {/* Kit items label */}
              <div className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase mb-5" style={{ color: "var(--text-light)" }}>
                All 5 kits included
                <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
              </div>

              {/* Kit items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8">
                {[
                  { emoji: "📻", name: "The Nostalgia Kit" },
                  { emoji: "🍞", name: "The Heart of the Home Kit" },
                  { emoji: "🚗", name: 'The "Are We There Yet?" Kit' },
                  { emoji: "🌻", name: "The Heirloom Garden Kit" },
                  { emoji: "🔧", name: "The Makers & Menders Kit" }
                ].map((item, i) =>
                  <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-[10px] text-sm" style={{ background: "var(--sand-pale)", color: "var(--text-mid)" }}>
                    <span className="text-xl">{item.emoji}</span>
                    {item.name}
                  </div>
                )}
              </div>

              {/* VIP Bonus — Serenity Suite */}
              <div className="rounded-2xl overflow-hidden mb-8" style={{ background: "linear-gradient(135deg, var(--forest) 0%, var(--forest-dark) 100%)" }}>
                {/* Bonus badge bar */}
                <div className="flex items-center gap-2 px-6 py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-white" style={{ background: "var(--clay)" }}>
                  <span className="text-xs">★</span>
                  VIP Bonus — Included FREE
                </div>
                {/* Bonus content */}
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Subtle radial glow */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(232,201,154,0.08) 0%, transparent 60%)" }} />
                  <div className="relative flex-1">
                    <h4 className="font-serif text-[1.25rem] font-semibold text-white mb-2">The Serenity Suite Video Library</h4>
                    <p className="text-[13px] text-white/70 leading-[1.65] mb-3">
                      10 cinematic, 8-minute relaxation and reminiscence videos — gentle rain, ocean waves, mountain sunrises, flowing waterfalls, and more. Designed to promote calm, reduce anxiety, and spark warm memories.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {["10 Nature Scenes", "80+ Minutes", "Lifetime Access"].map((stat, i) => (
                        <span key={i} className="flex items-center gap-3">
                          <span className="text-xs font-medium tracking-[0.03em]" style={{ color: "var(--sand)" }}>{stat}</span>
                          {i < 2 && <span className="w-px h-3 bg-white/20" />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 text-center bg-white/[0.06] border border-white/[0.12] rounded-[10px] px-6 py-5 w-full md:w-auto">
                    <div className="font-serif text-[2.5rem] font-semibold leading-none mb-1" style={{ color: "var(--sand)" }}>$150</div>
                    <div className="text-[11px] text-white/60 uppercase tracking-[0.08em] font-medium">value — yours FREE</div>
                  </div>
                </div>
              </div>

              {/* Bundle CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://thecomfortbond.gumroad.com/l/fullbundle"
                  data-gumroad-overlay-checkout="true"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}
                >
                  Get the Complete Bundle — $150.99
                  <ArrowSvg />
                </a>
                <div className="flex items-center gap-1.5 text-[13px]" style={{ color: "var(--text-light)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5V7c0 2.8 2 5.3 5 6 3-0.7 5-3.2 5-6V3.5L7 1z" stroke="#7a8a7a" strokeWidth="1.2" /></svg>
                  Instant delivery · PDF &amp; video download · One-time purchase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="tcb-section" id="faq" style={{ background: "var(--sage-light, #e8eade)" }}>
        <div className="section-inner" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="section-tag">Common questions</div>
          <h2 className="tcb-section-title">Frequently Asked Questions</h2>
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { q: "Is this a monthly subscription?", a: "No. All of our engagement kits, activity resources, and the Full Comfort Bundle are one-time purchases. There are no hidden fees or recurring charges. Once you buy a kit, it's yours to use forever." },
              { q: "What file format will I receive?", a: "Your kits are delivered as high-quality PDF files. The formatting, text size, and images look perfect on any computer or device." },
              { q: "Can I print these materials?", a: 'Yes! The kits are specifically designed to be printer-friendly on standard 8.5" x 11" paper. You can print BINGO cards, Trivia sheets, and Conversation prompts to hand out directly to residents.' },
              { q: "Are these kits reusable?", a: "Yes. Because these are digital downloads, you can print the materials as many times as you need. You can revisit the activities year after year." },
              { q: "How quickly will I get access?", a: "Instantly. As soon as checkout is complete, you'll receive an email with a download link. You can purchase a kit and be playing with your group five minutes later." }].
              map((item, i) =>
              <details
                key={i}
                className="faq-item"
                style={{
                  borderBottom: "1px solid rgba(45,74,62,0.15)"
                }}>
                
                <summary
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    padding: "1.25rem 0",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--forest)",
                    listStyle: "none"
                  }}>
                  
                  {item.q}
                  <span style={{ flexShrink: 0, marginLeft: 16, fontSize: 18, color: "var(--clay)", transition: "transform 0.2s" }}>+</span>
                </summary>
                <div
                  style={{
                    paddingBottom: "1.25rem",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(45,74,62,0.75)"
                  }}>
                  
                  {item.a}
                </div>
              </details>
              )}
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
                <p>Hi, I'm Francesca — the founder behind The Comfort Bond. I built this because I know how hard it can be to find activities that feel meaningful rather than just filling time. Every kit is crafted with intention — prompts that open doors, games that spark joy, and activities that meet people where they are, including those with memory challenges.</p>
                <p>My mission is simple: to make genuine connection feel easy and accessible, for the professionals who dedicate their days to seniors, and for the families who love them. <a href="/resources" style={{ color: "var(--clay)", textDecoration: "underline", textUnderlineOffset: 3 }}>Read our free guides for activity directors →</a></p>
              </div>
              <div className="about-sig">— Francesca</div>
            </div>
            <div className="about-visual">
              <div className="about-stat-card">
                <div className="asc-num">5</div>
                <div className="asc-label">Complete themed engagement kits, each with 6 activity types — ready to use today</div>
              </div>
              <div className="about-stat-card">
                <div className="asc-num">30+</div>
                <div className="asc-label">Activity sessions in the Complete Bundle — over a month of done-for-you programming</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div className="fcs-eyebrow">The Comfort Bond™ · Ready when you are</div>
          <h2 className="fcs-title">Start Creating <em>Real Moments</em><br />Today</h2>
          <p className="fcs-desc">Download your engagement kits instantly, print the activities you need, and walk into your next session — or your next visit — with something genuinely beautiful to share.</p>
          <div className="fcs-actions">
            <button onClick={() => {setTimeout(() => {const w = window.open("about:blank", "_blank");if (w) w.location.href = "https://thecomfortbond.gumroad.com/";}, 0);}} className="btn-primary">
              Shop all kits
              <ArrowSvg />
            </button>
            <a href="#bundle" className="btn-secondary">View bundle — $150.99</a>
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="tcb-footer">
        <div className="footer-inner footer-inner-3col">
          <div className="footer-brand">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", fontWeight: 600 }}>The Comfort Bond™</div>
            <p>high-quality engagement kits and printable activities designed for senior living communities and caring families.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#nostalgia-kit" onClick={(e) => {e.preventDefault();document.getElementById('nostalgia-kit')?.scrollIntoView({ behavior: 'smooth' });}}>Nostalgia Kit</a></li>
              <li><a href="#heart-of-the-home-kit" onClick={(e) => {e.preventDefault();document.getElementById('heart-of-the-home-kit')?.scrollIntoView({ behavior: 'smooth' });}}>Heart of the Home Kit</a></li>
              <li><a href="#are-we-there-yet-kit" onClick={(e) => {e.preventDefault();document.getElementById('are-we-there-yet-kit')?.scrollIntoView({ behavior: 'smooth' });}}>"Are We There Yet?" Kit</a></li>
              <li><a href="#heirloom-garden-kit" onClick={(e) => {e.preventDefault();document.getElementById('heirloom-garden-kit')?.scrollIntoView({ behavior: 'smooth' });}}>Heirloom Garden Kit</a></li>
              <li><a href="#makers-and-menders-kit" onClick={(e) => {e.preventDefault();document.getElementById('makers-and-menders-kit')?.scrollIntoView({ behavior: 'smooth' });}}>Makers &amp; Menders Kit</a></li>
              <li><a href="#bundle" onClick={(e) => {e.preventDefault();document.getElementById('bundle')?.scrollIntoView({ behavior: 'smooth' });}}>Complete Bundle</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Francesca</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="mailto:hello@thecomfortbond.com">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 The Comfort Bond™ · All rights reserved</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>
      <CookieConsent />
    </div>);

};

export default Index;