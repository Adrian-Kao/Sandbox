"use client";

import { roads } from "@/data/xinyi/roads";
import { findRoadById, getRoadLabel } from "@/features/simulation/road.utils";
import { simulationStore, useSimulationStore } from "@/features/simulation/simulation.store";

export function RoadFocusCard() {
  const state = useSimulationStore();
  const road = findRoadById(roads, state.selectedRoadId);
  if (!road) return null;

  return (
    <div className="absolute left-16 top-8 z-10 w-[330px] rounded-lg border border-line bg-white/95 p-4 shadow-card">
      <button className="mb-3 text-sm font-black text-brand-600" onClick={() => simulationStore.setSelectedRoad(null)}>
        ← 返回商圈
      </button>
      <div className="border-t border-line pt-3">
        <div className="text-lg font-black text-slate-950">{getRoadLabel(road)}</div>
        <div className="mt-2 text-sm font-bold text-slate-600">
          路段長度 <b className="text-red-500">{road.lengthMeters} m</b>　雙向道路
        </div>
      </div>
    </div>
  );
}
