import { test, expect } from "@playwright/test";

test("제목이 있는가?", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Semi Map/);
});

test("링크 클릭하여 페이지 이동", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /지도/ }).click();
});

test("카카오 지도가 정상적으로 로드되는가?", async ({ page }) => {
  await page.goto("/map");

  // DOM에 #map 요소가 생길 때까지 기다림
  await page.waitForSelector("#map", { timeout: 15000 });

  // 이제 보이는지 확인
  await expect(page.locator("#map")).toBeVisible();
  // await expect(page.locator("#map")).toBeVisible({ timeout: 10000 });
});

test("카카오 지도 로딩 확인", async ({ page }) => {
  await page.goto("/map", { waitUntil: "networkidle" });

  await page.waitForSelector('[data-testid="map"]', { timeout: 10000 });

  const map = page.locator('[data-testid="map"]');
  await expect(map).toBeVisible();
});
