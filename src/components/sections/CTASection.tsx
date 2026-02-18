import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHoneyPot = () => {
    const element = document.querySelector("#honey-pot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-sage/80" />
      
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
            Ready to Bring Comfort to Your Community?
          </h2>
          <p className="body-lg text-cream/80 mb-10 max-w-2xl mx-auto">
            Premium, ready-to-run engagement kits designed for comfort and meaningful 
            connection in senior living communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="cta"
              size="xl"
              onClick={scrollToProducts}
              className="bg-terracotta hover:bg-terracotta/90"
            >
              Shop the Bundle
            </Button>
            <Button
              variant="cta-outline"
              size="xl"
              className="border-cream text-cream hover:bg-cream hover:text-forest"
              onClick={scrollToHoneyPot}
            >
              Get the Free Sample
            </Button>
          </div>
          <p className="text-sm text-cream/60 mt-6 tracking-wide">
            Instant digital download • No account needed
          </p>
        </motion.div>
      </div>
    </section>
  );
};
