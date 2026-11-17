import type { LatLng } from '@/types/location';

const EARTH_RADIUS_METERS = 6371000;

const toRadians = (degree: number) => (degree * Math.PI) / 180;

/**
 * 하버사인 공식을 사용해 두 좌표 사이의 거리를 미터 단위로 계산한다.
 */
export function calculateDistanceMeters(a: LatLng, b: LatLng): number {
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);

  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const haversine =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

  return Math.round(EARTH_RADIUS_METERS * c);
}
