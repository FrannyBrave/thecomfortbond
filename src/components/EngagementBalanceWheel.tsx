const DIMENSIONS = [
  {
    key: "cognitive",
    label: "Cognitive",
    color: "#4A7C9B",
    description:
      "Trivia, word games, reminiscence prompts, puzzles, current events. Activities that invite residents to think, remember, and share what they know.",
    icon: (
      // Brain
      <g transform="translate(-12,-12) scale(1)">
        <path
          d="M12 2a7 7 0 0 0-4.6 12.3c.3.3.6.7.8 1.1l.3.6h7l.3-.6c.2-.4.5-.8.8-1.1A7 7 0 0 0 12 2Z"
          fill="none"
          stroke="#fff"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2c-1.5 2-2 4.5-2 7s.5 5 2 7M12 2c1.5 2 2 4.5 2 7s-.5 5-2 7M7 9h10"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.7}
        />
        <line x1="9" y1="18" x2="9" y2="21" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="15" y1="18" x2="15" y2="21" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="9" y1="21" x2="15" y2="21" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    ),
  },
  {
    key: "social",
    label: "Social",
    color: "#7B6B8A",
    description:
      "Group conversations, team games, shared storytelling, partner activities. Anything that creates interaction between two or more people.",
    icon: (
      // People
      <g transform="translate(-12,-12)" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="7" r="3" />
        <circle cx="16" cy="7" r="3" />
        <path d="M2 21v-1a5 5 0 0 1 5-5h0M17 15h0a5 5 0 0 1 5 5v1" />
        <path d="M12 15a5 5 0 0 0-4 5v1h8v-1a5 5 0 0 0-4-5Z" opacity={0.5} />
      </g>
    ),
  },
  {
    key: "sensory",
    label: "Sensory",
    color: "#C4956A",
    description:
      "Music listening, aromatherapy, tactile activities, food-related experiences, nature walks. Engagement through the five senses.",
    icon: (
      // Hand / touch
      <g transform="translate(-12,-12)" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-4 0v5" />
        <path d="M14 10V4.5a2 2 0 0 0-4 0V11" />
        <path d="M10 9.5V6a2 2 0 0 0-4 0v7c0 4.4 3.6 8 8 8h.5a7.5 7.5 0 0 0 7.5-7.5V11a2 2 0 0 0-4 0" />
      </g>
    ),
  },
  {
    key: "physical",
    label: "Physical",
    color: "#5B8C5A",
    description:
      "Chair exercises, balloon volleyball, walking groups, gardening, seated dance. Movement at every ability level.",
    icon: (
      // Motion figure
      <g transform="translate(-12,-12)" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <path d="M10 22l2-7 2 7M8 12h8l-1.5 5h-5Z" />
        <path d="M7 9l3 3M17 9l-3 3" />
      </g>
    ),
  },
  {
    key: "creative",
    label: "Creative",
    color: "#B8864E",
    description:
      "Art projects, music making, poetry, flower arranging, cooking. Self-expression that produces something the resident can see or share.",
    icon: (
      // Paintbrush
      <g transform="translate(-12,-12)" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.4 2.6a2 2 0 0 1 3 3L14 13l-4 1 1-4Z" />
        <path d="M11 15c-2.5 1-4 3.5-4 6h6c0-2-.5-4-2-6Z" opacity={0.6} />
      </g>
    ),
  },
  {
    key: "spiritual",
    label: "Spiritual",
    color: "#6A8E9B",
    description:
      "Devotionals, meditation, hymn singing, gratitude circles, legacy conversations. Connection to meaning, purpose, and inner life.",
    icon: (
      // Candle / flame
      <g transform="translate(-12,-12)" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-2 3-4 5-4 7.5a4 4 0 0 0 8 0C16 7 14 5 12 2Z" />
        <rect x="10" y="13" width="4" height="7" rx="1" />
        <line x1="8" y1="22" x2="16" y2="22" />
        <path d="M12 5c-.8 1.5-1.5 2.8-1.5 4a1.5 1.5 0 0 0 3 0c0-1.2-.7-2.5-1.5-4Z" fill="#fff" opacity={0.35} stroke="none" />
      </g>
    ),
  },
] as const;

const CX = 200;
const CY = 200;
const R = 160;
const INNER_R = 48;

