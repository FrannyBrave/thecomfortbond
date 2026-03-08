import { useState, useEffect } from "react";

const kits = [
  { title: "The Kitchen &\nComfort Food Kit", rotation: -12, zIndex: 1, offset: -30 },
  { title: "The Holiday\nTraditions Kit", rotation: -4, zIndex: 2, offset: -10 },
  { title: "The Road\nTrip Kit", rotation: 4, zIndex: 3, offset: 10 },
  { title: "The Nostalgia\nKit", rotation: 12, zIndex: 4, offset: 30 },
];

const KitCover = ({
  title,
  rotation,
  zIndex,
  offset,
  isActive,
}: {
  title: string;
  rotation: number;
  zIndex: number;
  offset: number;
  isActive: boolean;
}) => (
  <div
    style={{
      position: "absolute",
      left: `calc(50% + ${offset}px - 70px)`,
      bottom: "60px",
      width: "140px",
      height: "190px",
      transform: `rotate(${rotation}deg) ${isActive ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)"}`,
      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      zIndex: isActive ? 10 : zIndex,
      transformOrigin: "bottom center",
    }}
  >
    {/* Outer terracotta cover */}
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#C1714F",
        borderRadius: "14px",
        padding: "6px",
        boxShadow: isActive
          ? "0 16px 40px rgba(0,0,0,0.35), 0 6px 16px rgba(193,113,79,0.4)"
          : "0 8px 24px rgba(0,0,0,0.25)",
        transition: "box-shadow 0.6s ease",
      }}
    >
      {/* Cream inner panel */}
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
        {/* Sage scalloped band */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            height: "28px",
            background: "#3D5A47",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Scallop top edge */}
          <div
            style={{
              position: "absolute",
              top: "-6px",
              left: 0,
              right: 0,
              height: "6px",
              background: `radial-gradient(circle at 6px -3px, transparent 6px, #3D5A47 6px)`,
              backgroundSize: "12px 6px",
            }}
          />
          {/* Scallop bottom edge */}
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: 0,
              right: 0,
              height: "6px",
              background: `radial-gradient(circle at 6px 9px, transparent 6px, #3D5A47 6px)`,
              backgroundSize: "12px 6px",
            }}
          />
        </div>

        {/* Kit title */}
        <div
          style={{
            fontSize: "13px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#2C3E2D",
            textAlign: "center",
            lineHeight: 1.25,
            padding: "12px 10px",
            whiteSpace: "pre-line",
            position: "relative",
            zIndex: 2,
            marginTop: "-30px",
          }}
        >
          {title}
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            fontSize: "6px",
            letterSpacing: "1.2px",
            color: "#8B9E8F",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
          }}
        >
          THE COMFORT BOND™
        </div>
      </div>
    </div>
  </div>
);

export const FullBundleDisplay = () => {
  const [activeKit, setActiveKit] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKit((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #3D5A47 0%, #2C4235 60%, #1E3028 100%)",
        padding: "48px 24px 32px",
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
      <div style={{ position: "absolute", top: "40%", right: "10%", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.02)" }} />

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
        BEST VALUE
      </div>

      {/* Fan of kit cards */}
      <div style={{ position: "relative", width: "280px", height: "300px" }}>
        {kits.map((kit, i) => (
          <KitCover
            key={i}
            title={kit.title}
            rotation={kit.rotation}
            zIndex={kit.zIndex}
            offset={kit.offset}
            isActive={activeKit === i}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", marginTop: "16px", zIndex: 2 }}>
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setActiveKit(i)}
            style={{
              width: i === activeKit ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === activeKit ? "#E8956D" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Kit labels */}
      <div style={{ display: "flex", gap: "4px", marginTop: "12px", zIndex: 2, flexWrap: "wrap", justifyContent: "center" }}>
        {["Kitchen", "Holiday", "Road Trip", "Nostalgia"].map((label, i) => (
          <div
            key={label}
            onClick={() => setActiveKit(i)}
            style={{
              fontSize: "8px",
              color: i === activeKit ? "white" : "rgba(255,255,255,0.5)",
              padding: "3px 8px",
              borderRadius: "10px",
              background: i === activeKit ? "rgba(255,255,255,0.15)" : "transparent",
              cursor: "pointer",
              transition: "all 0.3s",
              fontFamily: "Georgia, serif",
              fontWeight: i === activeKit ? 700 : 400,
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
