import { RoadDirection } from "./RoadDirection";

export function SelectedRoad({ path, selected }: { path: string; selected: boolean }) {
  return (
    <g>
      <path d={path} stroke="rgba(50,210,255,0.32)" strokeWidth={selected ? 58 : 42} strokeLinecap="round" />
      <path d={path} stroke="#5AD7FF" strokeWidth={selected ? 36 : 22} strokeLinecap="round" opacity="0.95" />
      <path d={path} stroke="rgba(55,190,240,0.55)" strokeWidth={selected ? 18 : 12} strokeLinecap="round" />
      {selected && <RoadDirection />}
    </g>
  );
}
