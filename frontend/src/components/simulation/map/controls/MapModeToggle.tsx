export function MapModeToggle() {
  return (
    <div className="flex overflow-hidden rounded-full border border-line bg-white shadow-card">
      <span className="grid h-8 w-12 place-items-center rounded-full bg-brand-600 text-xs font-black text-white">2D</span>
      <span className="grid h-8 w-12 place-items-center text-xs font-black text-slate-700">3D</span>
    </div>
  );
}
