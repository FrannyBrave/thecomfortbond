import logo from "@/assets/logo.png";
import transitionThemes from "@/assets/image_48.png";
import transitionResources from "@/assets/image_49.png";
import closingImage from "@/assets/image_47.png";
import content from "../../blueprint_pro_q3_content_v2.json";

/* ─── Design tokens ─── */
const c = {
  cream: "#F5F0EB",
  teal: "#1B3A4B",
  bronze: "#8B6F47",
  terracotta: "#C4956A",
  gridline: "#D5CEC7",
  body: "#1A1A1A",
  muted: "#9A8E80",
  reflectionBg: "#EDE8E2",
  calloutBg: "#FDF6E3",
  calloutBorder: "#DDD0B8",
} as const;

const serif = '"Playfair Display", Georgia, serif';
const sans = '"DM Sans", system-ui, sans-serif';

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DIMS = [
  { key: "C", label: "Cognitive", color: "#4A7C9B" },
  { key: "So", label: "Social", color: "#7B6B8A" },
  { key: "Se", label: "Sensory", color: "#C4956A" },
  { key: "P", label: "Physical", color: "#5B8C5A" },
  { key: "Cr", label: "Creative", color: "#B8864E" },
  { key: "Sp", label: "Spiritual", color: "#6A8E9B" },
];

type Week = (typeof content)[0];

/* ─── Page wrapper ─── */
const PAGE: React.CSSProperties = {
  width: "8.5in",
  minHeight: "11in",
  margin: "0 auto",
  backgroundColor: c.cream,
  overflow: "hidden",
  position: "relative",
};

function Page({ children, pad = true }: { children: React.ReactNode; pad?: boolean }) {
  return (
    <div className="bp-pro-page" style={PAGE}>
      <div style={{ padding: pad ? "2.75rem 2.25rem 2rem" : "0", height: "100%", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Small helpers ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: sans, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.terracotta, display: "block", marginBottom: "0.35rem" }}>
      {children}
    </span>
  );
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 style={{ fontFamily: serif, fontSize: "1.35rem", fontWeight: 600, color: c.teal, margin: "0 0 0.25rem", lineHeight: 1.25 }}>
      {children}
    </h1>
  );
}

function Rule() {
  return <div style={{ width: "2.5rem", height: "1.5px", backgroundColor: c.terracotta, margin: "0.75rem 0", borderRadius: "1px" }} />;
}

function Foot({ children, page }: { children: React.ReactNode; page?: number }) {
  return (
    <p style={{ fontFamily: sans, fontSize: "0.55rem", color: c.muted, textAlign: "center", margin: "auto 0 0", paddingTop: "0.75rem" }}>
      {children}{page != null && <> &nbsp;|&nbsp; Page {page}</>}
    </p>
  );
}

/* ═══════════════════════════════════════════
   PAGE 1 — COVER
   ═══════════════════════════════════════════ */
function CoverPage() {
  return (
    <Page pad={false}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "11in", padding: "3rem 2.5rem", textAlign: "center" }}>
        <img src={logo} alt="The Comfort Bond" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover" }} />
        <div>
          <p style={{ fontFamily: sans, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: c.bronze, margin: "0 0 1rem" }}>
            The Comfort Bond™
          </p>
          <h1 style={{ fontFamily: serif, fontSize: "2.5rem", fontWeight: 600, color: c.teal, margin: "0 0 0.5rem", lineHeight: 1.15 }}>
            The Programming<br />Blueprint™ Pro
          </h1>
          <p style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 300, color: c.bronze, margin: "0 0 1.5rem" }}>
            Your Complete Quarterly Engagement System
          </p>
          <div style={{ width: "3rem", height: "1px", backgroundColor: c.bronze, margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: serif, fontSize: "1.15rem", fontWeight: 500, color: c.teal, margin: "0 0 0.35rem" }}>
            Quarter 3 &middot; July – September 2026
          </p>
          <p style={{ fontFamily: serif, fontSize: "0.85rem", fontStyle: "italic", color: c.muted, margin: 0 }}>
            Stop searching. Start planning.
          </p>
        </div>
        <p style={{ fontSize: "0.6rem", color: c.muted, margin: 0, letterSpacing: "0.08em" }}>www.thecomfortbond.com</p>
      </div>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGE 2 — WELCOME
   ═══════════════════════════════════════════ */
