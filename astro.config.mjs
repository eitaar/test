import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
//import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eitaar.dev',
  integrations: [mdx(), sitemap()],
  //output:'server',
  //adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});
