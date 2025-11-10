<?php
// index.php
include_once "includes/conexion.php";
include_once "includes/funciones.php";
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Excel Challenge: Skills for Business</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/estilos.css">
</head>
<body>

  <header class="d-flex justify-content-center align-items-center gap-3 bg-white p-3">
    <img src="assets/img/Salimosaganar.png" alt="Logo Izquierdo" class="logo">
    <img src="assets/img/MSM.png" alt="Logo Central" class="logo">
    <img src="assets/img/Portafolio.png" alt="Logo Derecho" class="logo">
  </header>

  <main class="container text-center mt-4">
    <h1>📊 Excel Challenge: Skills for Business</h1>
    <div id="login" class="mt-3">
      <p>Ingresa tu nombre para comenzar:</p>
      <input type="text" id="playerName" class="form-control mb-3" placeholder="Tu nombre y apellidos">

      <p>Ingresa tu correo electrónico:</p>
      <input type="email" id="playerEmail" class="form-control mb-3" placeholder="ejemplo@correo.com">

      <p>Selecciona el nivel de evaluación:</p>
      <select id="level" class="form-select mb-3">
        <option value="basico">Nivel Básico</option>
        <option value="intermedio">Nivel Intermedio</option>
        <option value="avanzado">Nivel Avanzado</option>
      </select>
      <button id="startBtn" class="btn btn-primary">Iniciar Evaluación</button>
    </div>

    <div id="game" class="mt-4" style="display:none;">
      <p id="question"></p>
      <div id="options" class="d-grid gap-2"></div>
      <p id="timer" class="text-warning mt-3"></p>
      <div class="progress mx-auto" style="width:80%;">
        <div class="progress-bar" id="progress"></div>
      </div>
      <p class="feedback fw-bold mt-3" id="feedback"></p>
      <p class="explanation fst-italic" id="explanation"></p>
    </div>

    <div id="result" class="mt-4"></div>

    <h2 class="mt-5">🏅 Ranking General</h2>
    <table class="table table-striped mt-3" id="rankingTable">
      <thead class="table-dark">
        <tr><th>Nombre</th><th>Correo</th><th>Nivel</th><th>Puntaje</th><th>Fecha</th></tr>
      </thead>
      <tbody>
        <?php mostrarRanking($conn); ?>
      </tbody>
    </table>
  </main>

  <script src="js/script.js"></script>
</body>
</html>