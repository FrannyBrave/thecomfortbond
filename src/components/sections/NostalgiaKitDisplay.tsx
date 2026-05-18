import { useState, useEffect } from "react";

const activities = [
  { title: "Conversation\nCards", rotation: -14, zIndex: 1, offset: -50, bg: "#3D5A47" },
  { title: "Trivia\nTime", rotation: -7, zIndex: 2, offset: -25, bg: "#C1714F" },
  { title: "Word Link\nGame", rotation: 0, zIndex: 3, offset: 0, bg: "#3D5A47" },
  { title: "BINGO", rotation: 7, zIndex: 4, offset: 25, bg: "#C1714F" },
  { title: "Musical\nMemory", rotation: 14, zIndex: 5, offset: 50, bg: "#3D5A47" },
];

const ActivityCard = ({
  title, rotation, zIndex, offset, bg, isActive,
}: {
  title: string; rotation: number; zIndex: number; offset: number; bg: string; isActive: boolean;
}) => (
  <div
    style={{
      position: "absolute",
      left: `calc(50% + ${offset}px - 70px)`,
      bottom: "30px",
      width: "140px",
      height: "196px",
      transform: `rotate(${rotation}deg) ${isActive ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)"}`,
      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      zIndex: isActive ? 10 : zIndex,
      transformOrigin: "bottom center",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        background: bg,
        borderRadius: "14px",
        padding: "5px",
        boxShadow: isActive
          ? "0 16px 40px rgba(0,0,0,0.35), 0 6px 16px rgba(193,113,79,0.4)"
          : "0 8px 24px rgba(0,0,0,0.25)",
        transition: "box-shadow 0.6s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF7F2",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0, right: 0, top: "50%",
            transform: "translateY(-50%)",
            height: "24px",
            background: bg === "#C1714F" ? "#3D5A47" : "#C1714F",
          }}
        >
          <div style={{ position: "absolute", top: "-5px", left: 0, right: 0, height: "5px", background: `radial-gradient(circle at 5px -2.5px, transparent 5px, ${bg === "#C1714F" ? "#3D5A47" : "#C1714F"} 5px)`, backgroundSize: "10px 5px" }} />
          <div style={{ position: "absolute", bottom: "-5px", left: 0, right: 0, height: "5px", background: `radial-gradient(circle at 5px 7.5px, transparent 5px, ${bg === "#C1714F" ? "#3D5A47" : "#C1714F"} 5px)`, backgroundSize: "10px 5px" }} />
        </div>
        <div style={{ fontSize: "12px", fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 700, color: "#2C3E2D", textAlign: "center", lineHeight: 1.25, padding: "10px 8px", whiteSpace: "pre-line", position: "relative", zIndex: 2, marginTop: "-24px" }}>
          {title}
        </div>
        <div style={{ position: "absolute", bottom: "8px", fontSize: "5px", letterSpacing: "1px", color: "#8B9E8F", fontWeight: 700, fontFamily: "Georgia, serif" }}>
          THE COMFORT BOND™
        </div>
      </div>
    </div>
  </div>
);

/* ── Preview Cards ── */

