'use client';

export default function OverlayContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative bottom-10 left-[-150px] w-[300px] rounded border border-gray-300 bg-white text-sm shadow-md font-sans">
      <div className="p-2">
        <div className="relative flex items-center justify-between bg-gray-100 px-3 py-1 text-base font-bold border-b border-gray-200">
          카카오 스페이스닷원
          <button
            title="닫기"
            className="close absolute top-1 right-1 h-5 w-5 text-gray-500 hover:text-black"
            onClick={() => onClose()}
          >
            ✕
          </button>
        </div>
        <div className="flex p-2">
          <div className="mr-2 shrink-0">
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png"
              alt="thumbnail"
              className="w-[73px] h-[70px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-xs text-gray-700">
            <div className="truncate">제주특별자치도 제주시 첨단로 242</div>
            <div className="truncate text-gray-500">
              (우) 63309 (지번) 영평동 2181
            </div>
            <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                홈페이지
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
