const points = [[350, 88], [350, 270], [350, 478], [535, 88], [535, 478], [790, 88], [790, 478]];

export function TrafficLightLayer() {
  return (
    <g>
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 5} y={y - 16} width="10" height="32" rx="5" fill="#111827" stroke="#fff" strokeWidth="1.5" />
          <circle cx={x} cy={y - 8} r="3" fill="#EF4444" />
          <circle cx={x} cy={y} r="3" fill="#F59E0B" />
          <circle cx={x} cy={y + 8} r="3" fill="#22C55E" />
        </g>
      ))}
    </g>
  );
}
