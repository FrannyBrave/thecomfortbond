export const FreeBlueprintCTA = () => (
  <section
    style={{
      background: "var(--sage-light, #e8eade)",
      padding: "clamp(2.5rem, 5vw, 3.5rem) 1.5rem",
    }}
  >
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        background: "var(--cream)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "clamp(2rem, 4vw, 2.5rem)",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
          fontWeight: 600,
          color: "var(--forest-dark)",
          margin: "0 0 0.75rem",
          lineHeight: 1.25,
        }}
      >
        Build a defensible, professional programming plan.
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 300,
          color: "var(--text-mid)",
          lineHeight: 1.7,
          margin: "0 0 1.5rem",
          maxWidth: 480,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Download the free Engagement Blueprint — our structured framework for
        turning reactive scheduling into confident, week-over-week programming
        your team and surveyors can stand behind.
      </p>
      <a
        href="/blueprint"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "var(--clay)",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: 100,
          fontSize: 15,
          fontWeight: 500,
          fontFamily: "var(--font-sans)",
          textDecoration: "none",
          transition: "background 0.2s, transform 0.15s",
        }}
      >
        Try the Free Blueprint →
      </a>
    </div>
  </section>
);