function WelcomePage() {
  const steps = [
    "Start with the Quarterly Overview on page 4. Read the 13 themes to see the full arc of the quarter.",
    "Each week, turn to that week\u2019s Planning Page. Fill in your community name, the dates, and your activities for each day.",
    "Use the Theme Guide for that week to find conversation starters, coaching tips, and the dimension mapping.",
    "Check the Resource Integration Guide to see which Comfort Bond\u2122 kits align with each theme \u2014 or use the \u2018No Kit\u2019 alternative.",
  ];
  return (
    <Page>
      <PageTitle>Welcome to Your Quarterly Blueprint</PageTitle>
      <Rule />
      <div style={{ fontFamily: sans, fontSize: "0.85rem", lineHeight: 1.8, color: c.body, maxWidth: "580px" }}>
        <p style={{ margin: "0 0 0.85rem" }}>
          You're holding a complete 13-week engagement planning system. Every theme, every coaching
          tip, and every resource connection in this document was designed for one purpose: to give
          you a framework so you never have to build a week from scratch again.
        </p>
        <p style={{ margin: "0 0 1.25rem" }}>
          This isn't a list of activities. It's a decision-making structure that balances what your
          residents need across six dimensions of meaningful engagement — so your programming has
          variety, dignity, and purpose every single week.
        </p>
      </div>
      <div style={{ backgroundColor: c.calloutBg, border: `1px solid ${c.calloutBorder}`, borderRadius: "8px", padding: "1.25rem 1.5rem", marginBottom: "1.25rem" }}>
        <h2 style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 600, color: c.teal, margin: "0 0 1rem" }}>
          How to Use This in 5 Minutes
        </h2>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {steps.map((text, i) => (
            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
              <span style={{ fontFamily: serif, fontSize: "0.8rem", fontWeight: 600, color: c.bronze, flexShrink: 0, minWidth: "2.75rem" }}>Step {i + 1}</span>
              <span style={{ fontFamily: sans, fontSize: "0.8rem", lineHeight: 1.7, color: c.body }}>{text}</span>
            </li>
          ))}
        </ol>
      </div>
      <Foot page={2}>The Programming Blueprint™ Pro &middot; Q3 2026 &middot; The Comfort Bond™</Foot>
    </Page>
  );
}

/* ─── SVG Wheel helpers ─── */
const WCX = 120, WCY = 120, WR = 100, WIR = 32;
function wPolar(deg: number, r: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: WCX + r * Math.cos(rad), y: WCY + r * Math.sin(rad) };
}
function wSegment(s: number, e: number) {
  const a1 = wPolar(s, WR), a2 = wPolar(e, WR), b1 = wPolar(e, WIR), b2 = wPolar(s, WIR);
  return `M ${a2.x} ${a2.y} A ${WR} ${WR} 0 0 0 ${a1.x} ${a1.y} L ${b2.x} ${b2.y} A ${WIR} ${WIR} 0 0 1 ${b1.x} ${b1.y} Z`;
}

/* ═══════════════════════════════════════════
   PAGE 3 — BALANCE WHEEL + TRACKER
   ═══════════════════════════════════════════ */
