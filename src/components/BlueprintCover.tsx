import logo from "@/assets/the-comfort-bond-logo.webp";
import balanceWheel from "@/assets/image_35.png";

export default function BlueprintCover() {
  return (
    <div
      className="blueprint-cover"
      style={{
        maxWidth: "960px",
        width: "100%",
        aspectRatio: "8.5 / 11",
        margin: "0 auto",
        backgroundColor: "#F5F0EB",
        fontFamily: '"DM Sans", system-ui, sans-serif',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 5vw, 3.5rem) clamp(2rem, 4vw, 3rem)",
      }}
    >
      {/* ── 1. Header Logo Block ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
        <img
          src={logo}
          alt="The Comfort Bond logo — dignified engagement activities for senior living"
          style={{
            width: "clamp(48px, 6vw, 60px)",
            height: "clamp(48px, 6vw, 60px)",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(0.6rem, 1vw, 0.7rem)",
            fontWeight: 600,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#2d4a3e",
            margin: 0,
          }}
        >
          The Comfort Bond&trade;
        </p>
      </div>

      {/* ── 2. Breathing Room ── */}
      <div style={{ flex: "1 1 0" }} />

      {/* ── 3. Balance Wheel Hero ── */}
      <img
        src={balanceWheel}
        alt="Engagement Balance Wheel — Physical, Mental, Social, Emotional, Purposeful, Creative, Learning, Spiritual"
        style={{
          width: "clamp(240px, 42vw, 340px)",
          height: "auto",
          display: "block",
          borderRadius: "8px",
        }}
      />

      {/* ── Spacer between wheel and title ── */}
      <div style={{ height: "clamp(1.75rem, 4vw, 2.75rem)" }} />

      {/* ── 4. Main Title Block ── */}
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            fontWeight: 600,
            color: "#2d4a3e",
            margin: "0 0 0.5rem",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            fontStyle: "italic",
          }}
        >
          The Weekly Blueprint
        </h1>

        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
            fontWeight: 400,
            color: "#6B5D4F",
            margin: "0 0 1.5rem",
            letterSpacing: "0.02em",
          }}
        >
          Your 7-Day Engagement Planner
        </p>

        <div
          style={{
            width: "3rem",
            height: "1.5px",
            backgroundColor: "#8B6F47",
            margin: "0 auto 1.5rem",
            borderRadius: "1px",
          }}
        />

        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(0.8rem, 1.4vw, 0.925rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#9A8E80",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Stop searching. Start planning.
        </p>
      </div>

      {/* ── 5. Bottom spacer + footer ── */}
      <div style={{ flex: "1 1 0" }} />

      <p
        style={{
          fontSize: "clamp(0.55rem, 0.9vw, 0.625rem)",
          fontWeight: 400,
          color: "#A89E92",
          margin: 0,
          letterSpacing: "0.08em",
        }}
      >
        www.thecomfortbond.com
      </p>

      {/* ── Print ── */}
      <style>{`
        @media print {
          @page { size: letter portrait; margin: 0; }
          .blueprint-cover {
            max-width: 100% !important;
            height: 100vh;
            aspect-ratio: auto !important;
            padding: 2.5rem !important;
            break-after: page;
          }
        }
      `}</style>
    </div>
  );
}
