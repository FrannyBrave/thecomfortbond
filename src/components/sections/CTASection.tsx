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
    <section ref={ref} className="bg-sage py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">
            Ready to Bring Comfort to Your Community?
          </h2>
          <p className="text-lg text-forest/80 mb-8">
            Explore our collection and discover how The Comfort Bond can support meaningful moments for your residents.
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={scrollToProducts}
            className="text-lg px-8 py-6"
          >
            Shop Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};