export function RedLineEditor({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "pt-5" : ""}>
      {!compact && (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-950">紅線編輯</h2>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-700">編輯中</span>
          </div>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">在地圖上繪製紅線，拖曳節點可調整路段。</p>
        </>
      )}
      <section className="mt-5 border-b border-line pb-5">
        <div className="text-sm font-black text-slate-900">已編輯路段</div>
        <div className="mt-3 rounded-md border border-line bg-slate-50 p-3 text-sm font-bold text-slate-700">
          市府路（松壽路 - 忠孝東路五段）
          <span className="float-right text-red-500">180 m</span>
        </div>
      </section>
      <section className="py-5">
        <div className="text-sm font-black text-slate-900">套用政策</div>
        <button className="mt-3 flex h-10 w-full items-center justify-between rounded-md border border-line px-3 text-sm font-bold text-slate-500">
          請選擇政策類型
          <span>⌄</span>
        </button>
      </section>
    </div>
  );
}
