import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { HoneyPotSection } from "@/components/sections/HoneyPotSection";
import { MethodologySection } from "@/components/sections/MethodologySection";

import { ProductsSection } from "@/components/sections/ProductsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait for elements to render before scrolling
    const timeout = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 800);
    return () => clearTimeout(timeout);
  }, [hash]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HoneyPotSection />
        <MethodologySection />
        
        <ProductsSection />
        <TrustSignalsSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
