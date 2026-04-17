import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: easeOut },
};

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
    <div className="min-h-screen bg-cream">
      <Navigation />

      <main>
        {/* SECTION 1 — HERO */}
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              {...fadeUp}
              className="font-serif italic text-forest text-4xl md:text-6xl leading-[1.15] mb-8"
            >
              You sit down beside them… and you don't know what to say.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Gentle, guided tools that turn quiet visits with an aging parent
              into moments of real connection — even when memory is fading.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild variant="cta" size="xl">
                <Link to="/free-sampler">Get the Free Sampler</Link>
              </Button>
              <Button asChild variant="cta-outline" size="xl">
                <a href="#free-guide">Make Your Next Visit Meaningful</a>
              </Button>
            </motion.div>
            <p className="text-muted-foreground text-sm mt-6">
              Free download. No credit card. Instant access.
            </p>
          </div>
        </section>

        {/* SECTION 2 — RELATABLE PAIN */}
        <section className="px-6 py-24 md:py-32 bg-cream-dark/60">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              {...fadeUp}
              className="font-serif italic text-forest text-3xl md:text-4xl mb-12"
            >
              If any of this sounds familiar…
            </motion.h2>
            <ul className="space-y-6">
              {[
                "You sit down… and don't know what to say.",
                "The conversation ends after a few short minutes.",
                "You watch them stare out the window, and it aches.",
                "You leave feeling like you should have done more.",
                "You wonder if they even know you came.",
                "You drive home in silence, carrying the weight of another short visit.",
              ].map((line, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
                  className="font-serif italic text-foreground text-xl md:text-2xl leading-relaxed"
                >
                  {line}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3 — REFRAME */}
        <section className="px-6 py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <motion.p
              {...fadeUp}
              className="font-serif text-forest text-2xl md:text-3xl leading-snug"
            >
              It's not that you don't care. It's not that you aren't trying.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              className="font-serif text-forest text-2xl md:text-3xl leading-snug"
            >
              You were never given the tools to do this well.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="font-serif italic text-terracotta text-2xl md:text-3xl leading-snug"
            >
              Connection, when memory is fading, can be guided.
            </motion.p>
          </div>
        </section>

        {/* SECTION 4 — SOLUTION INTRO */}
        <section className="px-6 py-24 md:py-32 bg-cream-dark">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              {...fadeUp}
              className="text-terracotta font-sans text-sm uppercase tracking-[0.2em] mb-4"
            >
              Introducing
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className="font-serif text-forest text-4xl md:text-5xl mb-8"
            >
              The Comfort Bond™
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
              className="space-y-5 text-foreground/80 text-lg leading-relaxed"
            >
              <p>
                A gentle, simple way to bring real connection back into the
                room — without trying harder, talking more, or pretending
                everything is okay.
              </p>
              <p>No scripts. No pressure. No awkward silence to fill.</p>
              <p className="font-serif italic text-foreground text-xl">
                Just simple tools that meet your parent where they are today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — FREE OFFER */}
        <section id="free-guide" className="px-6 py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              {...fadeUp}
              className="text-terracotta font-sans text-sm uppercase tracking-[0.2em] mb-4"
            >
              Free Download
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
              className="font-serif text-forest text-4xl md:text-5xl mb-6"
            >
              The Visit Starter Guide
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
              className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-10"
            >
              Three simple connection tools to help your next visit feel
              different — even when words are hard to find.
            </motion.p>
            <motion.ul
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="text-left space-y-4 mb-10 max-w-xl mx-auto"
            >
              <li className="flex gap-3">
                <span className="text-terracotta flex-shrink-0">—</span>
                <span className="text-foreground">A gentle conversation prompt that works when memory doesn't.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta flex-shrink-0">—</span>
                <span className="text-foreground">A sensory tool that brings calm and quiet familiarity into the room.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta flex-shrink-0">—</span>
                <span className="text-foreground">A 5-minute presence ritual you can use, even on the hardest days.</span>
              </li>
            </motion.ul>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}>
              <Button asChild variant="cta" size="xl">
                <Link to="/free-sampler">Download the Free Guide</Link>
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                Sent straight to your inbox. No spam, ever.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — HOW IT WORKS */}
        <section className="px-6 py-24 md:py-32 bg-cream-dark/60">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="font-serif text-forest text-4xl md:text-5xl mb-4">
                How it works
              </h2>
              <p className="text-foreground/80 text-lg italic">
                Effortless. Designed for the energy you actually have.
              </p>
            </motion.div>
            <div className="space-y-12 max-w-2xl mx-auto">
              {[
                {
                  title: "Open the guide",
                  body: "One page. No reading homework. Skim it in the parking lot before you walk in.",
                },
                {
                  title: "Choose a prompt",
                  body: "Pick the one that feels right for the day. Some days are talking days. Some days are quiet days.",
                },
                {
                  title: "Connect, naturally",
                  body: "Sit beside them and let the tool do the work. You don't have to perform. You just have to be there.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                >
                  <p className="text-terracotta font-sans text-sm uppercase tracking-[0.2em] mb-2">
                    Step {i + 1}
                  </p>
                  <h3 className="font-serif text-forest text-2xl md:text-3xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 text-lg leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — PRODUCT BRIDGE */}
        <section className="px-6 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-serif text-forest text-4xl md:text-5xl mb-6">
                If you want more than a single visit…
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                For families who want a steady, ongoing way to feel close —
                not just one good afternoon.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.article
                {...fadeUp}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col"
              >
                <p className="text-terracotta font-sans text-xs uppercase tracking-[0.2em] mb-3">
                  Deep Connection
                </p>
                <h3 className="font-serif text-forest text-2xl md:text-3xl mb-4">
                  The 90-Day Meaningful Visit System
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-8 flex-1">
                  A gentle, week-by-week framework that walks you through
                  three months of meaningful visits — with prompts, simple
                  rituals, and quiet structure for the days you don't know
                  where to begin.
                </p>
                <Button asChild variant="cta-outline" size="lg" className="self-start">
                  <Link to="/blueprint">Learn More →</Link>
                </Button>
              </motion.article>

              <motion.article
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col"
              >
                <p className="text-terracotta font-sans text-xs uppercase tracking-[0.2em] mb-3">
                  Tactile, Familiar, Real
                </p>
                <h3 className="font-serif text-forest text-2xl md:text-3xl mb-4">
                  Memory & Connection Kits
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-3 flex-1">
                  Themed boxes designed to spark recognition through touch,
                  scent, and memory — gentle, dignified, and made for moments
                  when words aren't enough.
                </p>
                <p className="font-serif italic text-foreground mb-8">
                  Themes: Nostalgia · Garden · Kitchen & Home · Travel ·
                  Makers & Menders
                </p>
                <Button asChild variant="cta-outline" size="lg" className="self-start">
                  <Link to="/kits">Explore the Kits →</Link>
                </Button>
              </motion.article>
            </div>
          </div>
        </section>

        {/* SECTION 8 — EMOTIONAL CLOSE */}
        <section className="px-6 py-24 md:py-32 bg-cream-dark">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <motion.p {...fadeUp} className="font-serif italic text-forest text-2xl md:text-3xl">
              There is still time.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              className="font-serif italic text-forest text-2xl md:text-3xl"
            >
              There are still moments.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="font-serif italic text-forest text-2xl md:text-3xl leading-relaxed"
            >
              You can leave their room feeling like you reached them — even
              when the words couldn't.
            </motion.p>
          </div>
        </section>

        {/* SECTION 9 — FINAL CTA */}
        <section className="px-6 py-24 md:py-32 bg-forest">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              {...fadeUp}
              className="font-serif italic text-cream text-4xl md:text-5xl mb-6 leading-tight"
            >
              Make your next visit feel different.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              className="text-cream/80 text-lg md:text-xl mb-10"
            >
              Start with the free guide. Use it once. See what happens.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild variant="cta" size="xl">
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
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default FamilyVisits;
