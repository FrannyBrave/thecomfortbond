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
      
      {/* Left-side forest green gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(44,62,45,0.65) 0%, rgba(44,62,45,0.35) 24%, transparent 48%)"
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 pt-20 w-full pl-[60px] pr-4 md:pr-0">
        <div className="text-left w-full md:w-[45%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream mb-6 leading-[1.1] md:leading-tight"
          >
            Give Your Residents an Hour They'll Look Forward To.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-cream/90 mb-8 md:mb-12"
          >
            Printable activity kits built for Activity Directors. Zero prep, meaningful engagement and genuine connection every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-3"
          >
            <Button variant="cta" size="xl" onClick={scrollToProducts}>
              Get Your First Kit
            </Button>
            <p className="font-sans text-sm text-cream/60">
              Instant digital download. No subscription required.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};