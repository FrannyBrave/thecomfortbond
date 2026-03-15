import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream shadow-sm"
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" onClick={scrollToTop} className="flex items-center gap-3 py-2">
            <img src={logo} alt="The Comfort Bond" className="h-12 md:h-14 w-auto" />
            <span className="text-xl md:text-2xl font-serif font-semibold text-forest tracking-tight">
              The Comfort Bond
            </span>
          </a>

          {/* Desktop Nav Links + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "How It Works", href: "#methodology" },
              { label: "Kits", href: "#road-trip-kit" },
              { label: "FAQ", href: "#faq" },
              { label: "Free Sample", href: "#honey-pot" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-sans text-sm font-medium text-forest hover:text-terracotta transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button variant="cta" size="lg" onClick={() => scrollToSection("#products")}>
              Shop Bundle
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-forest hover:text-terracotta transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream border-t border-sage/20 pb-6"
          >
            <div className="flex flex-col gap-2 pt-4">
              {[
                { label: "How It Works", href: "#methodology" },
                { label: "Kits", href: "#products" },
                { label: "FAQ", href: "#faq" },
                { label: "Free Sample", href: "#honey-pot" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left font-sans text-base font-medium text-forest hover:text-terracotta transition-colors px-2 py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 px-2">
                <Button variant="cta" size="lg" className="w-full" onClick={() => scrollToSection("#products")}>
                  Shop Bundle
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
