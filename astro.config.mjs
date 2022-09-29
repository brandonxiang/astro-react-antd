import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import styleImport, { AntdResolve } from 'vite-plugin-style-import';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [
      styleImport({
        resolves: [AntdResolve()],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  }
});