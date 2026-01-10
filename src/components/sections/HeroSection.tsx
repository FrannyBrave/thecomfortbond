import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 40%'
        }}
      />
      
      {/* Dark Overlay - 60% opacity deep forest green */}
      <div className="absolute inset-0 bg-forest/60" />

      <div className="section-container relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream mb-8 leading-tight"
          >
            The Comfort Bond: Nurturing Comfort, Inspiring Connection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-cream/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A complete engagement ecosystem for Senior Living, Memory Care, and Life Enrichment Directors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToProducts}
              className="text-white hover:text-white"
            >
              Shop the Ecosystem
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
