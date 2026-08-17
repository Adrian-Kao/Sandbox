import { PlusCircle } from "lucide-react";

export function AddPolicyButton() {
  return (
    <button className="inline-flex h-10 items-center gap-2 rounded-md border border-brand-600 bg-brand-600 px-4 text-sm font-black text-white shadow-sm">
      <PlusCircle className="h-4 w-4" />
      新增政策
      <span>⌄</span>
    </button>
  );
}
