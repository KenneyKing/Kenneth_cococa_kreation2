import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Kenneth_cococa_kreation2',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
