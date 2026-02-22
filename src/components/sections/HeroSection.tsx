import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-table.png";
export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundPosition: "center 40%"
    }} />
      
      {/* Dark Overlay - 60% opacity */}
      <div className="absolute inset-0 bg-forest/40" />

      {/* Hero Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">



          {/* Translucent backdrop for text readability */}
          <div className="bg-forest/20 backdrop-blur-[2px] rounded-2xl px-4 py-8 md:px-8 md:py-10 mx-auto max-w-3xl">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut"
          }} className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream mb-6 leading-[1.1] md:leading-tight">Give Your Residents an Hour They'll Look Forward To.</motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut"
          }} className="font-sans text-lg md:text-xl lg:text-2xl text-cream/90 max-w-3xl mx-auto mb-8 md:mb-12">
              Done-for-you activity kits for senior living teams — zero prep, full engagement, genuine connection.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.9,
            ease: "easeOut"
          }}>
              <Button variant="cta" size="xl" onClick={scrollToProducts} className="text-white">
                Get Your Activity Kit
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};