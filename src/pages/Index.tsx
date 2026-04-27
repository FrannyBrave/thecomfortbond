import logoImg from "@/assets/the-comfort-bond-logo.png";
import mockupNostalgia from "@/assets/nostalgia-activity-kit-for-seniors-memory-care.png";
import mockupHome from "@/assets/assisted-living-activity-kit-home-comfort-theme.png";
import mockupBingo from "@/assets/interactive-bingo-activity-kit-for-seniors.png";
import bundleVolume from "@/assets/senior-living-activity-bundle-programming-tools.png";
import bundleGroup from "@/assets/group-activities-for-seniors-memory-care-engagement.png";
import bundleStack from "@/assets/printable-senior-activity-kit-pages-overview.png";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";
import { openPaddleCheckout } from "@/lib/paddle";


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


const BUNDLE_KITS = [
  { icon: "📻", name: "The Nostalgia Kit" },
  { icon: "🍞", name: "The Heart of the Home Kit" },
  { icon: "🚗", name: 'The "Are We There Yet?" Kit' },
  { icon: "🌻", name: "The Heirloom Garden Kit" },
  { icon: "🔧", name: "The Makers & Menders Kit" },
];

const Index = () => {

  const openCheckoutInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCheckoutClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    url: string,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    openCheckoutInNewTab(url);
  };

  return (
    <div>
      <a href="#main" className="skip-nav">Skip to main content</a>

      {/* NAV */}
      <header>
        <nav className="tcb-nav">
          <a href="#" className="nav-logo">
            <img src={logoImg} alt="The Comfort Bond logo — dignified engagement activities for senior living" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/about">Our Story</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/family-visits" className="nav-blueprint">For Families</a></li>
            <li><a href="/blueprint-pro" className="nav-blueprint">Blueprint Pro</a></li>
            <li><a href="/blueprint" className="nav-blueprint">Free Blueprint</a></li>
            <li><a href="/free-sampler" className="nav-blueprint">Free Sampler</a></li>
            <li><a href="/kits" className="nav-cta">Shop Now</a></li>
          </ul>
          <MobileMenuDrawer />
        </nav>
      </header>

      <main id="main">

      {/* HERO */}
      <section style={{ padding: 0, background: "var(--cream)" }}>
        <div className="tcb-hero">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Built for Activity Directors & Life Enrichment Teams
            </div>
            <h1>Your Next 30 Days<br />of Activities — <em>Done.</em></h1>
            <div className="hero-bundle-pill">
              <span className="hero-bundle-pill-tag">Best value</span>
              <span className="hero-bundle-pill-text">All 5 Kits · 30+ sessions · <strong>$97</strong> <span className="hero-bundle-pill-strike">$135</span></span>
            </div>
            <div className="hero-actions">
              <a href="#bundles" className="btn-primary">
                Get all 5 kits — $97
                <ArrowSvg />
              </a>
              <a href="#products" className="btn-secondary">Browse individual kits</a>
            </div>
            <a href="#bundles" className="hero-scroll-hint" aria-label="Scroll to bundle section">
              <span>See what's in the bundle</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="hero-trust">
              <div className="trust-badges">
                <div className="trust-badge">
                  <svg viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              Instant PDF download · Zero prep · No subscription · One-time purchase
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-card-bg" />
              <div className="hero-card-mid" />
              <div className="hero-card-main">
                <div className="hc-label">What's inside every kit</div>
                <div className="hc-title">6 Activities,<br /><span>Zero Prep</span></div>
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
                  <div className="hc-badge">PDF · Print &amp; Go</div>
                  <div className="hc-badge">All cognitive levels</div>
                  <div className="hc-badge">From $27</div>
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
          </div>
        </div>
      </div>


      {/* PRODUCTS */}
      <section id="products" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--sand-pale)", paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">The full collection</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            Five Done-for-You Engagement Kits,<br /><em className="italic" style={{ color: "var(--clay)" }}>Ready to Print &amp; Facilitate Today</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[640px]" style={{ color: "var(--text-mid)" }}>
            Each kit is a complete, themed activity package — zero prep, maximum engagement. Inside you'll find conversation cards, visual spark prompts, trivia, BINGO, and music-based memory activities, all carefully structured to keep residents engaged while making facilitation effortless.
          </p>

          {/* Product Grid — 5 Kits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              {
                id: "nostalgia-kit",
                icon: "📻",
                name: "The Nostalgia Kit",
                theme: "1950S–1980S POP CULTURE & DAILY LIFE",
                desc: "Take residents back to the golden age of drive-in movies, jukeboxes, and poodle skirts. Designed to spark joyful memories of 1950s–1980s pop culture and daily life.",
                highlights: ["Drive-In Movies vs. Streaming — Then & Now debate cards", "Name That Jukebox Tune — 1950s–80s hits", "Poodle Skirts to Bell Bottoms — fashion flashback trivia"],
                bestFor: "Mixed groups, all cognitive levels",
                popular: true,
                price: "$27",
                priceId: "pri_01kpafx84h0z9z11fwc5m84dam"
              },
              {
                id: "heart-of-the-home-kit",
                icon: "🍞",
                name: "The Heart of the Home Kit",
                theme: "Family Meals, Sunday Suppers & Baking Days",
                desc: "Centered around the warmth of family meals, Sunday suppers, and baking days. Deeply comforting prompts to engage the senses and recall cherished culinary traditions.",
                highlights: ["Sunday Supper memories — what was on your table?", "Vintage kitchen gadgets trivia — name that tool", "Comfort food BINGO — from pot roast to pie"],
                bestFor: "Women's groups, sensory engagement",
                popular: false,
                price: "$27",
                priceId: "pri_01kpafxq9xrqg0qhqfttzdjswf"
              },
              {
                id: "are-we-there-yet-kit",
                icon: "🚗",
                name: 'The "Are We There Yet?" Kit',
                theme: "The Great American Road Trip",
                desc: "The ultimate great American road trip in a box. From packed station wagons to roadside diners and national parks, this kit brings the adventure of summer vacations right to the table.",
                highlights: ["Station wagon packing list — what did you bring?", "Roadside diner trivia — Route 66 & beyond", "National parks BINGO — from Yellowstone to Yosemite"],
                bestFor: "High-energy sessions, mixed groups",
                popular: false,
                price: "$27",
                priceId: "pri_01kpafwqs0wwzatbs5721cyfmk"
              },
              {
                id: "heirloom-garden-kit",
                icon: "🌻",
                name: "The Heirloom Garden Kit",
                theme: "Nature, Seasons & the Joy of Growing",
                desc: "Grounded in nature and the changing seasons. Residents will connect over memories of planting spring bulbs, harvesting backyard vegetables, and the satisfaction of a well-tended garden.",
                highlights: ["Spring planting memories — what grew in your yard?", "Farmer's almanac trivia — weather, seasons & folklore", "Backyard harvest BINGO — tomatoes to tulips"],
                bestFor: "Spring/summer programming, garden clubs",
                popular: false,
                price: "$27",
                priceId: "pri_01kpafvx3erd68458p4em99141"
              },
              {
                id: "makers-and-menders-kit",
                icon: "🔧",
                name: "The Makers & Menders Kit",
                theme: "Hands-On Work, Craftsmanship & Things Built to Last",
                desc: "Celebrating the pride of hands-on work. Bridges demographics by engaging both men and women with memories of the tool shed, the sewing basket, the garage, and things built to last.",
                highlights: ["Tool shed vs. sewing basket — what did you make?", "Fix-it or toss-it debate cards — things built to last", "Vintage trades trivia — from blacksmiths to seamstresses"],
                bestFor: "Co-ed groups, bridging demographics",
                popular: false,
                price: "$27",
                priceId: "pri_01kpafv0r50q149ctgje0dmn0q"
              }
            ].map((kit, i) =>
              <div
                key={i}
                id={kit.id}
                className="bg-white border border-[rgba(45,74,62,0.12)] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,74,62,0.1)] relative"
              >
                {/* Most Popular badge */}
                {kit.popular && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-white z-10" style={{ background: "var(--clay)" }}>
                    Most Popular — Start Here
                  </div>
                )}

                {/* Card Header */}
                <div className={`p-6 pb-4 border-b border-[rgba(45,74,62,0.12)] ${kit.popular ? 'pt-10' : ''}`}>
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

                {/* Card Body — unique highlights per kit */}
                <div className="px-6 py-4 flex-1">
                  <div className="text-[10px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "var(--text-light)" }}>
                    Sample activities inside
                  </div>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {kit.highlights.map((f, j) =>
                      <li key={j} className="flex items-start gap-[7px] text-[12.5px] leading-[1.5]" style={{ color: "var(--text-mid)" }}>
                        <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]" style={{ background: "var(--clay)" }} />
                        {f}
                      </li>
                    )}
                  </ul>
                  {/* Best For tag */}
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium mb-4" style={{ background: "rgba(45,74,62,0.06)", color: "var(--forest)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v4M6 11v-2M1 6h4M11 6H9M2.5 2.5l2 2M9.5 9.5l-2-2M2.5 9.5l2-2M9.5 2.5l-2 2" stroke="var(--forest)" strokeWidth="1.2" strokeLinecap="round" /></svg>
                    Best for: {kit.bestFor}
                  </div>

                  {/* Facilitator's Note */}
                  <div className="rounded-lg px-3.5 py-3" style={{ borderLeft: "3px solid var(--clay)", background: "rgba(198,123,92,0.04)" }}>
                    <p className="text-[11.5px] leading-[1.6] m-0" style={{ color: "var(--text-mid)" }}>
                      <span className="font-semibold" style={{ color: "var(--forest-dark)" }}>Facilitator's Note:</span>{" "}
                      Every kit includes a one-page facilitator guide with session flow, adaptation tips for different cognitive levels, and prompts you can read verbatim.
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-[rgba(45,74,62,0.12)] flex items-center justify-between gap-3">
                  <div>
                    <div className="font-serif text-2xl font-semibold" style={{ color: "var(--forest-dark)" }}>{kit.price}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "var(--text-mid)" }}>One-time purchase · Instant download</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openPaddleCheckout(kit.priceId)}
                    className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-medium text-white whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-0"
                    style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}
                  >
                    Get This Kit <ArrowSvg />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEE INSIDE — product preview */}
      <section className="py-16 md:py-20 px-6 md:px-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.2] text-center mt-0 mb-12" style={{ color: "var(--forest-dark)" }}>
            Designed to spark <em className="italic" style={{ color: "var(--clay)" }}>real connection.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 see-inside-grid">
            {[
              { src: mockupNostalgia, alt: "Conversation Card preview from The Nostalgia Kit — 1950s drive-in movie prompt", caption: "Conversation Card", kit: "The Nostalgia Kit" },
              { src: mockupHome, alt: "Visual Spark Card preview from The Heart of the Home Kit — vintage kitchen scene", caption: "Visual Spark Card", kit: "The Heart of the Home Kit" },
              { src: mockupBingo, alt: "Themed BINGO card preview from The Are We There Yet Kit — road trip edition", caption: "Themed BINGO", kit: "The 'Are We There Yet?' Kit" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-full rounded-xl overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    boxShadow: "0 8px 24px rgba(45,74,62,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p className="mt-3 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-mid)", lineHeight: 1.4 }}>
                  <span style={{ fontWeight: 500, color: "var(--forest-dark)" }}>{item.caption}</span>
                  <span style={{ color: "var(--text-light)" }}> · {item.kit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLE OFFERS */}
      <section id="bundles" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--clay-pale)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">Best value</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            All 5 Kits. 30+ Sessions.<br /><em className="italic" style={{ color: "var(--clay)" }}>One price. Zero prep.</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[620px]" style={{ color: "var(--text-mid)" }}>
            Get every themed kit in one download and cover your programming calendar for over a month — at a fraction of the individual price.
          </p>

          {/* === TOP UI ROW === */}
          <div className="mt-12 rounded-2xl overflow-hidden" style={{ border: "2px solid var(--clay)", boxShadow: "0 8px 40px rgba(198,123,92,0.12)" }}>
            {/* Premium badge */}
            <div className="flex items-center justify-center gap-2 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-white" style={{ background: "linear-gradient(90deg, #C67B5C 0%, #D4A574 50%, #E8C99A 100%)" }}>
              <span>★</span> Best Value — Most Activity Directors Choose This <span>★</span>
            </div>

            {/* Horizontal 3-col UI */}
            <div className="bundle-ui-row" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", background: "var(--forest)" }}>
              {/* Left — Price */}
              <div className="p-6 md:p-8 flex flex-col justify-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--sand)" }}>
                  The Comfort Bond™ Complete Engagement System
                </div>
                <h3 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold leading-[1.2] m-0 text-white">
                  All 5 Kits — <em className="italic" style={{ color: "var(--sand)" }}>$97</em>
                </h3>
                <div className="text-sm text-white/60 mt-2">
                  <span className="line-through">$135 individually</span>
                  <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(232,201,154,0.2)", color: "var(--sand)" }}>Save ~$38</span>
                </div>
              </div>

              {/* Middle — Checklist (compact grid) */}
              <div className="p-6 md:p-8 flex flex-col justify-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "var(--sand)" }}>
                  Everything included
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 bundle-checklist-grid">
                  {BUNDLE_KITS.map((kit, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-[9px] text-white" style={{ background: "var(--clay)" }}>✓</span>
                      <span>{kit.icon} {kit.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Badge + CTA */}
              <div className="p-6 md:p-8 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "rgba(232,201,154,0.12)" }}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5V7c0 2.8 2 5.3 5 6 3-0.7 5-3.2 5-6V3.5L7 1z" stroke="var(--sand)" strokeWidth="1.2" /></svg>
                  <span className="text-[11px] font-medium" style={{ color: "var(--sand)" }}>
                    30+ sessions
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openPaddleCheckout("pri_01kpafqz2tc4pfc262j1dnh531")}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white border-0 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                  style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}
                >
                  Get All 5 Kits <ArrowSvg />
                </button>
                <p className="text-[10px] m-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                  $97 · One-time · Instant download
                </p>
              </div>
            </div>
          </div>

          {/* === BOTTOM GALLERY ROW === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 bundle-gallery-row">
            {[
              { src: bundleVolume, alt: "Expansive flat-lay of conversation cards, trivia pages, and activity sheets from all 5 Comfort Bond engagement kits spread across a table", title: "A Complete Programming Library", desc: "Everything you need to run engaging sessions, all in one place." },
              { src: bundleGroup, alt: "Activity Director facilitating a BINGO session with residents using The Comfort Bond engagement kit materials", title: "Meaningful Group Engagement", desc: "Interactive games designed to spark real connection." },
              { src: bundleStack, alt: "Dense stack of conversation cards, visual spark photo cards, and BINGO sheets from The Comfort Bond kits", title: "Months of Zero-Prep Material", desc: "Enough premium activities to confidently fill your calendar." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4 / 3", boxShadow: "0 4px 16px rgba(45,74,62,0.08)" }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: "var(--forest-dark)" }}>
                    {item.title}
                  </div>
                  <div className="text-[13px] mt-1" style={{ color: "var(--text-mid)", fontFamily: "var(--font-sans)" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
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
              { q: "Will these work for residents with dementia or memory loss?", a: "Yes. Every activity is designed with cognitive accessibility in mind. There are no wrong answers — just warm conversations, familiar music, and prompts that meet each person where they are. Activity Directors tell us these kits spark engagement even in residents who are usually withdrawn." },
              { q: "How many sessions can I get out of one kit?", a: "Each kit includes 6 different activity types (conversation cards, trivia, BINGO, word link, musical memory, and visual spark cards). Most Activity Directors rotate through one activity type per session, getting 6+ sessions from a single kit. Get all 5 kits for $97 and cover 30+ sessions across every theme." },
              { q: "Is this a monthly subscription?", a: "No. Every kit and bundle is a one-time purchase. There are no hidden fees or recurring charges. Once you buy, it's yours to print and use forever." },
              { q: "Can I print these for my whole floor?", a: 'Yes! The kits are specifically designed to be printer-friendly on standard 8.5" x 11" paper. Print as many copies as you need — BINGO cards, trivia sheets, conversation prompts — and hand them out directly to residents. One purchase covers your entire community.' },
              { q: "How quickly will I get access?", a: "Instantly. As soon as checkout is complete, you'll receive an email with a download link. You can purchase a kit and be running an activity with your group five minutes later. No waiting for shipping." }].
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
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 clamp(1.5rem,5vw,4rem)" }}>
          <div className="about-tag">Our story</div>
          <h2 className="about-title">You Shouldn't Have to<br />Spend Your Weekends<br />Planning <em>Monday's Activities.</em></h2>

          <div className="about-body" style={{ marginTop: "2rem" }}>
            <p>You didn't choose this work to spend Sunday nights searching for something that might work.</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>Scrolling. Printing. Rewriting.</p>
            <p>Trying to turn generic ideas into something your residents will actually connect with.</p>

            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, color: "#fff", fontSize: "1.05rem", marginTop: "2rem" }}>Here's the reality:</p>
            <p>You're running multiple sessions a day — and still expected to create meaningful activities from scratch.</p>
            <p>So you piece things together.</p>
            <p>And even when it "works"... you know it wasn't built for them.</p>

            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, color: "#fff", fontSize: "1.05rem", marginTop: "2rem" }}>This is not a you problem.</p>
            <p>You're not behind. You're not underprepared.</p>
            <p>You've been given no real system to work with.</p>
            <p style={{ color: "#fff", fontWeight: 400 }}>So we built one.</p>
          </div>

          <div className="about-sig" style={{ marginTop: "2rem" }}>— Francesca, Founder of The Comfort Bond™</div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ background: "var(--cream)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="about-body" style={{ color: "var(--text-mid)" }}>
            <p style={{ fontStyle: "italic" }}>Visiting shouldn't feel this hard.</p>
            <p>The Comfort Bond™ offers ready-to-use engagement kits for senior living, memory care, and families supporting aging parents.</p>
            <p style={{ color: "var(--text-light)", fontStyle: "italic" }}>No adapting. No guesswork. No late-night planning.</p>
            <p>Open it on your tablet—or print what you need and walk into your visit ready.</p>
            <p>And bring the focus back where it belongs:</p>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--clay)", fontSize: "1.25em" }}>Connection. Conversation. Presence.</p>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS — What this looks like in practice */}
      <section style={{ background: "var(--sand-pale)", padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="section-tag" style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>In practice</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 600, lineHeight: 1.2, color: "var(--forest-dark)", textAlign: "center", marginTop: 0, marginBottom: "3rem" }}>
            What this looks like <em style={{ fontStyle: "italic", color: "var(--clay)" }}>in practice</em>
          </h2>
          <div className="about-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { num: "5 Minutes", title: "From Download to Facilitation", desc: "No prep required." },
              { num: "30+ Sessions", title: "A Growing Library", desc: "You can rely on — this week and beyond." },
              { num: "100%", title: "Adult-Centered", desc: "No crafts. No coloring pages. No compromise on dignity." },
            ].map((card, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, color: "var(--forest)", lineHeight: 1, marginBottom: "0.75rem" }}>{card.num}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 600, color: "var(--forest-dark)", marginBottom: "0.5rem" }}>{card.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-mid)", lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div className="fcs-eyebrow">The Comfort Bond™ · For Activity Directors who refuse to settle</div>
          <h2 className="fcs-title">Your Residents Deserve More<br />Than <em>the Same Old Bingo.</em></h2>
          <p className="fcs-desc">Five themed kits. Six activity types each. Over 30 sessions of done-for-you programming. Print what you need, walk in ready, and watch the room come alive.</p>
          <div className="fcs-actions">
            <a href="#products" className="btn-primary">
              Browse all 5 kits
              <ArrowSvg />
            </a>
            <a href="#bundles" className="btn-secondary">Save with bundles</a>
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
              <li><a href="/kits">Engagement Kits</a></li>
              <li><a href="/blueprint-pro">Blueprint Pro</a></li>
              <li><a href="/family-visits">For Families</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blueprint">Free Blueprint</a></li>
              <li><a href="/free-sampler">Free Sampler</a></li>
              <li><a href="/resources">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="mailto:hello@thecomfortbond.com">hello@thecomfortbond.com</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
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