"use client";

import Script from "next/script";
import { useSdkLoad } from "@/hooks/useSdkLoad";
import { styles } from "@/styles/index";

export default function MapLayout({ children }: { children: React.ReactNode }) {
  const { mapRef, scriptLoadSuccess, scriptLoadFail } = useSdkLoad();

  return (
    <>
      <div ref={mapRef} className={styles.map} />
      {children}
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`}
        onLoad={scriptLoadSuccess}
        onError={scriptLoadFail}
      />
    </>
  );
}
