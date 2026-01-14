import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The weighted wrap has become an essential tool for our memory care unit. It helps residents transition through sundowning with much less distress.",
    author: "Sarah Mitchell",
    role: "Activity Director",
    organization: "Sunrise Memory Care",
  },
  {
    quote:
      "We've seen remarkable moments of calm and connection. One resident who rarely engages now reaches for her comfort companion every afternoon.",
    author: "Dr. James Chen",
    role: "Medical Director",
    organization: "Harmony Senior Living",
  },
  {
    quote:
      "Finally, products that actually work. My team no longer struggles to find meaningful engagement tools—these do exactly what they promise.",
    author: "Maria Santos",
    role: "Life Enrichment Manager",
    organization: "Golden Years Community",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-terracotta font-sans text-sm uppercase tracking-widest mb-4">
            Trusted by Professionals
          </span>
          <h2 className="heading-lg text-forest mb-6">
            What Care Teams Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="relative"
            >
              <div className="bg-card rounded-xl p-8 h-full border border-sage/20 relative">
                <Quote className="w-10 h-10 text-gold/40 mb-4" />
                <blockquote className="body-md text-forest/80 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-sage/20 pt-4">
                  <p className="font-serif font-semibold text-forest">
                    {testimonial.author}
                  </p>
                  <p className="body-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="body-sm text-sage">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
