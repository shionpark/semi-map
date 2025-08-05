import React, { type RefObject } from 'react';
import { createRoot } from 'react-dom/client';
import OverlayContent from '@/components/OverlayContent';

export function createInitialMap(
  mapRef: RefObject<HTMLDivElement | null>,
  mapInstanceRef: typeof window.kakao.maps.Map | null,
  markerRef: typeof window.kakao.maps.Marker | null,
  kakaoLatLng: typeof window.kakao.maps.LatLng
) {
  const map = new window.kakao.maps.Map(mapRef.current, {
    center: kakaoLatLng,
    level: 3,
  });
  mapInstanceRef.current = map;

  const marker = new window.kakao.maps.Marker({
    map,
    position: kakaoLatLng,
  });
  markerRef.current = marker;

  createCustomOverlay(map, marker);
}

export function updateMap(
  mapInstanceRef: typeof window.kakao.maps.Map | null,
  markerRef: typeof window.kakao.maps.Marker | null,
  kakaoLatLng: typeof window.kakao.maps.LatLng
) {
  mapInstanceRef.current.setCenter(kakaoLatLng);
  markerRef.current?.setPosition(kakaoLatLng);
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
