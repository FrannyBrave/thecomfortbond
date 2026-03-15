import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const MissionBannerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-cream py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Top decorative line */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-24 bg-sage/40" />
          <div className="mx-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sage">
              <path d="M8 1C8 1 6 4 6 6.5C6 8 7 9 8 9C9 9 10 8 10 6.5C10 4 8 1 8 1Z" fill="currentColor" opacity="0.5" />
              <path d="M8 9V15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <path d="M6.5 11C5 10.5 4 9.5 4 8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
              <path d="M9.5 11C11 10.5 12 9.5 12 8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
            </svg>
          </div>
          <div className="h-px w-24 bg-sage/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Label */}
          <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-terracotta mb-5 block">
            Our Mission
          </span>

          {/* Botanical ornament */}
          <div className="flex justify-center mb-5">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-sage">
              <path d="M20 22C20 22 14 16 10 12C6 8 2 6 2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
              <path d="M20 22C20 22 26 16 30 12C34 8 38 6 38 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
              <ellipse cx="6" cy="4" rx="3.5" ry="4" transform="rotate(-30 6 4)" fill="currentColor" opacity="0.2" />
              <ellipse cx="34" cy="4" rx="3.5" ry="4" transform="rotate(30 34 4)" fill="currentColor" opacity="0.2" />
              <circle cx="20" cy="22" r="2" fill="currentColor" opacity="0.25" />
            </svg>
          </div>

          {/* Main line */}
          <p className="font-serif text-xl md:text-2xl lg:text-[1.65rem] leading-relaxed text-forest font-medium">
            We create zero-prep activity kits for Activity Directors who believe every resident deserves an hour worth showing up for.
          </p>
        </motion.div>

        {/* Bottom decorative line */}
        <div className="flex items-center justify-center mt-10">
          <div className="h-px w-24 bg-sage/40" />
          <div className="mx-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sage">
              <path d="M8 1C8 1 6 4 6 6.5C6 8 7 9 8 9C9 9 10 8 10 6.5C10 4 8 1 8 1Z" fill="currentColor" opacity="0.5" />
              <path d="M8 9V15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <path d="M6.5 11C5 10.5 4 9.5 4 8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
              <path d="M9.5 11C11 10.5 12 9.5 12 8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
            </svg>
          </div>
          <div className="h-px w-24 bg-sage/40" />
        </div>
      </div>
    </section>
  );
};
