import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [
    sanity({
      projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '26834z8k',
      dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
      useCdn: false, // for static builds
      visualEditing: {
        token: process.env.SANITY_STUDIO_VIEWER_TOKEN ?? '',
        studioUrl: process.env.SANITY_STUDIO_URL ?? 'http://localhost:4321',
        stega: true
      }
    }),
  ],
});