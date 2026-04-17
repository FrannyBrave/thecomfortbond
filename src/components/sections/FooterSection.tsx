import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

export const FooterSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 800);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productLinks = [
    { label: "Nostalgia Kit", id: "nostalgia-kit" },
    { label: "Heart of the Home Kit", id: "heart-of-the-home-kit" },
    { label: '"Are We There Yet?" Kit', id: "are-we-there-yet-kit" },
    { label: "Heirloom Garden Kit", id: "heirloom-garden-kit" },
    { label: "Makers & Menders Kit", id: "makers-and-menders-kit" },
    { label: "All 5 Kits — $130.99", id: "bundles" },
  ];

  return (
    <footer className="bg-cream border-t border-sage/40">
      <div className="container mx-auto px-6 py-10 md:py-14">
        {/* Top: Logo + Tagline */}
        <div className="flex flex-col items-center text-center mb-8">
          <button
            onClick={scrollToTop}
            className="transition-opacity hover:opacity-80 mb-3"
            aria-label="Scroll to top"
          >
            <img
              src={logo}
              alt="The Comfort Bond"
              className="w-32 md:w-36 h-auto"
            />
          </button>
          <p className="text-sm text-forest/70 italic" style={{ fontFamily: "var(--font-serif)" }}>
            Nurturing Comfort, Inspiring Connection.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Products Column */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-forest mb-3 uppercase tracking-wide">Products</h4>
            <div className="flex flex-col gap-2">
              {productLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-forest/80 hover:text-terracotta transition-colors text-center md:text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-forest mb-3 uppercase tracking-wide">Resources</h4>
            <div className="flex flex-col gap-2">
              <a
                href="/blueprint"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                Free Blueprint
              </a>
              <a
                href="/free-sampler"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                Free Sampler
              </a>
              <a
                href="/resources"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                Blog
              </a>
              <a
                href="#honey-pot"
                onClick={(e) => { e.preventDefault(); scrollToSection("honey-pot"); }}
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                {"\n"}
              </a>
            </div>
          </div>

          {/* Contact & Legal Column */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-forest mb-3 uppercase tracking-wide">Company</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@thecomfortbond.com"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                hello@thecomfortbond.com
              </a>
              <a
                href="/privacy-policy"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                Terms
              </a>
              <a
                href="/refund-policy"
                className="text-sm text-forest/80 hover:text-terracotta transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Trust + Legal + Copyright */}
        <div className="flex flex-col items-center text-center gap-3 border-t border-sage/20 pt-6">
          <p className="text-xs text-forest/70 max-w-xl leading-relaxed">
            🛡️ All sales are final on digital downloads, but if you have any trouble accessing your purchase, we'll make it right. Contact us within 7 days.
          </p>
          <p className="text-xs text-forest/50 max-w-2xl leading-relaxed">
            The Comfort Bond™ products are for recreational and life enrichment purposes only. Not a medical device.
          </p>
          <p className="text-xs text-forest/60 mt-1">
            © 2026 The Comfort Bond.
          </p>
        </div>
      </div>
    </footer>
  );

};