"use client";

import type { RoadSegment as RoadSegmentData } from "@/features/simulation/simulation.types";
import { simulationStore, useSimulationStore } from "@/features/simulation/simulation.store";
import { isRoadSelected } from "@/features/simulation/road.utils";
import { SelectedRoad } from "./SelectedRoad";
import { RoadTooltip } from "./RoadTooltip";

const roadPaths: Record<string, string> = {
  "shifu-001": "M350 88 V478",
  "songgao-001": "M350 88 H790",
  "songshou-001": "M350 270 H790",
  "zhongxiao-001": "M350 478 H790",
  "songzhi-001": "M535 88 V478"
};

export function RoadSegment({ road }: { road: RoadSegmentData }) {
  const state = useSimulationStore();
  const path = roadPaths[road.id];
  const hovered = state.hoveredRoadId === road.id;
  const selected = isRoadSelected(road, state.selectedRoadId);

  if (!path) return null;

  return (
    <g>
      {(hovered || selected) && <SelectedRoad path={path} selected={selected} />}
      <path
        d={path}
        fill="none"
        stroke="transparent"
        strokeWidth="46"
        className="cursor-pointer"
        pointerEvents="stroke"
        onMouseEnter={() => simulationStore.setHoveredRoad(road.id)}
        onMouseLeave={() => simulationStore.setHoveredRoad(null)}
        onClick={() => simulationStore.setSelectedRoad(road.id)}
      />
      {hovered && !selected && <RoadTooltip road={road} x={390} y={320} />}
    </g>
  );
}
