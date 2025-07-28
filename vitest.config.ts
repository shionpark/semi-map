import { defineConfig } from "@playwright/test";

export default defineConfig({
  test: {
    exclude: ["e2e", "e2e/**"],
  },
});
