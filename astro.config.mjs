// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucashgrifoni.github.io',
  // Repositório github.com/lucashgrifoni/lucashgrifoni → Pages em /lucashgrifoni/
  base: '/lucashgrifoni/',
  output: 'static',
  vite: {
    // Keep the pre-Vite 8 CSS browser target: newer defaults emit range media
    // queries (width>=768px) that Safari < 16.4 ignores.
    build: { cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'] },
  },
});
