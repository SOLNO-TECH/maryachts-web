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

### 1. **Hosting compartido con PHP** (mantener formulario actual)

- **SiteGround** (planes Grow Big / GoGeek): PHP, HTTP/2, SSD, CDN (Cloudflare), buena relación rendimiento/precio.
- **A2 Hosting**: PHP, Turbo (LiteSpeed), opción de servidor en EE.UU.
- **Hostinger** (Business o superior): PHP, SSD, CDN, económico.
- **InMotion Hosting**: PHP, SSD, centros de datos en EE.UU.

Requisito: que permitan **Composer** o que subas la carpeta **`vendor/`** generada con `composer install` en tu PC.

### 2. **Cloudways** ( managed en la nube )

- **Ventajas:** PHP, MySQL, servidores en AWS/DO/ etc., más control y mejor rendimiento que compartido típico.
- **Ideal si:** Quieres más velocidad y estabilidad y puedes asumir un coste mayor (aprox. 14–26 USD/mes).

### 3. **Tu propia VPS con “hosting compartido”** (varias webs, tu control total)

- **Ventajas:** Un solo servidor para Mar Exclusive Yachts y el resto de tus webs; coste fijo (p. ej. 5–10 USD/mes en DigitalOcean, Vultr, etc.).
- **Sin IP fija:** Si la VPS tiene IP estática (lo habitual), apuntas los dominios (A) a esa IP. Si estuvieras en casa sin IP fija, se usa **Dynamic DNS** (DuckDNS, No-IP, Cloudflare) y CNAME desde tus dominios.
- **Panel tipo hosting:** [HestiaCP](https://www.hestiacp.com), [aaPanel](https://www.aapanel.com) o [CyberPanel](https://cyberpanel.net) para añadir dominios, PHP, SSL (Let's Encrypt) y varios sitios sin tocar mucho la terminal.
- **Guía detallada:** Ver **[VPS-HOSTING-COMPARTIDO.md](./VPS-HOSTING-COMPARTIDO.md)** en este repo.

### 4. **VPS con Dokploy (Docker)** (mismo stack: HTML + PHP + formulario)

- **Ventajas:** Un contenedor con PHP 8 + Apache; el `Dockerfile` compila Tailwind e instala dependencias con Composer (PHPMailer).
- **Puerto interno del contenedor:** `80` (no uses el 3000 por defecto de apps Node).
- **Dominio:** En Dokploy, al añadir el dominio, configura **Container port** / puerto del contenedor en **80**.
- **`php/config.php`:** No debe subirse al repo con secretos. En el servidor, créalo desde `php/config.example.php` o móntalo como volumen/archivo en Dokploy.

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

- Puedes poner **Cloudflare** delante de cualquier hosting (compartido, VPS, etc.).
- Cachea imágenes, CSS, JS y vídeos en Edge, reduce carga al servidor y mejora tiempos de carga para usuarios en EE.UU. y otros países.
- Suele ser compatible con hosting PHP; solo hay que apuntar los DNS a Cloudflare.

---

## Resumen

- **Mantener PHP y formulario actual:**  
  Hosting compartido (SiteGround, A2, Hostinger, InMotion), Cloudways, o **VPS + Dokploy** con el `Dockerfile` del repo, con PHP 8+, HTTPS, HTTP/2, SSD y, si puede ser, CDN o Cloudflare.

- **Recomendación práctica:**  
  SiteGround o A2 Hosting con servidor en EE.UU. + Cloudflare gratuito da un buen equilibrio de rendimiento, sencillez y coste sin tocar el código PHP del formulario.
