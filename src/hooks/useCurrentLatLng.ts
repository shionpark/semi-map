'use client';

import { useEffect, useState } from 'react';

export interface LatLng {
  lat: number;
  lng: number;
}

export function useCurrentLatLng() {
  const [latLng, setLatLng] = useState<LatLng | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation을 지원하지 않는 브라우저입니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatLng({ lat: latitude, lng: longitude });
      },
      () => {
        setError('위치 정보를 가져오는 데 실패했습니다.');
      }
    );
  }, []);

  return { latLng, error };
}
