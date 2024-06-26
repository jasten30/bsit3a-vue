import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  css: { devSourcemap: true },
  plugins: [vue()],
  server: { fs: { allow: ["./"] }, port: 3000 },
});
