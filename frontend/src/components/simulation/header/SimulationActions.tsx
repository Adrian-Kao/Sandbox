import { MoreHorizontal, PlayCircle, Save } from "lucide-react";

export function SimulationActions() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold text-slate-500">最後儲存：今天 10:30</span>
      <button className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-white px-4 text-sm font-bold text-slate-700 shadow-sm">
        <Save className="h-4 w-4" />
        儲存情境
      </button>
      <button className="inline-flex h-10 items-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white shadow-sm">
        <PlayCircle className="h-4 w-4" />
        開始模擬
      </button>
      <button className="grid h-10 w-10 place-items-center rounded-md border border-line bg-white shadow-sm" aria-label="更多操作">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  );
}
