import BlueprintCover from "@/components/BlueprintCover";
import BlueprintWelcome from "@/components/BlueprintWelcome";
import EngagementBalanceWheel from "@/components/EngagementBalanceWheel";
import WeeklyPlanningGrid from "@/components/WeeklyPlanningGrid";
import WeeklyReflectionNotes from "@/components/WeeklyReflectionNotes";
import ThemeStarter from "@/components/ThemeStarter";
import BlueprintEcosystem from "@/components/BlueprintEcosystem";
import BlueprintProUpgrade from "@/components/BlueprintProUpgrade";

export default function BlueprintTest() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F5F0EB", padding: "2rem 1rem" }}>
      <BlueprintCover />
      <div style={{ height: "3rem" }} />
      <BlueprintWelcome />
      <div style={{ height: "3rem" }} />
      <EngagementBalanceWheel />
      <div style={{ height: "3rem" }} />
      <WeeklyPlanningGrid />
      <div style={{ height: "3rem" }} />
      <WeeklyReflectionNotes />
      <div style={{ height: "3rem" }} />
      <ThemeStarter />
      <div style={{ height: "3rem" }} />
      <BlueprintEcosystem />
      <div style={{ height: "3rem" }} />
      <BlueprintProUpgrade />
    </div>
  );
}
