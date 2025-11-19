import { create } from 'zustand';

import type { LatLng, LocationPermissionStatus } from '@/types/location';

interface LocationState {
  currentLatLng: LatLng | null;
  permissionStatus: LocationPermissionStatus;
  error: string | null;
  setCurrentLatLng: (latLng: LatLng) => void;
  setPermissionStatus: (status: LocationPermissionStatus) => void;
  setError: (message: string | null) => void;
  reset: () => void;
}

// 3개의 필드만 뽑아(Pick) 초기 상태 객체의 타입으로 사용
const initialState: Pick<
  LocationState,
  'currentLatLng' | 'permissionStatus' | 'error'
> = {
  currentLatLng: null,
  permissionStatus: 'idle',
  error: null,
};

/**
 * GeoLocation 기반 좌표와 권한/에러 상태를 중앙에서 공유하기 위한 Zustand 스토어 정의.
 * 지도/검색/필터 등 어디서든 동일한 위치 상태를 사용하도록 currentLatLng, permissionStatus, error를 제공한다.
 */
export const useLocationStore = create<LocationState>((set) => ({
  ...initialState,
  setCurrentLatLng: (latLng) =>
    set(() => ({
      currentLatLng: latLng,
    })),
  setPermissionStatus: (status) =>
    set(() => ({
      permissionStatus: status,
    })),
  setError: (message) =>
    set(() => ({
      error: message,
    })),
  reset: () =>
    set(() => ({
      ...initialState,
    })),
}));
