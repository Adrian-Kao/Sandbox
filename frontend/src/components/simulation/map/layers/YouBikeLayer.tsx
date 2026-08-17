const points = [[212, 325], [462, 84], [654, 268], [835, 180], [840, 410]];

export function YouBikeLayer() {
  return (
    <g>
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="15" fill="#EFF6FF" stroke="#1677FF" strokeWidth="2" />
          <text x={x} y={y + 4} textAnchor="middle" fill="#1677FF" fontSize="9" fontWeight="900">Ub</text>
        </g>
      ))}
    </g>
  );
}
