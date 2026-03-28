# Hosting compartido en tu propia VPS

Guía para montar un “mini hosting” en una VPS y alojar varias webs (incluida Mar Exclusive Yachts) cuando **no tienes IP pública fija** o quieres usar un nombre que no dependa de la IP.

---

## 1. Aclaración: IP fija vs dinámica

| Situación | ¿Tienes IP fija? | Qué hacer |
|-----------|------------------|-----------|
| **VPS** (DigitalOcean, Linode, Vultr, OVH, Hetzner, etc.) | **Sí.** La VPS suele tener una IP estática asignada. | Apuntar tus dominios (registro **A**) a esa IP. No necesitas DDNS. |
| **Conexión de casa** (fibra, ADSL) | **No.** La IP suele cambiar cada X tiempo. | Usar **Dynamic DNS (DDNS)** para que un nombre (ej. `miservidor.ddns.net`) siga siempre tu IP. Luego tus dominios hacen **CNAME** a ese nombre. |

Para **hosting de varias webs en una VPS**, lo normal es que la VPS tenga IP fija; solo si quisieras servir desde tu casa necesitarías DDNS.

---

## 2. Si no tienes IP fija (casa u otro caso): Dynamic DNS (DDNS)

Servicios gratuitos que te dan un nombre (ej. `tuhost.duckdns.org`) y un cliente que actualiza la IP cuando cambia:

| Servicio | Dominio tipo | Cliente / cómo actualizar |
|----------|--------------|----------------------------|
| **DuckDNS** | `tunombre.duckdns.org` | Script en cron, o en el router si lo soporta |
| **No-IP** | `tunombre.ddns.net` | Cliente oficial (Windows/Linux) o script |
| **FreeDNS** (afraid.org) | Subdominios gratuitos | Actualización por URL (HTTP) |
| **Cloudflare** | Tu propio dominio | API + script que actualiza el registro A cuando cambia tu IP |

### Ejemplo: DuckDNS (rápido y gratis)

