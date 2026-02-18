import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-hands.jpg";
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
      <div className="absolute inset-0 bg-forest/60" />

      {/* Hero Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
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
        }} className="font-serif text-lg md:text-xl lg:text-2xl text-gold mb-4 tracking-wide">The Comfort Bond™ — Nurturing Comfort, Inspiring Connection.</motion.p>

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
        }} className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream mb-6 leading-tight">Senior Living Engagement Kits & Activity Guides</motion.h1>

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
        }} className="font-sans text-lg md:text-xl lg:text-2xl text-cream/90 max-w-3xl mx-auto mb-12">Premium, done-for-you engagement kits for senior living teams—designed to create calm, meaningful connection in group settings.</motion.p>

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
              Shop the Ecosystem
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};