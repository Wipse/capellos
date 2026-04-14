import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';

// loadEnv reads .env files (local dev); process.env is used on Netlify/CI
const fileEnv = loadEnv('production', process.cwd(), '');
const get = (key) => fileEnv[key] || process.env[key] || '';

// Debug: log which values are resolved (visible in Netlify deploy log)
console.log('[capellos] SANITY_STUDIO_PROJECT_ID =', get('SANITY_STUDIO_PROJECT_ID') || '(LEEG!)');
console.log('[capellos] SANITY_STUDIO_DATASET    =', get('SANITY_STUDIO_DATASET') || '(LEEG!)');

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [
    sanity({
      projectId: get('SANITY_STUDIO_PROJECT_ID'),
      dataset: get('SANITY_STUDIO_DATASET'),
      useCdn: false, // for static builds
      visualEditing: {
        token: get('SANITY_STUDIO_VIEWER_TOKEN'),
        studioUrl: get('SANITY_STUDIO_URL'),
        stega: true
      }
    }),
  ],
});