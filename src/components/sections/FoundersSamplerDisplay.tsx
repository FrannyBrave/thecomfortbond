import { useState, useEffect } from "react";

const ThenNowCard = ({ visible }: { visible: boolean }) => (
  <div
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) rotate(-2deg)" : "translateY(20px)",
      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      position: "absolute",
      bottom: "12px",
      left: "16px",
      right: "16px",
      background: "#FAF7F2",
      borderRadius: "10px",
      padding: "10px 12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    }}
  >
    <div style={{ fontSize: "8px", color: "#C1714F", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "6px", fontFamily: "Georgia, serif" }}>
      GUESS THE ERA
    </div>
    {["You had to share the phone line with your neighbors.", "You can see grandchildren's faces on screen."].map((q, i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px", gap: "6px" }}>
        <span style={{ fontSize: "7px", color: "#4A3728", flex: 1, lineHeight: 1.3, fontFamily: "Georgia, serif" }}>{q}</span>
        <div style={{ display: "flex", gap: "3px", flexShrink: 0 }}>
          {["THEN", "NOW"].map((label) => (
            <div key={label} style={{ textAlign: "center" as const }}>
              <div style={{ width: "14px", height: "14px", border: "1.5px solid #C1714F", borderRadius: "3px", marginBottom: "1px" }} />
              <div style={{ fontSize: "5px", color: "#C1714F", fontWeight: 700, letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const DiscussionCard = ({ visible }: { visible: boolean }) => (
  <div
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) rotate(1.5deg)" : "translateY(20px)",
      transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
      position: "absolute",
      bottom: "12px",
      left: "16px",
      right: "16px",
      background: "#FAF7F2",
      borderRadius: "10px",
      padding: "10px 12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    }}
  >
    <div style={{ background: "#3D5A47", borderRadius: "4px", padding: "4px 8px", marginBottom: "8px" }}>
      <div style={{ fontSize: "7px", color: "#FAF7F2", fontWeight: 700, letterSpacing: "1px", fontFamily: "Georgia, serif" }}>FAMILY</div>
    </div>
    <div style={{ fontSize: "9px", fontWeight: 700, color: "#2C3E2D", marginBottom: "4px", fontFamily: "Georgia, serif" }}>The Home You Grew Up In</div>
    <div style={{ fontSize: "7px", color: "#5C6B5D", lineHeight: 1.4, marginBottom: "6px", fontFamily: "Georgia, serif" }}>Tell us about the house or apartment where you grew up.</div>
    <div style={{ borderTop: "1px dashed #B5C4B6", paddingTop: "5px" }}>
      <div style={{ fontSize: "6px", color: "#3D5A47", fontWeight: 700, letterSpacing: "1px", marginBottom: "3px" }}>FOLLOW-UP QUESTIONS</div>
      {["How many rooms did it have?", "Did you have a favorite room?"].map((q, i) => (
        <div key={i} style={{ fontSize: "6.5px", color: "#4A5A4B", marginBottom: "2px", paddingLeft: "8px", position: "relative" as const, fontFamily: "Georgia, serif" }}>
          <span style={{ position: "absolute" as const, left: "1px", color: "#3D5A47" }}>›</span>{q}
        </div>
      ))}
    </div>
  </div>
);

const StoryCard = ({ visible }: { visible: boolean }) => (
  <div
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) rotate(-1deg)" : "translateY(20px)",
      transition: "all 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s",
      position: "absolute",
      bottom: "12px",
      left: "16px",
      right: "16px",
      background: "#FAF7F2",
      borderRadius: "10px",
      padding: "10px 12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    }}
  >
    <div style={{ background: "#3D5A47", borderRadius: "10px 10px 0 0", padding: "5px 8px", marginBottom: "0", marginLeft: "-12px", marginRight: "-12px", marginTop: "-10px" }}>
      <div style={{ fontSize: "7px", color: "#E8C4A0", fontWeight: 700, letterSpacing: "1px", fontFamily: "Georgia, serif" }}>☕ Story Theme: Morning Coffee</div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "8px" }}>
      {[
        { num: "1", label: "GRINDING THE BEANS", emoji: "⚙️" },
        { num: "2", label: "BOILING THE KETTLE", emoji: "🫖" },
        { num: "3", label: "BREWING THE COFFEE", emoji: "☕" },
        { num: "4", label: "ENJOYING THE CUP", emoji: "😊" },
      ].map((item) => (
        <div key={item.num} style={{ background: "#F0EBE3", borderRadius: "5px", padding: "5px 6px", textAlign: "center" as const }}>
          <div style={{ width: "14px", height: "14px", background: "#C1714F", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3px", margin: "0 auto 3px" }}>
            <span style={{ fontSize: "7px", color: "white", fontWeight: 700 }}>{item.num}</span>
          </div>
          <div style={{ fontSize: "12px", marginBottom: "2px" }}>{item.emoji}</div>
          <div style={{ fontSize: "5.5px", color: "#4A3728", fontWeight: 700, letterSpacing: "0.5px", lineHeight: 1.2 }}>{item.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export const FoundersSamplerDisplay = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveCard((prev) => (prev + 1) % 3);
        setIsVisible(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const previews = [
    <ThenNowCard key="then" visible={isVisible} />,
    <DiscussionCard key="disc" visible={isVisible} />,
    <StoryCard key="story" visible={isVisible} />,
  ];

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #3D5A47 0%, #2C4235 60%, #1E3028 100%)",
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "480px",
      }}
    >
      {/* Background texture circles */}
      <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />

      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "#C1714F",
          color: "white",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          padding: "5px 12px",
          borderRadius: "20px",
          fontFamily: "Georgia, serif",
        }}
      >
        FREE SAMPLER
      </div>

      {/* Main card stack */}
      <div style={{ position: "relative", width: "200px", height: "280px" }}>
        {/* Back cards */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "-18px",
            width: "190px",
            height: "260px",
            background: "#8B9E8F",
            borderRadius: "14px",
            transform: "rotate(-6deg)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ padding: "14px", height: "100%", display: "flex", flexDirection: "column" as const }}>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.7)", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "6px" }}>DISCUSSION CARDS</div>
            <div style={{ fontSize: "11px", color: "white", fontWeight: 700, lineHeight: 1.3 }}>Discussion Circle</div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "-14px",
            width: "185px",
            height: "255px",
            background: "#A0876A",
            borderRadius: "14px",
            transform: "rotate(5deg)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ padding: "14px" }}>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.7)", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "6px" }}>STORYTELLING</div>
            <div style={{ fontSize: "11px", color: "white", fontWeight: 700, lineHeight: 1.3 }}>Story Cards</div>
          </div>
        </div>

        {/* Front main card */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "4px",
            width: "192px",
            height: "262px",
            background: "#C1714F",
            borderRadius: "14px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.3), 0 4px 12px rgba(193,113,79,0.4)",
            overflow: "hidden",
          }}
        >
          <div style={{ height: "6px", background: "#E8956D" }} />
          <div style={{ padding: "14px 14px 8px", height: "calc(100% - 6px)", display: "flex", flexDirection: "column" as const }}>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.8)", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "8px" }}>THEN VS. NOW</div>
            <div style={{ fontSize: "18px", color: "white", fontWeight: 700, lineHeight: 1.2, marginBottom: "4px", fontFamily: "Georgia, serif" }}>
              Guess the Era
            </div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.75)", lineHeight: 1.4, marginBottom: "auto" }}>
              Then vs. Now activity
            </div>
            <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "8px", padding: "8px", flex: 1, position: "relative" as const, overflow: "hidden", marginTop: "8px" }}>
              {previews[activeCard]}
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", marginTop: "28px", zIndex: 2 }}>
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => { setIsVisible(false); setTimeout(() => { setActiveCard(i); setIsVisible(true); }, 200); }}
            style={{
              width: i === activeCard ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === activeCard ? "#E8956D" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Activity labels */}
      <div style={{ display: "flex", gap: "6px", marginTop: "12px", zIndex: 2 }}>
        {["Guess the Era", "Discussion", "Story Cards"].map((label, i) => (
          <div
            key={label}
            onClick={() => { setIsVisible(false); setTimeout(() => { setActiveCard(i); setIsVisible(true); }, 200); }}
            style={{
              fontSize: "8px",
              color: i === activeCard ? "white" : "rgba(255,255,255,0.5)",
              padding: "3px 8px",
              borderRadius: "10px",
              background: i === activeCard ? "rgba(255,255,255,0.15)" : "transparent",
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "Georgia, serif",
              fontWeight: i === activeCard ? 700 : 400,
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
