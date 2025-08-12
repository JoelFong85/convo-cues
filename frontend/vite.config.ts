import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: path.resolve(__dirname, "../backend/wwwroot"),
    emptyOutDir: true,
  },
});
