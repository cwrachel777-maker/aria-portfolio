import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from 'fs';

// https://vite.dev/config/
export default defineConfig({
  base: '/aria-portfolio/',
  build: {
    sourcemap: false,
    assetsInlineLimit: 0,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'copy-404',
      closeBundle: () => {
        copyFileSync('docs/index.html', 'docs/404.html');
      },
    },
  ],
})
