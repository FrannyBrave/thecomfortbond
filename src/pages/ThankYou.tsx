import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { FooterSection } from "@/components/sections/FooterSection";
import { openPaddleCheckout } from "@/lib/paddle";

type CrossSell = {
  eyebrow: string;
  title: string;
  blurb: string;
  ctaLabel: string;
  priceId?: string;
  href?: string;
};

type Product = {
  slug: string;
  name: string;
  download: { href: string; filename: string };
  intro: string;
  tips: string[];
  crossSell: CrossSell;
  pageTitle: string;
};

const BUNDLE_CROSS_SELL: CrossSell = {
  eyebrow: "Save 10% on the Complete System",
  title: "The 5-Kit Engagement Bundle",
  blurb:
    "Get all five themed kits — over 100 ready-to-run sessions covering every season, mood, and resident interest. Save 10% when you bundle.",
  ctaLabel: "Get the Bundle (10% off)",
  priceId: "pri_01kpafqz2tc4pfc262j1dnh531",
};

const BLUEPRINT_PRO_CROSS_SELL: CrossSell = {
  eyebrow: "Go Deeper with the Methodology",
  title: "The Blueprint™ Pro",
  blurb:
    "The complete framework behind every kit — planning grids, reflection tools, and the full Engagement Balance Wheel methodology your whole team can use.",
  ctaLabel: "Get Blueprint Pro",
  href: "/blueprint-pro",
};

