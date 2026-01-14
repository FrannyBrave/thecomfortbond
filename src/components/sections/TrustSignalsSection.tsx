import { Brain, Leaf, Sparkles, Heart } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Mental Engagement",
    description: "Activities designed to spark focus, encourage recall, and provide satisfying mental challenges."
  },
  {
    icon: Leaf,
    title: "Soothing Atmospheres",
    description: "Gentle visuals and sounds that help create a calm, relaxing environment during high-energy times."
  },
  {
    icon: Sparkles,
    title: "Shared Nostalgia",
    description: "Prompts and games that honor life stories and celebrate personal history."
  },
  {
    icon: Heart,
    title: "Meaningful Connection",
    description: "Products designed to facilitate bonding between residents, families, and caregivers."
  }
];

export const TrustSignalsSection = () => {
  return (
    <section className="w-full bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Headline */}
        <h2 className="text-3xl md:text-4xl font-serif text-forest text-center mb-16">
          Designed for Well-Being
        </h2>

        {/* Trust Pillars Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <pillar.icon className="w-12 h-12 text-forest mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-sans font-semibold text-forest mb-3">
                {pillar.title}
              </h3>
              <p className="text-forest/80 font-sans leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
