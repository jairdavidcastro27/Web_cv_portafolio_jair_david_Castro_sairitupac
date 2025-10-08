// Configuración de Vite para permitir hosts dinámicos de ngrok.
// Modo recomendado: establecer la variable de entorno NGROK_HOST al lanzar el dev server.
// Ejemplo (PowerShell): $env:NGROK_HOST="abcd1234ef.ngrok-free.app"; npm run dev
// Fallback: lista de hosts vistos anteriormente.

const staticNgrokHosts = [
  'b33eea26e117.ngrok-free.app', // host previo / actual
  'e4fc4ecba498.ngrok-free.app', // host previo
];

// Lee variable de entorno si está definida
const envHost = process.env.NGROK_HOST?.trim();

// Construye lista final sin duplicados
const allowed = Array.from(new Set([
  ...staticNgrokHosts,
  ...(envHost ? [envHost] : []),
]));

// (Opcional avanzado) Permitir TODOS los subdominios *.ngrok-free.app (menos seguro):
// Usa bajo tu propio riesgo. Requiere experimental.allowedUris.
// export default { experimental: { allowedUris: [/https?:\\/\\/([a-z0-9-]+)\\.ngrok-free\\.app/] }, server: { allowedHosts: allowed } };

export default {
  server: {
    allowedHosts: allowed,
  },
};
