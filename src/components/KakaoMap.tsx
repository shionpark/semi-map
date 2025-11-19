'use client';

import { DEFAULT_LAT, DEFAULT_LNG } from '@/const';
import { useCurrentLatLng } from '@/hooks/useCurrentLatLng';
import { useInitializeKakaoMap } from '@/hooks/useInitializeKakaoMap';

export default function KakaoMap() {
  const { latLng, status, error } = useCurrentLatLng();
  const fallbackLatLng = latLng ?? { lat: DEFAULT_LAT, lng: DEFAULT_LNG };
  const { mapRef } = useInitializeKakaoMap(fallbackLatLng);

  const isLoadingLocation = status === 'loading';
  const isPermissionDenied = status === 'denied';
  const isErrorState = status === 'error';

  return (
    <div className="flex flex-col">
      <div className="relative h-[40rem] w-[60rem] overflow-hidden rounded-lg bg-gray-100 shadow-md">
        <div data-testid="map" ref={mapRef} className="h-full w-full" />
        {isLoadingLocation && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/75 text-sm font-medium text-gray-700">
            현재 위치를 불러오는 중…
          </div>
        )}
      </div>

      {isPermissionDenied && !error && (
        <span className="mt-2 text-sm text-gray-600">
          위치 권한이 거부되어 기본 위치(서울 시청)를 기준으로 지도를
          표시합니다.
        </span>
      )}

      {isErrorState && error && (
        <span className="mt-2 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
