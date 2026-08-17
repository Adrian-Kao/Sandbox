"use client";

import { SimulationHeader } from "./header/SimulationHeader";
import { PolicyToolbar } from "./toolbar/PolicyToolbar";
import { SimulationMap } from "./map/SimulationMap";
import { LeftSidebar } from "./sidebar/LeftSidebar";
import { GoalPanel } from "./goals/GoalPanel";
import { PolicyLegend } from "./legend/PolicyLegend";
import { ScenarioPolicyList } from "./scenario/ScenarioPolicyList";

export function SimulationShell() {
  return (
    <main className="flex h-screen min-h-[860px] flex-col overflow-hidden bg-[#f6f9fc]">
      <SimulationHeader />
      <PolicyToolbar />
      <section className="grid min-h-0 flex-1 grid-cols-[320px_minmax(720px,1fr)_300px] gap-4 p-4">
        <LeftSidebar />
        <div className="flex min-h-0 flex-col gap-4">
          <SimulationMap />
          <ScenarioPolicyList />
        </div>
        <div className="flex min-h-0 flex-col gap-4">
          <GoalPanel />
          <PolicyLegend />
        </div>
      </section>
    </main>
  );
}
