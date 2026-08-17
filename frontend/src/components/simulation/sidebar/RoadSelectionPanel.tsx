"use client";

import { roads } from "@/data/xinyi/roads";
import { findRoadById } from "@/features/simulation/road.utils";
import { useSimulationStore } from "@/features/simulation/simulation.store";
import { RedLineEditor } from "./RedLineEditor";

export function RoadSelectionPanel() {
  const state = useSimulationStore();
  const road = findRoadById(roads, state.selectedRoadId);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-slate-950">選取道路編輯</h2>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-700">編輯中</span>
      </div>
      <section className="mt-5 border-b border-line pb-5">
        <div className="text-xl font-black text-slate-950">{road?.name ?? "市府路"}</div>
        <div className="mt-1 text-sm font-semibold text-slate-500">{road?.start ?? "松壽路"} - {road?.end ?? "忠孝東路五段"}</div>
      </section>
      <section className="border-b border-line py-5">
        <div className="text-sm font-black text-slate-900">路段資訊</div>
        <div className="mt-3 text-[28px] font-black text-red-500">{road?.lengthMeters ?? 180} m</div>
        <div className="text-sm font-bold text-slate-600">雙向道路</div>
      </section>
      <RedLineEditor compact />
    </div>
  );
}
