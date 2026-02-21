import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Grid3X3, HelpCircle, Link, MessageCircle, Music } from "lucide-react";

const activities = [
  {
    icon: Grid3X3,
    title: "Themed BINGO Game",
    description: "A beloved classic customized to the kit's theme.",
  },
  {
    icon: HelpCircle,
    title: "Trivia Time",
    description: "Low-pressure questions that spark memory and shared laughter.",
  },
  {
    icon: Link,
    title: "Word Link Game",
    description: "A collaborative puzzle for gentle cognitive exercise.",
  },
  {
    icon: MessageCircle,
    title: "Conversation Card Prompts",
    description: "Thoughtful questions that help residents share their stories.",
  },
  {
    icon: Music,
    title: "Themed Music Engagement",
    description: "Curated music to match the kit's mood and set the tone.",
  },
];

export const WhatsInsideSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="heading-lg text-forest mb-4">What's Inside Every Kit</h2>
          <p className="body-md text-forest/70 max-w-2xl mx-auto">
            Every Comfort Bond™ kit includes the same five thoughtfully designed activities — each one themed to match the kit.
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/60 rounded-xl p-6 text-center shadow-sm border border-sage/15"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-forest" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-serif text-base font-semibold text-forest mb-2">
                  {activity.title}
                </h3>
                <p className="font-sans text-sm text-forest/70 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
