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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Rich layered background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, hsl(150 20% 22%) 0%, hsl(150 20% 28%) 40%, hsl(150 18% 32%) 70%, hsl(150 20% 26%) 100%)`,
        }}
      />

      {/* Subtle diagonal light sweep */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 0%, hsl(40 33% 93% / 0.15) 30%, transparent 60%)`,
        }}
      />

      {/* Fine dot texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--cream)) 0.5px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-8 md:px-16 lg:px-20 pt-32 pb-20 lg:pt-24 lg:pb-16">
        {/* Left — Editorial typography */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-[1px] bg-accent/60" />
            <span className="font-sans text-[11px] md:text-xs tracking-[0.35em] uppercase text-cream/45 font-medium">
              The Comfort Bond Co.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.5rem] font-semibold text-cream leading-[1.05] tracking-[-0.01em] mb-8"
          >
            Give Your
            <br />
            Residents an Hour
            <br />
            <span className="text-accent italic">They'll Look</span>
            <br />
            Forward To.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8 origin-left"
          >
            <div className="w-12 h-[1.5px] bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="font-sans text-[15px] md:text-base text-cream/60 mb-12 max-w-[400px] leading-[1.75] tracking-[0.01em]"
          >
            Printable activity kits built for Activity Directors.
            Zero prep, meaningful engagement and genuine connection
            every&nbsp;time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex flex-col items-start gap-4"
          >
            <Button variant="cta" size="xl" onClick={scrollToProducts}>
              Get Your First Kit
            </Button>
            <p className="font-sans text-[11px] text-cream/30 tracking-[0.08em] uppercase">
              Instant digital download · No subscription required
            </p>
          </motion.div>
        </div>

        {/* Right — Art-directed photo with luxury frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[460px] lg:max-w-[500px]">
            {/* Outer decorative frame */}
            <div className="absolute -inset-3 rounded-[28px] border border-cream/8" />

            {/* Inner accent frame with gold tint */}
            <div
              className="absolute -inset-[6px] rounded-[26px]"
              style={{
                background: `linear-gradient(145deg, hsl(30 52% 64% / 0.12), hsl(30 52% 64% / 0.04), transparent)`,
              }}
            />

            <img
              src={heroPhoto}
              alt="An elderly woman smiling warmly during a comfort activity session"
              className="relative z-10 w-full h-auto rounded-[24px] object-cover"
              style={{
                aspectRatio: "4/5",
                boxShadow: `0 20px 60px -12px rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.2)`,
              }}
            />

            {/* Floating badge cards */}
            <div className="absolute bottom-8 left-5 z-20 flex flex-col gap-2">
              {[
                { icon: PartyPopper, text: "Zero Prep Required", delay: 1.2 },
                { icon: MessageCircle, text: "Sparks Real Conversation", delay: 1.35 },
                { icon: Scissors, text: "Print & Go — Instant Download", delay: 1.5 },
              ].map(({ icon: Icon, text, delay }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay, ease: "easeOut" }}
                  className="flex items-center gap-2.5 bg-cream/90 backdrop-blur-md rounded-[10px] px-3.5 py-2 border border-cream/40"
                  style={{
                    marginLeft: `${i * 6}px`,
                    boxShadow: `0 4px 16px -2px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)`,
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-serif text-[11px] md:text-xs text-forest font-semibold tracking-[0.02em] whitespace-nowrap">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Warm glow */}
            <div className="absolute inset-0 rounded-[24px] bg-accent/8 blur-[60px] -z-10 scale-125" />
          </div>
        </motion.div>
      </div>

      {/* Bottom edge gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(150 20% 22% / 0.6), transparent)`,
        }}
      />
    </section>
  );
};
