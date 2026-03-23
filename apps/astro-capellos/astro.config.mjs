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
      projectId: import.meta.env.SANITY_PROJECT_ID,
      dataset: import.meta.env.SANITY_DATASET,
      useCdn: false, // for static builds
      visualEditing: {
        token: import.meta.env.SANITY_VIEWER_TOKEN,
        studioUrl: import.meta.env.SANITY_STUDIO_URL,
        stega: true
      }
    }),
  ],
});