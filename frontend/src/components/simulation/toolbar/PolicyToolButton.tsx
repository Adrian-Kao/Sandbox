import type { LucideIcon } from "lucide-react";

type PolicyToolButtonProps = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export function PolicyToolButton({ label, icon: Icon, active = false }: PolicyToolButtonProps) {
  return (
    <button
      className={`inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-black shadow-sm ${
        active ? "border-brand-500 bg-white text-slate-950" : "border-line bg-white text-slate-700"
      }`}
    >
      <Icon className={`h-4 w-4 ${active ? "text-red-500" : "text-slate-500"}`} />
      {label}
    </button>
  );
}
