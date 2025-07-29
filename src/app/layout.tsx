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

  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
  if (!kakaoKey) {
    console.error("NEXT_PUBLIC_KAKAO_KEY environment variable is required");
  }

  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services&autoload=false`}
          onLoad={() => sdkLoadSuccess()}
          onError={() => sdkLoadFail()}
        />
      </body>
    </html>
  );
}
