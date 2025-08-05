export function createMarker(
  map: typeof window.kakao.maps.Map,
  position: typeof window.kakao.map.LatLng
) {
  const marker = new window.kakao.maps.Marker({
    position,
  });
  marker.setMap(map);
}
