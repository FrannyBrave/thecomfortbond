import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/family-visits-hero.jpg";
import bookletImage from "@/assets/family-visits-free-guide.png";
import kitImage from "@/assets/family-visits-kits.png";
import mothersDayHero from "@/assets/blog-mothers-day-memory-care-hero.jpg";

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

const FamilyVisits = () => {
  useEffect(() => {
    document.title = "Make Your Next Visit Meaningful | The Comfort Bond";
    const desc =
      "Gentle, guided tools that turn quiet visits with an aging parent into moments of real connection — even when memory is fading.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation />

      <main>
        {/* SECTION 1 — HERO (asymmetric editorial split) */}
        <section className="relative px-6 lg:px-12 pt-20 pb-12 md:pt-32 md:pb-28">
          {/* soft warm vignette */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 20% 0%, rgba(198,123,92,0.08), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(45,74,62,0.06), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* LEFT — copy (7 cols) — appears FIRST on mobile */}
            <motion.div
              {...fadeUp}
              className="lg:col-span-7 order-1 lg:order-1"
            >
              {/* Mother's Day seasonal eyebrow */}
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-terracotta inline-flex items-center gap-3 justify-center">
                <span aria-hidden="true" className="inline-block w-8 h-px bg-terracotta opacity-60" />
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true">🌸</span>
                  Mother's Day · May 11
                </span>
                <span aria-hidden="true" className="inline-block w-8 h-px bg-terracotta opacity-60" />
              </span>

              {/* Mobile-first short headline; longer poetic version on desktop */}
              <h1 className="mt-5 font-serif text-forest leading-[1.05] tracking-tight">
                {/* Mobile headline */}
                <span className="block lg:hidden text-[2.25rem] sm:text-[2.75rem]">
                  You sit beside her.
                  <span className="block italic text-forest/90">The words won't come.</span>
                </span>
                {/* Desktop headline (original) */}
                <span className="hidden lg:block text-[4.25rem]">
                  You sit down beside them
                  <span className="italic text-forest/90"> …and you don't know what to say.</span>
                </span>
              </h1>

              <div className="mt-6 md:mt-8 flex items-start gap-5 max-w-xl">
                <span className="mt-3 hidden md:block w-10 h-px bg-terracotta flex-shrink-0" />
                <p className="text-foreground/75 text-base md:text-xl leading-[1.65] md:leading-[1.7] font-light">
                  A gentler way to be with her this Mother's Day — guided tools
                  that turn quiet visits into moments of real connection, even
                  when memory is fading.
                </p>
              </div>

              {/* Single primary CTA on mobile; dual on desktop */}
              <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button asChild variant="cta-poppy" size="xl" className="w-full sm:w-auto">
                  <Link to="/free-sampler">Get the Free Mother's Day Guide</Link>
                </Button>
                <Button asChild variant="cta-outline" size="xl" className="hidden sm:inline-flex">
                  <a href="#free-guide">Make Your Next Visit Meaningful</a>
                </Button>
              </div>
              {/* Secondary action as quiet text link on mobile */}
              <a
                href="#free-guide"
                className="sm:hidden mt-4 inline-block font-sans text-sm text-forest/70 underline underline-offset-4 decoration-terracotta/40 hover:text-terracotta transition-colors"
              >
                or learn how it works →
              </a>
              <p className="text-muted-foreground text-xs mt-5 md:mt-6 tracking-wide">
                Free download · No credit card · Instant access
              </p>
              <p className="font-serif italic text-terracotta/80 text-xs md:text-sm mt-2 tracking-wide inline-flex items-center gap-1.5">
                <span aria-hidden="true">🌸</span>
                Download by May 8 so you have time to plan your visit.
              </p>
            </motion.div>

            {/* RIGHT — image (5 cols) framed — appears SECOND on mobile */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-5 order-2 lg:order-2 relative"
            >
              <div className="relative">
                {/* framed cream mat */}
                <div className="relative bg-cream-dark/70 p-3 md:p-4 rounded-sm shadow-[0_30px_80px_-30px_rgba(45,74,62,0.35)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src={heroImage}
                      alt="An adult daughter in a mustard sweater sits beside her silver-haired mother at a sunlit wooden table, smiling together over a spread of memory conversation cards."
                      width={1920}
                      height={1080}
                      className="absolute inset-0 w-full h-full object-cover scale-[1.35] md:scale-[1.25]"
                      style={{ objectPosition: "58% 50%" }}
                      loading="eager"
                      decoding="async"
                    />
                    {/* soft readability gradient — warms the lower edge for caption tonal harmony, keeps faces untouched */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-cream/10"
                    />
                  </div>
                </div>
                {/* corner ornament */}
                <Ornament className="absolute -top-5 -left-5 w-10 h-10 text-terracotta" />
                <Ornament className="absolute -bottom-5 -right-5 w-10 h-10 text-forest/60" />
                {/* caption */}
                <p className="mt-5 font-serif italic text-sm text-foreground/55 text-center tracking-wide">
                  — A Tuesday afternoon. Light through the window. Hands held.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* hairline divider */}
        <div className="px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex items-center gap-6">
            <span className="h-px flex-1 bg-forest/15" />
            <Ornament className="w-5 h-5 text-forest/40" />
            <span className="h-px flex-1 bg-forest/15" />
          </div>
        </div>

        {/* SECTION 2 — RELATABLE PAIN (intimate column with hairlines) */}
        <section className="px-6 py-24 md:py-32 bg-cream-dark/30">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <Eyebrow>Recognition</Eyebrow>
              <h2 className="mt-6 font-serif italic text-forest text-3xl md:text-[2.75rem] leading-[1.15]">
                If any of this sounds familiar…
              </h2>
            </motion.div>
            <ul className="divide-y divide-forest/10 border-y border-forest/10">
              {[
                "You sit down… and don't know what to say.",
                "You watch them stare out the window, and it aches.",
                "You wonder if they even know you came.",
              ].map((line, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
                  className="py-6 md:py-7 flex items-baseline gap-5"
                >
                  <span className="font-serif italic text-terracotta/70 text-sm tabular-nums w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif italic text-foreground text-xl md:text-[1.6rem] leading-[1.4]">
                    {line}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5 — FREE OFFER (split with booklet image) */}
        <section id="free-guide" className="px-6 lg:px-12 py-28 md:py-36">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <Eyebrow>Free download</Eyebrow>
              <h2 className="mt-6 font-serif text-forest text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">
                The Free Visit
                <br />
                <span className="italic">Starter Guide</span>
              </h2>
              <p className="mt-6 text-foreground/75 text-lg leading-[1.7] font-light mx-auto">
                Don't let your next visit default to sitting in silence or asking the same three questions. This free printable guide gives you gentle, dignified tools to spark real connection and joy with your loved one.
              </p>

              <ul className="mt-10 space-y-6 text-left max-w-md mx-auto">
                {[
                  "Conversation starter cards",
                  "Visual spark cards",
                  "Word link game",
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 items-baseline">
                    <span className="font-serif italic text-terracotta text-2xl leading-none flex-shrink-0 w-6">
                      {["i", "ii", "iii"][i]}.
                    </span>
                    <span className="text-foreground text-base md:text-lg leading-[1.65] font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Button asChild variant="cta-poppy" size="xl">
                  <Link to="/free-sampler">Download the Free Guide</Link>
                </Button>
                <p className="text-muted-foreground text-xs mt-4 tracking-wide">
                  Sent straight to your inbox · No spam, ever
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION — PRODUCT BRIDGE (moved up: directly after Free Guide) */}
        <section className="px-6 lg:px-12 py-28 md:py-36 bg-cream-dark/20">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
              <Eyebrow>For something deeper</Eyebrow>
              <h2 className="mt-6 font-serif text-forest text-4xl md:text-[3rem] leading-[1.15]">
                If you want more than
                <br />
                <span className="italic">a single visit…</span>
              </h2>
              <p className="mt-6 text-foreground/70 text-lg leading-[1.7] font-light">
                For families who want a steady, ongoing way to feel close —
                not just one good afternoon.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {/* Card — Memory & Connection Kits (5-Kit Bundle + individual kits) */}
              <motion.article
                {...fadeUp}
                className="group bg-cream rounded-sm overflow-hidden flex flex-col border border-forest/10 hover:border-terracotta/40 transition-colors duration-500 shadow-[0_20px_60px_-30px_rgba(45,74,62,0.25)]"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={kitImage}
                    alt="An open keepsake box on a linen-covered table holding Conversation Starter Cards and Visual Spark Cards, with vintage photo cards fanned out beside it in warm window light."
                    width={1820}
                    height={1138}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />
                  <Ornament className="absolute top-5 right-5 w-6 h-6 text-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                </div>
                <div className="p-8 md:p-12 flex flex-col flex-1">
                  <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-terracotta mb-4">
                    Tactile · Familiar · Real
                  </p>
                  <h3 className="font-serif text-forest text-2xl md:text-[1.75rem] leading-tight mb-4">
                    The 5-Kit Bundle &amp; Individual Themed Kits
                  </h3>
                  <p className="text-foreground/70 leading-[1.7] font-light mb-5 flex-1">
                    Themed boxes designed to spark recognition through touch,
                    scent, and memory — gentle, dignified, and made for
                    moments when words aren't enough. Save when you get all
                    five together, or start with the one that feels most like her.
                  </p>
                  <p className="font-serif italic text-foreground/60 text-sm mb-6 leading-relaxed">
                    Nostalgia · Garden · Kitchen &amp; Home · Travel · Makers &amp; Menders
                  </p>

                  {/* Price anchoring */}
                  <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1 mb-6 pb-6 border-b border-forest/10">
                    <span className="font-serif text-forest text-3xl md:text-[2.25rem] leading-none">
                      $97
                    </span>
                    <span className="font-sans text-sm text-foreground/50 line-through">
                      $140 value
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#D75A4A] font-semibold">
                      Save $43
                    </span>
                  </div>

                  {/* Testimonial */}
                  <figure className="mb-6 pl-5 border-l-2 border-terracotta/40">
                    <blockquote className="font-serif italic text-forest/85 text-base md:text-[1.05rem] leading-[1.6]">
                      "I sat down with the Nostalgia Kit and for the first time in
                      months, my mom looked at me — really looked at me — and
                      smiled. We talked for almost an hour."
                    </blockquote>
                    <figcaption className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-foreground/60">
                      — Sarah M., daughter &amp; family caregiver
                    </figcaption>
                  </figure>

                  {/* Trust line */}
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-forest/55 text-center mb-6 inline-flex items-center justify-center gap-2 self-center">
                    <span aria-hidden="true" className="inline-block w-6 h-px bg-forest/25" />
                    Trusted by 2,400+ families
                    <span aria-hidden="true" className="inline-block w-6 h-px bg-forest/25" />
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild variant="cta-poppy" size="lg">
                      <Link to="/kits">Get All 5 Kits for $97</Link>
                    </Button>
                    <Button asChild variant="cta-outline" size="lg">
                      <Link to="/kits">Explore the Kits</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* SECTION 3 — REFRAME */}
        <section className="px-6 py-28 md:py-40">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeUp} className="space-y-10">
              <p className="font-serif text-forest text-2xl md:text-[2rem] leading-[1.4]">
                It's not that you don't care.
                <br />
                It's not that you aren't trying.
              </p>
              <div className="flex items-center justify-center gap-6">
                <span className="h-px w-16 bg-forest/20" />
                <Ornament className="w-6 h-6 text-terracotta" />
                <span className="h-px w-16 bg-forest/20" />
              </div>
              <p className="font-serif text-forest text-2xl md:text-[2rem] leading-[1.4]">
                You were never given the tools to do this well.
              </p>
              <p className="font-serif italic text-terracotta text-3xl md:text-[2.5rem] leading-[1.3] pt-4">
                Connection, when memory is fading,
                <br />
                can be guided.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — SOLUTION INTRO (warm panel) */}
        <section className="relative px-6 py-28 md:py-36 bg-cream-dark">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--forest) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <Eyebrow>Introducing</Eyebrow>
              <h2 className="mt-8 font-serif text-forest text-5xl md:text-7xl tracking-tight">
                The Comfort Bond
                <span className="text-terracotta align-top text-2xl md:text-3xl ml-1">™</span>
              </h2>
              <div className="mt-8 mx-auto w-16 h-px bg-forest/30" />
              <div className="mt-10 space-y-6 text-foreground/75 text-lg md:text-xl leading-[1.8] font-light">
                <p>
                  A gentle, simple way to bring real connection back into the
                  room — without trying harder, talking more, or pretending
                  everything is okay.
                </p>
                <p className="text-foreground/60">
                  No scripts. No pressure. No awkward silence to fill.
                </p>
                <p className="font-serif italic text-forest text-xl md:text-2xl pt-4">
                  Just simple tools that meet your parent
                  <br className="hidden md:block" />
                  {" "}where they are today.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 9 — FINAL CTA (forest panel, inscription feel) */}
        <section className="relative px-6 py-28 md:py-36 bg-forest overflow-hidden">
          {/* subtle warm glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(800px 400px at 50% 0%, rgba(198,123,92,0.18), transparent 60%)",
            }}
          />
          {/* dot grid texture */}
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
              <h2 className="font-serif italic text-cream text-4xl md:text-[3.5rem] leading-[1.15] mb-8">
                Make your next visit
                <br />
                feel different.
              </h2>
              <div className="mx-auto w-16 h-px bg-cream/30 mb-8" />
              <p className="text-cream text-lg md:text-xl mb-12 opacity-80 font-light leading-[1.7]">
                Start with the free guide. Use it once. See what happens.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <Button asChild variant="cta-poppy" size="xl">
                  <Link to="/free-sampler">Start with the Free Guide</Link>
                </Button>
                <Button
                  asChild
                  variant="cta-outline"
                  size="xl"
                  className="border-cream text-cream hover:bg-cream hover:text-forest"
                >
                  <Link to="/kits">Explore the Connection Kits</Link>
                </Button>
              </div>
              <p className="font-serif italic text-cream/70 text-sm mt-8 tracking-wide inline-flex items-center gap-1.5">
                <span aria-hidden="true">🌸</span>
                Download by May 8 so you have time to plan your visit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 10 — RELATED READING */}
        <section className="relative px-6 py-24 md:py-28 bg-cream">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-14">
              <Eyebrow>Related Reading</Eyebrow>
              <h2 className="font-serif text-forest text-3xl md:text-4xl mt-6 leading-[1.2]">
                For the visits we don't know
                <br className="hidden md:block" /> how to prepare for.
              </h2>
            </motion.div>

            <motion.div {...fadeIn}>
              <Link
                to="/blog/mothers-day-memory-care-family-guide"
                className="group block rounded-[20px] overflow-hidden bg-forest shadow-[0_8px_28px_rgba(45,74,62,0.12)] hover:shadow-[0_20px_48px_rgba(45,74,62,0.18)] transition-all duration-300 hover:-translate-y-1"
              >
                <article className="grid md:grid-cols-[1.05fr_1fr] min-h-[300px]">
                  <div
                    className="min-h-[220px] md:min-h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${mothersDayHero})` }}
                    aria-hidden="true"
                  />
                  <div className="p-8 md:p-12 flex flex-col justify-center text-cream">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-sand mb-4 inline-flex items-center gap-2">
                      <span className="inline-block w-4 h-px bg-sand" />
                      Featured · For Families
                    </span>
                    <h3 className="font-serif text-2xl md:text-[2rem] leading-[1.2] mb-4 -tracking-[0.005em]">
                      Mother's Day in Memory Care: A Family Caregiver's Guide
                    </h3>
                    <p className="font-serif italic text-base text-cream/80 leading-[1.65] mb-6 font-normal">
                      A working document for the visits we do not know how to
                      prepare for — what to bring, what to say, and what to
                      release before you walk in.
                    </p>
                    <span className="font-sans text-sm font-medium text-sand inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read the guide →
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
      <StickyMobileCTA />
    </div>
  );
};

export default FamilyVisits;
