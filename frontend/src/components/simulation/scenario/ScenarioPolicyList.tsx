"use client";

import { useSimulationStore } from "@/features/simulation/simulation.store";
import { ScenarioPolicyCard } from "./ScenarioPolicyCard";

export function ScenarioPolicyList() {
  const state = useSimulationStore();

  return (
    <section className="simulation-card h-[150px] shrink-0 rounded-lg p-4">
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-lg font-black text-slate-950">政策方案（基準情境）</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">{state.policies.length} 筆政策</span>
      </div>
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_160px] gap-3">
        {state.policies.map((policy) => (
          <ScenarioPolicyCard key={policy.id} policy={policy} />
        ))}
        <button className="grid place-items-center rounded-lg border border-dashed border-blue-200 text-sm font-black text-brand-600">
          + 新增政策
        </button>
      </div>
    </section>
  );
}
