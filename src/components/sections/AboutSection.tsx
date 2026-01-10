import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-cream-dark" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-terracotta font-sans text-sm uppercase tracking-widest mb-4">
              Our Purpose
            </span>
            <h2 className="heading-lg text-forest mb-6">
              A Bridge to Calm
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            <div className="space-y-6">
              <p className="body-md text-forest/80">
                At The Comfort Bond, we understand that words often fail when 
                they're needed most. For those living with memory challenges, 
                moments of anxiety or disconnection can feel overwhelming.
              </p>
              <p className="body-md text-forest/80">
                Our sensory products are designed to provide immediate, 
                intuitive comfort—no instructions needed, no memories required.
              </p>
            </div>
            <div className="space-y-6">
              <p className="body-md text-forest/80">
                Created in partnership with activity directors and care 
                professionals, each product offers a gentle pathway to calm 
                through familiar textures, soothing weights, and comforting warmth.
              </p>
              <p className="body-md text-forest/80">
                Because sometimes, the most powerful communication happens 
                through touch.
              </p>
            </div>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-24 h-px bg-gold mx-auto mt-16"
          />
        </div>
      </div>
    </section>
  );
};
