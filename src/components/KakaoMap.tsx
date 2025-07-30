'use client';

import { useInitializeKakaoMap } from '@/hooks/useInitializeKakaoMap';
import { styles } from '@/styles/index';

export default function KakaoMap() {
  const { mapRef } = useInitializeKakaoMap();

  return (
    <>
      <div data-testid="map" ref={mapRef} className={styles.map} />
    </>
  );
}
