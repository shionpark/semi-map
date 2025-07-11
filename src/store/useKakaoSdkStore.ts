import { create } from "zustand";

interface MapSdkState {
  isLoaded: boolean;
  sdkLoadSuccess: () => void;
  sdkLoadFail: () => void;
}

export const useKakaoSdkStore = create<MapSdkState>((set) => ({
  isLoaded: false,
  sdkLoadSuccess: () => set(() => ({ isLoaded: true })),
  sdkLoadFail: () => set(() => ({ isLoaded: false })),
}));

export const useKakaoSdkLoaded = () =>
  useKakaoSdkStore((state) => state.isLoaded);
