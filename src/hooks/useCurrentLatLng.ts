'use client';

import { useEffect } from 'react';

import type { LatLng } from '@/types/location';
import { useLocationStore } from '@/store/useLocationStore';

/**
 * 브라우저 GeoLocation 권한을 요청하고 좌표/에러 정보를 Zustand 스토어에 저장한다.
 * 권한 요청은 'idle' 상태일 때 한 번만 수행하며, 허용/거부/오류에 따라 status를 갱신해
 * 여러 컴포넌트가 동일한 위치 상태를 안전하게 공유할 수 있도록 한다.
 *
 * @returns 현재 좌표(latLng), 권한/로딩 상태(status), 에러 메시지(error)
 */

export function useCurrentLatLng() {
  const {
    currentLatLng,
    permissionStatus,
    error,
    setCurrentLatLng,
    setPermissionStatus,
    setError,
  } = useLocationStore();

  useEffect(() => {
    if (permissionStatus !== 'idle') return;

    if (!navigator.geolocation) {
      setError('Geolocation을 지원하지 않는 브라우저입니다.');
      setPermissionStatus('error');
      return;
    }

    setPermissionStatus('loading');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextLatLng: LatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setCurrentLatLng(nextLatLng);
        setError(null);
        setPermissionStatus('granted');
      },
      () => {
        setError('위치 정보를 가져오는 데 실패했습니다.');
        setPermissionStatus('denied');
      }
    );
  }, [permissionStatus, setCurrentLatLng, setError, setPermissionStatus]);

  return {
    latLng: currentLatLng,
    status: permissionStatus,
    error,
  };
}
