import { useEffect, useRef } from "react";

const SerenityNatureScene = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "260px",
        borderRadius: "24px 24px 0 0",
        overflow: "hidden",
        background: "linear-gradient(180deg, #2C3D2A 0%, #3A5C35 35%, #1C2E1A 70%, #1C2E1A 100%)",
      }}
    >
      {/* Sky / canopy gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(44,61,42,1) 0%, rgba(58,92,53,0.8) 25%, rgba(200,148,58,0.15) 45%, rgba(28,46,26,0.9) 55%, rgba(28,46,26,1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Tree silhouettes - left cluster */}
      <div style={{ position: "absolute", bottom: "50%", left: "8%", zIndex: 3 }}>
        <div style={{ width: "3px", height: "80px", background: "linear-gradient(180deg, #1a2e19, #1a2e19)", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "18px solid transparent", borderRight: "18px solid transparent", borderBottom: "50px solid #1a2e19", transform: "rotate(180deg) translateY(10px)", marginLeft: "-16px" }} />
      </div>
      <div style={{ position: "absolute", bottom: "50%", left: "12%", zIndex: 3 }}>
        <div style={{ width: "2px", height: "70px", background: "#1f331d", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderBottom: "45px solid #1f331d", transform: "rotate(180deg) translateY(8px)", marginLeft: "-13px" }} />
      </div>
      <div style={{ position: "absolute", bottom: "50%", left: "4%", zIndex: 3 }}>
        <div style={{ width: "2px", height: "60px", background: "#162514", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderBottom: "40px solid #162514", transform: "rotate(180deg) translateY(8px)", marginLeft: "-11px" }} />
      </div>

      {/* Tree silhouettes - right cluster */}
      <div style={{ position: "absolute", bottom: "50%", right: "10%", zIndex: 3 }}>
        <div style={{ width: "3px", height: "75px", background: "#1a2e19", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "16px solid transparent", borderRight: "16px solid transparent", borderBottom: "48px solid #1a2e19", transform: "rotate(180deg) translateY(10px)", marginLeft: "-15px" }} />
      </div>
      <div style={{ position: "absolute", bottom: "50%", right: "5%", zIndex: 3 }}>
        <div style={{ width: "2px", height: "65px", background: "#1f331d", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "13px solid transparent", borderRight: "13px solid transparent", borderBottom: "42px solid #1f331d", transform: "rotate(180deg) translateY(8px)", marginLeft: "-12px" }} />
      </div>
      <div style={{ position: "absolute", bottom: "50%", right: "15%", zIndex: 3 }}>
        <div style={{ width: "2px", height: "55px", background: "#162514", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "11px solid transparent", borderRight: "11px solid transparent", borderBottom: "38px solid #162514", transform: "rotate(180deg) translateY(8px)", marginLeft: "-10px" }} />
      </div>

      {/* Center trees */}
      <div style={{ position: "absolute", bottom: "50%", left: "35%", zIndex: 2 }}>
        <div style={{ width: "2px", height: "55px", background: "#243824", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderBottom: "38px solid #243824", transform: "rotate(180deg) translateY(8px)", marginLeft: "-11px" }} />
      </div>
      <div style={{ position: "absolute", bottom: "50%", right: "32%", zIndex: 2 }}>
        <div style={{ width: "2px", height: "50px", background: "#243824", margin: "0 auto" }} />
        <div style={{ width: "0", height: "0", borderLeft: "11px solid transparent", borderRight: "11px solid transparent", borderBottom: "35px solid #243824", transform: "rotate(180deg) translateY(8px)", marginLeft: "-10px" }} />
      </div>

      {/* Golden hour horizon glow */}
      <div
        className="serenity-light-ray"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(232,184,75,0.5) 0%, rgba(200,148,58,0.2) 40%, transparent 70%)",
          zIndex: 2,
          filter: "blur(20px)",
        }}
      />

      {/* Horizon line - mossy rocks */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: 0,
          right: 0,
          height: "12px",
          background: "linear-gradient(90deg, #2a3f28, #3A5C35, #4a6a45, #3A5C35, #2a3f28)",
          zIndex: 4,
          filter: "blur(1px)",
        }}
      />
      {/* Small rock shapes */}
      <div style={{ position: "absolute", top: "46%", left: "15%", width: "20px", height: "10px", borderRadius: "50%", background: "#3a4f38", zIndex: 5 }} />
      <div style={{ position: "absolute", top: "47%", left: "70%", width: "16px", height: "8px", borderRadius: "50%", background: "#3a4f38", zIndex: 5 }} />
      <div style={{ position: "absolute", top: "46.5%", left: "45%", width: "24px", height: "10px", borderRadius: "50%", background: "#344a32", zIndex: 5 }} />

      {/* Water surface */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, #1C2E1A 0%, #162514 40%, #0f1c0e 100%)",
          zIndex: 4,
        }}
      />

      {/* Water reflection shimmer */}
      <div
        className="serenity-water-shimmer"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, rgba(200,148,58,0.12) 0%, rgba(232,184,75,0.06) 30%, transparent 60%)",
          zIndex: 5,
        }}
      />

      {/* Golden reflection streaks on water */}
      <div
        className="serenity-water-shimmer"
        style={{
          position: "absolute",
          top: "55%",
          left: "40%",
          width: "80px",
          height: "40px",
          background: "linear-gradient(180deg, rgba(232,184,75,0.15), transparent)",
          zIndex: 6,
          filter: "blur(6px)",
        }}
      />
      <div
        className="serenity-water-shimmer"
        style={{
          position: "absolute",
          top: "58%",
          left: "48%",
          width: "50px",
          height: "30px",
          background: "linear-gradient(180deg, rgba(200,148,58,0.1), transparent)",
          zIndex: 6,
          filter: "blur(4px)",
          animationDelay: "2s",
        }}
      />

      {/* Mist layer */}
      <div
        className="serenity-mist"
        style={{
          position: "absolute",
          top: "35%",
          left: "-100%",
          width: "300%",
          height: "30%",
          background: "linear-gradient(90deg, transparent 0%, rgba(240,230,200,0.15) 20%, rgba(240,230,200,0.25) 50%, rgba(240,230,200,0.15) 80%, transparent 100%)",
          zIndex: 6,
          filter: "blur(8px)",
        }}
      />

      {/* Second mist layer offset */}
      <div
        className="serenity-mist-2"
        style={{
          position: "absolute",
          top: "40%",
          left: "-100%",
          width: "300%",
          height: "20%",
          background: "linear-gradient(90deg, transparent 0%, rgba(240,230,200,0.1) 30%, rgba(240,230,200,0.18) 50%, rgba(240,230,200,0.1) 70%, transparent 100%)",
          zIndex: 6,
          filter: "blur(12px)",
        }}
      />

      {/* Floating golden particles */}
      {[
        { left: "20%", bottom: "35%", size: 3, delay: "0s", duration: "12s" },
        { left: "45%", bottom: "40%", size: 2, delay: "2s", duration: "14s" },
        { left: "65%", bottom: "30%", size: 3, delay: "4s", duration: "11s" },
        { left: "30%", bottom: "45%", size: 2, delay: "6s", duration: "13s" },
        { left: "75%", bottom: "38%", size: 2.5, delay: "8s", duration: "12s" },
        { left: "55%", bottom: "32%", size: 2, delay: "3s", duration: "14s" },
      ].map((p, i) => (
        <div
          key={i}
          className="serenity-particle"
          style={{
            position: "absolute",
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "rgba(232,184,75,0.7)",
            boxShadow: "0 0 6px rgba(232,184,75,0.4)",
            zIndex: 8,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(20,30,18,0.5) 100%)",
          zIndex: 9,
          pointerEvents: "none",
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes serenityMist {
          0% { transform: translateX(0); }
          100% { transform: translateX(33.33%); }
        }
        @keyframes serenityLightRay {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes serenityWaterShimmer {
          0%, 100% { transform: scaleY(1); opacity: 0.8; }
          50% { transform: scaleY(1.03); opacity: 1; }
        }
        @keyframes serenityParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.6; }
          100% { transform: translateY(-60px) translateX(10px); opacity: 0; }
        }
        .serenity-mist {
          animation: serenityMist 12s linear infinite;
        }
        .serenity-mist-2 {
          animation: serenityMist 16s linear infinite;
          animation-direction: reverse;
        }
        .serenity-light-ray {
          animation: serenityLightRay 6s ease-in-out infinite;
        }
        .serenity-water-shimmer {
          animation: serenityWaterShimmer 8s ease-in-out infinite;
        }
        .serenity-particle {
          animation: serenityParticle 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SerenityNatureScene;
