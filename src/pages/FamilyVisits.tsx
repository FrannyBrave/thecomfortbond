import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { Button } from "@/components/ui/button";
import { MothersDayCheckoutModal } from "@/components/MothersDayCheckoutModal";
import heroImage from "@/assets/mothers-day-visit-ideas-for-aging-parent-connection-kit.jpg";
import heroImageWebp from "@/assets/mothers-day-visit-ideas-for-aging-parent-connection-kit.webp";
import heroImageMobileWebp from "@/assets/mothers-day-visit-ideas-for-aging-parent-connection-kit-mobile.webp";
import heroImageMobileJpg from "@/assets/mothers-day-visit-ideas-for-aging-parent-connection-kit-mobile.jpg";
import heroImage480 from "@/assets/mothers-day-visit-480.webp";
import heroImage768 from "@/assets/mothers-day-visit-768.webp";
import kitImage from "@/assets/mothers-day-connection-kit-for-seniors.jpg";
import kitImageWebp from "@/assets/mothers-day-connection-kit-for-seniors.webp";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: easeOut },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, ease: easeOut },
};

/* Decorative sun-cross ornament — repeated through the page like a printer's mark */
const Ornament = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 40"
    className={`inline-block ${className}`}
    fill="none"
  >
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="0.6" />
    <line x1="20" y1="0" x2="20" y2="9" stroke="currentColor" strokeWidth="0.6" />
    <line x1="20" y1="31" x2="20" y2="40" stroke="currentColor" strokeWidth="0.6" />
    <line x1="0" y1="20" x2="9" y2="20" stroke="currentColor" strokeWidth="0.6" />
    <line x1="31" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-terracotta inline-flex items-center gap-3 justify-center">
    <span aria-hidden="true" className="inline-block w-8 h-px bg-terracotta opacity-60" />
    <span>{children}</span>
    <span aria-hidden="true" className="inline-block w-8 h-px bg-terracotta opacity-60" />
  </span>
);

/* Gentle days-until-Mother's-Day counter — calm urgency */
const useDaysUntilMothersDay = () => {
  return useMemo(() => {
    const today = new Date();
    let target = new Date(today.getFullYear(), 4, 10);
    if (today > target) {
      target = new Date(today.getFullYear() + 1, 4, 10);
    }
    const ms =
      target.getTime() -
      new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const days = Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
    return {
      days,
      dateLabel: target.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
    };
  }, []);
};

