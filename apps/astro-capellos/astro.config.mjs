import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';

const env = loadEnv('production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [
    sanity({
      projectId: env.SANITY_STUDIO_PROJECT_ID,
      dataset: env.SANITY_STUDIO_DATASET,
      useCdn: false, // for static builds
      visualEditing: {
        token: env.SANITY_STUDIO_VIEWER_TOKEN,
        studioUrl: env.SANITY_STUDIO_URL,
        stega: true
      }
    }),
  ],
});