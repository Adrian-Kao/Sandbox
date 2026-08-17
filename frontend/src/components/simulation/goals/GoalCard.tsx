import type { ScenarioGoal } from "@/features/simulation/simulation.types";

export function GoalCard({ goal }: { goal: ScenarioGoal }) {
  return (
    <div className="flex h-[62px] items-center justify-between rounded-lg border border-line bg-white px-3">
      <div>
        <div className="text-sm font-black text-slate-900">{goal.metric}</div>
        <div className="mt-1 text-xs font-semibold text-slate-500">{goal.direction === "increase" ? "提升目標" : "降低目標"}</div>
      </div>
      <div className="text-sm font-black text-teal-700">
        {goal.direction === "increase" ? "提升" : "降低"} {goal.targetPercent}%
      </div>
    </div>
  );
}
