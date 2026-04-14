import { useState } from "react";

const DIMENSIONS = ["C", "So", "Se", "P", "Cr", "Sp"] as const;

const DIMENSION_LABELS: Record<string, string> = {
  C: "Cognitive",
  So: "Social",
  Se: "Sensory",
  P: "Physical",
  Cr: "Creative",
  Sp: "Spiritual",
};

const colors = {
  cream: "#F5F0EB",
  teal: "#1B3A4B",
  terracotta: "#C4956A",
  gridline: "#D5CEC7",
  reflectionBg: "#EDE8E2",
  inputBorder: "#C4B8AB",
  muted: "#9A8E80",
} as const;

const NOTE_LINE_COUNT = 18;

export default function WeeklyReflectionNotes() {
  const [highlight, setHighlight] = useState("");
  const [nextWeekDimension, setNextWeekDimension] = useState("");

  return (
    <div
      className="weekly-reflection-notes mx-auto"
      style={{
        maxWidth: "960px",
        width: "100%",
        aspectRatio: "8.5 / 11",
        backgroundColor: colors.cream,
        color: colors.teal,
        fontFamily: '"DM Sans", system-ui, sans-serif',
        padding: "3rem clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Page Title ── */}
      <header
        style={{
          marginBottom: "1.25rem",
          borderBottom: `1.5px solid ${colors.terracotta}`,
          paddingBottom: "0.75rem",
          flexShrink: 0,
        }}
      >
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
            fontWeight: 600,
            margin: 0,
            color: colors.teal,
            letterSpacing: "-0.01em",
          }}
        >
          Reflection &amp; Notes
        </h1>
      </header>

      {/* ── Weekly Reflection Box ── */}
      <div
        style={{
          backgroundColor: colors.reflectionBg,
          borderRadius: "6px",
          padding: "1rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "0.8rem",
            fontWeight: 600,
            margin: 0,
            color: colors.terracotta,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Weekly Reflection
        </h2>

        <label
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.35rem",
            fontSize: "0.85rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>
            This week's highlight moment:
          </span>
          <input
            type="text"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
            style={{
              flex: 1,
              minWidth: "10rem",
              border: "none",
              borderBottom: `1.5px dotted ${colors.inputBorder}`,
              background: "transparent",
              outline: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
              color: colors.teal,
              paddingBottom: "2px",
            }}
          />
        </label>

        <label
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.35rem",
            fontSize: "0.85rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>
            One dimension I want to include more next week:
          </span>
          <input
            type="text"
            value={nextWeekDimension}
            onChange={(e) => setNextWeekDimension(e.target.value)}
            style={{
              flex: 1,
              minWidth: "6rem",
              border: "none",
              borderBottom: `1.5px dotted ${colors.inputBorder}`,
              background: "transparent",
              outline: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
              color: colors.teal,
              paddingBottom: "2px",
            }}
          />
        </label>
      </div>

      {/* ── Balance Check ── */}
      <div style={{ margin: "1.25rem 0", flexShrink: 0 }}>
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: colors.terracotta,
            display: "block",
            marginBottom: "0.6rem",
            textAlign: "center",
          }}
        >
          Balance Check
        </span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem 1.25rem",
          }}
        >
          {DIMENSIONS.map((d) => (
            <div
              key={d}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  width: "0.85rem",
                  height: "0.85rem",
                  border: `1.25px solid ${colors.gridline}`,
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: colors.teal,
                }}
              >
                {DIMENSION_LABELS[d]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          backgroundColor: colors.gridline,
          flexShrink: 0,
        }}
      />

      {/* ── Planning Notes & Ideas ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "1rem" }}>
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "0.8rem",
            fontWeight: 600,
            margin: "0 0 1rem",
            color: colors.terracotta,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Planning Notes &amp; Ideas
        </h2>

        {/* Ruled lines that fill the remaining space */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {Array.from({ length: NOTE_LINE_COUNT }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderBottom: `1px dashed ${colors.gridline}`,
                minHeight: "1.75rem",
              }}
            />
          ))}
        </div>

        {/* Gentle footer hint */}
        <p
          style={{
            fontSize: "0.6rem",
            color: colors.muted,
            textAlign: "center",
            margin: "0.75rem 0 0",
            fontStyle: "italic",
            flexShrink: 0,
          }}
        >
          Supply lists, activity variations, resident preferences, family follow-ups&hellip;
        </p>
      </div>

      {/* ── Print ── */}
      <style>{`
        @media print {
          .weekly-reflection-notes {
            max-width: 100% !important;
            aspect-ratio: auto !important;
            padding: 0 !important;
            break-inside: avoid;
          }
          .weekly-reflection-notes input {
            border-bottom-style: dotted !important;
          }
        }
      `}</style>
    </div>
  );
}