function BalanceWheelPage() {
  const slice = 360 / DIMS.length;
  return (
    <Page>
      <PageTitle>The Engagement Balance Wheel</PageTitle>
      <Rule />

      {/* Wheel graphic + description side by side */}
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "0.75rem" }}>
        {/* SVG Wheel */}
        <svg viewBox="0 0 240 240" width="180" height="180" style={{ flexShrink: 0, display: "block" }}>
          <defs>
            <filter id="ws" x="-8%" y="-8%" width="116%" height="116%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#1B3A4B" floodOpacity="0.08" />
            </filter>
          </defs>
          <g filter="url(#ws)">
            {DIMS.map((d, i) => {
              const sa = slice * i, ea = sa + slice, ma = sa + slice / 2;
              const lp = wPolar(ma, (WR + WIR) / 2 + 10);
              return (
                <g key={d.key}>
                  <path d={wSegment(sa, ea)} fill={d.color} stroke={c.cream} strokeWidth="1.5" />
                  <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="8" fontWeight="600" fontFamily={sans} letterSpacing="0.03em">
                    {d.label}
                  </text>
                </g>
              );
            })}
          </g>
          <circle cx={WCX} cy={WCY} r={WIR} fill="#fff" stroke="#E8E2DA" strokeWidth="1" />
          <text x={WCX} y={WCY - 4} textAnchor="middle" dominantBaseline="central" fill={c.teal} fontSize="7" fontWeight="600" fontFamily={serif} letterSpacing="0.1em">BALANCE</text>
          <text x={WCX} y={WCY + 6} textAnchor="middle" dominantBaseline="central" fill={c.teal} fontSize="7" fontWeight="600" fontFamily={serif} letterSpacing="0.1em">WHEEL</text>
        </svg>

        {/* Description + dimension legend */}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: sans, fontSize: "0.75rem", lineHeight: 1.7, color: c.body, margin: "0 0 0.6rem", maxWidth: "340px" }}>
            Six dimensions of meaningful engagement. Use this tracker to mark which you cover each week.
            If a dimension hasn't been touched in two weeks, that's your signal to adjust.
            The wheel is a compass, not a checklist.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
            {DIMS.map((d) => (
              <div key={d.key} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: d.color, flexShrink: 0 }} />
                <span style={{ fontFamily: sans, fontSize: "0.68rem", fontWeight: 600, color: d.color }}>{d.label} ({d.key})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionLabel>Quarterly Dimension Tracker</SectionLabel>
      <div style={{ fontSize: "0.6rem", fontFamily: sans, marginTop: "0.35rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3.5rem repeat(6, 1fr)", borderBottom: `1px solid ${c.gridline}`, paddingBottom: "0.3rem", marginBottom: "0.15rem" }}>
          <span style={{ fontWeight: 600, color: c.terracotta }}>Week</span>
          {DIMS.map((d) => <span key={d.key} style={{ fontWeight: 600, color: d.color, textAlign: "center" }}>{d.key}</span>)}
        </div>
        {content.map((w) => (
          <div key={w.week} style={{ display: "grid", gridTemplateColumns: "3.5rem repeat(6, 1fr)", borderBottom: `0.5px solid ${c.gridline}`, padding: "0.3rem 0", alignItems: "center" }}>
            <span style={{ fontWeight: 500, color: c.teal, fontSize: "0.58rem" }}>Wk {w.week}</span>
            {DIMS.map((d) => (
              <div key={d.key} style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "0.85rem", height: "0.85rem", borderRadius: "50%", border: `1px solid ${c.gridline}` }} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Foot page={3}>The Programming Blueprint™ Pro &middot; Q3 2026 &middot; The Comfort Bond™</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGE 4 — QUARTERLY OVERVIEW (with Observance)
   ═══════════════════════════════════════════ */
function QuarterlyOverviewPage() {
  return (
    <Page>
      <PageTitle>Quarterly Overview &middot; Q3 2026</PageTitle>
      <p style={{ fontFamily: sans, fontSize: "0.7rem", color: c.bronze, margin: "0.15rem 0 0.75rem" }}>July – September &middot; 13 Weeks at a Glance</p>
      <Rule />
      <div style={{ fontFamily: sans, fontSize: "0.72rem", marginTop: "0.25rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2rem 1fr 4.5rem 1fr", gap: "0.5rem", borderBottom: `1px solid ${c.gridline}`, paddingBottom: "0.35rem", marginBottom: "0.15rem" }}>
          {["Wk", "Theme", "Dimension", "Observance"].map((h) => (
            <span key={h} style={{ fontWeight: 600, color: c.terracotta, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</span>
          ))}
        </div>
        {content.map((w, i) => (
          <div key={w.week} style={{ display: "grid", gridTemplateColumns: "2rem 1fr 4.5rem 1fr", gap: "0.5rem", borderBottom: i < content.length - 1 ? `0.5px solid ${c.gridline}` : `1px solid ${c.gridline}`, padding: "0.55rem 0", alignItems: "center" }}>
            <span style={{ fontWeight: 600, color: c.teal }}>{w.week}</span>
            <span style={{ fontWeight: 600, color: c.teal, fontSize: "0.72rem" }}>{w.theme}</span>
            <span style={{ textAlign: "center", fontWeight: 500, fontSize: "0.65rem", color: DIMS.find((d) => d.label === w.primary_dimension)?.color ?? c.body }}>{w.primary_dimension}</span>
            <span style={{ fontSize: "0.65rem", color: c.muted, fontStyle: "italic" }}>{w.observance}</span>
          </div>
        ))}
      </div>
      <Foot page={4}>The Programming Blueprint™ Pro &middot; Q3 2026 &middot; The Comfort Bond™</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGES 5-17 — WEEKLY PLANNING PAGES
   ═══════════════════════════════════════════ */
function WeeklyPlanningPage({ week, pageNum }: { week: Week; pageNum: number }) {
  return (
    <Page>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `1.5px solid ${c.terracotta}`, paddingBottom: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <div>
          <h1 style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 600, color: c.teal, margin: 0 }}>Week {week.week}: {week.theme}</h1>
          <span style={{ fontFamily: sans, fontSize: "0.6rem", color: c.bronze }}>{week.primary_dimension} &middot; {week.observance}</span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", fontFamily: sans, fontSize: "0.65rem" }}>
          <span style={{ color: c.muted }}>Community: <span style={{ borderBottom: `1px dotted ${c.gridline}`, display: "inline-block", width: "5rem" }}>&nbsp;</span></span>
          <span style={{ color: c.muted }}>Week of: <span style={{ borderBottom: `1px dotted ${c.gridline}`, display: "inline-block", width: "4.5rem" }}>&nbsp;</span></span>
        </div>
      </div>

      {/* Column headers */}
      <div style={{ display: "grid", gridTemplateColumns: "4.5rem 1fr 1fr 3rem 1fr", borderBottom: `1px solid ${c.gridline}`, paddingBottom: "0.25rem", marginBottom: "0.1rem" }}>
        {["Day", "Morning", "Afternoon", "Dim.", "Notes"].map((h) => (
          <span key={h} style={{ fontFamily: sans, fontSize: "0.55rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: c.terracotta, padding: "0 0.25rem" }}>{h}</span>
        ))}
      </div>

      {/* Day rows */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {DAYS.map((day, i) => (
          <div key={day} style={{ flex: 1, display: "grid", gridTemplateColumns: "4.5rem 1fr 1fr 3rem 1fr", borderBottom: i < DAYS.length - 1 ? `0.5px solid ${c.gridline}` : `1px solid ${c.gridline}`, alignItems: "stretch", minHeight: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", padding: "0.35rem 0.25rem", fontFamily: sans, fontWeight: 600, fontSize: "0.65rem", color: c.teal, borderRight: `0.5px solid ${c.gridline}` }}>{day}</div>
            <div style={{ borderRight: `0.5px solid ${c.gridline}` }} />
            <div style={{ borderRight: `0.5px solid ${c.gridline}` }} />
            <div style={{ borderRight: `0.5px solid ${c.gridline}` }} />
            <div />
          </div>
        ))}
      </div>

      {/* Coaching tip */}
      <div style={{ backgroundColor: c.calloutBg, border: `1px solid ${c.calloutBorder}`, borderRadius: "6px", padding: "0.6rem 0.75rem", marginTop: "0.6rem" }}>
        <SectionLabel>Coaching Tip</SectionLabel>
        <p style={{ fontFamily: sans, fontSize: "0.6rem", lineHeight: 1.6, color: c.body, margin: 0 }}>{week.coaching_tip}</p>
      </div>

      {/* Highlight moment */}
      <div style={{ fontFamily: sans, fontSize: "0.65rem", color: c.muted, marginTop: "0.6rem", display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
        <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>Highlight moment this week:</span>
        <span style={{ flex: 1, borderBottom: `1.5px dotted ${c.gridline}` }}>&nbsp;</span>
      </div>

      <Foot page={pageNum}>Week {week.week} &middot; The Programming Blueprint™ Pro &middot; Q3 2026</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGES 18-24 — THEME GUIDES (2 per page)
   ═══════════════════════════════════════════ */
function ThemeGuideBlock({ week, isFirst }: { week: Week; isFirst: boolean }) {
  return (
    <div style={{ marginBottom: isFirst ? "0" : "0" }}>
      {/* Visual separator before second theme */}
      {!isFirst && (
        <div style={{ borderTop: `1px solid ${c.gridline}`, margin: "0 0 1rem", paddingTop: "0.25rem" }} />
      )}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.5rem" }}>
        <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 600, color: c.terracotta }}>WEEK {week.week}</span>
        <h2 style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 600, color: c.teal, margin: 0 }}>{week.theme}</h2>
        <span style={{ fontFamily: sans, fontSize: "0.6rem", fontWeight: 500, color: DIMS.find((d) => d.label === week.primary_dimension)?.color ?? c.body, marginLeft: "auto" }}>{week.primary_dimension}</span>
      </div>
      <p style={{ fontFamily: sans, fontSize: "0.7rem", lineHeight: 1.7, color: c.body, margin: "0 0 0.6rem" }}>{week.introduction}</p>
      <SectionLabel>Conversation Starters</SectionLabel>
      <ul style={{ margin: "0 0 0.6rem", paddingLeft: "0", listStyle: "none", fontFamily: sans, fontSize: "0.68rem", lineHeight: 1.65, color: c.body }}>
        {week.conversation_starters.map((s, i) => (
          <li key={i} style={{ marginBottom: "0.3rem", display: "flex", gap: "0.45rem", alignItems: "baseline" }}>
            <span style={{ color: c.terracotta, fontSize: "0.5rem", lineHeight: 1, flexShrink: 0, marginTop: "0.15rem" }}>{"\u25CF"}</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p style={{ fontFamily: sans, fontSize: "0.65rem", lineHeight: 1.6, color: c.body, margin: "0 0 0.35rem" }}>
        <strong style={{ color: c.bronze }}>Dimensions:</strong>{" "}
        {(() => {
          const text = week.dimension_mapping;
          const toAddIdx = text.indexOf("To add ");
          const coversPart = toAddIdx > -1 ? text.slice(0, toAddIdx).trim() : text;
          const toAddPart = toAddIdx > -1 ? text.slice(toAddIdx) : null;
          const boldDims = (t: string) => {
            const parts = t.split(/(Cognitive|Social|Sensory|Physical|Creative|Spiritual)/g);
            return parts.map((p, i) =>
              ["Cognitive", "Social", "Sensory", "Physical", "Creative", "Spiritual"].includes(p)
                ? <strong key={i} style={{ color: c.teal, fontWeight: 600 }}>{p}</strong>
                : <span key={i}>{p}</span>
            );
          };
          return (
            <>
              {boldDims(coversPart)}
              {toAddPart && <><br />{boldDims(toAddPart)}</>}
            </>
          );
        })()}
      </p>
      <p style={{ fontFamily: sans, fontSize: "0.65rem", lineHeight: 1.6, color: c.muted, margin: 0, fontStyle: "italic" }}>{week.kit_connection}</p>
    </div>
  );
}

function ThemeGuidePage({ weeks, pageLabel, pageNum }: { weeks: Week[]; pageLabel: string; pageNum: number }) {
  return (
    <Page>
      <SectionLabel>Theme Guides</SectionLabel>
      <PageTitle>Weekly Theme Details</PageTitle>
      <Rule />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        {weeks.map((w, i) => <ThemeGuideBlock key={w.week} week={w} isFirst={i === 0} />)}
      </div>
      <Foot page={pageNum}>{pageLabel} &middot; The Programming Blueprint™ Pro &middot; Q3 2026</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGES 25-27 — RESOURCE INTEGRATION GUIDE
   ═══════════════════════════════════════════ */
function ResourceGuidePage({ weeks, pageNum, globalPage }: { weeks: Week[]; pageNum: number; globalPage: number }) {
  return (
    <Page>
      {pageNum === 1 && (
        <>
          <PageTitle>Resource Integration Guide</PageTitle>
          <p style={{ fontFamily: sans, fontSize: "0.65rem", color: c.bronze, margin: "0.15rem 0 0.5rem" }}>
            How each weekly theme connects to Comfort Bond™ kits — and what to do without them.
          </p>
          <Rule />
          <p style={{ fontFamily: sans, fontSize: "0.65rem", lineHeight: 1.7, color: c.body, margin: "0 0 0.75rem", maxWidth: "580px" }}>
            This guide shows you which Comfort Bond™ engagement resources align with each week's
            theme. You don't need any of these kits to use the Blueprint. But if you're looking for
            ready-made, adult-centered content that saves you hours of preparation, this is where to start.
          </p>
        </>
      )}
      {pageNum > 1 && (
        <>
          <SectionLabel>Resource Integration Guide (continued)</SectionLabel>
          <div style={{ height: "0.5rem" }} />
        </>
      )}
      <div style={{ fontFamily: sans, fontSize: "0.65rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2rem 1fr 1.5fr 1.5fr", gap: "0.5rem", borderBottom: `1px solid ${c.gridline}`, paddingBottom: "0.35rem", marginBottom: "0.15rem" }}>
          {["Wk", "Theme", "Kit Connection", "Alternative (No Kit)"].map((h) => (
            <span key={h} style={{ fontWeight: 600, color: c.terracotta, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</span>
          ))}
        </div>
        {weeks.map((w, i) => (
          <div key={w.week} style={{ flex: 1, display: "grid", gridTemplateColumns: "2rem 1fr 1.5fr 1.5fr", gap: "0.5rem", borderBottom: i < weeks.length - 1 ? `0.5px solid ${c.gridline}` : `1px solid ${c.gridline}`, padding: "0.65rem 0", alignItems: "start" }}>
            <span style={{ fontWeight: 600, color: c.teal }}>{w.week}</span>
            <span style={{ fontWeight: 500, color: c.teal }}>{w.theme}</span>
            <span style={{ lineHeight: 1.6, color: c.body }}>{w.kit_connection}</span>
            <span style={{ lineHeight: 1.6, color: c.body }}>{w.alternative_no_kit}</span>
          </div>
        ))}
      </div>
      <Foot page={globalPage}>Resource Guide &middot; The Programming Blueprint™ Pro &middot; Q3 2026</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGE 28 — NOTES
   ═══════════════════════════════════════════ */
function NotesPage() {
  return (
    <Page>
      <PageTitle>Planning Notes &amp; Ideas</PageTitle>
      <Rule />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "0.5rem" }}>
        {Array.from({ length: 22 }).map((_, i) => (
          <div key={i} style={{ flex: 1, borderBottom: `1px dashed ${c.gridline}`, minHeight: "1.5rem" }} />
        ))}
      </div>
      <p style={{ fontFamily: sans, fontSize: "0.5rem", color: c.muted, textAlign: "center", fontStyle: "italic", margin: "0.75rem 0 0" }}>
        Supply lists, activity variations, resident preferences, family follow-ups, ideas for next quarter…
      </p>
      <Foot page={30}>The Programming Blueprint™ Pro &middot; Q3 2026 &middot; The Comfort Bond™</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   PAGE 29 — NEXT QUARTER PREVIEW
   ═══════════════════════════════════════════ */
function NextQuarterPage() {
  return (
    <Page>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <SectionLabel>Coming Next</SectionLabel>
        <h1 style={{ fontFamily: serif, fontSize: "1.75rem", fontWeight: 600, color: c.teal, margin: "0.5rem 0", lineHeight: 1.25 }}>
          Quarter 4 &middot; October – December 2026
        </h1>
        <div style={{ width: "3rem", height: "1.5px", backgroundColor: c.terracotta, margin: "1rem auto", borderRadius: "1px" }} />
        <p style={{ fontFamily: sans, fontSize: "0.8rem", lineHeight: 1.75, color: c.body, maxWidth: "440px", margin: "0 0 1rem" }}>
          Harvest memories, holiday traditions, winter kitchens, and end-of-year reflections.
          Thirteen new themes, coaching tips, and resource connections — delivered before you need them.
        </p>
        <p style={{ fontFamily: sans, fontSize: "0.7rem", color: c.bronze, fontWeight: 500 }}>Your next edition arrives by August 30, 2026.</p>
        {/* Closing visual */}
        <img
          src={closingImage}
          alt="Activity Director and senior resident watching an autumn sunset together"
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "auto",
            borderRadius: "10px",
            margin: "1.5rem auto",
            display: "block",
            boxShadow: "0 4px 16px rgba(27,58,75,0.08)",
          }}
        />
        <p style={{ fontFamily: serif, fontSize: "0.8rem", fontStyle: "italic", color: c.muted, maxWidth: "400px" }}>
          Your residents deserve more than random activities. They deserve a system.
        </p>
        <p style={{ fontFamily: sans, fontSize: "0.65rem", color: c.bronze, marginTop: "1.5rem" }}>www.thecomfortbond.com/blueprint-pro</p>
      </div>
      <Foot page={31}>The Programming Blueprint™ Pro &middot; The Comfort Bond™</Foot>
    </Page>
  );
}

/* ─── Transition image pages ─── */
function TransitionImagePage({ src, alt, pageNum }: { src: string; alt: string; pageNum: number }) {
  return (
    <Page>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 0" }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            display: "block",
            boxShadow: "0 6px 24px rgba(27,58,75,0.08)",
          }}
        />
      </div>
      <Foot page={pageNum}>The Programming Blueprint™ Pro &middot; Q3 2026</Foot>
    </Page>
  );
}

/* ═══════════════════════════════════════════
   MASTER DOCUMENT
   ═══════════════════════════════════════════ */
export default function BlueprintProDocument() {
  const themePages: Week[][] = [];
  for (let i = 0; i < content.length; i += 2) themePages.push(content.slice(i, i + 2));

  const resPages = [content.slice(0, 5), content.slice(5, 9), content.slice(9, 13)];

  return (
    <>
      <button
        onClick={() => window.print()}
        className="bp-pro-download"
        style={{ position: "fixed", top: "1.25rem", right: "1.25rem", zIndex: 9999, fontFamily: sans, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", color: "#fff", backgroundColor: c.teal, border: "none", borderRadius: "6px", padding: "0.6rem 1.25rem", cursor: "pointer", boxShadow: "0 2px 8px rgba(27,58,75,0.25)" }}
      >
        Download PDF
      </button>

      <div className="bp-pro-doc" style={{ backgroundColor: "#D5CEC7", minHeight: "100vh", padding: "1rem 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <CoverPage />
        <WelcomePage />
        <BalanceWheelPage />
        <QuarterlyOverviewPage />
        {/* Pages 5–17: Weekly Planning */}
        {content.map((w) => <WeeklyPlanningPage key={w.week} week={w} pageNum={4 + w.week} />)}
        {/* Page 18: Transition — before Theme Guides */}
        <TransitionImagePage src={transitionThemes} alt="Green leather notebook flat lay with planning materials" pageNum={18} />
        {/* Pages 19–25: Theme Guides */}
        {themePages.map((pair, i) => (
          <ThemeGuidePage key={i} weeks={pair} pageLabel={`Themes ${pair[0].week}${pair[1] ? `\u2013${pair[1].week}` : ""}`} pageNum={19 + i} />
        ))}
        {/* Page 26: Transition — before Resource Guide */}
        <TransitionImagePage src={transitionResources} alt="Organized wooden box with engagement cards and activity materials" pageNum={26} />
        {/* Pages 27–29: Resource Guide */}
        {resPages.map((chunk, i) => <ResourceGuidePage key={i} weeks={chunk} pageNum={i + 1} globalPage={27 + i} />)}
        <NotesPage />
        <NextQuarterPage />
      </div>

      <style>{`
        @media print {
          @page { size: letter portrait; margin: 0.5in 0.4in; }
          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .bp-pro-download { display: none !important; }
          .bp-pro-doc { background: none !important; padding: 0 !important; gap: 0 !important; }
          .bp-pro-page { width: 100% !important; min-height: 0 !important; height: 100vh; margin: 0 !important; overflow: hidden !important; break-after: page; page-break-after: always; }
          .bp-pro-page > div { height: 100% !important; }
        }
        @media screen { .bp-pro-page { box-shadow: 0 1px 12px rgba(27,58,75,0.12); } }
      `}</style>
    </>
  );
}
