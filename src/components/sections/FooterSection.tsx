import { motion } from "framer-motion";
const footerLinks = {
  products: [{
    label: "Weighted Wraps",
    href: "#products"
  }, {
    label: "Sensory Kits",
    href: "#products"
  }, {
    label: "Comfort Companions",
    href: "#products"
  }, {
    label: "Bulk Orders",
    href: "mailto:orders@thecomfortbond.com"
  }],
  company: [{
    label: "About Us",
    href: "#about"
  }, {
    label: "Our Mission",
    href: "#about"
  }, {
    label: "Contact",
    href: "mailto:hello@thecomfortbond.com"
  }],
  support: [{
    label: "FAQ",
    href: "#faq"
  }, {
    label: "Shipping Info",
    href: "#faq"
  }, {
    label: "Returns",
    href: "#faq"
  }]
};
export const FooterSection = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  return <footer className="bg-forest text-cream/90">
      
    </footer>;
};