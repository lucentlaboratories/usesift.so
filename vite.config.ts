import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { reactGrab } from "react-grab/plugins/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Add react grab as a plugin
    reactGrab(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
