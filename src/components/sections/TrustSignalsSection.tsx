import { Brain, Leaf, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const pillars = [
  {
    icon: Brain,
    title: "Mental Engagement",
    description: "Thoughtful prompts that invite focus, recall, and satisfying conversation."
  },
  {
    icon: Leaf,
    title: "Soothing Atmospheres",
    description: "Gentle visuals and soundscapes that support a calm room tone."
  },
  {
    icon: Heart,
    title: "Meaningful Connection",
    description: "Designed to bring residents, families, and teams into shared moments."
  }
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

        {/* Trust Pillars Grid */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/60 rounded-xl p-10 md:p-12 text-center shadow-sm border border-sage/15"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-forest" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-forest mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-forest/80 leading-relaxed text-sm">
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
