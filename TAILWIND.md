# Tailwind CSS (build, no CDN)

El proyecto usa Tailwind vía **build** (no CDN) para producción.

## Reconstruir el CSS

Cuando añadas o cambies clases de Tailwind en el HTML:

```bash
npm install
npm run build:css
```

(O `npm run build`). El resultado se genera en `css/tailwind.css`. Sube ese archivo al repo.

## En despliegue (Docker, CI, etc.)

Con el `Dockerfile` del repo, la imagen ejecuta `npm run build:css` y genera `css/tailwind.css` en el build. Si despliegas sin Docker, commitea `css/tailwind.css` o ejecuta `npm run build:css` en el servidor antes de publicar.
