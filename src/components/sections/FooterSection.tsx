import { motion } from "framer-motion";

const footerLinks = {
  products: [
    { label: "Weighted Wraps", href: "#products" },
    { label: "Sensory Kits", href: "#products" },
    { label: "Comfort Companions", href: "#products" },
    { label: "Bulk Orders", href: "mailto:orders@thecomfortbond.com" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#about" },
    { label: "Contact", href: "mailto:hello@thecomfortbond.com" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Shipping Info", href: "#faq" },
    { label: "Returns", href: "#faq" },
  ],
};

export const FooterSection = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-forest text-cream/90">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-semibold text-cream mb-4">
              The Comfort Bond
            </h3>
            <p className="body-sm text-cream/70 mb-6">
              Thoughtfully designed sensory products for memory care 
              and senior living communities.
            </p>
            <p className="body-sm text-cream/50">
              © {new Date().getFullYear()} The Comfort Bond.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-4 uppercase text-sm tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="body-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="body-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-4 uppercase text-sm tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="body-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="body-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-4 uppercase text-sm tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="body-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom border accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-12"
        />
      </div>
    </footer>
  );
};
