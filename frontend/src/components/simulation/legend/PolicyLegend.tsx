const legends = ["紅線（現況）", "紅線（編輯中）", "YouBike 站點", "停車場（現況）", "交通號誌", "商圈範圍"];

export function PolicyLegend() {
  return (
    <section className="simulation-card rounded-lg p-4">
      <h2 className="mb-4 text-lg font-black text-slate-950">政策圖例</h2>
      <div className="space-y-3 text-sm font-bold text-slate-700">
        {legends.map((legend) => (
          <div key={legend} className="flex items-center gap-3">
            <span className="h-2 w-8 rounded-full bg-brand-600" />
            {legend}
          </div>
        ))}
      </div>
    </section>
  );
}
