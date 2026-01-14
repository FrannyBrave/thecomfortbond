import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return (
    <section ref={ref} className="bg-forest section-padding">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-cream mb-6">
            Ready to Bring Comfort?
          </h2>
          <p className="body-lg text-cream/80 max-w-2xl mx-auto mb-8">
            Explore our curated kits designed to bring joy and connection to your community.
          </p>
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToProducts}
            className="bg-cream text-forest hover:bg-cream/90"
          >
            Shop Our Kits
          </Button>
        </motion.div>
      </div>
    </section>
  );
};