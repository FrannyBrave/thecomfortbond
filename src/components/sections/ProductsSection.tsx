import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Weighted Comfort Wrap",
    description:
      "A gentle, weighted blanket designed for lap use. Provides calming deep pressure that helps reduce restlessness.",
    price: "$89",
    badge: "Best Seller",
    checkoutUrl: "#",
  },
  {
    id: 2,
    name: "Sensory Comfort Kit",
    description:
      "A curated collection of tactile items including soft fabrics, smooth stones, and textured fidgets.",
    price: "$65",
    badge: null,
    checkoutUrl: "#",
  },
  {
    id: 3,
    name: "Memory Comfort Companion",
    description:
      "A soft, huggable companion with gentle weight and warming capabilities. Designed to feel familiar and safe.",
    price: "$75",
    badge: "New",
    checkoutUrl: "#",
  },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-cream-dark" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-terracotta font-sans text-sm uppercase tracking-widest mb-4">
            Our Collection
          </span>
          <h2 className="heading-lg text-forest mb-6">
            Thoughtfully Crafted Products
          </h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Each item is designed with input from care professionals and tested 
            in real-world settings to ensure genuine effectiveness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-sage/20 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10">
                {/* Product Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-sage/20 to-gold/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sage/60 font-serif text-lg">
                      Product Image
                    </span>
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-terracotta text-cream text-xs font-sans font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="heading-sm text-forest mb-2">{product.name}</h3>
                  <p className="body-sm text-muted-foreground mb-4 min-h-[60px]">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-semibold text-forest">
                      {product.price}
                    </span>
                    <Button
                      variant="cta"
                      size="default"
                      asChild
                    >
                      <a
                        href={product.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Order Now
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bulk Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-sage/10 rounded-2xl px-8 py-6 border border-sage/20">
            <p className="body-md text-forest mb-3">
              Need products for your entire community?
            </p>
            <Button variant="cta-outline" size="lg" asChild>
              <a href="mailto:orders@thecomfortbond.com">
                Request Bulk Pricing
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
