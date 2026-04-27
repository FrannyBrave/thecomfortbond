import { Link } from "react-router-dom";

/**
 * RecommendedKit
 *
 * A per-article "next step" card placed at the end of an article body,
 * directly above the Related Articles grid.
 *
 * Why it exists:
 *  - SEO: gives blog → product internal links rich, descriptive anchor text
 *    instead of generic "Learn more" links, and concentrates link equity on
 *    the kits / blueprint pages most topically related to the article.
 *  - CRO: catches readers who finish the article without clicking an inline
 *    link, and routes them to the most relevant offer for that topic.
 *
 * Routes intentionally use react-router <Link> so navigation stays SPA-fast.
 */

export interface RecommendedKitData {
  /** Small uppercase label above the title (e.g. "Recommended kit") */
  eyebrow: string;
  /** Card headline — descriptive, kit-named, used as the anchor's accessible name */
  title: string;
  /** 1-2 sentence pitch tying the article topic to the kit's outcome */
  description: string;
  /** Internal route — must start with "/" */
  href: string;
  /** Visible CTA label */
  ctaLabel: string;
}

export const RecommendedKit = ({ kit }: { kit: RecommendedKitData }) => {
  return (
    <aside
      aria-label="Recommended next step"
      style={{
        marginTop: "3.5rem",
        padding: "clamp(1.5rem, 3vw, 2rem)",
        background: "linear-gradient(180deg, #f6f4ef 0%, #fafaf7 100%)",
        border: "1px solid rgba(198,123,92,0.25)",
        borderRadius: 12,
        position: "relative",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--clay)",
          marginBottom: 12,
        }}
      >
        {kit.eyebrow}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
          fontWeight: 600,
          color: "var(--forest)",
          lineHeight: 1.25,
          margin: "0 0 0.65rem",
          letterSpacing: "-0.01em",
        }}
      >
        {kit.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15.5,
          color: "rgba(45,74,62,0.82)",
          lineHeight: 1.65,
          margin: "0 0 1.25rem",
          maxWidth: 620,
        }}
      >
        {kit.description}
      </p>
      <Link
        to={kit.href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--clay)",
          color: "#fff",
          fontFamily: "var(--font-sans)",
          fontSize: 14.5,
          fontWeight: 600,
          padding: "12px 22px",
          borderRadius: 8,
          textDecoration: "none",
          transition: "background 0.2s, transform 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#b56c4f";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--clay)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {kit.ctaLabel}
        <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
};

export default RecommendedKit;
