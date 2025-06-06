import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from 'fs';

// https://vite.dev/config/
export default defineConfig({
  base: "/HT_portfolio/",
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        copyFileSync('public/404.html', 'dist/404.html');
      }
    }
  ],
});