const FamilyVisits = () => {
  const { days } = useDaysUntilMothersDay();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutSource, setCheckoutSource] = useState("hero");

  const openCheckoutModal = (source: string) => {
    setCheckoutSource(source);
    setCheckoutOpen(true);
  };

  const faqs = [
    {
      q: "Will this work if my mom has dementia or memory loss?",
      a: "Yes — every prompt and ritual was designed with memory care in mind. Nothing asks her to recall facts or dates. The tools meet her where she is today, using sensory cues, familiar music, and gentle observation rather than memory tests.",
    },
    {
      q: "Is this a digital download or a physical product?",
      a: "It's an instant digital download — a .zip file containing 5 premium PDFs. You can print everything at home on standard 8.5×11\" paper, or use it directly on your phone or tablet with no printing required.",
    },
    {
      q: "When will I get access?",
      a: "Immediately. The download link is delivered to your inbox the moment your purchase completes. You can use the kit the same day you visit.",
    },
  ];

  useEffect(() => {
    document.title = "The Mother's Day Connection Kit — $27 | The Comfort Bond™";
    const desc =
      "A simple way to make your Mother's Day visit meaningful — even if you don't know what to say. Gentle prompts, visual cards, music guidance & a visit plan. $27. Available until May 10.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const ogTags: Array<[string, string]> = [
      ["og:title", "The Mother's Day Connection Kit — $27 | The Comfort Bond™"],
      [
        "og:description",
        "Gentle prompts, visual cards, music guidance, and a simple visit plan so you can walk in feeling prepared, present, and connected.",
      ],
      ["og:image", "https://thecomfortbond.com/og-family-visits.jpg"],
      ["og:type", "website"],
      ["og:url", "https://thecomfortbond.com/family-visits"],
    ];
    ogTags.forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    const FAQ_SCHEMA_ID = "faq-schema-family-visits";
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    let schemaScript = document.getElementById(FAQ_SCHEMA_ID) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = FAQ_SCHEMA_ID;
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(faqSchema);

    return () => {
      document.getElementById(FAQ_SCHEMA_ID)?.remove();
    };
  }, []);

  /* Reusable primary CTA — same checkout behavior everywhere */
  const BuyButton = ({
    source,
    className = "",
    fullWidthMobile = true,
  }: {
    source: string;
    className?: string;
    fullWidthMobile?: boolean;
  }) => (
    <Button
      variant="cta-poppy"
      size="xl"
      onClick={() => openCheckoutModal(source)}
      className={`${fullWidthMobile ? "w-full sm:w-auto" : ""} ${className}`}
    >
      Buy The Kit — $27
    </Button>
  );

  const availabilityLine = (
    <p className="font-sans text-[12px] sm:text-[13px] tracking-[0.06em] text-forest/70 mt-3">
      Available until Mother's Day · May 10 · Instant digital download
    </p>
  );

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation />
      <ExitIntentModal />

      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative px-6 lg:px-12 pt-20 pb-10 md:pt-32 md:pb-24">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 20% 0%, rgba(198,123,92,0.08), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(45,74,62,0.06), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Hero image — appears AFTER text on mobile (faster LCP), right side on desktop */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-5 order-2 lg:order-2 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
                <picture>
                  {/* Mobile: serve smallest WebP that fits — 480w for ≤480px, 768w for ≤768px, mobile.webp for ≤1023px */}
                  <source
                    media="(max-width: 480px)"
                    type="image/webp"
                    srcSet={`${heroImage480} 480w`}
                    sizes="100vw"
                  />
                  <source
                    media="(max-width: 768px)"
                    type="image/webp"
                    srcSet={`${heroImage768} 768w`}
                    sizes="100vw"
                  />
                  <source
                    media="(max-width: 1023px)"
                    type="image/webp"
                    srcSet={heroImageMobileWebp}
                  />
                  <source
                    media="(max-width: 1023px)"
                    srcSet={heroImageMobileJpg}
                  />
                  <source type="image/webp" srcSet={heroImageWebp} />
                  <img
                    src={heroImage}
                    alt="Adult daughter and her silver-haired mother sharing memory conversation cards from The Mother's Day Connection Kit at a sunlit wooden table."
                    width={1200}
                    height={1200}
                    className="relative z-10 w-full h-auto rounded-[24px] object-cover"
                    style={{
                      aspectRatio: "1/1",
                      boxShadow:
                        "0 25px 60px -12px rgba(0,0,0,0.45), 0 12px 28px -8px rgba(0,0,0,0.25)",
                    }}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-7 order-1 lg:order-1 text-center lg:text-left">
              {/* "For you" eyebrow — instant audience clarity */}
              <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-terracotta/90 font-medium">
                For adult children visiting an aging mom
              </p>

              {/* Headline — tightened, emotional word early */}
              <h1 className="mt-4 font-serif text-forest leading-[1.08] tracking-tight text-[2.15rem] sm:text-[2.5rem] lg:text-[3.25rem]">
                Make This Mother's Day{" "}
                <span className="italic text-terracotta">Meaningful</span> — Even
                If You Don't Know What to Say.
              </h1>

              {/* Subheadline — short, two beats */}
              <p className="mt-5 md:mt-6 font-serif text-forest/85 text-lg md:text-xl leading-[1.45] max-w-xl mx-auto lg:mx-0">
                Walk in calm. Connect without pressure.
              </p>
              <p className="mt-2 font-sans text-foreground/70 text-[15px] md:text-base leading-[1.65] font-light max-w-xl mx-auto lg:mx-0">
                A gentle kit of prompts, cards & music — ready in minutes.
              </p>

              {/* Urgency strip — louder, tied to Mother's Day */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-terracotta/10 border border-terracotta/30 px-4 py-2">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                  {days > 0 ? (
                    <span className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.04em] text-terracotta">
                      Only {days} {days === 1 ? "day" : "days"} left until Mother's Day
                    </span>
                  ) : (
                    <span className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.04em] text-terracotta">
                      Today is Mother's Day · be present
                    </span>
                  )}
                </div>
              </div>

              {/* Hero CTA */}
              <div className="mt-5 md:mt-7">
                <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-forest/60 mb-3">
                  Be ready before May 10 →
                </p>
                <BuyButton source="hero" />
                <p className="font-sans text-sm text-foreground/65 mt-3 leading-relaxed">
                  Use on your phone, tablet, or print at home.
                </p>
                {availabilityLine}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — QUICK CLARITY (What this helps with) */}
        <section className="px-6 py-14 md:py-20 bg-cream-dark/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="font-serif text-forest text-2xl md:text-[2rem] leading-[1.2] text-center mb-10 md:mb-14"
            >
              For the visit you want to{" "}
              <span className="italic">make meaningful.</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {[
                "Start meaningful conversations without pressure",
                "Avoid the awkward silence when words feel hard",
                "Feel calm and prepared before you arrive",
              ].map((b, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="bg-background rounded-sm p-6 md:p-7 ring-1 ring-forest/10 shadow-[0_4px_20px_-12px_rgba(45,74,62,0.18)]"
                >
                  <Ornament className="w-6 h-6 text-terracotta mb-4" />
                  <p className="font-serif text-forest text-lg leading-[1.45]">
                    {b}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHAT'S INSIDE THE KIT */}
        <section id="whats-inside" className="px-6 lg:px-12 py-16 md:py-28 bg-forest scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-sand mb-4">
                What's inside
              </p>
              <h2 className="font-serif text-cream text-3xl md:text-[2.75rem] leading-[1.15]">
                Everything You Need for a{" "}
                <span className="italic text-sand">Day of Presence</span>
              </h2>
              <p className="mt-5 text-[rgba(250,247,242,0.85)] text-base md:text-lg leading-[1.7] font-light">
                A ready-to-use Mother's Day toolkit designed to help you create a
                calmer, more meaningful visit.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
              <motion.div
                {...fadeIn}
                className="relative bg-cream-dark/10 p-3 md:p-4 rounded-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] order-2 lg:order-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <picture>
                    <source type="image/webp" srcSet={kitImageWebp} />
                    <img
                      src={kitImage}
                      alt="The Mother's Day Connection Kit — conversation cards, visual spark cards, playlist guide, letter template, and morning ritual guide laid out on a linen-covered table."
                      width={1400}
                      height={932}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
              </motion.div>

              <motion.ul
                {...fadeUp}
                className="space-y-5 md:space-y-6 order-1 lg:order-2"
              >
                {[
                  {
                    t: "20 Conversation Cards",
                    d: "Gentle, poetic prompts that open connection without asking her to remember facts.",
                  },
                  {
                    t: "15 Visual Spark Cards",
                    d: "Beautiful, familiar images to sit with together when words feel like too much.",
                  },
                  {
                    t: "A Letter to My Mother",
                    d: "A guided space to write the words that feel too heavy to say out loud.",
                  },
                  {
                    t: "1940s–1970s Playlist Guide + Worksheet",
                    d: "A simple way to find her imprint years and build music that reaches her.",
                  },
                  {
                    t: "The Morning Ritual Guide",
                    d: "A calm walkthrough so you know what to do from the moment you arrive.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-serif italic text-sand text-2xl leading-none flex-shrink-0 w-8 pt-1">
                      {i + 1}.
                    </span>
                    <div>
                      <p className="font-serif text-cream text-lg md:text-xl leading-tight mb-1.5">
                        {item.t}
                      </p>
                      <p className="font-sans text-[rgba(250,247,242,0.8)] text-[15px] leading-[1.65] font-light">
                        {item.d}
                      </p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* CTA after What's Inside */}
            <motion.div {...fadeUp} className="mt-12 md:mt-16 text-center">
              <div className="inline-flex flex-col items-center">
                <BuyButton source="whats-inside" fullWidthMobile={false} />
                <p className="font-sans text-[12px] tracking-[0.06em] text-[rgba(250,247,242,0.7)] mt-3">
                  $27 · Available until Mother's Day · May 10
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — FRICTION-KILLER STRIP */}
        <section className="px-6 py-10 md:py-14 bg-cream-dark/40 border-y border-forest/10">
          <div className="max-w-5xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {[
                { t: "$27", s: "one-time purchase" },
                { t: "Instant", s: "digital download" },
                { t: "Print at home", s: "or use on tablet" },
                { t: "No prep", s: "required" },
                { t: "Available", s: "until May 10" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-center bg-background rounded-sm py-4 px-3 ring-1 ring-forest/10"
                >
                  <p className="font-serif text-forest text-base md:text-lg leading-tight">
                    {item.t}
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-foreground/60 mt-1">
                    {item.s}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5 — EMOTIONAL BRIDGE */}
        <section className="px-6 py-16 md:py-28 bg-cream">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <Ornament className="w-7 h-7 text-terracotta mx-auto mb-7" />
              <h2 className="font-serif italic text-forest text-3xl md:text-[2.75rem] leading-[1.2]">
                You don't need the perfect words.
              </h2>
              <p className="mt-7 font-serif text-forest/85 text-xl md:text-2xl leading-[1.5]">
                You just need a way to be together.
              </p>
              <p className="mt-7 text-foreground/75 text-base md:text-lg leading-[1.75] font-light">
                Some visits feel quiet, awkward, or heavier than you expected.
                This kit gives you something gentle to hold, read, play, write,
                and share — so the visit does not rest entirely on your ability
                to find the right words.
              </p>
              <div className="mt-10 inline-flex flex-col items-center">
                <BuyButton source="emotional-bridge" fullWidthMobile={false} />
                {availabilityLine}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — WHO THIS IS FOR */}
        <section className="px-6 py-16 md:py-24 bg-cream-dark/30">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10 md:mb-14">
              <Eyebrow>Who it's for</Eyebrow>
              <h2 className="mt-6 font-serif text-forest text-3xl md:text-[2.5rem] leading-[1.2]">
                This is for you <span className="italic">if…</span>
              </h2>
            </motion.div>

            <ul className="space-y-4 md:space-y-5">
              {[
                "You want Mother's Day to feel meaningful, not forced",
                "You are visiting your mom and don't know what to say anymore",
                "Conversations feel shorter, quieter, or more repetitive than they used to",
                "You want to bring something more personal than flowers or another wrapped gift",
                "You want a calm plan before you walk in",
              ].map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                  className="flex gap-4 items-baseline bg-background rounded-sm py-4 px-5 ring-1 ring-forest/10"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-terracotta text-lg leading-none flex-shrink-0"
                  >
                    ✦
                  </span>
                  <span className="font-serif text-forest/90 text-base md:text-lg leading-[1.55]">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 7 — HOW IT WORKS */}
        <section className="px-6 py-16 md:py-24 bg-cream">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
              <Eyebrow>The simple flow</Eyebrow>
              <h2 className="mt-6 font-serif text-forest text-3xl md:text-[2.5rem] leading-[1.2]">
                How it <span className="italic">works.</span>
              </h2>
            </motion.div>

            <ol className="grid md:grid-cols-2 gap-5 md:gap-6">
              {[
                {
                  t: "Purchase the kit",
                  d: "Get instant access to the digital files.",
                },
                {
                  t: "Choose what feels right",
                  d: "Use the cards, letter page, playlist guide, or morning ritual depending on the kind of visit you're having.",
                },
                {
                  t: "Sit beside her",
                  d: "Bring the pages with you on your phone, tablet, or printed at home.",
                },
                {
                  t: "Let the kit guide the moment",
                  d: "No pressure. No perfect performance. Just presence.",
                },
              ].map((s, i) => (
                <motion.li
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="bg-cream-dark/40 rounded-sm p-6 md:p-7 ring-1 ring-forest/10 flex gap-5"
                >
                  <span className="font-serif italic text-terracotta text-3xl leading-none flex-shrink-0 w-8 pt-1 tabular-nums">
                    {i + 1}.
                  </span>
                  <div>
                    <p className="font-serif text-forest text-lg md:text-xl leading-tight mb-2">
                      {s.t}
                    </p>
                    <p className="font-sans text-foreground/75 text-[15px] leading-[1.65] font-light">
                      {s.d}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION — FAQ (concise objection handling) */}
        <section className="px-6 py-14 md:py-20 bg-cream-dark/30">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10 md:mb-12">
              <Eyebrow>Before you decide</Eyebrow>
              <h2 className="mt-6 font-serif text-forest text-3xl md:text-[2.25rem] leading-[1.2]">
                Honest answers to{" "}
                <span className="italic">honest questions.</span>
              </h2>
            </motion.div>

            <div className="divide-y divide-forest/15 border-y border-forest/15">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full text-left py-5 md:py-6 flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40 rounded-sm"
                    >
                      <span className="font-serif text-forest text-lg leading-[1.4] group-hover:text-terracotta transition-colors">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`font-serif text-terracotta text-2xl leading-none flex-shrink-0 mt-1 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-foreground/75 text-base leading-[1.7] font-light pr-8 whitespace-pre-line">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 8 — FINAL CTA */}
        <section className="relative px-6 py-20 md:py-32 bg-forest overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(800px 400px at 50% 0%, rgba(198,123,92,0.18), transparent 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--cream) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <Ornament className="w-7 h-7 text-cream/60 mx-auto mb-8" />
              <h2 className="font-serif text-cream text-3xl md:text-[3rem] leading-[1.15]">
                Make this Mother's Day feel like{" "}
                <span className="italic">something you'll remember.</span>
              </h2>
              <div className="mx-auto w-16 h-px bg-cream/30 my-8" />
              <p className="text-cream/85 text-base md:text-lg leading-[1.7] font-light max-w-lg mx-auto">
                The Mother's Day Connection Kit is available for{" "}
                <span className="text-cream font-medium">$27</span> until
                Mother's Day, May 10.
              </p>
              <div className="mt-10 flex justify-center">
                <Button
                  variant="cta-poppy"
                  size="xl"
                  onClick={() => openCheckoutModal("final-cta")}
                  className="w-full sm:w-auto"
                >
                  Buy The Kit — $27
                </Button>
              </div>
              <p className="font-sans text-[12px] tracking-[0.06em] text-cream/65 mt-5">
                Instant download · Print at home · Use on tablet
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />

      {/* Sticky mobile CTA — opens checkout directly */}
      <button
        type="button"
        onClick={() => openCheckoutModal("sticky-mobile")}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 mx-4 mb-[max(0.75rem,env(safe-area-inset-bottom))] mt-3 flex items-center justify-center gap-2 bg-terracotta text-cream font-sans font-medium text-[15px] rounded-md h-12 shadow-[0_8px_24px_-6px_rgba(198,123,92,0.5)] active:scale-[0.98] transition-transform"
        aria-label="Buy The Mother's Day Connection Kit for $27"
      >
        <span aria-hidden="true">🌸</span>
        <span>Buy The Kit — $27</span>
        <span aria-hidden="true">→</span>
      </button>

      <MothersDayCheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        source={checkoutSource}
      />
    </div>
  );
};

export default FamilyVisits;
