<?php
// Copy credentials below or keep as placeholders and edit locally.
// IMPORTANT: Do NOT commit real credentials to the repository.

// You can also set these via environment variables (useful for production):
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, FROM_NAME, TO_EMAIL

// If environment variables are set, prefer them. Otherwise use the values below.
function cfg($k, $fallback) {
    return getenv($k) !== false ? getenv($k) : $fallback;
}

define('SMTP_HOST', cfg('SMTP_HOST', 'smtp.gmail.com'));
define('SMTP_PORT', intval(cfg('SMTP_PORT', '587')));
define('SMTP_USER', cfg('SMTP_USER', 'info@marexclusiveyachts.com'));
define('SMTP_PASS', cfg('SMTP_PASS', 'cytvbxnpuuomqyyl'));

define('FROM_EMAIL', cfg('FROM_EMAIL', SMTP_USER));
define('FROM_NAME', cfg('FROM_NAME', 'Mar Exclusive Yachts'));
define('TO_EMAIL', cfg('TO_EMAIL', 'info@marexclusiveyachts.com'));

?>
