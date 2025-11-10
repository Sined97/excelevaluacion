<?php
// Conexión a PostgreSQL en Render
$host = getenv("DB_HOST");
$port = getenv("DB_PORT");
$dbname = getenv("DB_NAME");
$user = getenv("DB_USER");
$password = getenv("DB_PASS");

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("❌ Error de conexión: " . pg_last_error());
}
// echo "✅ Conexión exitosa a PostgreSQL en Render.";
?>