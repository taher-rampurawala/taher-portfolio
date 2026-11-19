import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@/..." → src/ (root-relative, so no Node path APIs are needed)
      "@": "/src",
    },
  },
  server: {
    port: 5174, // 5173 is used by the GSAP_Portfolio template
    strictPort: true,
  },
});
