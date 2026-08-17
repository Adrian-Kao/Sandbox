export type MapMode = "district-overview" | "road-focus";

export type PolicyType = "red-line" | "ubike-add" | "parking-add" | "parking-remove" | "traffic-control";

export type Coordinate = [number, number];

export type DistrictBoundary = {
  id: string;
  name: string;
  coordinates: Coordinate[];
};

export type RoadDirection = "one-way" | "two-way";

export type RoadSegment = {
  id: string;
  roadId: string;
  name: string;
  start: string;
  end: string;
  direction: RoadDirection;
  roadWidthMeters: number;
  lengthMeters: number;
  coordinates: Coordinate[];
};

export type Building = {
  id: string;
  name: string;
  kind: "landmark" | "mall" | "office" | "block";
  footprint: Coordinate[];
};

export type Park = {
  id: string;
  name: string;
  boundary: Coordinate[];
};

export type ParkingLot = {
  id: string;
  name: string;
  capacity: number;
  coordinate: Coordinate;
};

export type YouBikeStation = {
  id: string;
  name: string;
  docks: number;
  coordinate: Coordinate;
};

export type TrafficLight = {
  id: string;
  name: string;
  coordinate: Coordinate;
};

export type ScenarioGoal = {
  id: string;
  metric: string;
  direction: "increase" | "decrease";
  targetPercent: number;
};

export type Policy = {
  id: string;
  type: PolicyType;
  name: string;
  status: "editing" | "active" | "pending-remove";
  roadSegmentId?: string;
  params: Record<string, string | number | boolean>;
};

export type SimulationState = {
  mapMode: MapMode;
  selectedRoadId: string | null;
  hoveredRoadId: string | null;
  activePolicyType: PolicyType;
  goals: ScenarioGoal[];
  policies: Policy[];
};
