import { Brain, Leaf, Heart } from "lucide-react";

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
    icon: Heart,
    title: "Shared Nostalgia",
    description:
      "Prompts and games that honor life stories and foster meaningful social connection.",
  },
];

export const TrustSignalsSection = () => {
  return (
    <section className="w-full bg-cream py-20 md:py-28">
      <div className="section-container">
        {/* Section Headline */}
        <h2 className="text-forest font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-16 md:mb-20">
          Designed for Well-Being
        </h2>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {trustPillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-sage/30 flex items-center justify-center mb-6">
                <pillar.icon className="w-12 h-12 text-forest" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-forest font-serif text-xl md:text-2xl font-semibold mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-forest/80 font-sans text-base leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
