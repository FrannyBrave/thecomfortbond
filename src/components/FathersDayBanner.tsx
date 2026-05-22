import { Link } from "react-router-dom";
import { isFathersDayActive } from "@/lib/fathersDay";

/**
 * Sitewide thin Father's Day banner.
 * Cream background, dark warm-brown text, terracotta arrow.
 * Auto-hides after June 21, 2026 (CT).
 */
export const FathersDayBanner = () => {
  if (!isFathersDayActive()) return null;

  return (
    <div
      role="region"
      aria-label="Father's Day announcement"
      style={{
        width: "100%",
        background: "var(--forest-dark, #2D4A3E)",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        minHeight: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 16px",
      }}
    >
      <Link
        to="/fathers-day"
        style={{
          fontFamily: "var(--font-sans, 'DM Sans', system-ui, sans-serif)",
          fontSize: "clamp(12px, 1.4vw, 14px)",
          color: "var(--cream, #F7F1E8)",
          textDecoration: "none",
          textAlign: "center",
          lineHeight: 1.35,
          fontWeight: 500,
        }}
      >
        For Father's Day, June 21 — explore kits made for the dads and grandfathers who built things{" "}
        <span style={{ color: "var(--clay, #C67B5C)", fontWeight: 700 }}>→</span>
      </Link>
    </div>
  );
};

export default FathersDayBanner;
