import { useEffect, useRef } from 'react';

import { LatLng } from './useCurrentLatLng';
import { useKakaoSdkStore } from '@/store/useKakaoSdkStore';
import { createCustomOverlay, createInitialMap } from '@/utils/kakao.utils';

export function useInitializeKakaoMap(latLng: LatLng) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { isLoaded } = useKakaoSdkStore();

  useEffect(() => {
    if (!isLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const { map, marker } = createInitialMap(mapRef, latLng);
      createCustomOverlay(map, marker);
    });
  }, [isLoaded, latLng]);

  return {
    mapRef,
  };
}
