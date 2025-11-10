<?php
include_once "conexion.php";

// Inserción de registro desde formulario
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['nombre'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $nivel = $_POST['nivel'];
    $puntaje = $_POST['puntaje'];
    $fecha = date("d-m-Y");

    $sql = "INSERT INTO Resultados (Nombre, Correo, Nivel, Puntaje, Fecha) VALUES (?, ?, ?, ?, ?)";
    $params = array($nombre, $correo, $nivel, $puntaje, $fecha);
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die("❌ Error al insertar datos: " . print_r(sqlsrv_errors(), true));
    } else {
        echo "✅ Registro guardado correctamente.";
    }
}

// Consulta de datos para mostrar ranking
function mostrarRanking($conn) {
    $query = "SELECT TOP 10 Nombre, Correo, Nivel, Puntaje, Fecha FROM Resultados ORDER BY Puntaje DESC";
    $stmt = sqlsrv_query($conn, $query);
    
    if ($stmt === false) {
        die("❌ Error al consultar ranking: " . print_r(sqlsrv_errors(), true));
    }

    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        echo "<tr>
                <td>{$row['Nombre']}</td>
                <td>{$row['Correo']}</td>
                <td>{$row['Nivel']}</td>
                <td>{$row['Puntaje']}%</td>
                <td>{$row['Fecha']}</td>
              </tr>";
    }
}
?>