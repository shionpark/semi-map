import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: [
      "node_modules",
      ".pnpm",
      "**/node_modules/**",
      "**/__tests__/**",
      "**/*.spec.ts",
      "**/*.test-d.ts",
      "e2e",
    ],
  },
});