function polarToCart(angleDeg: number, r: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function segmentPath(startAngle: number, endAngle: number) {
  const a1 = polarToCart(startAngle, R);
  const a2 = polarToCart(endAngle, R);
  const b1 = polarToCart(endAngle, INNER_R);
  const b2 = polarToCart(startAngle, INNER_R);
  return [
    `M ${a2.x} ${a2.y}`,
    `A ${R} ${R} 0 0 0 ${a1.x} ${a1.y}`,
    `L ${b2.x} ${b2.y}`,
    `A ${INNER_R} ${INNER_R} 0 0 1 ${b1.x} ${b1.y}`,
    "Z",
  ].join(" ");
}

export default function EngagementBalanceWheel() {
  const sliceAngle = 360 / DIMENSIONS.length;

  return (
    <div
      className="engagement-balance-wheel"
      style={{
        maxWidth: "960px",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "#F5F0EB",
        color: "#1B3A4B",
        fontFamily: '"DM Sans", system-ui, sans-serif',
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
      }}
    >
      {/* ── Title ── */}
      <h2
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
          fontWeight: 600,
          textAlign: "center",
          margin: "0 0 0.25rem",
          color: "#1B3A4B",
          letterSpacing: "-0.01em",
        }}
      >
        The Engagement Balance Wheel
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#6B7B75",
          margin: "0 0 1.5rem",
          letterSpacing: "0.03em",
        }}
      >
        Six dimensions of meaningful engagement
      </p>

      {/* ── Wheel + Legend layout ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* ── SVG Wheel ── */}
        <div style={{ flexShrink: 0 }}>
          <svg
            viewBox="0 0 400 400"
            width="340"
            height="340"
            style={{ display: "block", margin: "0 auto" }}
            role="img"
            aria-label="Engagement Balance Wheel diagram with six dimensions"
          >
            <defs>
              {DIMENSIONS.map((dim, i) => {
                const mid = sliceAngle * i + sliceAngle / 2;
                const inner = polarToCart(mid, INNER_R + 20);
                const outer = polarToCart(mid, R - 10);
                return (
                  <radialGradient
                    key={dim.key}
                    id={`grad-${dim.key}`}
                    cx={inner.x / 400}
                    cy={inner.y / 400}
                    r="0.55"
                  >
                    <stop offset="0%" stopColor={dim.color} stopOpacity={0.85} />
                    <stop offset="100%" stopColor={dim.color} stopOpacity={1} />
                  </radialGradient>
                );
              })}
              <filter id="wheel-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#1B3A4B" floodOpacity="0.1" />
              </filter>
            </defs>

            <g filter="url(#wheel-shadow)">
              {DIMENSIONS.map((dim, i) => {
                const startAngle = sliceAngle * i;
                const endAngle = startAngle + sliceAngle;
                const midAngle = startAngle + sliceAngle / 2;
                const labelPos = polarToCart(midAngle, (R + INNER_R) / 2 + 18);
                const iconPos = polarToCart(midAngle, (R + INNER_R) / 2 - 12);

                return (
                  <g key={dim.key}>
                    {/* Segment */}
                    <path
                      d={segmentPath(startAngle, endAngle)}
                      fill={`url(#grad-${dim.key})`}
                      stroke="#F5F0EB"
                      strokeWidth="2"
                    />
                    {/* Icon */}
                    <g transform={`translate(${iconPos.x}, ${iconPos.y}) scale(0.85)`}>
                      {dim.icon}
                    </g>
                    {/* Label */}
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#fff"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily='"DM Sans", system-ui, sans-serif'
                      letterSpacing="0.04em"
                    >
                      {dim.label}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Center circle */}
            <circle cx={CX} cy={CY} r={INNER_R} fill="#fff" stroke="#E8E2DA" strokeWidth="1.5" />
            <text
              x={CX}
              y={CY - 6}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#1B3A4B"
              fontSize="10.5"
              fontWeight="600"
              fontFamily='"Playfair Display", Georgia, serif'
              letterSpacing="0.12em"
            >
              BALANCE
            </text>
            <text
              x={CX}
              y={CY + 9}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#1B3A4B"
              fontSize="10.5"
              fontWeight="600"
              fontFamily='"Playfair Display", Georgia, serif'
              letterSpacing="0.12em"
            >
              WHEEL
            </text>
          </svg>
        </div>

        {/* ── Dimension Legend ── */}
        <div style={{ flex: "1 1 320px", minWidth: "280px", maxWidth: "480px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {DIMENSIONS.map((dim) => (
              <div key={dim.key} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                {/* Color swatch */}
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "6px",
                    backgroundColor: dim.color,
                    flexShrink: 0,
                    marginTop: "1px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {dim.label.slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.825rem",
                      color: dim.color,
                      marginBottom: "0.125rem",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {dim.label}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.75rem",
                      lineHeight: 1.55,
                      color: "#4A5548",
                    }}
                  >
                    {dim.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer Quote ── */}
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontSize: "0.7rem",
          lineHeight: 1.65,
          color: "#7A8A7A",
          maxWidth: "580px",
          margin: "2rem auto 0",
          borderTop: "1px solid #D5CEC7",
          paddingTop: "1rem",
        }}
      >
        You don't need to hit all six every week. But if you notice you haven't touched a dimension
        in two weeks, that's a signal. The Wheel is a compass, not a checklist.
      </p>

      {/* ── Print Styles ── */}
      <style>{`
        @media print {
          .engagement-balance-wheel {
            max-width: 100% !important;
            padding: 0 !important;
            break-inside: avoid;
          }
          .engagement-balance-wheel svg {
            width: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}
