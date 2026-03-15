import { motion } from "framer-motion";
import { PartyPopper, MessageCircle, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-table.png";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[hsl(var(--forest))] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center px-8 md:px-16 pt-28 pb-16 lg:pt-20 lg:pb-0">
        
        {/* Left — Typography-driven content */}
        <div className="flex flex-col justify-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-cream/50 mb-6"
          >
            The Comfort Bond Co.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream leading-[1.05] mb-8"
          >
            Give Your
            <br />
            Residents an Hour
            <br />
            <span className="text-primary">They'll Look</span>
            <br />
            Forward To.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-16 h-[2px] bg-primary mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="font-sans text-base md:text-lg text-cream/75 mb-10 max-w-[420px] leading-relaxed"
          >
            Printable activity kits built for Activity Directors. 
            Zero prep, meaningful engagement and genuine connection every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex flex-col items-start gap-3"
          >
            <Button variant="cta" size="xl" onClick={scrollToProducts}>
              Get Your First Kit
            </Button>
            <p className="font-sans text-xs text-cream/40 tracking-wide">
              Instant digital download · No subscription required
            </p>
          </motion.div>
        </div>

        {/* Right — Art-directed photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
            {/* Decorative offset border */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-[24px] border border-cream/15" />
            
            <img
              src={heroPhoto}
              alt="An elderly woman smiling warmly during a comfort activity session"
              className="relative z-10 w-full h-auto rounded-[24px] object-cover shadow-2xl"
              style={{ aspectRatio: "4/5" }}
            />

            {/* Floating badge cards */}
            <div className="absolute bottom-6 left-4 z-20 flex flex-col gap-2.5">
              {[
                { icon: PartyPopper, text: "Zero Prep Required", delay: 1.2 },
                { icon: MessageCircle, text: "Sparks Real Conversation", delay: 1.35 },
                { icon: Scissors, text: "Print & Go — Instant Download", delay: 1.5 },
              ].map(({ icon: Icon, text, delay }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay, ease: "easeOut" }}
                  className="flex items-center gap-2.5 bg-cream/95 backdrop-blur-sm rounded-[12px] px-4 py-2.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] border border-cream/50"
                  style={{ marginLeft: `${i * 8}px` }}
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-serif text-xs md:text-sm text-forest font-medium whitespace-nowrap">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Subtle glow behind the photo */}
            <div className="absolute inset-0 rounded-[24px] bg-primary/10 blur-3xl -z-10 scale-110" />
          </div>
        </motion.div>
      </div>

      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--cream)) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />
    </section>
  );
};
