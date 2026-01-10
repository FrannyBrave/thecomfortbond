import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.jpg";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded"
            aria-label="Scroll to top"
          >
            <img
              src={logoHorizontal}
              alt="The Comfort Bond"
              className="h-10 md:h-14 w-auto"
            />
          </button>

          {/* CTA Button */}
          <Button
            variant="cta"
            size="lg"
            onClick={scrollToProducts}
          >
            Shop Bundle
          </Button>
        </div>
      </nav>
    </header>
  );
};
