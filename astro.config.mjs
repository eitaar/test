import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
//import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://eitaar.dev',
  integrations: [mdx(), sitemap(), icon()],
  output: 'static',
  //adapter: cloudflare(),
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});