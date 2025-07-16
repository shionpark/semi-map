"use client";

import Script from "next/script";
import { useInitializeKakaoMap } from "@/hooks/useInitializeKakaoMap";
import { styles } from "@/styles/index";

export default function KakaoMap() {
  const { mapRef, sdkLoadSuccess, sdkLoadFail } = useInitializeKakaoMap();

  return (
    <>
      <div id="map" data-testid="map" ref={mapRef} className={styles.map} />
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`}
        onLoad={() => sdkLoadSuccess()}
        onError={() => sdkLoadFail()}
      />
    </>
  );
}
