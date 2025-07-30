# Semi Map

사용자의 현재 위치와 저장된 장소를 지도에 시각화하는 장소 기록 서비스

<!--
<img src="./public/thumbnail.png" /> 스크린샷 이미지 경로 예시
-->

## 기술 스택

| Category      | Tech                 |
| ------------- | -------------------- |
| Framework     | Next.js (App Router) |
| Language      | TypeScript           |
| Map API       | Kakao Map API        |
| Styling       | Tailwind CSS         |
| State Mgmt    | Zustand              |
| Data Fetching | React Query          |
| Deployment    | Vercel               |

## 주요 기능

- **현재 위치 확인**: 브라우저 위치 정보를 기반으로 내 위치를 지도에 표시
- **장소 검색 및 마커 표시**: 키워드 기반 Kakao 장소 검색 및 마커 표시
- **장소 저장**: 사용자가 장소를 저장하여 지도에 표시
- **2km 이내 장소 필터링**: 현재 위치 기준 반경 2km 내 장소 필터
- **커스텀 오버레이**: 장소에 대한 정보 및 메모를 오버레이로 출력

## 폴더 구조

```bash
semi-map/
├── .storybook/             # Storybook 설정 디렉토리
│   ├── main.ts             # 스토리북 설정
│   ├── preview.ts          # 전역 스타일, 데코레이터 등
│   └── tsconfig.json       # (옵션) 타입 설정
├── public/
├── src/
│   ├── components/         # 앱 내 공통 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   └── ...
│   ├── pages/              # Next.js 페이지
│   ├── hooks/
│   └── styles/
│       └── globals.css
├── package.json
└── tsconfig.json
```

## 실행 방법

```bash
# 설치
pnpm install

# 개발 서버 실행
pnpm dev
```
