import { useEffect, useRef } from 'react';

import { createCustomOverlay } from '@/utils/kakao.utils';
import { useKakaoSdkStore } from '@/store/useKakaoSdkStore';

export function useInitializeKakaoMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { isLoaded } = useKakaoSdkStore();

  useEffect(() => {
    if (!isLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const currentPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      );

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: currentPosition,
        level: 3,
      });

      const marker = new window.kakao.maps.Marker({
        map,
        position: currentPosition,
      });

      createCustomOverlay(map, marker);
    });
  }, [isLoaded]);

  return {
    mapRef,
  };
}
