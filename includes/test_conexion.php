<?php
$serverName = "DESKTOP-95J5O37\\SQLEXPRESS01"; 
$connectionOptions = [
    "Database" => "Excel_ChallengeDB",
    "UID" => "excel_user",
    "PWD" => "Str0ng_Pass_!2025",
    "CharacterSet" => "UTF-8"
];

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    echo "❌ Error al conectar a SQL Server:<br>";
    die(print_r(sqlsrv_errors(), true));
} else {
    echo "✅ Conexión exitosa a SQL Server y a la base Excel_ChallengeDB";
}
?>