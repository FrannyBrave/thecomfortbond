import { Brain, Leaf, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const trustPillars = [
  {
    icon: Brain,
    title: "Mental Engagement",
    description: "Activities designed to spark focus, encourage recall, and provide satisfying mental challenges."
  },
  {
    icon: Leaf,
    title: "Soothing Atmospheres",
    description: "Gentle visuals and sounds that help create a calm, relaxing environment during high-energy times."
  },
  {
    icon: Sparkles,
    title: "Shared Nostalgia",
    description: "Prompts and games that honor life stories and celebrate personal history."
  },
  {
    icon: Heart,
    title: "Meaningful Connection",
    description: "Products designed to facilitate bonding between residents, families, and engagement professionals."
  }
];

export const TrustSignalsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-cream py-20 md:py-28">
      {/* Subtle divider */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="h-px bg-sage/30 w-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-forest text-center mb-16"
        >
          Designed for Well-Being
        </motion.h2>

        {/* Trust Pillars Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream-light/50 border border-sage/20 rounded-xl p-8 md:p-10 text-center shadow-sm"
              >
                <div className="flex justify-center mb-5">
                  <IconComponent className="w-12 h-12 text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-forest font-semibold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-forest/80 leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
