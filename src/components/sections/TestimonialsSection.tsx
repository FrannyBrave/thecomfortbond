import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Printer, MessageCircle, Heart } from "lucide-react";

const trustSignals = [
  { icon: Printer, text: "Print and run. No prep required." },
  { icon: MessageCircle, text: "Designed around memory care best practices." },
  { icon: Heart, text: "Try it free before you buy." },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="section-container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-terracotta mb-4">
            Our Mission
          </p>
          <h2 className="heading-lg text-forest mb-6">
            Built for the People Who Show Up Every Day
          </h2>
          <p className="body-md text-forest/75 text-balance">
            The Comfort Bond™ was created with Activity Directors, Life Enrichment Managers, and in-home caregivers in mind — the people who plan, prep, and pour themselves into every session. These kits are designed to give you back time while giving your residents more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-sm text-forest/80 leading-relaxed">
                  {signal.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};