import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    stylex.vite({ devMode: "full", aliases: { "@/*": [new URL("./src/*", import.meta.url).pathname] } }),
    react(),
  ],
});
