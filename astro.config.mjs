// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Svelte renderer to support Svelte components.
  buildOptions: {
    site: 'https://tutors-dev.netlify.app',
  },
  renderers: ['@astrojs/renderer-svelte'],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
});
