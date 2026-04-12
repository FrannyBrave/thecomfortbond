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
        justifyContent: "space-between",
        padding: "clamp(2.5rem, 6vw, 4rem) clamp(2rem, 5vw, 3.5rem)",
        position: "relative",
      }}
    >
      {/* ── Brand Mark ── */}
      <p
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)",
          fontWeight: 600,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#8B6F47",
          margin: 0,
        }}
      >
        The Comfort Bond™
      </p>

      {/* ── Title Block — vertically centered via flex ── */}
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            fontWeight: 600,
            color: "#2d4a3e",
            margin: "0 0 0.625rem",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
          }}
        >
          The Weekly Blueprint
        </h1>

        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
            fontWeight: 300,
            color: "#6B5D4F",
            margin: "0 0 1.5rem",
            letterSpacing: "0.02em",
          }}
        >
          Your 7-Day Engagement Planner
        </p>

        <div
          style={{
            width: "3.5rem",
            height: "1px",
            backgroundColor: "#8B6F47",
            margin: "0 auto 1.5rem",
          }}
        />

        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(0.825rem, 1.5vw, 0.95rem)",
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

      {/* ── Footer URL ── */}
      <p
        style={{
          fontSize: "clamp(0.6rem, 1vw, 0.675rem)",
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
            padding: 3rem 2.5rem !important;
            break-after: page;
          }
        }
      `}</style>
    </div>
  );
}
