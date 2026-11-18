// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// The company's website: static pages served by GitHub Pages at the company's own domain (public/CNAME).
export default defineConfig({
  site: 'https://kpktrinextechnologies.in',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
