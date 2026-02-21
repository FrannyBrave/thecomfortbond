import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { HoneyPotSection } from "@/components/sections/HoneyPotSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { WhatsInsideSection } from "@/components/sections/WhatsInsideSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HoneyPotSection />
        <MethodologySection />
        <WhatsInsideSection />
        <ProductsSection />
        <TrustSignalsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
