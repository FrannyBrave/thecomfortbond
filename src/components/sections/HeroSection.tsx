import { motion } from "framer-motion";
import { PartyPopper, MessageCircle, Scissors, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-table.png";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSampler = () => {
    const element = document.querySelector("#sampler");
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
          {/* Trust badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.06] backdrop-blur-sm px-5 py-2.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="font-sans text-[11px] md:text-xs tracking-[0.12em] uppercase text-cream/70 font-medium">
                Trusted by Activity Directors Nationwide
              </span>
            </div>
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
            className="font-sans text-[15px] md:text-base text-cream/60 mb-10 max-w-[440px] leading-[1.75] tracking-[0.01em]"
          >
            Printable activity kits built for Activity Directors.
            Zero prep, meaningful engagement and genuine connection
            every&nbsp;time.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4"
          >
            <Button variant="cta" size="xl" onClick={scrollToProducts} className="group">
              Get Your First Kit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="font-sans text-[11px] text-cream/30 tracking-[0.08em] uppercase"
          >
            Instant digital download · No subscription required
          </motion.p>
        </div>

        {/* Right — Organic floating photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
            <img
              src={heroPhoto}
              alt="An elderly woman smiling warmly during a comfort activity session"
              className="relative z-10 w-full h-auto rounded-[24px] object-cover"
              style={{
                aspectRatio: "4/5",
                boxShadow: `0 25px 60px -12px rgba(0,0,0,0.45), 0 12px 28px -8px rgba(0,0,0,0.25)`,
              }}
            />

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 16px 40px -4px rgba(0,0,0,0.3), 0 6px 16px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className="absolute -top-4 -right-4 z-20 flex items-center gap-2.5 bg-forest/70 backdrop-blur-xl rounded-[14px] px-4 py-3 border border-cream/10 cursor-default"
              style={{
                boxShadow: `0 8px 24px -4px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)`,
              }}
            >
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <PartyPopper className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <span className="font-serif text-xs md:text-sm text-cream font-bold tracking-[0.02em] whitespace-nowrap">
                Zero Prep Required
              </span>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 16px 40px -4px rgba(0,0,0,0.3), 0 6px 16px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
              className="absolute bottom-16 -left-6 z-20 flex items-center gap-2.5 bg-forest/70 backdrop-blur-xl rounded-[14px] px-4 py-3 border border-cream/10 cursor-default"
              style={{
                boxShadow: `0 8px 24px -4px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)`,
              }}
            >
              <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-accent" strokeWidth={2.5} />
              </div>
              <span className="font-serif text-xs md:text-sm text-cream font-bold tracking-[0.02em] whitespace-nowrap">
                Sparks Real Conversation
              </span>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03, boxShadow: "0 16px 40px -4px rgba(0,0,0,0.3), 0 6px 16px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
              className="absolute -bottom-5 right-8 z-20 flex items-center gap-2.5 bg-forest/70 backdrop-blur-xl rounded-[14px] px-4 py-3 border border-cream/10 cursor-default"
              style={{
                boxShadow: `0 8px 24px -4px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)`,
              }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5 text-secondary" strokeWidth={2.5} />
              </div>
              <span className="font-serif text-xs md:text-sm text-cream font-bold tracking-[0.02em] whitespace-nowrap">
                Print & Go
              </span>
            </motion.div>

            {/* Warm ambient glow behind photo */}
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
