import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";


export const HoneyPotSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-sage py-20 md:py-28"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Card backdrop */}
          <div className="bg-cream/[0.92] rounded-2xl shadow-md border border-sage/40 px-6 py-10 md:px-10 md:py-12">
            {/* Icon + Headline */}
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest leading-tight">
                Struggling with the 4 PM Sundowning Shift?
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="font-sans text-lg md:text-xl text-forest mb-6 leading-relaxed">
              Download our Free Engagement Pack, including ready-to-print activity cards for instant connection.
            </p>

            {/* CTA Button */}
            <Button
              asChild
              variant="cta"
              size="xl"
              className="w-full sm:w-auto min-w-[280px] text-lg !bg-[hsl(var(--terracotta))] !text-[hsl(var(--cream))] hover:!bg-[hsl(18,46%,50%)]"
            >
              <a
                href="https://shop.thecomfortbond.com/checkout/buy/57a100bd-b68b-4e71-92a9-174acbc6a313"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Free Sample
              </a>
            </Button>

            {/* Reassurance Text */}
            <p className="mt-4 text-sm text-forest font-sans">
              Instant download. No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
