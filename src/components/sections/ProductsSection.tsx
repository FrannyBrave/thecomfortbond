import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bundleImage from "@/assets/full-ecosystem-bundle.png";
import roadTripKitImage from "@/assets/road-trip-kit.png";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const featuredProduct = {
  id: "bundle",
  name: "The Full Ecosystem Bundle",
  description:
    "Everything you need for calm, engaging, facilitator-friendly activity sessions — all in one place.",
  includes: [
    "Road Trip Kit",
    "Nostalgia Kit",
    "Kitchen Kit",
    "Holiday Kit",
    "Serenity Video Suite (Free Bonus)",
  ],
  price: "$96",
  originalPrice: "$130",
  badge: "Best Value",
  checkoutUrl:
    "https://shop.thecomfortbond.com/checkout/buy/9ffc59b7-0a7f-4717-9a45-3d3000a960fc",
};

const products = [
  {
    id: 1,
    name: "Road Trip Kit",
    price: "$24",
    image: roadTripKitImage,
    checkoutUrl:
      "https://shop.thecomfortbond.com/checkout/buy/db7c2f22-538e-43d3-a777-5b4f3b2eda05",
  },
  {
    id: 2,
    name: "Nostalgia Kit",
    price: "$24",
    checkoutUrl:
      "https://shop.thecomfortbond.com/checkout/buy/0bd6f264-108d-4f37-8330-8440f8cb0d29",
  },
  {
    id: 3,
    name: "Kitchen Kit",
    price: "$24",
    checkoutUrl:
      "https://shop.thecomfortbond.com/checkout/buy/92c9c8a3-a532-4760-b27a-4a0907d55f45",
  },
  {
    id: 4,
    name: "Holiday Kit",
    price: "$24",
    checkoutUrl:
      "https://shop.thecomfortbond.com/checkout/buy/3eff87c2-37b0-4acb-ae78-cf9289e5238d",
  },
  {
    id: 5,
    name: "Serenity Video Suite",
    price: "$34",
    checkoutUrl:
      "https://shop.thecomfortbond.com/checkout/buy/fe7a8bab-e2f4-433f-a73b-358742e54530",
  },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-cream" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-forest mb-4">
            Choose Your Engagement Ecosystem
          </h2>
          <p className="body-md text-forest/70 max-w-2xl mx-auto">
            Flexible options for your community's unique needs.
          </p>
        </motion.div>

        {/* Featured Product - Full Ecosystem Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-card rounded-2xl overflow-hidden border-2 border-gold shadow-xl shadow-gold/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image Placeholder */}
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-sage/20 to-gold/10 relative flex items-center justify-center min-h-[280px] overflow-hidden">
                <img 
                  src={bundleImage} 
                  alt="The Full Ecosystem Bundle - Collection of all kits"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-gold text-forest text-sm font-sans font-semibold px-4 py-1.5 rounded-full">
                  {featuredProduct.badge}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="heading-md text-forest mb-3">
                  {featuredProduct.name}
                </h3>
                <p className="body-md text-forest/70 mb-4">
                  {featuredProduct.description}
                </p>
                <div className="mb-6">
                  <p className="text-sm font-sans font-medium text-forest/60 mb-2">
                    Includes:
                  </p>
                  <p className="body-sm text-forest/80">
                    {featuredProduct.includes.join(" · ")}
                  </p>
                </div>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-serif font-bold text-forest">
                    {featuredProduct.price}
                  </span>
                  <span className="text-xl font-serif text-forest/40 line-through">
                    {featuredProduct.originalPrice}
                  </span>
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full md:w-auto"
                  asChild
                >
                  <a
                    href={featuredProduct.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Buy Full Bundle
                    <ExternalLink size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* A La Carte Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-sage/20 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Product Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-cream-dark to-sage/10 relative flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sage/50 font-serif text-sm text-center px-4">
                      {product.name} Image
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-semibold text-forest mb-2">
                    {product.name}
                  </h3>
                  <div className="mt-auto">
                    <span className="text-2xl font-serif font-bold text-forest block mb-4">
                      {product.price}
                    </span>
                    <Button
                      variant="cta"
                      size="default"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={product.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        {product.name === "Serenity Video Suite"
                          ? "Purchase Suite"
                          : "Purchase Kit"}
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
