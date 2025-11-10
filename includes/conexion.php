<?php
// Conexión segura a SQL Server (Producción)
$serverName = "DESKTOP-95J5O37\\SQLEXPRESS01";
$connectionOptions = array(
    "Database" => "Excel_ChallengeDB",
    "Uid" => "excel_user",
    "PWD" => "Str0ng_Pass_!2025",
    "CharacterSet" => "UTF-8"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    error_log(print_r(sqlsrv_errors(), true)); // Log interno, no mostrar al usuario
    die("⚠️ Error al conectar con la base de datos. Por favor, inténtalo más tarde.");
}
?>