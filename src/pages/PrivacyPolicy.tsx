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
          <h1 className="font-display text-3xl md:text-4xl text-forest mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-forest max-w-none space-y-6 text-forest/80">
            <p className="text-sm text-forest/60">
              Last updated: January 2026
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">Introduction</h2>
              <p>
                The Comfort Bond ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or purchase our products.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Make a purchase or place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Participate in promotions or surveys</li>
              </ul>
              <p>
                This information may include your name, email address, shipping address, 
                payment information, and phone number.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and products</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information with trusted service providers who assist us 
                in operating our website, conducting our business, or servicing you, as long 
                as those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                You may also opt out of receiving marketing communications at any time by 
                contacting us or using the unsubscribe link in our emails.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl text-forest">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <a 
                  href="mailto:info@thecomfortbond.com" 
                  className="text-sage hover:text-forest transition-colors"
                >
                  info@thecomfortbond.com
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
