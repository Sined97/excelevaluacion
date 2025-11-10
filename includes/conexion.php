<?php
$host = getenv("DB_HOST");
$port = getenv("DB_PORT");
$dbname = getenv("DB_NAME");
$user = getenv("DB_USER");
$password = getenv("DB_PASS");

$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

$conn = pg_connect($conn_string);

if (!$conn) {
    echo "❌ Error de conexión: " . pg_last_error();
    exit;
} else {
    echo "✅ Conexión exitosa a la base de datos PostgreSQL ($dbname)";
}
?>
