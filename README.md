# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌐 Ngrok / Acceso remoto

Este proyecto permite exponer el servidor de desarrollo mediante ngrok. Para evitar errores de host bloqueado ("Este host no está permitido"), se configuró `vite.config.js` para aceptar:

- Una lista de subdominios previos de ngrok.
- Un host dinámico definido por variable de entorno `NGROK_HOST`.

### Uso recomendado

1. Inicia un túnel con ngrok, por ejemplo:
	```sh
	ngrok http 4321
	```
2. Copia el host generado, por ejemplo: `abcd1234ef.ngrok-free.app`.
3. En PowerShell (Windows) ejecuta:
	```powershell
	$env:NGROK_HOST="abcd1234ef.ngrok-free.app"; npm run dev
	```
4. Abre en el navegador: `https://abcd1234ef.ngrok-free.app`.

Si el subdominio cambia, sólo vuelve a exportar la variable antes de ejecutar `npm run dev`.

### Alternativa (editar archivo)

También puedes abrir `vite.config.js` y añadir el nuevo host manualmente al array `staticNgrokHosts`.

### Nota de seguridad

Evita permitir todos los `*.ngrok-free.app` si no es necesario; limitar hosts concretos reduce superficie de ataque.

