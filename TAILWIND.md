# Tailwind CSS (build, no CDN)

El proyecto usa Tailwind vía **build** (no CDN) para producción.

## Reconstruir el CSS

Cuando añadas o cambies clases de Tailwind en el HTML:

```bash
npm install
npm run build:css
```

(O `npm run build`). El resultado se genera en `css/tailwind.css`. Sube ese archivo al repo.

## En Vercel / despliegue

Si el despliegue ejecuta `npm run build`, el CSS se generará solo. Si no, debe estar ya commiteado `css/tailwind.css`.
