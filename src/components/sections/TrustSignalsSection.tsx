import { Grid3X3, HelpCircle, Link, MessageCircle, Music, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const pillars = [
{
  icon: Grid3X3,
  title: "Themed BINGO Game",
  description: "Builds excitement and friendly energy in the room. Residents light up with each match."
},
{
  icon: HelpCircle,
  title: "Trivia Time",
  description: "Celebrates what residents already know, reinforcing confidence and self-worth. Low-pressure questions keep spirits high and minds engaged."
},
{
  icon: Link,
  title: "Word Link Game",
  description: "Sparks creativity and gentle teamwork as residents connect words together."
},
{
  icon: MessageCircle,
  title: "Conversation Card Prompts",
  description: "Opens the door to meaningful storytelling and emotional connection."
},
{
  icon: Music,
  title: "Musical Memory Games",
  description: "Even residents who are mostly quiet often come alive: humming, singing, and smiling together."
}];


export const TrustSignalsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-14 bg-cream">
      {/* Thin horizontal divider */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="h-px bg-sage/35 w-full" />
      </div>

      <div className="container mx-auto px-6">
        {/* Eyebrow + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <span className="inline-block text-gold font-sans text-sm uppercase tracking-widest mb-4">
            The Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-forest">
            What Makes Every Comfort Bond™ Session Work
          </h2>
        </motion.div>

        {/* Five Cards Grid */}
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {pillars.slice(0, 3).map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/60 rounded-xl p-5 shadow-sm border border-sage/15 flex flex-row items-start gap-4 text-left md:flex-col md:items-center md:text-center md:p-6">
                  <div className="flex-shrink-0 md:mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-forest" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-forest mb-1 md:mb-2">{pillar.title}</h3>
                    <p className="font-sans text-sm text-forest/70 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Bottom row: 2 centered cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[66%] mx-auto max-md:max-w-none">
            {pillars.slice(3, 5).map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  className="bg-white/60 rounded-xl p-5 shadow-sm border border-sage/15 flex flex-row items-start gap-4 text-left md:flex-col md:items-center md:text-center md:p-6">
                  <div className="flex-shrink-0 md:mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-forest" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-forest mb-1 md:mb-2">{pillar.title}</h3>
                    <p className="font-sans text-sm text-forest/70 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Secondary CTA */}
          














        </div>
      </div>
    </section>);

};