import { test, expect } from '@playwright/test';

test('제목이 있는가?', async ({ page }) => {
  await page.goto('/');

  const heading = page.getByRole('heading', { name: 'Semi Map' });
  await expect(heading).toBeVisible();
});

test('링크 클릭하여 페이지 이동', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: /지도/ }).click();
  await expect(page).toHaveURL('/map');
});

test('카카오 지도가 정상적으로 로드되는가?', async ({ page }) => {
  await page.goto('/map', { waitUntil: 'networkidle' });

  await page.waitForSelector('[data-testid="map"]', { timeout: 10000 });

  const map = page.locator('[data-testid="map"]');
  await expect(map).toBeVisible();
});
