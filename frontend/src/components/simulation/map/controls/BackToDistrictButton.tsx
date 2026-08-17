"use client";

import { simulationStore, useSimulationStore } from "@/features/simulation/simulation.store";

export function BackToDistrictButton() {
  const state = useSimulationStore();
  if (state.mapMode !== "road-focus") return null;

  return (
    <button
      className="rounded-md border border-line bg-white px-3 py-2 text-sm font-black text-brand-600 shadow-card"
      onClick={() => simulationStore.setSelectedRoad(null)}
    >
      ← 返回商圈
    </button>
  );
}
