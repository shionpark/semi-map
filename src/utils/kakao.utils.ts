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
