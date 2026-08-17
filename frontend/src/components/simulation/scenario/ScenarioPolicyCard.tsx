import type { Policy } from "@/features/simulation/simulation.types";

export function ScenarioPolicyCard({ policy }: { policy: Policy }) {
  return (
    <article className="rounded-lg border border-line bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-black text-slate-950">{policy.name}</h3>
        <span className="rounded-full bg-teal-50 px-2 py-1 text-xs font-black text-teal-700">{policy.status}</span>
      </div>
      <div className="mt-3 text-sm font-bold text-slate-600">{policy.type}</div>
    </article>
  );
}
