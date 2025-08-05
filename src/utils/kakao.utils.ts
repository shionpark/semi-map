export function createMarker(
  map: typeof window.kakao.maps.Map,
  position: typeof window.kakao.map.LatLng
) {
  const marker = new window.kakao.maps.Marker({
    map,
    position,
  });
  return marker;
}

export function createCustomOverlay(
  map: typeof window.kakao.maps.Map,
  marker: typeof window.kakao.map.Marker
) {
  const content =
    '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            카카오 스페이스닷원' +
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
    '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
    '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

  const overlay = new window.kakao.maps.CustomOverlay({
    content: content,
    // map: map,
    position: marker.getPosition(),
  });

  window.kakao.maps.event.addListener(marker, 'click', function () {
    overlay.setMap(map);
  });

  // function closeOverlay() {
  //   overlay.setMap(null);
  // }
}
