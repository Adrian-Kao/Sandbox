import { Building2, Car, Goal, MapPinned, ParkingCircle, Route } from "lucide-react";
import { ScenarioSelector } from "./ScenarioSelector";
import { SimulationActions } from "./SimulationActions";

const navItems = [
  ["總覽", MapPinned],
  ["道路", Route],
  ["YouBike", Route],
  ["停車場", ParkingCircle],
  ["個人交通運輸", Car],
  ["情境模擬", Goal]
] as const;

export function SimulationHeader() {
  return (
    <header className="shrink-0 border-b border-line bg-white">
      <div className="flex h-[68px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Building2 className="h-9 w-9 text-brand-600" />
          <div className="flex items-baseline gap-4">
            <h1 className="text-[26px] font-black leading-none text-slate-950">信義商圈政策沙盒</h1>
            <p className="text-sm font-semibold text-slate-500">智慧城市決策模擬平台</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ScenarioSelector />
          <SimulationActions />
        </div>
      </div>
      <nav className="flex h-12 items-center px-6">
        {navItems.map(([label, Icon]) => (
          <button
            key={label}
            className={`relative flex h-12 min-w-[145px] items-center justify-center gap-2 border-r border-line text-[15px] font-black ${
              label === "道路" ? "text-brand-600" : "text-slate-600"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
            {label === "道路" && <span className="absolute bottom-0 h-[3px] w-full rounded-t-full bg-brand-600" />}
          </button>
        ))}
      </nav>
    </header>
  );
}
