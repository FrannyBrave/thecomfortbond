import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const PrivacyPolicy = () => {
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
            The Comfort Bond – Privacy Policy
          </h1>

          <p className="text-sm text-forest/60 mb-10">
            Last Updated: January 14, 2026
          </p>

          <div className="space-y-10 text-forest/80">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">1. Introduction</h2>
              <p>
                Welcome to The Comfort Bond ("we," "us," or "our"). We respect your privacy and are 
                committed to protecting your personal information. This Privacy Policy explains how 
                information is collected, used, and safeguarded when you visit thecomfortbond.com or 
                purchase our digital products.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">2. Merchant of Record (Gumroad)</h2>
              <p>
                Our store uses Gumroad as our Merchant of Record.
              </p>
              <p>This means that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gumroad securely processes all payments.</li>
                <li>We do not collect, store, or have access to your credit card or banking details.</li>
                <li>Transactional emails (receipts, download links) are sent directly by Gumroad.</li>
              </ul>
              <p>
                For details on how financial information is handled, please review{" "}
                <a 
                  href="https://gumroad.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage hover:text-forest underline transition-colors"
                >
                  Gumroad's Privacy Policy
                </a>.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">3. Information We Collect</h2>
              <p>
                We collect only the information necessary to operate our business and deliver our products:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Your name and email address, collected when you 
                  download a free sample, purchase a product, or subscribe to updates.
                </li>
                <li>
                  <strong>Basic Usage Data:</strong> Anonymous, aggregated information about how visitors 
                  interact with our website (such as page visits), used solely to improve site performance 
                  and user experience.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">4. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver purchased or requested digital products (PDFs and videos)</li>
                <li>Send access details, updates, or support-related communications</li>
                <li>Notify you of updates or additions to products you have purchased</li>
                <li>Share occasional tips or newsletters for Activity Professionals (you may unsubscribe at any time)</li>
              </ul>
              <p className="font-medium">We do not sell or rent your personal information.</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">5. Cookies & Third-Party Services</h2>
              <p>
                <strong>Cookies:</strong> Our website may use standard, essential cookies to ensure 
                proper functionality and performance.
              </p>
              <p><strong>Third-Party Services:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments and file delivery are handled by Gumroad.</li>
                <li>Website hosting and presentation are handled by Lovable.</li>
                <li>
                  Some video content (such as the Serenity Suite) is hosted on YouTube. Viewing this 
                  content is subject to YouTube's own Terms of Service and Privacy Policy.
                </li>
              </ul>
              <p>
                We do not control how third-party platforms process data once you interact with their services.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">6. Data Security</h2>
              <p>
                We take reasonable steps to protect your information by working with reputable third-party 
                providers that use industry-standard security measures, including encryption during data 
                transmission. However, no method of online transmission or storage is 100% secure.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">7. Your Rights</h2>
              <p>You may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Unsubscribe from marketing emails using the link provided in each email</li>
              </ul>
              <p>To exercise these rights, contact us using the information below.</p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">8. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be reflected on 
                this page with an updated revision date.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how your information is handled, 
                please contact us:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a 
                  href="mailto:hello@thecomfortbond.com" 
                  className="text-sage hover:text-forest underline transition-colors"
                >
                  hello@thecomfortbond.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a 
                  href="https://thecomfortbond.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage hover:text-forest underline transition-colors"
                >
                  https://thecomfortbond.com
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

export default PrivacyPolicy;
