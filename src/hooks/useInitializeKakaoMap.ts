import { useEffect, useRef } from 'react';

import { createCustomOverlay, createInitialMap } from '@/utils/kakao.utils';
import { useKakaoSdkStore } from '@/store/useKakaoSdkStore';

export function useInitializeKakaoMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { isLoaded } = useKakaoSdkStore();

  useEffect(() => {
    if (!isLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const { map, marker } = createInitialMap(mapRef);

      createCustomOverlay(map, marker);
    });
  }, [isLoaded]);

  return {
    mapRef,
  };
}
