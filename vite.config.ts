import { readdirSync } from 'node:fs';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

const postPages = readdirSync(new URL('./content/posts/', import.meta.url), { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.mdx?$/i.test(entry.name))
  .map(({ name }) => ({ path: `/blog/${encodeURIComponent(name.replace(/\.mdx?$/i, ''))}` }));

export default defineConfig({
  server: { port: 3000 },
  preview: { host: '127.0.0.1' },
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        autoStaticPathsDiscovery: false,
        failOnError: true,
      },
      pages: [{ path: '/' }, { path: '/blog' }, ...postPages],
    }),
    nitro(),
    react(),
  ],
});
