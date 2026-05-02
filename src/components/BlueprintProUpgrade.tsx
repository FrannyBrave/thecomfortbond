import proImage from "@/assets/image_67.png";

const FEATURES = [
  {
    title: "13-Week Quarterly Planning Framework",
    detail:
      "Full quarter mapped out in advance, refreshed every 90 days",
  },
  {
    title: "Expanded Weekly Planning Pages",
    detail:
      "With facilitator coaching tips for every theme",
  },
  {
    title: "The Resource Integration Guide",
    detail:
      "Showing exactly which activities, kits, and resources align with each week\u2019s theme and dimension",
  },
  {
    title: "Seasonal Theme Calendar",
    detail:
      "With national observances, heritage months, and ready-made theme ideas for every single week",
  },
  {
    title: "Priority Access",
    detail:
      "New quarterly editions delivered 2 weeks before public release",
  },
];

const colors = {
  cream: "#F5F0EB",
  teal: "#1B3A4B",
  bronze: "#8B6F47",
  terracotta: "#C4956A",
  textBody: "#3A3A3A",
  muted: "#9A8E80",
  gridline: "#D5CEC7",
  checkmark: "#8BAA85",
} as const;

export default function BlueprintProUpgrade() {
  return (
    <div
      className="blueprint-pro-upgrade"
      style={{
        maxWidth: "960px",
        width: "100%",
        aspectRatio: "8.5 / 11",
        margin: "0 auto",
        backgroundColor: colors.cream,
        fontFamily: '"DM Sans", system-ui, sans-serif',
        color: colors.textBody,
        padding: "3rem 2.25rem 2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Hero Image ── */}
      <img
        src={proImage}
        alt="The Blueprint Pro quarterly planner with dark leather notebook and gold pen"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "1.25rem",
          display: "block",
          boxShadow: "0 4px 16px rgba(27,58,75,0.08)",
        }}
      />

      {/* ── Header ── */}
      <header style={{ marginBottom: "1.25rem" }}>
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(1.35rem, 3vw, 1.625rem)",
            fontWeight: 600,
            color: colors.teal,
            margin: "0 0 0.4rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          The Blueprint™ Pro
        </h1>
        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: "clamp(0.825rem, 1.5vw, 0.95rem)",
            fontWeight: 400,
            color: colors.bronze,
            margin: "0 0 0.75rem",
            letterSpacing: "0.015em",
          }}
        >
          Your Complete Quarterly Engagement System
        </p>
        <div
          style={{
            width: "2.5rem",
            height: "1.5px",
            backgroundColor: colors.terracotta,
            borderRadius: "1px",
          }}
        />
      </header>

      {/* ── What's Included ── */}
      <section style={{ marginBottom: "1.25rem" }}>
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.terracotta,
            margin: "0 0 1.125rem",
          }}
        >
          What's Included
        </h2>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
          }}
        >
          {FEATURES.map((feat, i) => (
            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              {/* Checkmark */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0, marginTop: "3px" }}
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7.5" stroke={colors.gridline} strokeWidth="1" />
                <path
                  d="M4.5 8.2 7 10.5l4.5-5"
                  stroke={colors.checkmark}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "clamp(0.85rem, 1.4vw, 0.925rem)",
                    color: colors.teal,
                    lineHeight: 1.4,
                  }}
                >
                  {feat.title}
                </span>
                <br />
                <span
                  style={{
                    fontSize: "clamp(0.775rem, 1.3vw, 0.85rem)",
                    lineHeight: 1.6,
                    color: colors.textBody,
                  }}
                >
                  {feat.detail}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA Link ── */}
      <p
        style={{
          fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
          fontWeight: 500,
          color: colors.bronze,
          margin: "0 0 0",
          letterSpacing: "0.02em",
        }}
      >
        thecomfortbond.com/blueprint-pro
      </p>

      {/* ── Spacer ── */}
      <div style={{ flex: 1 }} />

      {/* ── Footer Quote ── */}
      <p
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "clamp(0.725rem, 1.2vw, 0.8rem)",
          fontStyle: "italic",
          fontWeight: 400,
          color: colors.muted,
          textAlign: "center",
          margin: 0,
          paddingTop: "1.5rem",
          borderTop: `1px solid #E4DDD5`,
          lineHeight: 1.6,
        }}
      >
        Your residents deserve more than random activities. They deserve a system.
      </p>

      {/* ── Print ── */}
      <style>{`
        @media print {
          .blueprint-pro-upgrade {
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