1. Crea cuenta en [duckdns.org](https://www.duckdns.org) y un subdominio, ej. `mihost`.
2. Te darán algo como: `mihost.duckdns.org` y un **token**.
3. Actualizar la IP (en un PC o en la VPS, o en un Raspberry en casa):
   ```bash
   curl "https://www.duckdns.org/update?domains=mihost&token=TU_TOKEN&ip="
   ```
4. Pon este comando en un **cron** cada 5–10 minutos, o en el arranque del router/PC.

### Cómo usas DDNS con tus dominios

- **Opción A:** Apuntas el **A** de `tudominio.com` a la IP actual y, cuando cambie, tu script de DDNS actualiza DuckDNS (o el que uses). Para que `tudominio.com` no dependa de la IP, mejor la **opción B**.
- **Opción B (recomendada):** En el DNS de `tudominio.com` creas un **CNAME** a `mihost.duckdns.org`. Así, cuando DuckDNS actualice la IP, `tudominio.com` seguirá resolviendo bien.  
  - Algunos registradores no permiten CNAME en el apex (`tudominio.com`); en ese caso usa `www.tudominio.com` como CNAME y redirige el apex a `www`, o usa Cloudflare (gratis) como DNS y ahí sí puedes usar CNAME en apex ( flattening ) o un A dinámico vía API.

---

## 3. Montar “hosting compartido” en la VPS

En la VPS instalarás: **web (nginx o Apache)**, **PHP** y, opcionalmente, un **panel** para gestionar varios sitios sin tocar mucho la terminal.

### Opción A: Panel tipo “hosting” (recomendado para varios sitios)

| Panel | Licencia | Ventajas | Inconvenientes |
|-------|----------|----------|----------------|
| **HestiaCP** | Gratis | Multi-dominio, correo, DNS, Let's Encrypt, basado en Debian/Ubuntu | Requiere un mínimo de RAM (1 GB, mejor 2 GB) |
| **aaPanel** | Gratis (hay versión paga con más plugins) | Interfaz muy clara, PHP, nginx/Apache, MySQL, fácil | Algunas funciones “premium” de pago |
| **CyberPanel** | Gratis (OpenLiteSpeed) | LiteSpeed, bueno para PHP | Curva de aprendizaje algo mayor |

Todos permiten:

- Añadir **varios dominios** (virtual hosts).
- **PHP** (compatible con tu `php/send_mail.php` y Composer).
- **SSL** con Let's Encrypt (HTTPS).
- Gestionar **DNS** local o usar los DNS externos (Cloudflare, etc.) y solo “crear el sitio” en el panel.

### Opción B: Sin panel (nginx + PHP-FPM a mano)

- Más control y menos consumo de RAM.
- Tú creas los **virtual hosts** en nginx y los enlaces a `php-fpm`.
- Cada sitio = una carpeta (ej. `/var/www/marexclusiveyachts/`) y un `server { ... }` en nginx.

---

## 4. Esquema recomendado: HestiaCP en una VPS

Pasos muy resumidos (Debian 11/12 o Ubuntu 22.04):

### 4.1. Requisitos VPS

- **1 GB RAM** mínimo; **2 GB** para varios sitios y correo sin sobresaltos.
- **1 vCPU** basta para empezar.
- **20–40 GB** disco.
- **IP fija** (lo normal en cualquier VPS).

### 4.2. Instalar HestiaCP

```bash
# Conectas por SSH a la VPS y ejecutas (como root):
wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
bash hst-install.sh
```

El script pregunta: correo, dominio de administración, etc. Al terminar tendrás:

- **Panel:** `https://IP_DE_LA_VPS:8083`
- Usuario/contraseña que hayas definido.

### 4.3. Añadir un sitio (ej. Mar Exclusive Yachts)

1. En HestiaCP: **Web** → **Add Web Domain**.
2. Dominio: `marexclusiveyachts.com` (o el que uses).
3. El panel crea la carpeta, por ejemplo:  
   `/home/tu_usuario/web/marexclusiveyachts.com/public_html/`
4. Activa **SSL (Let's Encrypt)** para ese dominio.
5. Sube los archivos del proyecto a `public_html` (o configura el docroot si usas otra ruta).

### 4.4. DNS

En el registrador del dominio (o en Cloudflare):

- **A** `marexclusiveyachts.com` → IP de la VPS  
- **A** `www.marexclusiveyachts.com` → IP de la VPS  

(O CNAME de `www` al apex si lo tienes en el mismo sitio.)

### 4.5. Repetir para más webs

Cada nueva web = **Add Web Domain** con otro dominio y su carpeta. Así tendrás “hosting compartido” sobre una sola VPS.

---

## 5. Desplegar Mar Exclusive Yachts en tu VPS

Con HestiaCP (o con nginx a mano) la idea es la misma:

1. **Subir archivos** a la carpeta del sitio (p. ej. `public_html`), **sin** `node_modules/`.
2. **`vendor/`:**  
   - Opción 1: En tu PC, `composer install --no-dev` y subir la carpeta `vendor/`.  
   - Opción 2: En la VPS, `composer install --no-dev` dentro de la raíz del proyecto (si HestiaCP/panel tiene PHP/Composer, o lo instalas por SSH).
3. **Tailwind:**  
   - Subir el `css/tailwind.css` ya generado, **o** en la VPS: `npm ci && npm run build:css` (si tienes Node).
4. **`php/config.php`:**  
   - Crear desde `php/config.example.php` con tus datos de SMTP. No subir este archivo a un repo público.

Si el panel no ofrece Composer/Node, lo más práctico es generarlo en tu PC y subir `vendor/` y `css/tailwind.css`.

---

## 6. Si la VPS tampoco tuviera IP fija (casos raros)

Algunos proveedores “low cost” o entornos muy particulares pueden dar IP que cambia. En ese caso:

1. Usa **DDNS** apuntando al hostname que te da la VPS o a uno que tú actualices con un script.
2. En tu DNS (o en Cloudflare): **CNAME** de `tudominio.com` (o `www`) a ese hostname DDNS.
3. El resto (HestiaCP, nginx, PHP, Let's Encrypt) sigue igual; Let's Encrypt funcionará mientras el dominio resuelva bien a la IP actual de la VPS.

---

## 7. Resumen práctico

| Objetivo | Acción |
|----------|--------|
| **VPS con IP fija (lo habitual)** | Apunta los A de tus dominios a la IP de la VPS. Instala HestiaCP (o aaPanel) y añade un dominio por web. |
| **Conexión de casa sin IP fija** | Usa DuckDNS (o No-IP, Cloudflare API) para tener un nombre que siga tu IP. En tus dominios: CNAME a ese nombre o A dinámico vía script. Luego nginx/Apache + PHP en tu máquina. |
| **Varias webs en la misma VPS** | Panel (HestiaCP/aaPanel) o, si prefieres, nginx a mano con un virtual host por sitio. |
| **Mar Exclusive Yachts** | Carpeta del sitio con `index.html`, `details.html`, `css/`, `js/`, `php/`, `vendor/`, `php/config.php` y `css/tailwind.css`. SSL con Let's Encrypt. |

Si indicas: (1) si usas **VPS** o **casa** y (2) **con o sin panel**, se puede bajar esto a una lista de comandos concreta para tu caso.
