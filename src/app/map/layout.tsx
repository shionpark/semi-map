"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

import {
  sdkLoadFail,
  sdkLoadSuccess,
  selectSdkLoaded,
} from "features/kakaoMap/kakaoMapSlice";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { styles } from "@/styles/index";

export default function MapLayout({ children }: { children: React.ReactNode }) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const sdkLoaded = useAppSelector(selectSdkLoaded);

  useEffect(() => {
    console.log("sdkLoaded changed:", sdkLoaded);

    if (!sdkLoaded || !window.kakao?.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current, options);
    });
  }, [sdkLoaded]);

  return (
    <>
      <div ref={mapRef} className={styles.map} />
      {children}
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => dispatch(sdkLoadSuccess())}
        onError={() => dispatch(sdkLoadFail())}
      />
    </>
  );
}
