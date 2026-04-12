const PROMPTS = [
  "What was always on your family's kitchen table that visitors noticed?",
  "Who was the best cook in your family, and what was their signature dish?",
  "Was there a rule at your table that every kid had to follow?",
  "What sounds do you remember from the kitchen — the radio, a percolator, someone humming?",
  "If you could sit at that table one more time, who would be there?",
];

const colors = {
  cream: "#F5F0EB",
  teal: "#1B3A4B",
  bronze: "#8B6F47",
  terracotta: "#C4956A",
  gridline: "#D5CEC7",
  textMid: "#4A5548",
  calloutBg: "#FDF6E3",
  calloutBorder: "#DDD0B8",
  cardAlt: "#F0EAE2",
} as const;

export default function ThemeStarter() {
  return (
    <div
      className="theme-starter"
      style={{
        maxWidth: "960px",
        width: "100%",
        margin: "0 auto",
        backgroundColor: colors.cream,
        color: colors.teal,
        fontFamily: '"DM Sans", system-ui, sans-serif',
        padding: "3rem clamp(2rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* ── Header ── */}
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: colors.teal,
            margin: "0 0 0.5rem",
          }}
        >
          This Week's Theme Starter
        </p>
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            fontStyle: "italic",
            color: colors.bronze,
            margin: "0 0 0.35rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Kitchen Table Memories
        </h1>
        <div
          style={{
            width: "3rem",
            height: "2px",
            backgroundColor: colors.terracotta,
            margin: "1rem auto 0",
            borderRadius: "1px",
          }}
        />
      </header>

      {/* ── Introduction ── */}
      <p
        style={{
          fontSize: "clamp(0.875rem, 1.6vw, 1rem)",
          lineHeight: 1.75,
          color: colors.textMid,
          maxWidth: "640px",
          margin: "0 auto 2.25rem",
          textAlign: "center",
        }}
      >
        Every family had a kitchen table. It's where recipes were shared, arguments were settled,
        homework was supervised, and Sunday mornings happened. This week, invite your residents back
        to that table.
      </p>

      {/* ── Conversation Starters ── */}
      <section>
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.terracotta,
            margin: "0 0 1rem",
          }}
        >
          5 Conversation Starters for This Theme
        </h2>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {PROMPTS.map((prompt, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "baseline",
                padding: "1rem 1.25rem",
                borderRadius: "8px",
                backgroundColor: i % 2 === 0 ? colors.cardAlt : "transparent",
                border: i % 2 === 1 ? `1px solid ${colors.gridline}` : "1px solid transparent",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: colors.terracotta,
                  opacity: 0.55,
                  flexShrink: 0,
                  minWidth: "1.5rem",
                  textAlign: "right",
                }}
              >
                {i + 1}
              </span>

              {/* Prompt text */}
              <span
                style={{
                  fontSize: "clamp(0.9rem, 1.6vw, 1.025rem)",
                  lineHeight: 1.65,
                  color: colors.teal,
                  fontWeight: 400,
                }}
              >
                {`\u201C${prompt}\u201D`}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Dimension Mapping Callout ── */}
      <aside
        style={{
          marginTop: "2.25rem",
          backgroundColor: colors.calloutBg,
          border: `1px solid ${colors.calloutBorder}`,
          borderRadius: "8px",
          padding: "1.25rem 1.5rem",
        }}
      >
        <h3
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.bronze,
            margin: "0 0 0.625rem",
          }}
        >
          Dimension Mapping
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            lineHeight: 1.7,
            color: colors.textMid,
          }}
        >
          <strong style={{ color: colors.teal, fontWeight: 600 }}>This theme covers:</strong>{" "}
          Cognitive (reminiscence), Social (group sharing), Sensory (food and sound memories).{" "}
          <strong style={{ color: colors.teal, fontWeight: 600 }}>To add Physical:</strong> try a
          simple cooking activity.{" "}
          <strong style={{ color: colors.teal, fontWeight: 600 }}>To add Creative:</strong> invite
          residents to sketch or describe their kitchen.
        </p>
      </aside>

      {/* ── Print Styles ── */}
      <style>{`
        @media print {
          .theme-starter {
            max-width: 100% !important;
            padding: 0 !important;
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
