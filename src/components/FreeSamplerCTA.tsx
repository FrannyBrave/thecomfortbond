export const FreeSamplerCTA = () => (
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
        Try The Comfort Bond™ with your residents.
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
        Download our free 3-activity sampler to see exactly how much time and
        energy our 'read-aloud ready' kits will save your staff.
      </p>
      <a
        href="/free-sampler"
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
        Get the Free Sampler →
      </a>
    </div>
  </section>
);
