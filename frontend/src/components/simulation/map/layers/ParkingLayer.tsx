const points = [[505, 162], [610, 338], [450, 488], [225, 502]];

export function ParkingLayer() {
  return (
    <g>
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="16" fill="#0B63E5" stroke="#FFFFFF" strokeWidth="3" />
          <text x={x} y={y + 6} textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900">P</text>
        </g>
      ))}
    </g>
  );
}
