<?php
$host = getenv("DB_HOST");
$port = getenv("DB_PORT");
$dbname = getenv("DB_NAME");
$user = getenv("DB_USER");
$password = getenv("DB_PASS");

// Conexión con SSL obligatorio y verificación
$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password sslmode=require options='--client_encoding=UTF8'";

$conn = pg_connect($conn_string);

if (!$conn) {
    die("❌ Error de conexión: " . pg_last_error());
} else {
    echo "✅ Conexión exitosa a PostgreSQL (Render) - Base de datos: $dbname";
}
?>