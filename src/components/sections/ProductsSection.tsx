import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bundleImage from "@/assets/full-ecosystem-bundle.png";
import roadTripImage from "@/assets/road-trip-kit.png";
import nostalgiaImage from "@/assets/nostalgia-kit.png";
import kitchenImage from "@/assets/kitchen-kit.png";
import holidayImage from "@/assets/holiday-kit.png";
import serenityImage from "@/assets/serenity-video-suite.png";
import { Button } from "@/components/ui/button";


const featuredProduct = {
  id: "bundle",
  name: "The Full Kit Bundle",
  description:
  "Four themed kits. One complete engagement library. Ready to run from morning session to the 4 o'clock hour.",
  includes: [
  "Road Trip Kit",
  "Nostalgia Kit",
  "Kitchen & Comfort Food Kit",
  "Holiday Traditions Kit"],

  price: "$97",
  originalPrice: "$116",
  badge: "Best Value",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/9ffc59b7-0a7f-4717-9a45-3d3000a960fc"
};

const products = [
{
  id: 1,
  name: "Road Trip Kit",
  anchorId: "road-trip-kit",
  badge: "Great for group sessions",
  description: "Hit the open road through decades of American travel memories, from Route 66 to family road trips. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/db7c2f22-538e-43d3-a777-5b4f3b2eda05",
  image: roadTripImage
},
{
  id: 2,
  name: "Nostalgia Kit",
  anchorId: "nostalgia-kit",
  badge: "Memory care favorite",
  description: "A walk down memory lane from the 1950s through the 1990s, sparking stories, smiles, and sing-alongs. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/0bd6f264-108d-4f37-8330-8440f8cb0d29",
  image: nostalgiaImage
},
{
  id: 3,
  name: "Kitchen & Comfort Food Kit",
  anchorId: "kitchen-comfort-kit",
  badge: "Great for 1:1 & group",
  description: "Celebrate the kitchen, comfort food, and family mealtime memories that bring warmth to any room. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/92c9c8a3-a532-4760-b27a-4a0907d55f45",
  image: kitchenImage
},
{
  id: 4,
  name: "Holiday Traditions Kit",
  anchorId: "holiday-traditions-kit",
  badge: "Runs year-round",
  description: "Spanning holidays across the entire year, from New Year's to Christmas and everything in between. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/3eff87c2-37b0-4acb-ae78-cf9289e5238d",
  image: holidayImage
},
{
  id: 5,
  name: "Serenity Video Suite",
  anchorId: "serenity-video-suite",
  description: "Designed to ease sundowning restlessness and calm the room between activities. Calming nature videos that provide gentle resets during quiet moments or help wind down a session naturally.",
  price: "$35",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/fe7a8bab-e2f4-433f-a73b-358742e54530",
  image: serenityImage
}];


export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding pb-6 md:pb-8 lg:pb-10 bg-cream" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="heading-lg text-forest mb-4">
            Choose Your Kit
          </h2>
          <p className="body-md text-forest/70 max-w-2xl mx-auto">
            Each kit is a complete, themed engagement session — print, gather, and begin.
          </p>
        </motion.div>

        {/* Featured Product - Full Ecosystem Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12">

          <div id="full-ecosystem-bundle" className="bg-card rounded-2xl overflow-hidden border-2 border-gold shadow-xl shadow-gold/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image Placeholder */}
              <div className="aspect-square md:aspect-auto bg-gradient-to-br from-sage/20 to-gold/10 relative flex items-center justify-center min-h-[280px] overflow-hidden">
                <img
                  src={bundleImage}
                  alt="The Full Ecosystem Bundle - Collection of all kits"
                  className="w-full h-full object-cover" />

                <span className="absolute top-4 left-4 bg-gold text-forest text-sm font-sans font-semibold px-4 py-1.5 rounded-full">
                  {featuredProduct.badge}
                </span>
              </div>

              {/* Product Info */}
              
































              
            </div>
          </div>
        </motion.div>


        {/* A La Carte Products — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.slice(0, 4).map((product, index) =>
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
            className="group">
              <div id={product.anchorId} className="bg-card rounded-xl overflow-hidden border border-sage/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-cream-dark to-sage/10 relative flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-semibold text-forest mb-1">{product.name}</h3>
                  {product.badge &&
                <span className="inline-block bg-sage/20 text-forest/70 text-xs font-sans font-medium px-2.5 py-0.5 rounded-full mb-2">
                      {product.badge}
                    </span>
                }
                  <p className="font-sans text-sm text-forest/80 mb-4 leading-snug">{product.description}</p>
                  <div className="mt-auto">
                    <span className="text-2xl font-serif font-bold text-forest block mb-1">{product.price}</span>
                    <p className="font-sans text-xs text-forest/60 mb-4">Instant digital download.</p>
                    <Button variant="cta" size="default" className="w-full h-11" asChild>
                      <a href={product.checkoutUrl} className="lemonsqueezy-button inline-flex items-center justify-center">
                        Purchase Kit
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Add-On: Serenity Video Suite */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">Add-On</span>
            <p className="body-md text-forest/70 mt-2">Pair any kit with calming background content for transitions and quiet moments.</p>
          </div>
          {(() => {
            const product = products[4];
            return (
              <div id={product.anchorId} className="bg-card rounded-xl overflow-hidden border border-sage/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
                <div className="aspect-[4/3] bg-gradient-to-br from-cream-dark to-sage/10 relative flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5 flex flex-col">
                  <h3 className="font-serif text-lg font-semibold text-forest mb-1">{product.name}</h3>
                  <p className="font-sans text-sm text-forest/80 mb-4 leading-snug">{product.description}</p>
                  <div className="mt-auto">
                    <span className="text-2xl font-serif font-bold text-forest block mb-1">{product.price}</span>
                    <p className="font-sans text-xs text-forest/60 mb-4">Instant digital download.</p>
                    <Button variant="cta" size="default" className="w-full h-11" asChild>
                      <a href={product.checkoutUrl} className="lemonsqueezy-button inline-flex items-center justify-center">
                        Purchase Suite
                      </a>
                    </Button>
                  </div>
                </div>
              </div>);

          })()}
        </motion.div>
      </div>
    </section>);

};