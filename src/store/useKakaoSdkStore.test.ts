import { describe, expect, it } from "vitest";
import { useKakaoSdkStore } from "./useKakaoSdkStore";

describe("useKakaoSdkStore()", () => {
  it("초기 상태는 isLoaded가 false여야 한다", () => {
    expect(useKakaoSdkStore.getState().isLoaded).toBe(false);
  });

  it("sdkLoadSuccess 호출 시 isLoaded가 true여야 한다", () => {
    useKakaoSdkStore.getState().sdkLoadSuccess();
    expect(useKakaoSdkStore.getState().isLoaded).toBe(true);
  });

  it("sdkLoadFail 호출 시 isLoaded가 false여야 한다", () => {
    useKakaoSdkStore.getState().sdkLoadFail();
    expect(useKakaoSdkStore.getState().isLoaded).toBe(false);
  });
});
