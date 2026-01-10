import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-forest/40" />

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-6">
            The Comfort Bond: Nurturing Comfort, Inspiring Connection.
          </h1>

          <p className="font-sans text-lg md:text-xl text-cream/90 mb-10 max-w-2xl">
            A complete engagement ecosystem for Senior Living, Memory Care, 
            and Life Enrichment Directors.
          </p>

          <Button
            variant="cta"
            size="xl"
            onClick={scrollToProducts}
            className="text-cream"
          >
            Shop the Ecosystem
          </Button>
        </div>
      </div>
    </section>
  );
};
