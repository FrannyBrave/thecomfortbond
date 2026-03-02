import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Lightbulb, Users, Music, Leaf, ArrowRight } from "lucide-react";

const steps = [
{
  number: 1,
  title: "Warm Up",
  subtext: "Conversation Cards (Gentle)",
  icon: MessageCircle,
  isHighlight: false
},
{
  number: 2,
  title: "Engage",
  subtext: "Trivia & Word Links (Focus)",
  icon: Lightbulb,
  isHighlight: false
},
{
  number: 3,
  title: "Connect",
  subtext: "Interactive Bingo (High Fun)",
  icon: Users,
  isHighlight: true
},
{
  number: 4,
  title: "Melody",
  subtext: "Music & Memory (Emotion)",
  icon: Music,
  isHighlight: false
},
{
  number: 5,
  title: "Rest",
  subtext: "Serenity Suite (Calm)",
  icon: Leaf,
  isHighlight: false
}];


export const MethodologySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="methodology"
      className="w-full bg-cream py-10 md:py-12 lg:py-14 pb-6 md:pb-8 lg:pb-10">

      <div className="section-container">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif md:text-4xl lg:text-5xl font-semibold text-forest text-center mb-16 md:mb-20 leading-tight max-w-4xl mx-auto text-3xl">

          Stop Just "Filling Time."
          <br />
          Start Creating Connection.
        </motion.h2>

        {/* The Comfort Flow™ Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-center font-serif text-xl md:text-2xl text-forest/80 mb-12 italic">

          The Comfort Flow™
        </motion.p>

        {/* Unified Steps Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative max-w-sm md:max-w-5xl mx-auto">

          {/* Connecting Line - horizontal on desktop, vertical on mobile */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-sage/50 md:hidden" />
          <div className="hidden md:block absolute top-[32px] lg:top-[40px] left-[10%] right-[10%] h-1 bg-sage/50 -translate-y-1/2 rounded-full" />

          {/* Steps Container */}
          <div className="space-y-8 md:space-y-0 md:relative md:flex md:justify-between md:items-start md:px-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-6 relative md:flex-col md:items-center md:text-center md:gap-0 z-10">

                    {/* Icon Circle */}
                    <div
                      className={`
                        relative z-10 w-16 h-16 md:mb-4 lg:w-20 lg:h-20 rounded-full flex items-center justify-center flex-shrink-0
                        transition-all duration-300 shadow-md
                        ${step.isHighlight
                          ? 'bg-terracotta text-cream border-4 border-terracotta shadow-lg shadow-terracotta/20'
                          : 'bg-cream-dark text-forest border-2 border-sage/40'}
                      `}>
                      <Icon className={`${step.isHighlight ? 'w-7 h-7 lg:w-10 lg:h-10' : 'w-6 h-6 lg:w-8 lg:h-8'}`} />
                    </div>

                    {/* Content */}
                    <div className="pt-3 md:pt-0">
                      <h3
                        className={`
                          font-serif text-lg lg:text-xl font-semibold mb-1
                          ${step.isHighlight ? 'text-terracotta' : 'text-forest'}
                        `}>
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm lg:text-sm text-forest md:max-w-[120px] lg:max-w-[140px]">
                        {step.subtext}
                      </p>
                    </div>
                </motion.div>
              );
            })}
          </div>

          {/* Diagram Caption - desktop only */}
          <p className="hidden md:block text-center font-sans text-sm text-forest/80 mt-6 italic">
            Build energy → Peak connection → Gentle close
          </p>
        </motion.div>

        {/* Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-14 md:mt-18 max-w-[640px] mx-auto text-center">

          <p className="font-sans text-base md:text-lg text-forest leading-relaxed">
            Most activity kits cover one moment. The Comfort Bond™ creates a full, balanced hour of engagement.
          </p>
        </motion.div>
      </div>
    </section>);

};