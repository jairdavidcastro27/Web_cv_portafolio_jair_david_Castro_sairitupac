import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      strictPort: true,
      allowedHosts: ['all', 'miastro.loca.lt', 'localhost'],
      hmr: {
        host: 'miastro.loca.lt',
        protocol: 'wss',
      },
    },
  },
});
