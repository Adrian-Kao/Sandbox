import { Bike, CircleMinus, ClipboardList, ParkingCircle, TrafficCone } from "lucide-react";
import { AddPolicyButton } from "./AddPolicyButton";
import { PolicyToolButton } from "./PolicyToolButton";

const tools = [
  { label: "紅線編輯", icon: CircleMinus, active: true },
  { label: "新增 YouBike", icon: Bike },
  { label: "新增停車場", icon: ParkingCircle },
  { label: "道路管制", icon: TrafficCone },
  { label: "刪減事項", icon: CircleMinus },
  { label: "匯入方案", icon: ClipboardList }
];

export function PolicyToolbar() {
  return (
    <div className="flex h-[64px] shrink-0 items-center gap-3 border-b border-line bg-white px-6">
      <AddPolicyButton />
      {tools.map((tool) => (
        <PolicyToolButton key={tool.label} {...tool} />
      ))}
    </div>
  );
}
