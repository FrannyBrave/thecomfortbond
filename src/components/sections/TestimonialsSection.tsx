import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
const testimonials = [{
  quote: "The weighted wrap has become an essential tool for our memory care unit. It helps residents transition through sundowning with much less distress.",
  author: "Sarah Mitchell",
  role: "Activity Director",
  organization: "Sunrise Memory Care"
}, {
  quote: "We've seen remarkable moments of calm and connection. One resident who rarely engages now reaches for her comfort companion every afternoon.",
  author: "Dr. James Chen",
  role: "Medical Director",
  organization: "Harmony Senior Living"
}, {
  quote: "Finally, products that actually work. My team no longer struggles to find meaningful engagement tools—these do exactly what they promise.",
  author: "Maria Santos",
  role: "Life Enrichment Manager",
  organization: "Golden Years Community"
}];
export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-forest mb-4">What Professionals Say</h2>
          <p className="body-lg text-forest/70 max-w-2xl mx-auto">
            Trusted by activity directors and care professionals across senior living communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-soft relative"
            >
              <Quote className="w-8 h-8 text-sage/40 absolute top-6 right-6" />
              <p className="text-forest/80 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-sage/20 pt-4">
                <p className="font-semibold text-forest">{testimonial.author}</p>
                <p className="text-sm text-forest/60">{testimonial.role}</p>
                <p className="text-sm text-forest/50">{testimonial.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};