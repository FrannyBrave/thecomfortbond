import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #3D5A47 0%, #2C4235 60%, #1E3028 100%)" }} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-terracotta/5 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg text-cream mb-6">
            Your Next Session Is Already Planned.
          </h2>
          <p className="body-lg text-cream/80 mb-10 max-w-2xl mx-auto">
            Download today, print tomorrow, run it Friday. No prep, no stress — just a room full of residents who can't wait to come back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="cta"
              size="xl"
              asChild
            >
              <a
                href="https://shop.thecomfortbond.com/checkout/buy/9ffc59b7-0a7f-4717-9a45-3d3000a960fc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop the Kits
              </a>
            </Button>
            <Button
              variant="cta-outline"
              size="xl"
              className="border-[hsl(var(--cream))] text-cream hover:bg-cream/10"
              asChild
            >
              <a
                href="https://shop.thecomfortbond.com/checkout/buy/57a100bd-b68b-4e71-92a9-174acbc6a313"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Free Sample
              </a>
            </Button>
          </div>
          <p className="body-sm text-cream/50 mt-6">
            Instant digital download • No credit card needed for the free sample
          </p>
        </motion.div>
      </div>
    </section>
  );
};
