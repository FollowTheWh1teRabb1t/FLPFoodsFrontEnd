import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-browserify"; // Use path-browserify em vez de path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("src"), // Corrigido para usar o path-browserify
    },
  },
});
