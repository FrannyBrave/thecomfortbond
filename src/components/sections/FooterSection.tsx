import logo from "@/assets/logo.png";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-cream border-t border-sage">
      <div className="section-container py-16 md:py-20">
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

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="mailto:info@thecomfortbond.com"
              className="text-forest font-sans text-sm hover:underline hover:opacity-80 transition-all"
            >
              Email Support
            </a>
            <a
              href="#"
              className="text-forest font-sans text-sm hover:underline hover:opacity-80 transition-all"
            >
              Privacy Policy
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-forest font-sans text-sm">
            The Comfort Bond © {new Date().getFullYear()}. Nurturing Comfort, Inspiring Connection.
          </p>

          {/* Legal Disclaimer */}
          <p className="text-forest/60 font-sans text-xs max-w-2xl leading-relaxed">
            The Comfort Bond™ products are designed for recreational and life enrichment purposes only. 
            They are not medical devices and are not intended to diagnose, treat, or prevent any medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};
