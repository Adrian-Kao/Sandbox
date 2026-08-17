import { MapModeToggle } from "../controls/MapModeToggle";

export function ScaleBar() {
  return (
    <div className="absolute bottom-5 left-5 z-10">
      <MapModeToggle />
      <div className="mt-2 h-[2px] w-[92px] bg-slate-950" />
      <div className="text-center text-xs font-bold text-slate-900">100 m</div>
    </div>
  );
}
