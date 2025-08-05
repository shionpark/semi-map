import { useEffect, useRef } from 'react';

import { useKakaoSdkStore } from '@/store/useKakaoSdkStore';
import { createInitialMap, updateMap } from '@/utils/kakao.utils';
import type { LatLng } from './useCurrentLatLng';

export function useInitializeKakaoMap(latLng: LatLng) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<typeof window.kakao.maps.Map | null>(null);
  const markerRef = useRef<typeof window.kakao.maps.Marker | null>(null);

  const { isLoaded } = useKakaoSdkStore();

  useEffect(() => {
    if (!isLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const kakaoLatLng = new window.kakao.maps.LatLng(latLng.lat, latLng.lng);

      if (!mapInstanceRef.current) {
        createInitialMap(mapRef, mapInstanceRef, markerRef, kakaoLatLng);
      } else {
        updateMap(mapInstanceRef, markerRef, kakaoLatLng);
      }
    });
  }, [isLoaded, latLng]);

  return {
    mapRef,
  };
}
