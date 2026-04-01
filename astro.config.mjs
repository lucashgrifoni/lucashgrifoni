// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucashgrifoni.github.io',
  // Repositório github.com/lucashgrifoni/lucashgrifoni → Pages em /lucashgrifoni/
  base: '/lucashgrifoni/',
  output: 'static',
  integrations: [tailwind()],
});
