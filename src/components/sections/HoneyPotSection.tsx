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
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-6 leading-tight">
            Struggling with the 4 PM Sundowning Shift?
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-lg md:text-xl text-forest/90 mb-10 leading-relaxed">
            Download our Free Engagement Pack, including ready-to-print activity cards for instant connection.
          </p>

          {/* CTA Button - External Link */}
          <Button
            asChild
            variant="cta"
            size="xl"
            className="w-full sm:w-auto min-w-[280px] text-lg"
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
          <p className="mt-6 text-sm text-forest/70 font-sans">
            Instant download. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
