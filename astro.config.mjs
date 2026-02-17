// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      JSON_ACCESS_KEY: envField.string({context: "server", access: "secret"}),
      JSON_URL: envField.string({context: "server", access: "secret"})
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://portfolioo.ryntryna.my.id',
  integrations: [sitemap()]
});