import type { RoadSegment } from "@/features/simulation/simulation.types";
import { getRoadLabel } from "@/features/simulation/road.utils";

export function RoadTooltip({ road, x, y }: { road: RoadSegment; x: number; y: number }) {
  return (
    <foreignObject x={x} y={y} width="220" height="92" pointerEvents="none">
      <div className="rounded-lg border border-line bg-white/95 p-3 text-sm shadow-card">
        <div className="font-black text-slate-950">{road.name}</div>
        <div className="mt-1 text-xs font-bold text-slate-500">{getRoadLabel(road)}</div>
        <div className="mt-2 text-xs font-black text-brand-600">點擊放大</div>
      </div>
    </foreignObject>
  );
}
