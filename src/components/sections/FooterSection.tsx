import logo from "@/assets/logo.png";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-cream border-t border-sage/40">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="transition-opacity hover:opacity-80"
            aria-label="Scroll to top"
          >
            <img
              src={logo}
              alt="The Comfort Bond"
              className="w-32 md:w-36 h-auto"
            />
          </button>

          {/* Support & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="mailto:info@thecomfortbond.com"
              className="text-forest hover:opacity-70 transition-opacity"
            >
              Support
            </a>
            <a
              href="#"
              className="text-forest hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-forest">
            © 2026 The Comfort Bond. Nurturing Comfort, Inspiring Connection.
          </p>

          {/* Legal Disclaimer */}
          <p className="text-xs text-forest/70 max-w-2xl leading-relaxed">
            The Comfort Bond™ products are designed for recreational and life enrichment purposes only. 
            They are not medical devices and are not intended to diagnose, treat, or prevent any medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};
