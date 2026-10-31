# Semi Map

현재 위치를 기준으로 주변 장소를 지도에 보여 주는 개인 프로젝트입니다. Next.js App Router에 Kakao 지도를 붙이고, 테스트와 CI를 함께 구성했습니다.

## 구현된 기능

- **현재 위치로 지도 초기화**: 브라우저 위치 정보로 지도의 중심을 내 위치에 맞춥니다.
- **커스텀 오버레이**: 현재 위치에 정보 오버레이를 표시합니다.
- **지도 SDK 로드 상태 관리**: `next/script`의 로드 이벤트를 Zustand 스토어로 공유해, SDK가 준비된 뒤에 지도를 초기화합니다.

## 예정

- 키워드 장소 검색과 마커 표시
- 장소 저장
- 현재 위치 반경 안의 장소 필터

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Map | Kakao Maps JavaScript API |
| State | Zustand |
| Styling | Tailwind CSS |
| Test | Vitest, Playwright |
| CI | GitHub Actions (린트, 유닛 테스트·타입 체크, E2E 테스트, Docker 이미지 빌드) |

## 폴더 구조

```bash
semi-map/
├── e2e/                  # Playwright E2E 테스트
├── src/
│   ├── app/              # App Router 페이지 (/, /map)
│   ├── components/       # KakaoMap, OverlayContent
│   ├── hooks/            # 현재 위치 조회, 지도 초기화
│   ├── store/            # Kakao SDK 로드 상태 (Zustand) + 테스트
│   ├── types/            # kakao 타입 선언
│   ├── utils/
│   ├── const/
│   └── styles/
└── .github/workflows/    # lint, test, playwright, docker
```

## 실행 방법

`.env.local`에 Kakao JavaScript 키를 넣습니다.

```bash
NEXT_PUBLIC_KAKAO_KEY=발급받은_JavaScript_키
```

```bash
pnpm install
pnpm dev          # 개발 서버
pnpm test:run     # 유닛 테스트
pnpm test:e2e     # E2E 테스트
```

## 관련 글

- [왜 Next.js에서 Kakao Map Script가 로드되지 않을까?](https://shion-blog.vercel.app/posts/nextjs-kakao-sdk-script)
