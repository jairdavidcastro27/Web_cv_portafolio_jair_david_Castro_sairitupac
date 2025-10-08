import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: true,     // escucha todas las interfaces
      port: 4321,
      strictPort: true,
      hmr: { host: 'localhost' }, // importante para que HMR funcione
      allowedHosts: 'all',        // debería permitir cualquier host
    },
  },
});
