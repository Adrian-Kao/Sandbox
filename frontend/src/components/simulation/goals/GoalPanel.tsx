"use client";

import { useSimulationStore } from "@/features/simulation/simulation.store";
import { GoalCard } from "./GoalCard";

export function GoalPanel() {
  const state = useSimulationStore();

  return (
    <section className="simulation-card rounded-lg p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-black text-slate-950">情境目標設定</h2>
        <button className="text-sm font-black text-brand-600">編輯</button>
      </div>
      <div className="space-y-3">
        {state.goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
}
