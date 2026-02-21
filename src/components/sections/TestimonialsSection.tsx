import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Nostalgia Kit has been a complete game-changer for our memory care programming. It requires zero prep time on my end, and the 1950s memory lane prompts spark the most beautiful conversations among our residents.",
    author: "Jennifer Walsh",
    role: "Activity Director, Meadowbrook Senior Living"
  },
  {
    quote: "Purchasing the Full Ecosystem Bundle is the best investment we've made for our community this year. My staff loves how accessible the activities are, and the Serenity Video Suite provides such a gentle, calming reset for the whole room.",
    author: "Marcus Rivera",
    role: "Life Enrichment Manager, Harmony Gardens"
  },
  {
    quote: "Finding ways to genuinely connect during visits was getting difficult, but the Comfort Food Kit changed everything. We spend our afternoons sharing old family recipes and kitchen stories now. It has brought so much warmth back to our time together.",
    author: "Linda Chen",
    role: "Family Caregiver"
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
