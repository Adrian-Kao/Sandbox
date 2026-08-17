"use client";

import { useSimulationStore } from "@/features/simulation/simulation.store";
import { RoadSelectionPanel } from "./RoadSelectionPanel";
import { RedLineEditor } from "./RedLineEditor";

export function LeftSidebar() {
  const state = useSimulationStore();

  return (
    <aside className="simulation-card min-h-0 overflow-hidden rounded-lg p-4">
      {state.mapMode === "road-focus" ? <RoadSelectionPanel /> : <RedLineEditor />}
    </aside>
  );
}
