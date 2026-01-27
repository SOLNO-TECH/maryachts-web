# Cómo poner el logo de Mar Exclusive Yachts en el favicon (el "mundito" de Google)

El favicon que aparece junto a tu enlace en los resultados de búsqueda de Google se genera a partir de estos archivos en tu sitio:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

## Pasos para usar tu logo

1. **Usa [RealFaviconGenerator.net](https://realfavicongenerator.net/)**
   - Sube tu `logo.png`
   - Ajusta cómo se ve en cada tamaño (recorte, fondo, etc.)
   - Descarga el paquete que genera

2. **Reemplaza los archivos** en la raíz del sitio:
   - Sustituye `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
   - Sustituye `apple-touch-icon.png`
   - Sustituye `android-chrome-192x192.png` y `android-chrome-512x512.png`

3. **Sube los cambios** a tu servidor y espera unos días. Google puede tardar en actualizar el favicon en los resultados.

Los enlaces en `index.html` ya apuntan a estos archivos; solo hay que reemplazar el contenido por versiones hechas con tu logo.

---

## Cambiar la foto del jetski por una de yate en Google

Si **no tienes anuncios de pago**, la miniatura que sale en Google puede venir de dos sitios:

### 1. Ficha local / panel de “Mar Exclusive Yachts” (Llamar, Sitio web, Fotos…)

Esa foto la controla **Google Business Profile** (antiguo “Mi Negocio”).
Ahí es muy probable que esté el jetski: o lo subiste tú o Google la tomó de la web.

**Qué hacer:**

1. Entra en [Google Business Profile](https://business.google.com/).
2. Abre la ficha de **Mar Exclusive Yachts** → **Fotos**.
3. Sube una foto de un yate (p. ej. `92 President/3.jpg`, `85 Azimut/85 Azimut HT 1.jpg`).
4. **Ponla como foto de portada / principal** para que sea la que se vea en la ficha.

### 2. Miniatura en el enlace de tu web (resultado orgánico)

Para el **enlace a marexclusiveyachts.com** en los resultados normales (sin “Patrocinado”), Google puede usar:

- La imagen que indicamos en la web (**og:image**), que ya está puesta como una del **92' President**, no el jetski.
- O alguna imagen que encuentre en la página.

En la web ya está configurado que la **imagen principal** (og:image y redes sociales) sea una del 92' President. Además, la imagen del jetski en la sección Servicios está marcada como secundaria (`fetchpriority="low"`) para que Google no la priorice como imagen del resultado.

**Si sigue saliendo el jetski:**

- Google puede tardar días o semanas en volver a rastrear la página. Cuando lo haga, debería usar más la del yate.
- Comprueba que los cambios de la web estén **publicados en marexclusiveyachts.com** (no solo en local).
- Si la miniatura que ves está **dentro del panel de “Mar Exclusive Yachts”** (junto a Llamar, Sitio web, etc.), esa es la de **Google Business Profile** del punto 1; cámbiala ahí.
