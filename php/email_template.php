<?php
function render_email($name, $email, $phone, $yacht, $message) {
    $name_e = htmlspecialchars($name);
    $email_e = htmlspecialchars($email);
    $phone_e = htmlspecialchars($phone);
    $yacht_e = htmlspecialchars($yacht);
    $message_e = nl2br(htmlspecialchars($message));
    $to = htmlspecialchars(defined('TO_EMAIL') ? TO_EMAIL : 'info@marexclusiveyachts.com');

    return <<<HTML
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body{font-family:Inter, system-ui, -apple-system, Arial, Helvetica, sans-serif;background:#f4f7fb;margin:0;padding:20px;color:#0f172a}
    .container{max-width:680px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 6px 22px rgba(11,20,30,0.08)}
    .header{background:linear-gradient(90deg,#0ea5a4,#06b6d4);padding:20px;color:white;text-align:center}
    .header h1{margin:0;font-size:20px}
    .content{padding:22px}
    .meta{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:16px}
    .meta .item{flex:1;min-width:150px}
    .label{font-weight:700;color:#0f172a;margin-bottom:6px;display:block}
    .value{color:#334155}
    .message{background:#f8fafc;border:1px solid #e6eef2;padding:14px;border-radius:8px;color:#0f172a}
    .footer{padding:16px;text-align:center;font-size:13px;color:#64748b;background:#fbfdfe}
    a.btn{display:inline-block;background:#06b6d4;color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nuevo mensaje desde el formulario — Mar Exclusive Yachts</h1>
    </div>
    <div class="content">
      <p>Has recibido un nuevo mensaje de contacto. A continuación los datos:</p>
      <div class="meta">
        <div class="item"><span class="label">Nombre</span><div class="value">{$name_e}</div></div>
        <div class="item"><span class="label">Correo</span><div class="value">{$email_e}</div></div>
        <div class="item"><span class="label">Teléfono</span><div class="value">{$phone_e}</div></div>
        <div class="item"><span class="label">Yate</span><div class="value">{$yacht_e}</div></div>
      </div>
      <div>
        <div class="label">Mensaje</div>
        <div class="message">{$message_e}</div>
      </div>
    </div>
    <div class="footer">
      <div>Responder: <a class="btn" href="mailto:{$to}">Enviar respuesta</a></div>
      <div style="margin-top:8px;color:#94a3b8">Mar Exclusive Yachts • Puerto Vallarta</div>
    </div>
  </div>
</body>
</html>
HTML;
}
