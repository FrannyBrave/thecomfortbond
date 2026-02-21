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

          {/* Support Email */}
          <p className="text-sm text-forest">
            Support:{" "}
            <a
              href="mailto:info@thecomfortbond.com"
              className="underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              info@thecomfortbond.com
            </a>
          </p>

          {/* Trust Statement */}
          <p className="text-xs text-forest/70 max-w-xl leading-relaxed">
            🛡️ We've Got You — All sales are final on digital downloads, but if you have any trouble accessing your purchase, we'll make it right. Contact us at{" "}
            <a href="mailto:info@thecomfortbond.com" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
              info@thecomfortbond.com
            </a>{" "}
            within 7 days.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-sm text-forest hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </a>
            <span className="text-forest/30">|</span>
            <a
              href="/terms"
              className="text-sm text-forest hover:opacity-70 transition-opacity"
            >
              Terms
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-forest/80">
            © 2026 The Comfort Bond. Nurturing Comfort, Inspiring Connection.
          </p>

          {/* Legal Disclaimer */}
          <p className="text-xs text-forest/60 max-w-2xl leading-relaxed">
            The Comfort Bond™ products are for recreational and life enrichment purposes only. Not a medical device.
          </p>
        </div>
      </div>
    </footer>
  );
};
