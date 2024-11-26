import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { visualizer } from "rollup-plugin-visualizer";
import * as path from "path";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      isProduction &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
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
    },
  };
});
