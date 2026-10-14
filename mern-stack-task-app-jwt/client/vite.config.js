import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// Removed: import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  // We removed the dedicated Tailwind plugin here.
  // Vite will now rely on the postcss.config.cjs file to handle Tailwind and Autoprefixer.
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
