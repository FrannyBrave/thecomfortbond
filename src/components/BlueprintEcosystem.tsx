import kitsImage from "@/assets/image_66.png";

const KITS = [
  {
    name: "The Nostalgia Kit",
    description:
      "Music, TV, and pop culture from the decades that shaped your residents\u2019 lives",
  },
  {
    name: "The Kitchen Table Kit",
    description:
      "Recipes, family meals, and the sensory memories of home cooking",
  },
  {
    name: "The Road Trip Kit",
    description:
      "Highway adventures, family vacations, and the places that stayed with us",
  },
  {
    name: "The Holiday Traditions Kit",
    description:
      "Seasonal celebrations, family rituals, and the stories behind the traditions",
  },
  {
    name: "The Everyday Life Kit",
    description:
      "School days, first jobs, neighborhood life, and the routines of ordinary wonder",
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
} as const;

export default function BlueprintEcosystem() {
  return (
    <div
      className="blueprint-ecosystem"
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
        src={kitsImage}
        alt="Comfort Bond engagement kit pages and conversation cards laid out on a warm surface"
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
      <h1
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "clamp(1.1rem, 2.4vw, 1.3rem)",
          fontWeight: 600,
          color: colors.teal,
          margin: "0 0 0.5rem",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
        }}
      >
        When You're Ready for More
      </h1>
      <div
        style={{
          width: "2.5rem",
          height: "1.5px",
          backgroundColor: colors.terracotta,
          marginBottom: "1rem",
          borderRadius: "1px",
        }}
      />

      {/* ── Introduction ── */}
      <p
        style={{
          fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
          lineHeight: 1.8,
          color: colors.textBody,
          maxWidth: "640px",
          margin: "0 0 1.25rem",
        }}
      >
        The Weekly Blueprint helps you plan. But every plan needs content to fill it. The Comfort
        Bond™ Engagement Kits are themed activity systems designed to plug directly into your weekly
        schedule. Each kit includes conversation cards, trivia, BINGO, visual prompts, and a
        facilitator's guide&nbsp;— all built for adults, never infantilizing, always dignified.
      </p>

      {/* ── Kit List ── */}
      <section>
        <h2
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.terracotta,
            margin: "0 0 1rem",
          }}
        >
          Available Engagement Kits
        </h2>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {KITS.map((kit, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "baseline",
                padding: "0.9rem 0",
                borderBottom:
                  i < KITS.length - 1 ? `1px solid ${colors.gridline}` : "none",
              }}
            >
              {/* Bullet marker */}
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: colors.terracotta,
                  flexShrink: 0,
                  marginTop: "0.45rem",
                }}
              />
              <span
                style={{
                  fontSize: "clamp(0.85rem, 1.4vw, 0.925rem)",
                  lineHeight: 1.65,
                }}
              >
                <strong
                  style={{
                    fontWeight: 600,
                    color: colors.teal,
                  }}
                >
                  {kit.name}
                </strong>
                <span style={{ color: colors.muted, margin: "0 0.4rem" }}>&mdash;</span>
                <span style={{ color: colors.textBody }}>{kit.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Spacer ── */}
      <div style={{ flex: 1 }} />

      {/* ── Footer CTA ── */}
      <p
        style={{
          fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)",
          lineHeight: 1.65,
          color: colors.muted,
          textAlign: "center",
          margin: 0,
          paddingTop: "1.5rem",
          borderTop: `1px solid #E4DDD5`,
          maxWidth: "560px",
          alignSelf: "center",
        }}
      >
        Explore the full kits at{" "}
        <span style={{ color: colors.bronze, fontWeight: 500 }}>thecomfortbond.com/kits</span> or
        request a free sampler to see the quality of content before you commit.
      </p>

      {/* ── Print ── */}
      <style>{`
        @media print {
          .blueprint-ecosystem {
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
