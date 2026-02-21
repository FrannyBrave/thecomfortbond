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
          {/* Tagline pill - positioned at top of hero block */}
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut"
          }} className="inline-block font-serif text-[13px] md:text-lg lg:text-xl text-cream font-semibold tracking-[0.02em] bg-forest/60 backdrop-blur-sm border border-gold/50 rounded-xl px-3 py-1.5 md:px-4 mb-6 md:mb-5 shadow-sm max-w-[90%] md:max-w-none">The Comfort Bond™ — Nurturing Comfort, Inspiring Connection.</motion.p>

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
                See the Kits
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};