const ConversationPreview = ({ visible }: { visible: boolean }) => (
  <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) rotate(-1.5deg)" : "translateY(20px)", transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)", position: "absolute", bottom: "10px", left: "14px", right: "14px", background: "#FAF7F2", borderRadius: "10px", padding: "10px 12px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
    <div style={{ fontSize: "6px", color: "#C1714F", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "5px", fontFamily: "Georgia, serif" }}>MEMORY LANE · CATEGORY 2</div>
    <div style={{ fontSize: "10px", fontWeight: 700, color: "#2C3E2D", marginBottom: "6px", fontFamily: "Georgia, serif", lineHeight: 1.3 }}>The 1950s: Rock & Roll and New Beginnings</div>
    {[
      { title: "The First TV Set", q: "Do you remember when your family got their first television?" },
      { title: "The Sock Hop", q: "Did you ever go to a school dance in a gym?" },
    ].map((item, i) => (
      <div key={i} style={{ background: "#F0EBE3", borderRadius: "6px", padding: "5px 8px", marginBottom: "3px" }}>
        <div style={{ fontSize: "7px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>{item.title}</div>
        <div style={{ fontSize: "6px", color: "#5C6B5D", lineHeight: 1.4, fontFamily: "Georgia, serif" }}>{item.q}</div>
      </div>
    ))}
  </div>
);

const TriviaPreview = ({ visible }: { visible: boolean }) => (
  <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) rotate(1deg)" : "translateY(20px)", transition: "all 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.05s", position: "absolute", bottom: "10px", left: "14px", right: "14px", background: "#FAF7F2", borderRadius: "10px", padding: "10px 12px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
    <div style={{ fontSize: "7px", color: "#3D5A47", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "6px", fontFamily: "Georgia, serif" }}>HISTORICAL MOMENTS</div>
    {[
      "1. Neil Armstrong became the first human to do what in 1969?",
      "2. The 'King of Rock and Roll' was drafted into the Army in 1958 — who was he?",
      "3. What was the Y2K scare?",
    ].map((q, i) => (
      <div key={i} style={{ fontSize: "7px", color: "#2C3E2D", lineHeight: 1.6, fontFamily: "Georgia, serif", marginBottom: "2px" }}>{q}</div>
    ))}
  </div>
);

const WordLinkPreview = ({ visible }: { visible: boolean }) => (
  <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) rotate(-1deg)" : "translateY(20px)", transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)", position: "absolute", bottom: "10px", left: "14px", right: "14px", background: "#FAF7F2", borderRadius: "10px", padding: "10px 12px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
    <div style={{ fontSize: "7px", color: "#C1714F", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "8px", fontFamily: "Georgia, serif" }}>FLASHBACK WORD LINKS</div>
    {[["JUKE", "OFFICE"], ["LAVA", "POST"], ["MOON", "MAN"], ["RABBIT", "MUFFS"]].map(([left, right], i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "4px", fontFamily: "Georgia, serif" }}>
        <span style={{ fontSize: "7.5px", fontWeight: 700, color: "#2C3E2D", width: "38px", textAlign: "right" }}>{left}</span>
        <span style={{ fontSize: "7.5px", color: "#8B9E8F", letterSpacing: "2px" }}>———</span>
        <span style={{ fontSize: "7.5px", fontWeight: 700, color: "#2C3E2D", width: "38px" }}>{right}</span>
      </div>
    ))}
  </div>
);

const BingoPreview = ({ visible }: { visible: boolean }) => (
  <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) rotate(0.5deg)" : "translateY(20px)", transition: "all 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.05s", position: "absolute", bottom: "10px", left: "14px", right: "14px", background: "#FAF7F2", borderRadius: "10px", padding: "8px 10px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
    <div style={{ fontSize: "7px", color: "#C1714F", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "4px", fontFamily: "Georgia, serif", textAlign: "center" }}>MEMORY LANE BINGO</div>
    <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "4px" }}>
      {"BINGO".split("").map((l, i) => (
        <span key={i} style={{ fontSize: "7px", fontWeight: 700, color: "#C1714F", fontFamily: "Georgia, serif" }}>{l}</span>
      ))}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
      {["Jukebox", "Hula Hoop", "Rotary Phone", "Poodle Skirt", "Milkman", "Rabbit Ears", "Bell Bottoms", "Mood Ring", "Disco Ball"].map((s) => (
        <div key={s} style={{ background: "#F0EBE3", borderRadius: "3px", padding: "3px 2px", textAlign: "center", fontSize: "5px", color: "#2C3E2D", fontFamily: "Georgia, serif", fontWeight: 600, lineHeight: 1.2 }}>{s}</div>
      ))}
    </div>
  </div>
);

