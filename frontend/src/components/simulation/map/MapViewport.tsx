import type { ReactNode } from "react";
import type { MapMode } from "@/features/simulation/simulation.types";

export function MapViewport({ children, mode }: { children: ReactNode; mode: MapMode }) {
  return (
    <svg
      className={`h-full w-full transition-transform duration-700 ${mode === "road-focus" ? "scale-150" : "scale-100"}`}
      viewBox="0 0 1000 640"
      preserveAspectRatio="xMidYMid meet"
      aria-label="信義商圈模擬地圖"
    >
      <rect width="1000" height="640" fill="#F8FAFC" />
      {children}
    </svg>
  );
}
