# Blogging Client

Blog y portafolio personal con TanStack Start, React, Material UI y artículos Markdown.

## Desarrollo

Usa Node.js 24 y pnpm 12. Puedes copiar `.env.example` a `.env` para configurar los enlaces públicos de GitHub, LinkedIn y correo.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Abre http://localhost:3000. Los artículos provienen de `content/posts/`.

## Producción

```sh
pnpm run lint
pnpm run build
pnpm start
```

El build genera HTML para la portada, el listado y los artículos publicados. El servidor de Nitro sirve los archivos generados y ejecuta las funciones que cargan contenido durante la navegación. La salida completa queda en `.output/`.

Configura las variables `VITE_*` antes de ejecutar el build.

## Docker

Con Docker Compose y Make instalados, ejecuta `make up` y abre http://localhost:3000. Para usar otro puerto, ejecuta `make up BLOG_PORT=3001`.

| Comando | Acción |
| --- | --- |
| `make up` | Compila la imagen de producción y arranca el blog en segundo plano. |
| `make stop` | Detiene el contenedor y lo conserva para el próximo arranque. |
| `make down` | Detiene y elimina el contenedor y la red de Compose. |

Si quieres personalizar los enlaces públicos, copia `.env.example` a `.env` y edita las variables `VITE_*`. Compose las pasa a la compilación de la imagen.
