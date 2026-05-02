import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Heart, Layers, Package, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/the-comfort-bond-logo-160.png";

// Primary mobile / tablet destinations — the 4 high-intent routes
// surfaced in the slide-out side drawer.
const MOBILE_PRIMARY_LINKS = [
  {
    label: "For Families",
    description: "Mother's Day visit guide & memory care support",
    href: "/family-visits",
    icon: Heart,
  },
  {
    label: "Blueprint Pro",
    description: "13-week activity curriculum for facilities",
    href: "/blueprint-pro",
    icon: Layers,
  },
  {
    label: "Engagement Kits",
    description: "Print-ready themed kits — shop the full collection",
    href: "/kits",
    icon: Package,
  },
  {
    label: "Free Sampler",
    description: "Try a kit free — no credit card required",
    href: "/free-sampler",
    icon: Gift,
  },
] as const;

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
            <img src={logo} alt="The Comfort Bond logo — dignified engagement activities for senior living" width={160} height={160} className="h-16 md:h-20 w-auto" />
            <span className="text-xl md:text-2xl font-serif font-semibold text-forest tracking-tight">
              The Comfort Bond<sup className="text-[0.5em] font-sans font-medium ml-0.5 align-super">™</sup>
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

          {/* Mobile + Tablet Side Drawer */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-forest hover:text-terracotta transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu size={26} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] sm:w-[420px] bg-cream border-l border-sage/20 p-0 flex flex-col"
            >
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-sage/15 text-left">
                <SheetTitle className="font-serif text-xl text-forest">
                  Where would you like to go?
                </SheetTitle>
                <p className="font-sans text-sm text-forest/60 mt-1">
                  Pick the path that fits your visit today.
                </p>
              </SheetHeader>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="flex flex-col gap-2">
                  {MOBILE_PRIMARY_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <button
                          onClick={() => {
                            navigate(link.href);
                            setIsMobileMenuOpen(false);
                          }}
                          className="group w-full text-left flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-sage/10 transition-colors"
                        >
                          <span className="shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                            <Icon size={18} strokeWidth={2} />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="flex items-center justify-between gap-2">
                              <span className="font-serif text-base font-semibold text-forest">
                                {link.label}
                              </span>
                              <ArrowRight
                                size={16}
                                className="text-forest/30 group-hover:text-terracotta group-hover:translate-x-0.5 transition-all"
                              />
                            </span>
                            <span className="block font-sans text-[13px] text-forest/60 leading-snug mt-0.5">
                              {link.description}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Secondary links */}
                <div className="mt-6 pt-4 border-t border-sage/15 px-1">
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-forest/40 mb-2 px-2">
                    More
                  </p>
                  <ul className="flex flex-col">
                    {[
                      { label: "Resources", href: "/resources" },
                      { label: "Our Story", href: "/about" },
                    ].map((link) => (
                      <li key={link.href}>
                        <button
                          onClick={() => {
                            navigate(link.href);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-left font-sans text-sm text-forest/80 hover:text-terracotta transition-colors px-2 py-2"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Sticky footer CTAs */}
              <div className="border-t border-sage/15 p-4 bg-cream space-y-2">
                {!isMothersDayLanding && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-terracotta text-terracotta hover:bg-terracotta hover:text-cream font-semibold"
                    onClick={() => {
                      navigate("/blueprint");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Free Blueprint
                  </Button>
                )}
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    navigate("/kits");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};
