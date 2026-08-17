"use client";

import { MapViewport } from "./MapViewport";
import { CameraController } from "./CameraController";
import { BuildingLayer } from "./layers/BuildingLayer";
import { DistrictBoundaryLayer } from "./layers/DistrictBoundaryLayer";
import { IntersectionLayer } from "./layers/IntersectionLayer";
import { ParkLayer } from "./layers/ParkLayer";
import { ParkingLayer } from "./layers/ParkingLayer";
import { PolicyLayer } from "./layers/PolicyLayer";
import { RoadLayer } from "./layers/RoadLayer";
import { TrafficLightLayer } from "./layers/TrafficLightLayer";
import { YouBikeLayer } from "./layers/YouBikeLayer";
import { MapControls } from "./controls/MapControls";
import { MiniMap } from "./overlays/MiniMap";
import { RoadFocusCard } from "./overlays/RoadFocusCard";
import { ScaleBar } from "./overlays/ScaleBar";
import { useSimulationStore } from "@/features/simulation/simulation.store";

export function SimulationMap() {
  const state = useSimulationStore();

  return (
    <section className="simulation-card relative min-h-0 flex-1 overflow-hidden rounded-lg bg-[#f8fafc]">
      <CameraController />
      <MapViewport mode={state.mapMode}>
        <BuildingLayer />
        <ParkLayer />
        <RoadLayer />
        <PolicyLayer />
        <DistrictBoundaryLayer />
        <IntersectionLayer />
        <ParkingLayer />
        <YouBikeLayer />
        <TrafficLightLayer />
      </MapViewport>
      <MapControls />
      <RoadFocusCard />
      <ScaleBar />
      <MiniMap />
    </section>
  );
}
