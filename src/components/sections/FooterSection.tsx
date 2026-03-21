import logo from "@/assets/logo.png";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        {/* Middle: Links + Contact in a row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          <a
            href="mailto:hello@thecomfortbond.com"
            className="text-sm text-forest underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            hello@thecomfortbond.com
          </a>
          <span className="hidden md:inline text-forest/30">|</span>
          <a
            href="/privacy-policy"
            className="text-sm text-forest hover:opacity-70 transition-opacity"
          >
            Privacy Policy
          </a>
          <span className="hidden md:inline text-forest/30">|</span>
          <a
            href="/terms"
            className="text-sm text-forest hover:opacity-70 transition-opacity"
          >
            Terms
          </a>
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