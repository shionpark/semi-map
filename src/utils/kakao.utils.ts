import React, { RefObject } from 'react';
import { createRoot } from 'react-dom/client';
import OverlayContent from '@/components/OverlayContent';

export function createInitialMap(mapRef: RefObject<HTMLDivElement | null>) {
  const currentPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

  const map = new window.kakao.maps.Map(mapRef.current, {
    center: currentPosition,
    level: 3,
  });

  const marker = new window.kakao.maps.Marker({
    map,
    position: currentPosition,
  });

  return {
    map,
    marker,
  };
}

export function createCustomOverlay(
  map: typeof window.kakao.maps.Map,
  marker: typeof window.kakao.map.Marker
) {
  const container = document.createElement('div');

  const overlay = new window.kakao.maps.CustomOverlay({
    content: container,
    position: marker.getPosition(),
  });

  const onClose = () => overlay.setMap(null);

  const element = React.createElement(OverlayContent, { onClose });
  createRoot(container).render(element);

  window.kakao.maps.event.addListener(marker, 'click', function () {
    overlay.setMap(map);
  });
}

export function getCurrentLatLng() {
  navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMsg);

  function showYourLocation(position: any) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    console.log(userLat, userLng); // 확인 완료
  }

  function showErrorMsg(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log(
          '⚠️ 사용자가 Geolocation API의 사용 요청을 거부하였습니다.'
        );
        break;

      case error.POSITION_UNAVAILABLE:
        console.log('⚠️ 가져온 위치 정보를 사용할 수 없습니다.');
        break;

      case error.TIMEOUT:
        console.log(
          '⚠️ 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했습니다.'
        );
        break;

      case error.UNKNOWN_ERROR:
        console.log('⚠️ 알 수 없는 오류가 발생했습니다.');
        break;
    }
  }
}
