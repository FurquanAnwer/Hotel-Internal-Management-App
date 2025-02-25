import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });



export default defineConfig({
  plugins: [react(),eslint()],
  server: {
    historyApiFallback: true, // Ensures Vite's dev server supports SPA routing
  },
  build: {
    outDir: 'dist', // Ensure it's set correctly
  }
});
