import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "lib/store";

export interface KakaoMapState {
  isLoad: boolean;
}

const initialState: KakaoMapState = {
  isLoad: false,
};

const kakaoMapSlice = createSlice({
  name: "kakaoMap",
  initialState,
  reducers: {
    sdkLoadSuccess: (state) => {
      state.isLoad = true;
    },
    sdkLoadFail: (state) => {
      state.isLoad = false;
    },
  },
});

export const { sdkLoadSuccess, sdkLoadFail } = kakaoMapSlice.actions;

export const selectSdkLoaded = (state: RootState) => state.kakaoMap.isLoad;

export default kakaoMapSlice.reducer;
