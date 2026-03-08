import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FoundersSamplerDisplay } from "./FoundersSamplerDisplay";

export const HoneyPotSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="honey-pot"
      ref={sectionRef}
      className="w-full bg-sage py-10 md:py-14">

      <div className="section-container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-4xl">

          <div className="bg-card rounded-2xl overflow-hidden border border-sage/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="aspect-square md:aspect-auto relative min-h-[280px] overflow-hidden rounded-l-2xl">
                <FoundersSamplerDisplay />
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="heading-md text-forest mb-3">
                  The Founder's Sampler
                </h3>
                <p className="body-md text-forest/70 mb-6">
                  A free taste of The Comfort Bond™ — Includes 3 ready-to-use activity types: discussion prompts, storytelling cards, and a Guess the Era game. Perfect for trying before you buy.
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-serif font-bold text-forest">

                  </span>
                </div>
                <p className="font-sans text-sm text-forest/60 mb-6">
                  Instant digital download. No credit card required.
                </p>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full md:w-auto"
                  asChild>

                  <a
                    href="https://shop.thecomfortbond.com/checkout/buy/57a100bd-b68b-4e71-92a9-174acbc6a313"
                    className="lemonsqueezy-button inline-flex items-center justify-center gap-2">

                    Download Free Sample
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};