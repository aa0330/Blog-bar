import path from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path";


export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/static/icons")], 
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), 
    },
  },
});
