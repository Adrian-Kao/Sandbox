import { roads } from "@/data/xinyi/roads";
import { RoadSegment } from "../roads/RoadSegment";
import { RoadLabel } from "../roads/RoadLabel";

export function RoadLayer() {
  return (
    <g>
      <g strokeLinecap="round" strokeLinejoin="round">
        {["M70 88 H925", "M70 270 H925", "M70 478 H925", "M350 78 V510", "M535 78 V510", "M790 78 V510", "M350 365 H790"].map((path) => (
          <path key={path} d={path} stroke="#DDE3EA" strokeWidth="38" />
        ))}
        {["M70 88 H925", "M70 270 H925", "M70 478 H925", "M350 78 V510", "M535 78 V510", "M790 78 V510", "M350 365 H790"].map((path) => (
          <path key={path} d={path} stroke="#FFFFFF" strokeWidth="32" />
        ))}
      </g>
      {roads.map((road) => (
        <RoadSegment key={road.id} road={road} />
      ))}
      <RoadLabel />
    </g>
  );
}