const PRODUCTS: Record<string, Product> = {
  "nostalgia-kit": {
    slug: "nostalgia-kit",
    name: "The Nostalgia Kit",
    pageTitle: "Thank you — The Nostalgia Kit | The Comfort Bond™",
    download: { href: "/downloads/nostalgia-kit.pdf", filename: "nostalgia-kit.pdf" },
    intro:
      "Your kit is ready. Inside you'll find memory-rich sessions designed to spark conversation, recognition, and connection — built for residents at every cognitive level.",
    tips: [
      "Print the session pages double-sided on letter or A4.",
      "Skim the Facilitator Notes the night before — five minutes is all it takes.",
      "Run your first session this Friday while the inspiration is fresh.",
    ],
    crossSell: BUNDLE_CROSS_SELL,
  },
  "heart-of-the-home-kit": {
    slug: "heart-of-the-home-kit",
    name: "The Heart of the Home Kit",
    pageTitle: "Thank you — Heart of the Home Kit | The Comfort Bond™",
    download: { href: "/downloads/Heart-of-the-Home.pdf", filename: "Heart-of-the-Home.pdf" },
    intro:
      "Your kit is ready. Kitchen memories, family recipes, and the warm rituals of home — designed to bring residents back to the room they always loved most.",
    tips: [
      "Print the recipe cards on slightly heavier stock if you have it.",
      "Pair sessions with a simple sensory cue — cinnamon, vanilla, fresh bread.",
      "Save the family-recipe prompt for a small-group setting.",
    ],
    crossSell: BUNDLE_CROSS_SELL,
  },
  "are-we-there-yet-kit": {
    slug: "are-we-there-yet-kit",
    name: 'The "Are We There Yet?" Kit',
    pageTitle: "Thank you — Are We There Yet? Kit | The Comfort Bond™",
    download: { href: "/downloads/Are-We-There-Yet.pdf", filename: "Are-We-There-Yet.pdf" },
    intro:
      "Your kit is ready. Road trips, summer holidays, and the open road — sessions built around the journeys your residents remember best.",
    tips: [
      "Print the map activities in color if possible — it makes a difference.",
      "Have a few props on hand: a paper map, a postcard, a holiday photo.",
      "Try the playlist suggestions during the session for an extra sensory layer.",
    ],
    crossSell: BUNDLE_CROSS_SELL,
  },
  "heirloom-garden-kit": {
    slug: "heirloom-garden-kit",
    name: "The Heirloom Garden Kit",
    pageTitle: "Thank you — Heirloom Garden Kit | The Comfort Bond™",
    download: { href: "/downloads/heirloom-garden-kit.pdf", filename: "heirloom-garden-kit.pdf" },
    intro:
      "Your kit is ready. Sessions rooted in soil, seasons, and the simple joy of growing things — perfect for outdoor gatherings or window-side conversations.",
    tips: [
      "Pair indoor sessions with seed packets, dried herbs, or fresh flowers.",
      "Run the planting activity in spring or early autumn for the best engagement.",
      "Keep extra gardening gloves on hand for hands-on residents.",
    ],
    crossSell: BUNDLE_CROSS_SELL,
  },
  "makers-and-menders-kit": {
    slug: "makers-and-menders-kit",
    name: "The Makers & Menders Kit",
    pageTitle: "Thank you — Makers & Menders Kit | The Comfort Bond™",
    download: { href: "/downloads/makers-menders-kit.pdf", filename: "makers-menders-kit.pdf" },
    intro:
      "Your kit is ready. Hands-on sessions celebrating craft, repair, and a lifetime of skill — designed to honor the makers in every room.",
    tips: [
      "Gather a small box of fabric scraps, buttons, or wood pieces as props.",
      "Invite residents to share what they made or fixed in their working years.",
      "Run smaller-group sessions for the most meaningful conversations.",
    ],
    crossSell: BUNDLE_CROSS_SELL,
  },
  "blueprint-pro": {
    slug: "blueprint-pro",
    name: "The Blueprint™ Pro",
    pageTitle: "Thank you — Blueprint Pro | The Comfort Bond™",
    download: { href: "/downloads/blueprint-pro.pdf", filename: "blueprint-pro.pdf" },
    intro:
      "Your Blueprint is ready. The complete methodology — planning grids, reflection tools, and the Engagement Balance Wheel — built for activity directors who want a system, not just sessions.",
    tips: [
      "Read the introduction and methodology sections first (≈20 minutes).",
      "Print the Weekly Planning Grid and Reflection Notes for your team.",
      "Pair the Blueprint with any of our themed kits to put it into practice.",
    ],
    crossSell: BUNDLE_CROSS_SELL,
  },
};

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThankYou = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? PRODUCTS[slug] : undefined;

  useEffect(() => {
    if (!product) return;
    const prevTitle = document.title;
    document.title = product.pageTitle;

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
    };
  }, [product]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleCrossSell = () => {
    if (product.crossSell.priceId) {
      void openPaddleCheckout(product.crossSell.priceId);
    } else if (product.crossSell.href) {
      window.location.href = product.crossSell.href;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--cream, #FAF7F2)" }}>
      <main className="flex-1 px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[820px] mx-auto">
          {/* Header card */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(145deg, #3D5A47 0%, #2C4235 100%)",
              boxShadow: "0 20px 50px -20px rgba(45,74,62,0.4)",
            }}
          >
            <div
              className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(232,201,154,0.15)", color: "#E8C99A" }}
            >
              ✓ Purchase Confirmed
            </div>
            <h1
              className="text-[32px] md:text-[44px] leading-[1.15] m-0 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#FAF7F2",
                fontWeight: 600,
              }}
            >
              Thank you for your order
              <br />
              <span style={{ fontStyle: "italic", color: "#E8C99A" }}>{product.name}</span>
            </h1>
            <p
              className="text-[15px] md:text-[16px] max-w-[560px] mx-auto m-0"
              style={{
                color: "rgba(250,247,242,0.85)",
                lineHeight: 1.65,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              {product.intro}
            </p>
          </div>

          {/* Download card */}
          <div
            className="mt-10 rounded-xl p-6 md:p-8 text-center"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(45,74,62,0.12)",
              boxShadow: "0 4px 14px -6px rgba(45,74,62,0.15)",
            }}
          >
            <div
              className="text-[12px] font-semibold tracking-[0.18em] uppercase mb-3"
              style={{ color: "#C67B5C", fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Your Download
            </div>
            <h2
              className="text-[22px] md:text-[26px] m-0 mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#2D4A3E",
                fontWeight: 600,
              }}
            >
              {product.name}
            </h2>
            <a
              href={product.download.href}
              download={product.download.filename}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium text-white no-underline transition-transform hover:-translate-y-0.5"
              style={{
                background: "#C67B5C",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                boxShadow: "0 8px 20px -8px rgba(198,123,92,0.5)",
              }}
            >
              <DownloadIcon />
              Download your PDF
            </a>
            <p
              className="text-[12px] mt-4 m-0"
              style={{
                color: "rgba(45,74,62,0.6)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              PDF · Print-ready · Yours forever
            </p>
          </div>

          {/* Getting started tips */}
          <div className="mt-10">
            <h3
              className="text-[20px] md:text-[24px] mb-5 text-center"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#2D4A3E",
                fontWeight: 600,
              }}
            >
              How to get the most from your kit
            </h3>
            <ol className="grid grid-cols-1 gap-3">
              {product.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-xl px-5 py-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(45,74,62,0.1)",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(198,123,92,0.12)",
                      color: "#C67B5C",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-[15px] leading-[1.55]"
                    style={{
                      color: "#2D4A3E",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}
                  >
                    {tip}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Cross-sell card */}
          <div
            className="mt-10 rounded-2xl p-8 md:p-10 text-center"
            style={{
              background: "linear-gradient(145deg, rgba(232,201,154,0.25) 0%, rgba(198,123,92,0.18) 100%)",
              border: "1px solid rgba(198,123,92,0.25)",
            }}
          >
            <div
              className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#C67B5C", fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              {product.crossSell.eyebrow}
            </div>
            <h3
              className="text-[24px] md:text-[30px] m-0 mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#2D4A3E",
                fontWeight: 600,
              }}
            >
              {product.crossSell.title}
            </h3>
            <p
              className="text-[15px] max-w-[520px] mx-auto m-0 mb-6"
              style={{
                color: "rgba(45,74,62,0.8)",
                lineHeight: 1.65,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              {product.crossSell.blurb}
            </p>
            <button
              type="button"
              onClick={handleCrossSell}
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium text-white border-0 cursor-pointer transition-transform hover:-translate-y-0.5"
              style={{
                background: "#2D4A3E",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                boxShadow: "0 8px 20px -8px rgba(45,74,62,0.5)",
              }}
            >
              {product.crossSell.ctaLabel}
            </button>
          </div>

          {/* Help / footer note */}
          <div
            className="mt-10 rounded-xl p-6 text-center"
            style={{
              background: "rgba(232,201,154,0.18)",
              border: "1px solid rgba(198,123,92,0.2)",
            }}
          >
            <p
              className="text-[13px] md:text-[14px] m-0"
              style={{
                color: "#2D4A3E",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Bookmark this page so you can re-download anytime. Need help?{" "}
              <a href="mailto:hello@thecomfortbond.com" style={{ color: "#C67B5C", fontWeight: 600 }}>
                Email us
              </a>{" "}
              and we'll sort it right away.
            </p>
            <Link
              to="/"
              className="inline-block mt-4 text-[13px] font-medium no-underline"
              style={{
                color: "#2D4A3E",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              ← Back to The Comfort Bond™
            </Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ThankYou;
