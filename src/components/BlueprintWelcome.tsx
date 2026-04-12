const colors = {
  cream: "#F5F0EB",
  teal: "#1B3A4B",
  bronze: "#8B6F47",
  terracotta: "#C4956A",
  charcoal: "#2E2E2E",
  textBody: "#3A3A3A",
  muted: "#9A8E80",
  calloutBg: "#FDF6E3",
  calloutBorder: "#DDD0B8",
} as const;

const STEPS = [
  "Turn to the Engagement Balance Wheel on the next page. Read the six dimensions (30 seconds).",
  "Turn to the Weekly Planning Page. Fill in your community\u2019s name and the week\u2019s dates.",
  "For each day, write one planned engagement activity in the appropriate time block. Use the Balance Wheel as a gut check\u2009\u2014\u2009are you covering at least 4 of the 6 dimensions this week?",
  "Post it. Use it. Next Sunday, do it again.",
];

export default function BlueprintWelcome() {
  return (
    <div
      className="blueprint-welcome"
      style={{
        maxWidth: "960px",
        width: "100%",
        aspectRatio: "8.5 / 11",
        margin: "0 auto",
        backgroundColor: colors.cream,
        fontFamily: '"DM Sans", system-ui, sans-serif',
        color: colors.charcoal,
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(2rem, 5vw, 3.5rem)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Header ── */}
      <h1
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "clamp(1.25rem, 2.8vw, 1.5rem)",
          fontWeight: 600,
          color: colors.teal,
          margin: "0 0 0.5rem",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        Welcome to Your Weekly Blueprint
      </h1>
      <div
        style={{
          width: "2.5rem",
          height: "1.5px",
          backgroundColor: colors.terracotta,
          marginBottom: "1.75rem",
          borderRadius: "1px",
        }}
      />

      {/* ── Body Paragraphs ── */}
      <div
        style={{
          fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
          lineHeight: 1.8,
          color: colors.textBody,
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <p style={{ margin: 0 }}>
          You already know how to connect with your residents. You do it every day. But between
          planning tomorrow's program, tracking attendance, coordinating with families, and keeping
          your administrator informed, the planning part can feel like it never ends. This planner is
          here to change that.
        </p>
        <p style={{ margin: 0 }}>
          The Weekly Blueprint gives you a single, structured page to plan your entire week of
          engagement programming. No guessing. No scrambling. Just a clear plan that balances what
          your residents need across six dimensions of meaningful engagement.
        </p>
      </div>

      {/* ── Quick-Start Callout ── */}
      <div
        style={{
          backgroundColor: colors.calloutBg,
          border: `1px solid ${colors.calloutBorder}`,
          borderRadius: "8px",
          padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1.5rem, 3vw, 2rem)",
          flex: "0 0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 600,
            color: colors.teal,
            margin: "0 0 1.25rem",
            lineHeight: 1.3,
          }}
        >
          How to Use This in 5 Minutes
        </h2>

        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {STEPS.map((text, i) => (
            <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "baseline" }}>
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: colors.bronze,
                  flexShrink: 0,
                  minWidth: "3.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                Step {i + 1}
              </span>
              <span
                style={{
                  fontSize: "clamp(0.825rem, 1.4vw, 0.9rem)",
                  lineHeight: 1.7,
                  color: colors.textBody,
                }}
              >
                {text}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Spacer ── */}
      <div style={{ flex: 1 }} />

      {/* ── Footer ── */}
      <p
        style={{
          fontSize: "clamp(0.6rem, 1vw, 0.675rem)",
          lineHeight: 1.6,
          color: colors.muted,
          margin: 0,
          textAlign: "center",
          paddingTop: "1.5rem",
          borderTop: `1px solid #E4DDD5`,
        }}
      >
        This planner is part of The Programming Blueprint™ system by The Comfort Bond™.
        <br />
        The full quarterly system is available at thecomfortbond.com/blueprint.
      </p>

      {/* ── Print ── */}
      <style>{`
        @media print {
          .blueprint-welcome {
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
