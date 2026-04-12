import { useState } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
const DIMENSIONS = ["C", "So", "Se", "P", "Cr", "Sp"] as const;

const colors = {
  cream: "#F5F0EB",
  teal: "#1B3A4B",
  terracotta: "#C4956A",
  gridline: "#D5CEC7",
  inputBorder: "#C4B8AB",
} as const;

interface DayRow {
  morning: string;
  afternoon: string;
  dimension: string;
  notes: string;
}

export default function WeeklyPlanningGrid() {
  const [community, setCommunity] = useState("");
  const [weekOf, setWeekOf] = useState("");
  const [rows, setRows] = useState<Record<string, DayRow>>(
    Object.fromEntries(
      DAYS.map((day) => [day, { morning: "", afternoon: "", dimension: "", notes: "" }])
    )
  );

  const updateRow = (day: string, field: keyof DayRow, value: string) => {
    setRows((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  return (
    <div
      className="weekly-planning-grid mx-auto"
      style={{
        maxWidth: "960px",
        width: "100%",
        aspectRatio: "8.5 / 11",
        backgroundColor: colors.cream,
        color: colors.teal,
        fontFamily: '"DM Sans", system-ui, sans-serif',
        padding: "3rem clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Header ── */}
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "0.75rem 2rem",
          marginBottom: "1rem",
          borderBottom: `1.5px solid ${colors.terracotta}`,
          paddingBottom: "0.75rem",
          flexShrink: 0,
        }}
      >
        <h1
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
            fontWeight: 600,
            margin: 0,
            color: colors.teal,
            letterSpacing: "-0.01em",
          }}
        >
          Weekly Engagement Plan
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 1.5rem",
            alignItems: "baseline",
            fontSize: "0.85rem",
          }}
        >
          <label style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
            <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>Community:</span>
            <input
              type="text"
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              placeholder="enter name"
              style={{
                border: "none",
                borderBottom: `1.5px dotted ${colors.inputBorder}`,
                background: "transparent",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
                color: colors.teal,
                width: "10rem",
                paddingBottom: "2px",
              }}
            />
          </label>
          <label style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
            <span style={{ fontWeight: 500, whiteSpace: "nowrap" }}>Week of:</span>
            <input
              type="text"
              value={weekOf}
              onChange={(e) => setWeekOf(e.target.value)}
              placeholder="mm/dd/yyyy"
              style={{
                border: "none",
                borderBottom: `1.5px dotted ${colors.inputBorder}`,
                background: "transparent",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
                color: colors.teal,
                width: "8rem",
                paddingBottom: "2px",
              }}
            />
          </label>
        </div>
      </header>

      {/* ── Column Headers ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "7rem 1fr 1fr 4rem 1fr",
          gap: 0,
          borderBottom: `1px solid ${colors.gridline}`,
          paddingBottom: "0.35rem",
          marginBottom: "0.125rem",
          flexShrink: 0,
        }}
      >
        {["Day", "Morning Activity", "Afternoon Activity", "Dim.", "Notes"].map((label) => (
          <span
            key={label}
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: colors.terracotta,
              padding: "0 0.5rem",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* ── Day Rows — flex:1 so they stretch to fill the page ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {DAYS.map((day, i) => (
          <div
            key={day}
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "7rem 1fr 1fr 4rem 1fr",
              gap: 0,
              borderBottom:
                i < DAYS.length - 1
                  ? `0.5px solid ${colors.gridline}`
                  : `1px solid ${colors.gridline}`,
              alignItems: "stretch",
            }}
          >
            {/* Day label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.75rem 0.5rem",
                fontWeight: 600,
                fontSize: "0.825rem",
                borderRight: `0.5px solid ${colors.gridline}`,
              }}
            >
              {day}
            </div>

            {/* Morning */}
            <div style={{ borderRight: `0.5px solid ${colors.gridline}`, padding: "0.35rem" }}>
              <input
                type="text"
                value={rows[day].morning}
                onChange={(e) => updateRow(day, "morning", e.target.value)}
                aria-label={`${day} morning activity`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: "inherit",
                  fontSize: "0.8rem",
                  color: colors.teal,
                  padding: "0.25rem",
                }}
              />
            </div>

            {/* Afternoon */}
            <div style={{ borderRight: `0.5px solid ${colors.gridline}`, padding: "0.35rem" }}>
              <input
                type="text"
                value={rows[day].afternoon}
                onChange={(e) => updateRow(day, "afternoon", e.target.value)}
                aria-label={`${day} afternoon activity`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: "inherit",
                  fontSize: "0.8rem",
                  color: colors.teal,
                  padding: "0.25rem",
                }}
              />
            </div>

            {/* Dimension */}
            <div
              style={{
                borderRight: `0.5px solid ${colors.gridline}`,
                padding: "0.35rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <select
                value={rows[day].dimension}
                onChange={(e) => updateRow(day, "dimension", e.target.value)}
                aria-label={`${day} dimension`}
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: "inherit",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: colors.teal,
                  cursor: "pointer",
                  textAlign: "center",
                  width: "100%",
                  appearance: "none",
                  WebkitAppearance: "none",
                  padding: "0.15rem 0",
                  borderBottom: `1px dotted ${colors.inputBorder}`,
                }}
              >
                <option value="">—</option>
                {DIMENSIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div style={{ padding: "0.35rem" }}>
              <input
                type="text"
                value={rows[day].notes}
                onChange={(e) => updateRow(day, "notes", e.target.value)}
                aria-label={`${day} notes`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: "inherit",
                  fontSize: "0.8rem",
                  color: colors.teal,
                  padding: "0.25rem",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Print ── */}
      <style>{`
        @media print {
          .weekly-planning-grid {
            max-width: 100% !important;
            aspect-ratio: auto !important;
            padding: 0 !important;
            break-inside: avoid;
          }
          .weekly-planning-grid input,
          .weekly-planning-grid select {
            border-bottom-style: dotted !important;
          }
        }
      `}</style>
    </div>
  );
}
