'use client';

import './globals.css';
import Script from 'next/script';
import { useKakaoSdkStore } from '@/store/useKakaoSdkStore';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sdkLoadSuccess, sdkLoadFail } = useKakaoSdkStore();

  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
  if (!kakaoKey) {
    console.error('NEXT_PUBLIC_KAKAO_KEY environment variable is required');
    return (
      <html lang="en">
        <body>
          <p className="text-red-500">
            환경 변수가 설정되지 않아 지도를 불러올 수 없습니다.
          </p>
        </body>
      </html>
    );
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
