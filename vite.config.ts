/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test.setup.ts"
  }
});
