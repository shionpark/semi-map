import { configureStore } from "@reduxjs/toolkit";
import kakaoMapReducer from "../features/kakaoMap/kakaoMapSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      kakaoMap: kakaoMapReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
