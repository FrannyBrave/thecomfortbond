import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "These kits have completely transformed our afternoon programming. Residents who used to disengage are now actively participating and sharing stories with each other.",
    author: "Jennifer Walsh",
    role: "Activity Director, Meadowbrook Senior Living"
  },
  {
    quote: "Finding ways to genuinely connect during visits was getting difficult, but the Comfort Food Kit changed everything. We spend our afternoons sharing old family recipes and kitchen stories now.",
    author: "Marcus Rivera",
    role: "Life Enrichment Manager, Harmony Gardens"
  },
  {
    quote: "I've tried dozens of engagement tools over the years. Nothing has sparked as much genuine joy and conversation as The Comfort Bond kits. They just work.",
    author: "Linda Chen",
    role: "Life Enrichment Assistant, Sunrise Memory Care"
  }
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-sans text-sm uppercase tracking-widest mb-4">
            Real Feedback
          </span>
          <h2 className="heading-lg text-forest">
            What Activity Directors Are Saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-sage/20 relative"
            >
              <Quote className="w-7 h-7 text-terracotta/40 mb-4" strokeWidth={1.5} />
              <p className="font-serif text-forest/85 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-sage/20 pt-4">
                <p className="font-sans font-semibold text-sm text-forest">{testimonial.author}</p>
                <p className="font-sans text-xs text-forest/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
