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
    <section className="bg-cream section-padding">
      <div className="section-container">
        {/* Section Headline */}
        <h2 className="heading-lg text-forest text-center mb-16 md:mb-20">
          Designed for Well-Being
        </h2>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {trustPillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <pillar.icon className="w-12 h-12 text-forest" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="heading-sm text-forest mb-4">{pillar.title}</h3>

              {/* Description */}
              <p className="body-md text-muted-foreground max-w-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
