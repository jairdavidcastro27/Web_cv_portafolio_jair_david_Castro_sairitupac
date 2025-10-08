import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0',           // permite conexiones externas
      port: 4321,                // tu puerto actual
      allowedHosts: 'all' // permite cualquier subdominio de Localtunnel
    },
  },
});
