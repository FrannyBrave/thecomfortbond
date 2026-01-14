import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Hand, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Emotional Regulation",
    description:
      "Gentle sensory input helps reduce anxiety and agitation, promoting a sense of safety and calm.",
  },
  {
    icon: Hand,
    title: "Tactile Engagement",
    description:
      "Familiar textures and weights provide grounding comfort that transcends verbal communication.",
  },
  {
    icon: Shield,
    title: "Care Team Support",
    description:
      "Easy-to-implement tools that help staff redirect behaviors and create positive moments.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Connection",
    description:
      "Products designed to facilitate bonding between residents, families, and caregivers.",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-terracotta font-sans text-sm uppercase tracking-widest mb-4">
            Why It Works
          </span>
          <h2 className="heading-lg text-forest mb-6">
            Designed for Real Impact
          </h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Every product is informed by research and refined through collaboration 
            with memory care professionals who understand what truly helps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-card rounded-xl p-8 h-full border border-sage/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center mb-6 group-hover:bg-terracotta/10 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-forest group-hover:text-terracotta transition-colors duration-300" />
                </div>
                <h3 className="heading-sm text-forest mb-3">{benefit.title}</h3>
                <p className="body-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
