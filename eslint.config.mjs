import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    stylistic: true,
    typescript: true,
    astro: true,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.astro/**',
      '**/.turbo/**',
      '**/build/**',
      '**/.sanity/**',
    ],
  },
  // Tailwind rules
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'cn'],
        whitelist: [],
        // Disable config requirement for Tailwind v4 (uses CSS imports)
        config: false,
      },
    },
    rules: {
      // Tailwind warnings instead of errors (v4 uses different approach)
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
    },
  },
)
