import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["vitest-setup/vitest.setup.ts"],
    coverage: {
      provider: "v8",
    },
    exclude: [
      ...configDefaults.exclude,
      "**/tests/integration/**",
      "**/tests/e2e/**",
    ],
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
