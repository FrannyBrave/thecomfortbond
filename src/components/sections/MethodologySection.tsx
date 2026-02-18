import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Lightbulb, Users, Music, Leaf } from "lucide-react";

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
      className="w-full bg-cream py-20 md:py-28 lg:py-32">

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

        {/* Desktop: Horizontal Arc Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden md:block relative max-w-5xl mx-auto">

          {/* Connecting Line */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-sage/50 -translate-y-1/2 rounded-full" />
          
          {/* Steps Container */}
          <div className="relative flex justify-between items-end px-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              // Create arc effect: step 3 (index 2) is highest
              const elevations = [0, -20, -40, -20, 0];
              const elevation = elevations[index];
              const scale = step.isHighlight ? 1.1 : 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10"
                  style={{ transform: `translateY(${elevation}px) scale(${scale})` }}>

                  {/* Icon Circle */}
                  <div
                    className={`
                      w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-4
                      transition-all duration-300 shadow-md
                      ${step.isHighlight ?
                    'bg-terracotta text-cream border-4 border-terracotta shadow-lg shadow-terracotta/20' :
                    'bg-cream-dark text-forest border-2 border-sage/40'}
                    `
                    }>

                    <Icon className={`${step.isHighlight ? 'w-8 h-8 lg:w-10 lg:h-10' : 'w-6 h-6 lg:w-8 lg:h-8'}`} />
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`
                      font-serif text-lg lg:text-xl font-semibold mb-1
                      ${step.isHighlight ? 'text-terracotta' : 'text-forest'}
                    `}>

                    {step.title}
                  </h3>

                  {/* Subtext */}
                  <p className="font-sans text-xs lg:text-sm text-forest/70 max-w-[120px] lg:max-w-[140px]">
                    {step.subtext}
                  </p>
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* Mobile: Vertical Timeline Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:hidden relative max-w-sm mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-sage/50" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-6 relative">

                  {/* Icon Circle */}
                  <div
                    className={`
                      relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0
                      transition-all duration-300 shadow-md
                      ${step.isHighlight ?
                    'bg-terracotta text-cream border-4 border-terracotta shadow-lg shadow-terracotta/20 scale-110' :
                    'bg-cream-dark text-forest border-2 border-sage/40'}
                    `
                    }>

                    <Icon className={`${step.isHighlight ? 'w-7 h-7' : 'w-6 h-6'}`} />
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h3
                      className={`
                        font-serif text-lg font-semibold mb-1
                        ${step.isHighlight ? 'text-terracotta' : 'text-forest'}
                      `}>

                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-forest/70">
                      {step.subtext}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-16 md:mt-20 max-w-[700px] mx-auto text-center font-sans text-base md:text-lg text-forest/80 leading-relaxed">

          Most activity kits focus on just one moment. The Comfort Bond™ is designed as a complete engagement experience. Our five-step flow gently guides participants from conversation and focus, through joyful connection, and finally into a calm, settling close — creating a balanced and facilitator-friendly hour of engagement.
        </motion.p>
      </div>
    </section>);

};