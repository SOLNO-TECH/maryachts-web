<?php
header('Content-Type: application/json; charset=utf-8');

// Basic CORS - adjust if needed
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Load config
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    echo json_encode(['success' => false, 'message' => 'Server not configured. Create php/config.php from php/config.example.php']);
    http_response_code(500);
    exit;
}

require_once $configPath;

// Read JSON body
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    http_response_code(400);
    exit;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$yacht = trim($input['yacht'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Por favor completa nombre, correo y mensaje.']);
    http_response_code(400);
    exit;
}

// Try to use PHPMailer if available
// Install with: composer require phpmailer/phpmailer
$composerAutoload = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($composerAutoload)) {
    echo json_encode(['success' => false, 'message' => 'PHPMailer no está instalado. Ejecuta `composer require phpmailer/phpmailer` en el proyecto.']);
    http_response_code(500);
    exit;
}

require_once $composerAutoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = SMTP_PORT;

    // Recipients
    $mail->setFrom(FROM_EMAIL, FROM_NAME);
    $mail->addAddress(TO_EMAIL);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $name);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Nuevo mensaje desde formulario - " . ($yacht ?: 'Contacto general');

    $body = "<p><strong>Nombre:</strong> " . htmlspecialchars($name) . "</p>";
    $body .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    $body .= "<p><strong>Teléfono:</strong> " . htmlspecialchars($phone) . "</p>";
    $body .= "<p><strong>Yate:</strong> " . htmlspecialchars($yacht) . "</p>";
    $body .= "<p><strong>Mensaje:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $body));

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente.']);
    exit;
} catch (Exception $e) {
    error_log('Mail error: ' . $mail->ErrorInfo);
    echo json_encode(['success' => false, 'message' => 'No se pudo enviar el mensaje: ' . $mail->ErrorInfo]);
    http_response_code(500);
    exit;
}
