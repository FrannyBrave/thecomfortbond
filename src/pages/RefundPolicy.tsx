import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/the-comfort-bond-logo.png";
import { FooterSection } from "@/components/sections/FooterSection";

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy | The Comfort Bond™";
    window.scrollTo(0, 0);
    return () => {
      document.title = "Instant Engagement Kits for Senior Care | The Comfort Bond™";
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-sage/40 bg-cream">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-block">
            <img src={logo} alt="The Comfort Bond" className="w-28 md:w-32 h-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 md:py-16 max-w-2xl">
        <h1
          className="font-serif text-3xl md:text-4xl font-semibold mb-8"
          style={{ color: "var(--forest-dark)" }}
        >
          Refund Policy
        </h1>

        <div
          className="text-base leading-[1.8] space-y-6"
          style={{ color: "var(--text-mid)", fontFamily: "var(--font-sans)" }}
        >
          <p>
            Due to the digital nature of our products (downloadable PDF files), all sales are final.
            Once a purchase is complete and the digital files have been delivered, we cannot offer
            refunds, exchanges, or cancellations.
          </p>
          <p>
            If you experience any technical issues downloading or accessing your files, please
            contact us at{" "}
            <a
              href="mailto:hello@thecomfortbond.com"
              className="underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--clay)" }}
            >
              hello@thecomfortbond.com
            </a>{" "}
            and we will ensure you receive your purchase immediately.
          </p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default RefundPolicy;
