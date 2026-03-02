import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import samplerImage from "@/assets/founders-sampler.png";

export const HoneyPotSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="honey-pot"
      ref={sectionRef}
      className="w-full bg-sage py-10 md:py-14"
    >
      <div className="section-container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-sm group"
        >
          <div className="bg-card rounded-xl overflow-hidden border border-sage/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
            {/* Product Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-cream-dark to-sage/10 relative flex items-center justify-center overflow-hidden">
              <img
                src={samplerImage}
                alt="The Founder's Sampler"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-semibold text-forest mb-1">
                The Founder's Sampler
              </h3>
              <p className="font-sans text-sm text-forest/80 mb-4 leading-snug">
                A free taste of The Comfort Bond™ — Includes 3 ready-to-use activity types: discussion prompts, storytelling cards, and a Guess the Era game. Perfect for trying before you buy.
              </p>
              <div className="mt-auto">
                <span className="text-2xl font-serif font-bold text-forest block mb-1">
                  FREE
                </span>
                <p className="font-sans text-xs text-forest/60 mb-4">
                  Instant digital download. No credit card required.
                </p>
                <Button
                  variant="cta"
                  size="default"
                  className="w-full h-11"
                  asChild
                >
                  <a
                    href="https://shop.thecomfortbond.com/checkout/buy/57a100bd-b68b-4e71-92a9-174acbc6a313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    Download Free Sample
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
