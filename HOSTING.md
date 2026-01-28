# Hosting recomendado para Mar Exclusive Yachts

El sitio usa **HTML, CSS, JS y PHP** (formulario de contacto con `php/send_mail.php`). Para buen rendimiento y que cargue rápido a tus clientes (sobre todo en EE.UU.), el hosting debería cumplir lo siguiente.

---

## Características recomendadas

| Característica | Por qué |
|----------------|---------|
| **PHP 8.0+** | Necesario para `php/send_mail.php` y PHPMailer |
| **Composer** (o vendor subido) | Para `vendor/` de PHPMailer; si no hay Composer, sube la carpeta `vendor/` |
| **HTTPS (SSL)** | Seguridad y mejor posicionamiento |
| **HTTP/2** | Carga más rápida de muchos recursos (HTML, CSS, JS, imágenes) |
| **Compresión (Gzip o Brotli)** | Menos datos por carga = menos tiempo |
| **SSD** | Discos rápidos = respuestas del servidor más rápidas |
| **CDN** (opcional) | Sirve estáticos (imágenes, CSS, JS, vídeos) desde servidores cercanos al usuario |
| **Servidor en EE.UU. o cercano** | Tu mercado principal es americano; menos latencia |

---

## Opciones concretas

### 1. **Vercel** (si cambias el formulario)

- **Ventajas:** Muy rápido, CDN global, HTTPS y HTTP/2, ideal para estáticos.
- **Limitación:** No soporta PHP. Hay que sustituir `php/send_mail.php` por:
  - Un servicio como [Formspree](https://formspree.io) o [Getform](https://getform.io), o
  - Una función serverless (p. ej. Vercel Function) que envíe el correo.
- **Buena opción** si priorizas velocidad y no te importa dejar de usar PHP para el formulario.

### 2. **Hosting compartido con PHP** (mantener formulario actual)

- **SiteGround** (planes Grow Big / GoGeek): PHP, HTTP/2, SSD, CDN (Cloudflare), buena relación rendimiento/precio.
- **A2 Hosting**: PHP, Turbo (LiteSpeed), opción de servidor en EE.UU.
- **Hostinger** (Business o superior): PHP, SSD, CDN, económico.
- **InMotion Hosting**: PHP, SSD, centros de datos en EE.UU.

Requisito: que permitan **Composer** o que subas la carpeta **`vendor/`** generada con `composer install` en tu PC.

### 3. **Cloudways** ( managed en la nube )

- **Ventajas:** PHP, MySQL, servidores en AWS/DO/ etc., más control y mejor rendimiento que compartido típico.
- **Ideal si:** Quieres más velocidad y estabilidad y puedes asumir un coste mayor (aprox. 14–26 USD/mes).

---

## Despliegue en tu hosting

1. **Subir los archivos** (todo el proyecto menos `node_modules/`).
2. **En el servidor (si tienen SSH):**
   - `composer install --no-dev` en la raíz (o subir `vendor/` ya generado).
   - `npm ci && npm run build:css` si quieres regenerar `css/tailwind.css`; si no, basta con subir el `css/tailwind.css` que está en el repo.
3. **Configurar `php/config.php`** a partir de `php/config.example.php` (SMTP, etc.). No subir claves en claro a repos públicos.
4. **Activando en el panel:**
   - HTTPS (Let’s Encrypt suele ser gratis).
   - Gzip/Brotli si la opción está disponible.
   - HTTP/2 si el plan lo permite.

---

## CDN opcional (Cloudflare, plan gratuito)

- Puedes poner **Cloudflare** delante de cualquier hosting (compartido, Vercel, etc.).
- Cachea imágenes, CSS, JS y vídeos en Edge, reduce carga al servidor y mejora tiempos de carga para usuarios en EE.UU. y otros países.
- Suele ser compatible con hosting PHP; solo hay que apuntar los DNS a Cloudflare.

---

## Resumen

- **Mantener PHP y formulario actual:**  
  Hosting compartido (SiteGround, A2, Hostinger, InMotion) o Cloudways, con PHP 8+, HTTPS, HTTP/2, SSD y, si puede ser, CDN o Cloudflare.

- **Máxima velocidad y no importa cambiar el formulario:**  
  Vercel (o Netlify) + Formspree/Getform (o función serverless para envío de correo) + Cloudflare si quieres una capa extra.

- **Recomendación práctica:**  
  SiteGround o A2 Hosting con servidor en EE.UU. + Cloudflare gratuito da un buen equilibrio de rendimiento, sencillez y coste sin tocar el código PHP del formulario.
