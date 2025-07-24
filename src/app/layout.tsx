"use client";

import "./globals.css";
import Script from "next/script";
import { useInitializeKakaoMap } from "@/hooks/useInitializeKakaoMap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sdkLoadSuccess, sdkLoadFail } = useInitializeKakaoMap();

  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`}
        onLoad={() => sdkLoadSuccess()}
        onError={() => sdkLoadFail()}
      />
    </html>
  );
}
