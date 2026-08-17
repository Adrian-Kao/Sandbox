import type { Coordinate } from "./simulation.types";

export type Bounds = {
  minLng: number;
  minLat: number;
  maxLng: number;
  maxLat: number;
};

export function getBounds(coordinates: Coordinate[]): Bounds {
  return coordinates.reduce(
    (bounds, [lng, lat]) => ({
      minLng: Math.min(bounds.minLng, lng),
      minLat: Math.min(bounds.minLat, lat),
      maxLng: Math.max(bounds.maxLng, lng),
      maxLat: Math.max(bounds.maxLat, lat)
    }),
    { minLng: Infinity, minLat: Infinity, maxLng: -Infinity, maxLat: -Infinity }
  );
}

export function expandBounds(bounds: Bounds, ratio = 0.2): Bounds {
  const lngPadding = (bounds.maxLng - bounds.minLng) * ratio;
  const latPadding = (bounds.maxLat - bounds.minLat) * ratio;
  return {
    minLng: bounds.minLng - lngPadding,
    minLat: bounds.minLat - latPadding,
    maxLng: bounds.maxLng + lngPadding,
    maxLat: bounds.maxLat + latPadding
  };
}
