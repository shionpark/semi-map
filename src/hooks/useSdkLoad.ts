import { useEffect, useRef } from "react";
import {
  sdkLoadFail,
  sdkLoadSuccess,
  selectSdkLoaded,
} from "features/kakaoMap/kakaoMapSlice";
import { useAppDispatch, useAppSelector } from "lib/hooks";

export function useSdkLoad() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const sdkLoaded = useAppSelector(selectSdkLoaded);
  const dispatch = useAppDispatch();

  const scriptLoadSuccess = () => dispatch(sdkLoadSuccess());
  const scriptLoadFail = () => dispatch(sdkLoadFail());

  useEffect(() => {
    if (!sdkLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current, options);
    });
  }, [sdkLoaded]);

  return {
    mapRef,
    scriptLoadSuccess,
    scriptLoadFail,
  };
}
