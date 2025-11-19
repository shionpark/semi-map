'use client';

import { DEFAULT_LAT, DEFAULT_LNG } from '@/const';
import { useCurrentLatLng } from '@/hooks/useCurrentLatLng';
import { useInitializeKakaoMap } from '@/hooks/useInitializeKakaoMap';
import { styles } from '@/styles/index';

export default function KakaoMap() {
  const { latLng, status, error } = useCurrentLatLng();
  const fallbackLatLng = latLng ?? { lat: DEFAULT_LAT, lng: DEFAULT_LNG };
  const { mapRef } = useInitializeKakaoMap(fallbackLatLng);

  const isLoadingLocation = status === 'loading';
  const isPermissionDenied = status === 'denied';
  const isErrorState = status === 'error';

  return (
    <div className="flex flex-col">
      <div className={styles.mapContainer}>
        <div data-testid="map" ref={mapRef} className={styles.map} />
        {isLoadingLocation && (
          <div className={styles.spinner}>현재 위치를 불러오는 중…</div>
        )}
      </div>

      {isPermissionDenied && !error && (
        <span className={styles.infoText}>
          위치 권한이 거부되어 기본 위치(서울 시청)를 기준으로 지도를 표시합니다.
        </span>
      )}

      {isErrorState && error && (
        <span className={styles.errorText}>{error}</span>
      )}
    </div>
  );
}
