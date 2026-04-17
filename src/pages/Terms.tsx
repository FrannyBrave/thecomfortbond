import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | The Comfort Bond™";
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", "Review the terms of service for purchasing and using The Comfort Bond™ digital engagement kits.");
    setMeta("name", "keywords", "terms of service senior kits, digital engagement kit terms, Comfort Bond terms, senior activity kit purchase terms");
    setMeta("property", "og:title", "Terms of Service | The Comfort Bond™");
    setMeta("property", "og:description", "Review the terms of service for purchasing and using The Comfort Bond™ digital engagement kits.");
    return () => { document.title = "Instant Engagement Kits for Senior Care | The Comfort Bond™"; };
  }, []);
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-sage/40 bg-cream">
        <div className="container mx-auto px-6 py-6">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="The Comfort Bond"
              className="w-28 md:w-32 h-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-forest mb-4">
            The Comfort Bond™ — Terms of Service
          </h1>

          <p className="text-sm text-forest/60 mb-10">
            Last Updated: March 18, 2026
          </p>

          <div className="space-y-10 text-forest/80">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">1. Introduction</h2>
              <p>
                Welcome to The Comfort Bond™ ("The Comfort Bond," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of thecomfortbond.com (the "Site") and the purchase and use of our digital products (the "Products"). By using our Site or purchasing Products, you agree to these Terms.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">2. Merchant of Record (Paddle)</h2>
              <p>
                Our order process is conducted by our online reseller Paddle.com. Paddle.com is the
                Merchant of Record for all our orders. Paddle handles all payment processing and
                global tax compliance. Your credit card statement will show a charge from
                PADDLE.NET* THECOMFORTBOND.
              </p>
              <p>This means:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paddle processes payments and handles tax/VAT where applicable.</li>
                <li>We do not store or have access to your full payment card details.</li>
                <li>You will receive order confirmations and download delivery emails from Paddle.</li>
              </ul>
              <p>
                For more information, please review{" "}
                <a
                  href="https://www.paddle.com/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-forest underline transition-colors"
                >
                  Paddle's terms and policies
                </a>.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">3. Digital Products &amp; Delivery</h2>
              <p>
                The Comfort Bond Products are digital downloads (including PDFs, guides, and video access links where applicable).
              </p>
              <p>Delivery is typically instant after purchase via email and/or a download page.</p>
              <p>
                If you do not receive your download, please contact us at{" "}
                <a href="mailto:hello@thecomfortbond.com" className="text-sage hover:text-forest underline transition-colors">
                  hello@thecomfortbond.com
                </a>{" "}
                and we will help.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">4. License &amp; Permitted Use</h2>
              <p>
                When you purchase a Product, you are granted a non-exclusive, non-transferable, limited license to use the Product for your internal use within your organization.
              </p>
              <p className="font-medium text-forest">You may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Download, print, and use the materials for sessions in your facility/community.</li>
                <li>Share materials internally with your staff/teams for facilitation purposes.</li>
              </ul>
              <p className="font-medium text-forest">You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resell, redistribute, sublicense, or share the files publicly (including uploading to public drives, websites, social media, or marketplaces).</li>
                <li>Claim the content as your own or remove branding/watermarks where present.</li>
                <li>Use the Products to create competing products for sale.</li>
              </ul>
              <p>
                If you need a multi-site or enterprise license, contact{" "}
                <a href="mailto:hello@thecomfortbond.com" className="text-sage hover:text-forest underline transition-colors">
                  hello@thecomfortbond.com
                </a>.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">5. Refund Policy (Digital Products)</h2>
              <p>
                Because our Products are digital and delivered instantly, all sales are final unless required otherwise by applicable law.
              </p>
              <p>
                That said, we want you to have a great experience. If you have trouble accessing your purchase or believe you were charged in error, contact{" "}
                <a href="mailto:hello@thecomfortbond.com" className="text-sage hover:text-forest underline transition-colors">
                  hello@thecomfortbond.com
                </a>{" "}
                within 7 days of purchase and we'll do our best to make it right (for example: resolving delivery issues, replacing a corrupted file, or correcting duplicate charges).
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">6. Acceptable Use</h2>
              <p>You agree not to misuse the Site or Products. This includes attempting to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access restricted areas of the Site,</li>
                <li>Interfere with performance/security,</li>
                <li>Use the Site for unlawful purposes.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">7. Disclaimers (Important)</h2>
              <p>
                The Comfort Bond Products are designed for recreational and life enrichment purposes. They are not medical devices and are not intended to diagnose, treat, cure, or prevent any medical condition.
              </p>
              <p>
                Facilitators should always use professional judgment and follow their organization's policies, safety procedures, and resident preferences.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">8. Intellectual Property</h2>
              <p>
                All content on the Site and in the Products—including text, designs, diagrams (including The Comfort Flow™), branding, and graphics—is owned by The Comfort Bond or licensed to us and is protected by intellectual property laws. No rights are transferred except the limited license described above.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, The Comfort Bond will not be liable for indirect, incidental, special, or consequential damages arising from your use of the Site or Products. Our total liability for any claim related to a Product will not exceed the amount you paid for that Product.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">10. Changes to the Site, Products, or Terms</h2>
              <p>
                We may update our Site, Products, pricing, or these Terms from time to time. The "Last Updated" date reflects the most recent version. Continued use of the Site after changes means you accept the updated Terms.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">11. Privacy</h2>
              <p>
                Your use of the Site is also governed by our{" "}
                <a
                  href="/privacy-policy"
                  className="text-sage hover:text-forest underline transition-colors"
                >
                  Privacy Policy
                </a>.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any legal action arising out of or relating to these Terms or the Products will be brought in the state or federal courts located in Texas, and you consent to the jurisdiction of such courts.
              </p>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">13. Contact</h2>
              <p>Questions about these Terms?</p>
              <p>
                Email us at:{" "}
                <a
                  href="mailto:hello@thecomfortbond.com"
                  className="text-sage hover:text-forest underline transition-colors"
                >
                  hello@thecomfortbond.com
                </a>
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-sage/40">
            <Link
              to="/"
              className="text-forest hover:text-sage transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
