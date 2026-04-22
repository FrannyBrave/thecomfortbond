import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMothersDayLanding = location.pathname === "/family-visits";

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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
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
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 py-2 no-underline cursor-pointer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={logo} alt="The Comfort Bond" className="h-16 md:h-20 w-auto" />
            <span className="text-xl md:text-2xl font-serif font-semibold text-forest tracking-tight">
              The Comfort Bond
            </span>
          </a>

          {/* Desktop Nav Links + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: "", href: "#methodology" },
              { label: "", href: "#road-trip-kit" },
              { label: "", href: "#faq" },
              { label: "", href: "/resources" },
              { label: "", href: "/family-visits" },
              ...(isMothersDayLanding ? [] : [
                { label: "Free Sampler", href: "/free-sampler" },
                { label: "Blueprint Pro", href: "/blueprint-pro" },
              ]),
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    navigate(link.href);
                  } else {
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 800);
                    } else {
                      scrollToSection(link.href);
                    }
                  }
                }}
                className="font-sans text-sm font-medium text-forest hover:text-terracotta transition-colors"
              >
                {link.label}
              </button>
            ))}
            {!isMothersDayLanding && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/blueprint")}
                className="border-terracotta text-terracotta hover:bg-terracotta hover:text-cream font-semibold"
              >
                Free Blueprint
              </Button>
            )}
            <Button variant="cta" size="lg" onClick={() => navigate("/kits")}>
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-forest hover:text-terracotta transition-colors"
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
            className="lg:hidden bg-cream border-t border-sage/20 pb-6"
          >
            <div className="flex flex-col gap-2 pt-4">
              {[
                { label: "", href: "#methodology" },
                { label: "", href: "#road-trip-kit" },
                { label: "", href: "#faq" },
                { label: "", href: "/resources" },
                { label: "", href: "/family-visits" },
                ...(isMothersDayLanding ? [] : [
                  { label: "Free Sampler", href: "/free-sampler" },
                  { label: "Blueprint Pro", href: "/blueprint-pro" },
                ]),
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    if (link.href.startsWith("/")) {
                      navigate(link.href);
                      setIsMobileMenuOpen(false);
                    } else {
                      if (location.pathname !== "/") {
                        navigate("/");
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          const el = document.querySelector(link.href);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }, 800);
                      } else {
                        scrollToSection(link.href);
                      }
                    }
                  }}
                  className="text-left font-sans text-base font-medium text-forest hover:text-terracotta transition-colors px-2 py-2"
                >
                  {link.label}
                </button>
              ))}
              {!isMothersDayLanding && (
                <div className="pt-2 px-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-terracotta text-terracotta hover:bg-terracotta hover:text-cream font-semibold mb-2"
                    onClick={() => { navigate("/blueprint"); setIsMobileMenuOpen(false); }}
                  >
                    Free Blueprint
                  </Button>
                </div>
              )}
              <div className="pt-0 px-2">
                <Button variant="cta" size="lg" className="w-full" onClick={() => { setIsMobileMenuOpen(false); navigate("/kits"); }}>
                  Shop Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
