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

  const openCheckoutInNewTab = (url: string) => {
    const newWindow = window.open("about:blank", "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.location.href = url;
    }
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
            
            <li><a href="/resources">Resources</a></li>
            <li><a href="#products" className="nav-cta">Shop Now</a></li>
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
              Trusted by Activity Directors Nationwide
            </div>
            <h1>Your Next 30 Days<br />of Activities — <em>Done.</em></h1>
            <p className="hero-desc">Print-ready engagement kits built for Activity Directors who are tired of scrambling. Conversation cards, trivia, BINGO, music games — themed, tested, and ready to facilitate in 5 minutes.</p>
            <div className="hero-actions">
              <a href="#products" className="btn-primary">
                See the 5 kits
                <ArrowSvg />
              </a>
              <a
                href="https://thecomfortbond.gumroad.com/l/comfortengagementsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={(event) => handleCheckoutClick(event, "https://thecomfortbond.gumroad.com/l/comfortengagementsystem")}
              >
                Get all 5 for $137
              </a>
            </div>
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
                  <div className="hc-badge">From $34.99</div>
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


      {/* PRODUCTS — moved up, first thing after trusted bar */}
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
                highlights: ["Drive-In Movies vs. Streaming — Then & Now debate cards", "Name That Jukebox Tune — 1950s–70s hits", "Poodle Skirts to Bell Bottoms — fashion flashback trivia"],
                bestFor: "Mixed groups, all cognitive levels",
                popular: true,
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/nostalgiakit"
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
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/heartofthehomekit"
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
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/arewethereyetkit"
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
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/heirloomgardenkit"
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
                price: "$34.99",
                url: "https://thecomfortbond.gumroad.com/l/makersandmenderskit"
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
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium" style={{ background: "rgba(45,74,62,0.06)", color: "var(--forest)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v4M6 11v-2M1 6h4M11 6H9M2.5 2.5l2 2M9.5 9.5l-2-2M2.5 9.5l2-2M9.5 2.5l-2 2" stroke="var(--forest)" strokeWidth="1.2" strokeLinecap="round" /></svg>
                    Best for: {kit.bestFor}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => handleCheckoutClick(event, kit.url)}
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

      {/* SOCIAL PROOF — testimonial strip */}
      <section className="py-12 md:py-16 px-6 md:px-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8">
            <div className="section-tag" style={{ display: "flex", justifyContent: "center" }}>What Activity Directors are saying</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "I used to spend my entire Sunday planning the week's activities. Now I print a kit Monday morning and I'm ready for the whole week. My residents are more engaged than they've been in months.",
                name: "Activity Director",
                facility: "Assisted Living Community, Ohio"
              },
              {
                quote: "The conversation cards are a game-changer. Even my residents with advanced memory loss light up when we start talking about drive-in movies or Sunday suppers. There are no wrong answers — everyone can participate.",
                name: "Life Enrichment Manager",
                facility: "Memory Care Center, Florida"
              }
            ].map((t, i) =>
              <div key={i} className="bg-white rounded-2xl border border-[rgba(45,74,62,0.1)] p-6 md:p-8 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <StarSvg key={s} fill="#D4A574" />)}
                </div>
                <blockquote className="text-[15px] leading-[1.75] flex-1 mb-4 italic" style={{ color: "var(--text-mid)", fontFamily: "var(--font-serif)" }}>
                  "{t.quote}"
                </blockquote>
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: "var(--forest-dark)" }}>{t.name}</div>
                  <div className="text-[12px]" style={{ color: "var(--text-light)" }}>{t.facility}</div>
                </div>
              </div>
            )}
          </div>
          {/* ROI stat bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { num: "30+", label: "Hours of planning replaced per month" },
              { num: "<$5", label: "Per activity session with the bundle" },
              { num: "5 min", label: "From download to facilitating" }
            ].map((stat, i) =>
              <div key={i} className="text-center">
                <div className="font-serif text-[2rem] font-semibold" style={{ color: "var(--forest)" }}>{stat.num}</div>
                <div className="text-[12px] mt-1" style={{ color: "var(--text-light)" }}>{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BUNDLE */}
      <section id="bundle" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--clay-pale)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">Best value — most Activity Directors choose this</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            30+ Sessions. 5 Themes. Zero Prep.<br /><em className="italic" style={{ color: "var(--clay)" }}>Less than $4.60 per activity session.</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[620px]" style={{ color: "var(--text-mid)" }}>
            Get all 5 kits in one download and cover your programming calendar for over a month. One purchase replaces 30+ hours of activity planning.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden max-w-[900px] mx-auto mt-12 relative" style={{ border: "2px solid var(--clay)", boxShadow: "0 8px 40px rgba(198,123,92,0.15)" }}>
            {/* Premium tier badge */}
            <div className="flex items-center justify-center gap-2 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white" style={{ background: "linear-gradient(90deg, #C67B5C 0%, #D4A574 50%, #E8C99A 100%)" }}>
              <span>★</span> Premium Tier — Our Complete Engagement System <span>★</span>
            </div>
            {/* Bundle Header */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-10" style={{ background: "var(--forest)" }}>
              <div>
                <span className="inline-block text-[11px] font-medium tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-full mb-4" style={{ background: "linear-gradient(135deg, #E8C99A 0%, #D4A574 100%)", color: "var(--forest-dark)" }}>
                  The Comfort Bond™ Complete Engagement System
                </span>
                <h3 className="font-serif text-[2rem] font-semibold text-white leading-[1.2] m-0">
                  All 5 Kits + The Serenity Suite<br /><em className="italic" style={{ color: "var(--sand)" }}>Your entire activity library — done.</em>
                </h3>
                <div className="text-sm text-white/[0.65] mt-2">5 themed kits × 6 activities each = 30+ ready-to-run sessions</div>
              </div>
              <div className="md:text-right">
                <div className="text-sm text-white/70 line-through mb-1">$174.95 if bought separately</div>
                <div className="font-serif text-5xl font-semibold leading-none" style={{ color: "var(--sand)" }}>$137</div>
                <div className="text-xs mt-1 tracking-[0.05em]" style={{ color: "var(--sand)" }}>That's less than $4.60 per session</div>
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
                  VIP Bonus — Included FREE with your bundle
                </div>
                {/* Bonus content */}
                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(232,201,154,0.08) 0%, transparent 60%)" }} />
                  <div className="relative flex-1">
                    <h4 className="font-serif text-[1.25rem] font-semibold text-white mb-2">The Serenity Suite Video Library</h4>
                    <p className="text-[13px] text-white/70 leading-[1.65] mb-3">
                      10 cinematic, 8-minute relaxation and reminiscence videos — gentle rain, ocean waves, mountain sunrises, flowing waterfalls, and more. Designed to promote calm, reduce anxiety, and bring peaceful moments to any room.
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
                    <div className="font-serif text-[2rem] font-semibold leading-none tracking-[0.04em] italic" style={{ color: "var(--sand)" }}>Included</div>
                    <div className="text-[11px] text-white/50 uppercase tracking-[0.08em] font-medium mt-1.5">Lifetime Access</div>
                  </div>
                </div>
              </div>

              {/* Bundle CTA — action separated from price */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
                <a
                  href="https://thecomfortbond.gumroad.com/l/comfortengagementsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => handleCheckoutClick(event, "https://thecomfortbond.gumroad.com/l/comfortengagementsystem")}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}
                >
                  Get the Complete Engagement System
                  <ArrowSvg />
                </a>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold" style={{ color: "var(--forest-dark)" }}>$137 one-time · All 5 kits + Serenity Suite included</div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ color: "var(--text-light)" }}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5V7c0 2.8 2 5.3 5 6 3-0.7 5-3.2 5-6V3.5L7 1z" stroke="#7a8a7a" strokeWidth="1.2" /></svg>
                    PDF &amp; video download · No subscription · Use forever
                  </div>
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
              { q: "Will these work for residents with dementia or memory loss?", a: "Yes. Every activity is designed with cognitive accessibility in mind. There are no wrong answers — just warm conversations, familiar music, and prompts that meet each person where they are. Activity Directors tell us these kits spark engagement even in residents who are usually withdrawn." },
              { q: "How many sessions can I get out of one kit?", a: "Each kit includes 6 different activity types (conversation cards, trivia, BINGO, word link, musical memory, and visual spark cards). Most Activity Directors rotate through one activity type per session, getting 6+ sessions from a single kit. The Complete Engagement System gives you 30+ sessions across all 5 themes." },
              { q: "Is this a monthly subscription?", a: "No. All of our engagement kits and The Comfort Bond™ Complete Engagement System are one-time purchases. There are no hidden fees or recurring charges. Once you buy, it's yours to print and use forever." },
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

      {/* WHO IT'S FOR */}
      <section className="tcb-section" id="who">
        <div className="section-inner">
          <div className="section-tag">Who this is for</div>
          <h2 className="tcb-section-title">You're Running on Empty.<br /><em>We Built This for You.</em></h2>
          <p className="section-sub">Whether you're planning activities for an entire floor or just trying to get through a Sunday visit without the silence — The Comfort Bond™ meets you exactly where you are right now.</p>
          <div className="audience-grid">
            <div className="audience-card primary">
              <div className="audience-icon forest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2d4a3e" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="7" r="4" stroke="#2d4a3e" strokeWidth="1.5" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#2d4a3e" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="audience-who">For Senior Living Professionals</div>
              <h3>Stop Scrambling. Start Facilitating.</h3>
              <p className="audience-desc">You became an Activity Director to make a difference — not to spend every Sunday night on Pinterest searching for something, anything, that isn't a children's coloring page. Walk in Monday morning with a full week of programming, printed and ready.</p>
              <ul className="audience-list">
                {["Zero prep required — just print and play", "Adaptable for all cognitive levels", "6 distinct activities per kit to prevent burnout", "One-time purchase — use it forever"].map((item, i) =>
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
              <div className="audience-who">For Families &amp; In-Home Caregivers</div>
              <h3>End the Awkward Silence.</h3>
              <p className="audience-desc">You drive an hour to visit Mom. You sit down. And then... nothing. Small talk fades in two minutes, and you leave feeling like you failed. These kits give you something real to do together — prompts that unlock stories, and moments you'll actually remember.</p>
              <ul className="audience-list">
                {["Instantly break the ice with visual prompts", "Designed for connection, even with memory loss", "Available instantly — no waiting for shipping", "A meaningful gift for aging parents"].map((item, i) =>
                  <li key={i}><span className="check clay"><CheckSvg color="#C67B5C" /></span>{item}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="tcb-section about-section" id="about">
        <div className="section-inner" style={{ padding: 0 }}>
          <div className="about-inner">
            <div>
              <div className="about-tag">Our story</div>
              <h2 className="about-title">You Shouldn't Have to<br />Spend Your Weekends<br />Planning <em>Monday's Activities.</em></h2>
              <p className="text-[15px] font-light leading-[1.7] mt-4 mb-6" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520 }}>
                Activity Directors do some of the most important work in healthcare. You deserve better tools than Pinterest and a prayer.
              </p>
              <div className="about-body">
                <p>I'm Francesca, Founder of The Comfort Bond™. When I looked closely at the resources available for senior care, I saw a broken system. Professionals like you are tasked with keeping our elders engaged, connected, and dignified — yet you are expected to do it by endlessly scrolling Google, printing out generic worksheets, and working off the clock. That is not a staffing problem; that is a systems problem.</p>
                <p>So, I built a system to fix it. Every kit in The Comfort Bond™ is designed around one principle: you should be able to walk into a session with zero prep and facilitate something genuinely meaningful. No infantilizing crafts. No hours of prep. Just open the PDF, print what you need, and spark real connection. Every activity respects the life experience of your residents, because dignity isn't a feature — it's the foundation. <a href="/resources" style={{ color: "var(--clay)", textDecoration: "underline", textUnderlineOffset: 3 }}>Read our free guides for Activity Directors →</a></p>
              </div>
              <div className="about-sig">— Francesca Djoufack, Founder of The Comfort Bond™</div>
            </div>
            <div className="about-visual">
              <div className="about-stat-card">
                <div className="asc-num">5 min</div>
                <div className="asc-label">From download to facilitating — zero prep required</div>
              </div>
              <div className="about-stat-card">
                <div className="asc-num">30+</div>
                <div className="asc-label">Ready-to-run sessions in the Complete Engagement System</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE DOWNLOAD — safety net for non-buyers */}
      <section className="tcb-section" id="freebie" style={{ background: "var(--forest)", padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem)" }}>
        <div className="section-inner" style={{ maxWidth: 1100 }}>
          <div className="email-capture-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(232,201,154,0.15)", border: "1px solid rgba(232,201,154,0.25)", color: "var(--sand)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "5px 12px", borderRadius: 100, marginBottom: "1rem" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--clay)", display: "inline-block" }} />
                Free download
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", marginBottom: "0.75rem" }}>
                Try The Comfort Bond™ with Your Group This Week —<br />
                <em style={{ fontStyle: "italic", color: "var(--sand)" }}>For Free.</em>
              </h2>
              <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "1rem" }}>
                Download The Morning Routine Sampler. It is a complete, zero-prep 30-minute engagement session themed around coffee, sunrises, and the start of every day. See for yourself how easily these prompts spark memories and meaningful connection.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius)", padding: "1.5rem 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontStyle: "italic", color: "var(--sand)", marginBottom: "0.25rem" }}>The Morning Routine Sampler</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>Complete 30-min session · Zero prep · Free PDF</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { emoji: "💬", title: "8 Open-Ended Conversation Cards", meta: "Coffee, sunrises & morning routines" },
                  { emoji: "📸", title: "6 Vintage Visual Spark Cards", meta: "Nostalgic images to prompt stories & memories" },
                  { emoji: "🔗", title: "1 Quick Word Link Game", meta: "Cognitive engagement — themed & ready to go" }
                ].map((item, i) =>
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
                href="https://thecomfortbond.gumroad.com/l/morningroutinesampler?wanted=true"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => handleCheckoutClick(event, "https://thecomfortbond.gumroad.com/l/morningroutinesampler?wanted=true")}
                style={{
                  background: "var(--clay)", color: "#fff", border: "none", borderRadius: 100,
                  padding: "13px 24px", fontSize: 15, fontWeight: 500, fontFamily: "var(--font-sans)",
                  cursor: "pointer", transition: "background 0.2s", textAlign: "center",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  textDecoration: "none"
                }}
              >
                Download My Free Sampler <ArrowSvg />
              </a>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", lineHeight: 1.5 }}>
                Free PDF · Instant download · No email required
              </p>
            </div>
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
            <a href="#bundle" className="btn-secondary">Or get the Complete System — $137</a>
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