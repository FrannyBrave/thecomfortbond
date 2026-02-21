import { Grid3X3, HelpCircle, Link, MessageCircle, Music, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const pillars = [
  {
    icon: Grid3X3,
    title: "Themed BINGO Game",
    description: "Familiar rules with a fresh thematic twist. Easy to facilitate with zero prep time.",
  },
  {
    icon: HelpCircle,
    title: "Trivia Time",
    description: "Designed to be accessible and low-pressure, focused entirely on celebrating what your group already knows.",
  },
  {
    icon: Link,
    title: "Word Link Game",
    description: "A gentle, collaborative icebreaker that gets everyone working together on simple, satisfying word associations.",
  },
  {
    icon: MessageCircle,
    title: "Conversation Card Prompts",
    description: "Open-ended prompts that bridge past and present, making it easy to draw out beautiful memories.",
  },
  {
    icon: Music,
    title: "Musical Memory Games",
    description: "Joyful lyric recall, humming games and more that spark musical memories and joyful singalongs.",
  },
];

export const TrustSignalsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      {/* Thin horizontal divider */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="h-px bg-sage/35 w-full" />
      </div>

      <div className="container mx-auto px-6">
        {/* Eyebrow + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-sans text-sm uppercase tracking-widest mb-4">
            Why It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-forest">
            Designed for Well-Being
          </h2>
        </motion.div>

        {/* Five Cards Grid */}
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-5 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/60 rounded-xl p-6 text-center shadow-sm border border-sage/15"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-forest" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-forest mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-forest/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="#products"
              onClick={handleScrollToProducts}
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-forest/70 hover:text-terracotta transition-colors duration-300"
            >
              Explore the Kits
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
