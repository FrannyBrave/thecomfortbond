import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Leaf, Sparkles, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const pillars = [
  {
    icon: Brain,
    title: "Mental Engagement",
    description: "Activities designed to spark focus, encourage recall, and provide satisfying mental challenges.",
  },
  {
    icon: Leaf,
    title: "Soothing Atmospheres",
    description: "Gentle visuals and sounds that help create a calm, relaxing environment during high-energy times.",
  },
  {
    icon: Sparkles,
    title: "Shared Nostalgia",
    description: "Prompts and games that honor life stories and celebrate personal history.",
  },
  {
    icon: Heart,
    title: "Meaningful Connection",
    description: "Products designed to facilitate bonding between residents, families, and engagement professionals.",
  },
];

export const TrustSignalsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-cream py-20 md:py-28">
      {/* Decorative Separator */}
      <div className="max-w-2xl mx-auto px-6 mb-16">
        <Separator className="bg-sage/30 h-[1px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-forest text-center mb-16"
        >
          Designed for Well-Being
        </motion.h2>

        {/* Trust Pillars Grid */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <IconComponent 
                    size={48} 
                    className="text-forest mb-5" 
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold text-forest mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-forest/80 leading-relaxed max-w-xs">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
