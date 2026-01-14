import { Brain, Leaf, Sparkles, Heart } from "lucide-react";

const trustPillars = [
  {
    icon: Brain,
    title: "Mental Engagement",
    description:
      "Activities designed to spark focus, encourage recall, and provide satisfying mental challenges.",
  },
  {
    icon: Leaf,
    title: "Soothing Atmospheres",
    description:
      "Gentle visuals and sounds that help create a calm, relaxing environment during high-energy times.",
  },
  {
    icon: Sparkles,
    title: "Shared Nostalgia",
    description:
      "Prompts and games that honor life stories and celebrate personal history.",
  },
  {
    icon: Heart,
    title: "Meaningful Connection",
    description:
      "Products designed to facilitate bonding between residents, families, and caregivers.",
  },
];

export const TrustSignalsSection = () => {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="section-container">
        {/* Section Headline */}
        <h2 className="font-serif text-3xl md:text-4xl text-forest text-center mb-16 md:mb-20">
          Designed for Well-Being
        </h2>

        {/* Trust Pillars 2x2 Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {trustPillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <pillar.icon className="w-12 h-12 text-forest mb-5" strokeWidth={1.5} />

              {/* Title */}
              <h3 className="font-sans font-semibold text-lg text-forest mb-3">{pillar.title}</h3>

              {/* Description */}
              <p className="text-base text-forest/80 max-w-xs leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
