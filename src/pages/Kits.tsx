import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import mockupNostalgia from "@/assets/mockup-nostalgia.png";
import mockupHome from "@/assets/mockup-home.png";
import mockupBingo from "@/assets/mockup-bingo.png";
import bundleVolume from "@/assets/bundle-volume-flatlay.png";
import bundleGroup from "@/assets/bundle-group-activity.png";
import bundleStack from "@/assets/bundle-content-stack.png";
import { FooterSection } from "@/components/sections/FooterSection";
import React from "react";
import { openPaddleCheckout } from "@/lib/paddle";

const ArrowSvg = React.forwardRef<SVGSVGElement, { color?: string }>(
  ({ color = "#fff", ...props }, ref) => (
    <svg ref={ref} width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
);
ArrowSvg.displayName = "ArrowSvg";

const BUNDLE_KITS = [
  { icon: "\uD83D\uDCFB", name: "The Nostalgia Kit" },
  { icon: "\uD83C\uDF5E", name: "The Heart of the Home Kit" },
  { icon: "\uD83D\uDE97", name: 'The "Are We There Yet?" Kit' },
  { icon: "\uD83C\uDF3B", name: "The Heirloom Garden Kit" },
  { icon: "\uD83D\uDD27", name: "The Makers & Menders Kit" },
];

const KITS = [
  {
    id: "nostalgia-kit",
    icon: "\uD83D\uDCFB",
    name: "The Nostalgia Kit",
    theme: "1950S\u20131980S POP CULTURE & DAILY LIFE",
    desc: "Take residents back to the golden age of drive-in movies, jukeboxes, and poodle skirts. Designed to spark joyful memories of 1950s\u20131980s pop culture and daily life.",
    highlights: ["Drive-In Movies vs. Streaming \u2014 Then & Now debate cards", "Name That Jukebox Tune \u2014 1950s\u201380s hits", "Poodle Skirts to Bell Bottoms \u2014 fashion flashback trivia"],
    bestFor: "Mixed groups, all cognitive levels",
    popular: true,
    price: "$32.99",
    priceId: "pri_01kpafx84h0z9z11fwc5m84dam",
  },
  {
    id: "heart-of-the-home-kit",
    icon: "\uD83C\uDF5E",
    name: "The Heart of the Home Kit",
    theme: "Family Meals, Sunday Suppers & Baking Days",
    desc: "Centered around the warmth of family meals, Sunday suppers, and baking days. Deeply comforting prompts to engage the senses and recall cherished culinary traditions.",
    highlights: ["Sunday Supper memories \u2014 what was on your table?", "Vintage kitchen gadgets trivia \u2014 name that tool", "Comfort food BINGO \u2014 from pot roast to pie"],
    bestFor: "Women\u2019s groups, sensory engagement",
    popular: false,
    price: "$32.99",
    priceId: "pri_01kpafxq9xrqg0qhqfttzdjswf",
  },
  {
    id: "are-we-there-yet-kit",
    icon: "\uD83D\uDE97",
    name: 'The "Are We There Yet?" Kit',
    theme: "The Great American Road Trip",
    desc: "The ultimate great American road trip in a box. From packed station wagons to roadside diners and national parks, this kit brings the adventure of summer vacations right to the table.",
    highlights: ["Station wagon packing list \u2014 what did you bring?", "Roadside diner trivia \u2014 Route 66 & beyond", "National parks BINGO \u2014 from Yellowstone to Yosemite"],
    bestFor: "High-energy sessions, mixed groups",
    popular: false,
    price: "$32.99",
    priceId: "pri_01kpafwqs0wwzatbs5721cyfmk",
  },
  {
    id: "heirloom-garden-kit",
    icon: "\uD83C\uDF3B",
    name: "The Heirloom Garden Kit",
    theme: "Nature, Seasons & the Joy of Growing",
    desc: "Grounded in nature and the changing seasons. Residents will connect over memories of planting spring bulbs, harvesting backyard vegetables, and the satisfaction of a well-tended garden.",
    highlights: ["Spring planting memories \u2014 what grew in your yard?", "Farmer\u2019s almanac trivia \u2014 weather, seasons & folklore", "Backyard harvest BINGO \u2014 tomatoes to tulips"],
    bestFor: "Spring/summer programming, garden clubs",
    popular: false,
    price: "$32.99",
    priceId: "pri_01kpafvx3erd68458p4em99141",
  },
  {
    id: "makers-and-menders-kit",
    icon: "\uD83D\uDD27",
    name: "The Makers & Menders Kit",
    theme: "Hands-On Work, Craftsmanship & Things Built to Last",
    desc: "Celebrating the pride of hands-on work. Bridges demographics by engaging both men and women with memories of the tool shed, the sewing basket, the garage, and things built to last.",
    highlights: ["Tool shed vs. sewing basket \u2014 what did you make?", "Fix-it or toss-it debate cards \u2014 things built to last", "Vintage trades trivia \u2014 from blacksmiths to seamstresses"],
    bestFor: "Co-ed groups, bridging demographics",
    popular: false,
    price: "$32.99",
    priceId: "pri_01kpafv0r50q149ctgje0dmn0q",
  },
];

export default function Kits() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* ── Nav ── */}
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto px-6 py-4">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src={logoImg} alt="The Comfort Bond" className="h-12 w-auto rounded-full" />
          <span className="font-serif text-lg font-semibold" style={{ color: "var(--forest-dark)" }}>
            The Comfort Bond
          </span>
        </Link>
        <Link
          to="/"
          className="text-sm no-underline transition-colors hover:opacity-70"
          style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
        >
          &larr; Back to Home
        </Link>
      </nav>

      {/* ── Products Section ── */}
      <section id="products" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--sand-pale)", paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">The full collection</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            Five Done-for-You Engagement Kits,<br />
            <em className="italic" style={{ color: "var(--clay)" }}>Ready to Print &amp; Facilitate Today</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[600px]" style={{ color: "var(--text-mid)" }}>
            Each kit is a complete, themed activity package — zero prep, maximum engagement. Print what you need and walk into your next session with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {KITS.map((kit, i) => (
              <div
                key={i}
                id={kit.id}
                className="bg-white border border-[rgba(45,74,62,0.12)] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,74,62,0.1)] relative"
              >
                {kit.popular && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-white z-10" style={{ background: "var(--clay)" }}>
                    Most Popular — Start Here
                  </div>
                )}
                <div className={`p-6 pb-4 border-b border-[rgba(45,74,62,0.12)] ${kit.popular ? "pt-10" : ""}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] bg-[rgba(198,123,92,0.08)] border border-[rgba(198,123,92,0.15)]">{kit.icon}</span>
                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full" style={{ color: "var(--clay)", background: "rgba(198,123,92,0.1)" }}>Engagement Kit</span>
                  </div>
                  <h3 className="font-serif text-[1.2rem] font-semibold leading-[1.2] mb-1" style={{ color: "var(--forest-dark)" }}>{kit.name}</h3>
                  <div className="text-[11px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: "var(--clay)" }}>{kit.theme}</div>
                  <p className="text-[13px] leading-[1.6] min-h-[3.2em]" style={{ color: "var(--text-mid)" }}>{kit.desc}</p>
                </div>
                <div className="px-6 py-4 flex-1">
                  <div className="text-[10px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "var(--text-light)" }}>Sample activities inside</div>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {kit.highlights.map((f, j) => (
                      <li key={j} className="flex items-start gap-[7px] text-[12.5px] leading-[1.5]" style={{ color: "var(--text-mid)" }}>
                        <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]" style={{ background: "var(--clay)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium mb-4" style={{ background: "rgba(45,74,62,0.06)", color: "var(--forest)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v4M6 11v-2M1 6h4M11 6H9M2.5 2.5l2 2M9.5 9.5l-2-2M2.5 9.5l2-2M9.5 2.5l-2 2" stroke="var(--forest)" strokeWidth="1.2" strokeLinecap="round" /></svg>
                    Best for: {kit.bestFor}
                  </div>
                  <div className="rounded-lg px-3.5 py-3" style={{ borderLeft: "3px solid var(--clay)", background: "rgba(198,123,92,0.04)" }}>
                    <p className="text-[11.5px] leading-[1.6] m-0" style={{ color: "var(--text-mid)" }}>
                      <span className="font-semibold" style={{ color: "var(--forest-dark)" }}>Facilitator's Note:</span>{" "}
                      Every kit includes a one-page facilitator guide with session flow, adaptation tips for different cognitive levels, and prompts you can read verbatim.
                    </p>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-[rgba(45,74,62,0.12)] flex items-center justify-between gap-3">
                  <div>
                    <div className="font-serif text-2xl font-semibold" style={{ color: "var(--forest-dark)" }}>{kit.price}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: "var(--text-mid)" }}>One-time purchase · Instant download</div>
                  </div>
                  <button type="button" onClick={() => openPaddleCheckout(kit.priceId)} className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-medium text-white whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-0" style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}>
                    Buy Now <ArrowSvg />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── See Inside ── */}
      <section className="py-16 md:py-20 px-6 md:px-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.2] text-center mt-0 mb-12" style={{ color: "var(--forest-dark)" }}>
            Designed to spark <em className="italic" style={{ color: "var(--clay)" }}>real connection.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 see-inside-grid">
            {[
              { src: mockupNostalgia, alt: "Conversation Card preview from The Nostalgia Kit", caption: "Conversation Card", kit: "The Nostalgia Kit" },
              { src: mockupHome, alt: "Visual Spark Card preview from The Heart of the Home Kit", caption: "Visual Spark Card", kit: "The Heart of the Home Kit" },
              { src: mockupBingo, alt: "Themed BINGO card preview from The Are We There Yet Kit", caption: "Themed BINGO", kit: "The 'Are We There Yet?' Kit" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: "4 / 5", boxShadow: "0 8px 24px rgba(45,74,62,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}>
                  <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover block" />
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

      {/* ── Bundle Offers ── */}
      <section id="bundles" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "var(--clay-pale)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="section-tag">Best value</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mt-0" style={{ color: "var(--forest-dark)" }}>
            All 5 Kits. 30+ Sessions.<br /><em className="italic" style={{ color: "var(--clay)" }}>One price. Zero prep.</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] mt-4 max-w-[620px]" style={{ color: "var(--text-mid)" }}>
            Get every themed kit in one download and cover your programming calendar for over a month — at a fraction of the individual price.
          </p>

          <div className="mt-12 rounded-2xl overflow-hidden" style={{ border: "2px solid var(--clay)", boxShadow: "0 8px 40px rgba(198,123,92,0.12)" }}>
            <div className="flex items-center justify-center gap-2 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-white" style={{ background: "linear-gradient(90deg, #C67B5C 0%, #D4A574 50%, #E8C99A 100%)" }}>
              <span>★</span> Best Value — Most Activity Directors Choose This <span>★</span>
            </div>
            <div className="bundle-ui-row" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", background: "var(--forest)" }}>
              <div className="p-6 md:p-8 flex flex-col justify-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "var(--sand)" }}>The Comfort Bond™ Complete Engagement System</div>
                <h3 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold leading-[1.2] m-0 text-white">
                  All 5 Kits — <em className="italic" style={{ color: "var(--sand)" }}>$130.99</em>
                </h3>
                <div className="text-sm text-white/60 mt-2">
                  <span className="line-through">$164.95 individually</span>
                  <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(232,201,154,0.2)", color: "var(--sand)" }}>Save ~$34</span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] tracking-[0.1em] uppercase font-medium mb-3" style={{ color: "var(--sand)" }}>Everything included</div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 bundle-checklist-grid">
                  {BUNDLE_KITS.map((kit, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-[9px] text-white" style={{ background: "var(--clay)" }}>✓</span>
                      <span>{kit.icon} {kit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "rgba(232,201,154,0.12)" }}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5V7c0 2.8 2 5.3 5 6 3-0.7 5-3.2 5-6V3.5L7 1z" stroke="var(--sand)" strokeWidth="1.2" /></svg>
                  <span className="text-[11px] font-medium" style={{ color: "var(--sand)" }}>30+ sessions</span>
                </div>
                <button type="button" onClick={() => openPaddleCheckout("pri_01kpafqz2tc4pfc262j1dnh531")} className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white border-0 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap" style={{ background: "var(--clay)", fontFamily: "var(--font-sans)" }}>
                  Get All 5 Kits <ArrowSvg />
                </button>
                <p className="text-[10px] m-0" style={{ color: "rgba(255,255,255,0.4)" }}>$130.99 · One-time · Instant download</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 bundle-gallery-row">
            {[
              { src: bundleVolume, alt: "Flat-lay of all 5 Comfort Bond engagement kit materials", title: "A Complete Programming Library", desc: "Everything you need to run engaging sessions, all in one place." },
              { src: bundleGroup, alt: "Activity Director facilitating a BINGO session with residents", title: "Meaningful Group Engagement", desc: "Interactive games designed to spark real connection." },
              { src: bundleStack, alt: "Stack of conversation cards, visual spark cards, and BINGO sheets", title: "Months of Zero-Prep Material", desc: "Enough premium activities to confidently fill your calendar." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4 / 3", boxShadow: "0 4px 16px rgba(45,74,62,0.08)" }}>
                  <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover block" />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: "var(--forest-dark)" }}>{item.title}</div>
                  <div className="text-[13px] mt-1" style={{ color: "var(--text-mid)", fontFamily: "var(--font-sans)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
