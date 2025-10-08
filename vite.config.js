import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0', // escucha todas las interfaces
      port: 4321,
      allowedHosts: ['*.ngrok-free.app'], // comodín para cualquier subdominio de ngrok
    },
  },
});
