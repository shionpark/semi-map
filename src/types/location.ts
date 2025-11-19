export interface LatLng {
  lat: number;
  lng: number;
}

export type LocationPermissionStatus =
  | 'idle'
  | 'loading'
  | 'granted'
  | 'denied'
  | 'error';