const MusicalPreview = ({ visible }: { visible: boolean }) => (
  <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0) rotate(-1.5deg)" : "translateY(20px)", transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)", position: "absolute", bottom: "10px", left: "14px", right: "14px", background: "#FAF7F2", borderRadius: "10px", padding: "10px 12px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
    <div style={{ fontSize: "7px", color: "#C1714F", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "6px", fontFamily: "Georgia, serif" }}>FINISH THE LYRIC</div>
    {[
      { lyric: "One, two, three o'clock, four o'clock rock...", artist: "ROCK AROUND THE CLOCK" },
      { lyric: "Fly me to the moon, and let me play...", artist: "FRANK SINATRA" },
    ].map((s, i) => (
      <div key={i} style={{ background: "#F0EBE3", borderRadius: "6px", padding: "6px 8px", marginBottom: "4px" }}>
        <div style={{ fontSize: "7px", color: "#2C3E2D", fontStyle: "italic", lineHeight: 1.4, fontFamily: "Georgia, serif" }}>"{s.lyric}"</div>
        <div style={{ fontSize: "5.5px", color: "#8B9E8F", fontWeight: 700, letterSpacing: "1px", marginTop: "2px" }}>{s.artist}</div>
      </div>
    ))}
  </div>
);

/* ── Main Component ── */

const pulseKeyframes = `
@keyframes nostalgiaBadgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}
`;

const labels = ["Conversation", "Trivia", "Word Link", "BINGO", "Musical"];

export const NostalgiaKitDisplay = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setActive((p) => (p + 1) % 5);
          setIsVisible(true);
        }, 300);
      }, 5000);
    }, 5000);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, []);

  const previews = [
    <ConversationPreview key="conv" visible={isVisible && active === 0} />,
    <TriviaPreview key="triv" visible={isVisible && active === 1} />,
    <WordLinkPreview key="word" visible={isVisible && active === 2} />,
    <BingoPreview key="bingo" visible={isVisible && active === 3} />,
    <MusicalPreview key="music" visible={isVisible && active === 4} />,
  ];

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #3D5A47 0%, #2C4235 60%, #1E3028 100%)",
        padding: "48px 24px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minHeight: "560px",
      }}
    >
      <style>{pulseKeyframes}</style>

      {/* Background circles */}
      <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
      <div style={{ position: "absolute", top: "40%", right: "10%", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.02)" }} />

      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "#C1714F",
          color: "white",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "2px",
          padding: "5px 14px",
          borderRadius: "20px",
          fontFamily: "Georgia, serif",
          border: "2px solid #E8956D",
          boxShadow: "0 0 0 4px rgba(193,113,79,0.25), 0 4px 12px rgba(193,113,79,0.4)",
          animation: "nostalgiaBadgePulse 2s ease-in-out infinite",
        }}
      >
        📸 MEMORY CARE
      </div>

      {/* Card fan */}
      <div style={{ position: "relative", width: "220px", height: "280px", marginBottom: "8px" }}>
        {activities.map((a, i) => (
          <ActivityCard key={i} {...a} isActive={active === i} />
        ))}
        <div style={{ position: "absolute", bottom: "30px", left: "calc(50% - 80px)", width: "160px", height: "196px", zIndex: 20, pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "rgba(255,255,255,0.06)", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
            {previews[active]}
          </div>
        </div>
      </div>

      {/* Decade ribbon */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "8px", zIndex: 2 }}>
        {["50s", "60s", "70s", "80s", "90s"].map((d) => (
          <span key={d} style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: "10px", fontFamily: "Georgia, serif", fontWeight: 600, letterSpacing: "0.5px" }}>{d}</span>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", marginTop: "8px", zIndex: 2 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => { setIsVisible(false); setTimeout(() => { setActive(i); setIsVisible(true); }, 200); }}
            style={{
              width: i === active ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === active ? "#E8956D" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Labels */}
      <div style={{ display: "flex", gap: "4px", marginTop: "12px", zIndex: 2, flexWrap: "wrap", justifyContent: "center" }}>
        {labels.map((label, i) => (
          <div
            key={label}
            onClick={() => { setIsVisible(false); setTimeout(() => { setActive(i); setIsVisible(true); }, 200); }}
            style={{
              fontSize: "11px",
              color: i === active ? "white" : "rgba(255,255,255,0.5)",
              padding: "3px 8px",
              borderRadius: "10px",
              background: i === active ? "#C1714F" : "transparent",
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "Georgia, serif",
              fontWeight: i === active ? 700 : 400,
              letterSpacing: "0.5px",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};
