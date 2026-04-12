import BlueprintCover from "@/components/BlueprintCover";
import BlueprintWelcome from "@/components/BlueprintWelcome";
import EngagementBalanceWheel from "@/components/EngagementBalanceWheel";
import WeeklyPlanningGrid from "@/components/WeeklyPlanningGrid";
import WeeklyReflectionNotes from "@/components/WeeklyReflectionNotes";
import ThemeStarter from "@/components/ThemeStarter";
import BlueprintEcosystem from "@/components/BlueprintEcosystem";
import BlueprintProUpgrade from "@/components/BlueprintProUpgrade";

const PAGE_STYLE: React.CSSProperties = {
  width: "8.5in",
  minHeight: "11in",
  margin: "0 auto",
  backgroundColor: "#F5F0EB",
  overflow: "hidden",
  position: "relative",
};

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bp-page" style={PAGE_STYLE}>
      {children}
    </div>
  );
}

export default function BlueprintDocument() {
  return (
    <>
      {/* ── Download button (hidden in print) ── */}
      <button
        onClick={() => window.print()}
        className="bp-download-btn"
        style={{
          position: "fixed",
          top: "1.25rem",
          right: "1.25rem",
          zIndex: 9999,
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: "#fff",
          backgroundColor: "#1B3A4B",
          border: "none",
          borderRadius: "6px",
          padding: "0.6rem 1.25rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(27,58,75,0.25)",
          transition: "background-color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#254E63")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1B3A4B")}
      >
        Download PDF
      </button>

      {/* ── Pages ── */}
      <div
        className="bp-document"
        style={{
          backgroundColor: "#D5CEC7",
          minHeight: "100vh",
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Page 1 — Cover */}
        <Page>
          <BlueprintCover />
        </Page>

        {/* Page 2 — Welcome */}
        <Page>
          <BlueprintWelcome />
        </Page>

        {/* Page 3 — Engagement Balance Wheel */}
        <Page>
          <div style={{ padding: "clamp(2rem, 5vw, 3.5rem)" }}>
            <EngagementBalanceWheel />
          </div>
        </Page>

        {/* Page 4 — Weekly Planning Grid (all 6 days, full page) */}
        <Page>
          <WeeklyPlanningGrid />
        </Page>

        {/* Page 5 — Reflection & Notes */}
        <Page>
          <WeeklyReflectionNotes />
        </Page>

        {/* Page 6 — Theme Starter */}
        <Page>
          <ThemeStarter />
        </Page>

        {/* Page 7 — Ecosystem */}
        <Page>
          <BlueprintEcosystem />
        </Page>

        {/* Page 8 — Pro Upgrade */}
        <Page>
          <BlueprintProUpgrade />
        </Page>
      </div>

      {/* ── Global print stylesheet ── */}
      <style>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0.5in 0.4in;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .bp-download-btn {
            display: none !important;
          }

          .bp-document {
            background: none !important;
            padding: 0 !important;
            gap: 0 !important;
          }

          .bp-page {
            width: 100% !important;
            min-height: 0 !important;
            height: 100vh;
            margin: 0 !important;
            overflow: hidden !important;
            break-after: page;
            page-break-after: always;
          }

          /* Override child component max-widths for print */
          .bp-page > * {
            max-width: 100% !important;
            aspect-ratio: auto !important;
            height: 100% !important;
          }
        }

        /* On-screen shadow for page preview feel */
        @media screen {
          .bp-page {
            box-shadow: 0 1px 12px rgba(27,58,75,0.12);
          }
        }
      `}</style>
    </>
  );
}
