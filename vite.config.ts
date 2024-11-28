import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()],
  server: {
    open: true,
    host: true,
    port: 3001,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "antd"],
  }
})
