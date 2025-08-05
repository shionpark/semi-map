'use client';

import { DEFAULT_LAT, DEFAULT_LNG } from '@/const';
import { useCurrentLatLng } from '@/hooks/useCurrentLatLng';
import { useInitializeKakaoMap } from '@/hooks/useInitializeKakaoMap';
import { styles } from '@/styles/index';

export default function KakaoMap() {
  const { latLng, error } = useCurrentLatLng();
  const { mapRef } = useInitializeKakaoMap(
    latLng ?? { lat: DEFAULT_LAT, lng: DEFAULT_LNG }
  );

  return (
    <>
      <div data-testid="map" ref={mapRef} className={styles.map} />
      {error && <span>{error}</span>}
    </>
  );
}
