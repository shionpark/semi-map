import { useEffect, useRef } from "react";
import { useKakaoSdkStore } from "store/useKakaoSdkStore";

export function useInitializeKakaoMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const { sdkLoadSuccess, sdkLoadFail } = useKakaoSdkStore();
  const isSdkLoaded = useKakaoSdkStore((state) => state.isLoaded);

  useEffect(() => {
    if (!isSdkLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      new window.kakao.maps.Map(mapRef.current, options);
    });
  }, [isSdkLoaded]);

  return {
    mapRef,
    isSdkLoaded,
    sdkLoadSuccess,
    sdkLoadFail,
  };
}
