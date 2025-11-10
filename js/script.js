// ==================== PREGUNTAS POR NIVEL ====================
const preguntas = {
  basico: [
    { q: "¿Qué atajo abre un libro nuevo en Excel?", options: ["Ctrl + N", "Ctrl + O", "Ctrl + L", "Ctrl + W"], answer: "Ctrl + N", explanation: "Ctrl + N abre un nuevo libro de Excel rápidamente." },
    { q: "¿Qué función suma un rango de celdas?", options: ["SUM", "COUNT", "AVERAGE", "ADD"], answer: "SUM", explanation: "La función SUM suma los valores de un rango de celdas." },
    { q: "¿Qué hace la función AVERAGE?", options: ["Cuenta celdas", "Calcula promedio", "Muestra máximo", "Suma valores"], answer: "Calcula promedio", explanation: "AVERAGE calcula el promedio de los números en un rango de celdas." },
    { q: "¿Qué símbolo se usa para fórmulas?", options: ["@", "=", "+", "#"], answer: "=", explanation: "Todas las fórmulas en Excel comienzan con el signo igual (=)." },
    { q: "¿Cómo se llama la pestaña donde se crean gráficos?", options: ["Inicio", "Insertar", "Fórmulas", "Datos"], answer: "Insertar", explanation: "La pestaña Insertar contiene todas las opciones para crear gráficos." },
    { q: "¿Qué hace Ctrl + C?", options: ["Copia", "Pega", "Corta", "Deshace"], answer: "Copia", explanation: "Ctrl + C copia el contenido seleccionado al portapapeles." },
    { q: "¿Qué tipo de dato maneja la función TODAY()?", options: ["Texto", "Número", "Fecha", "Hora"], answer: "Fecha", explanation: "La función TODAY() devuelve la fecha actual." },
    { q: "¿Qué hace la función MAX?", options: ["Devuelve el mayor valor", "Cuenta celdas", "Suma valores", "Promedia"], answer: "Devuelve el mayor valor", explanation: "MAX devuelve el valor máximo dentro de un rango." },
    { q: "¿Qué opción ordena datos de menor a mayor?", options: ["Filtros", "Ordenar", "Buscar", "Tabla dinámica"], answer: "Ordenar", explanation: "La opción Ordenar permite organizar los datos de menor a mayor o viceversa." },
    { q: "¿Qué es una celda activa?", options: ["La celda seleccionada", "La primera del libro", "La celda bloqueada", "Una celda vacía"], answer: "La celda seleccionada", explanation: "La celda activa es aquella que está actualmente seleccionada." }
  ],

  intermedio: [
    { q: "¿Qué hace la función CONCAT?", options: ["Suma números", "Une textos", "Convierte texto a número", "Divide texto"], answer: "Une textos", explanation: "CONCAT une textos de diferentes celdas en una sola cadena." },
    { q: "¿Qué hace la función IF?", options: ["Compara valores", "Suma filas", "Filtra datos", "Ordena valores"], answer: "Compara valores", explanation: "IF permite tomar decisiones según condiciones lógicas." },
    { q: "¿Qué diferencia hay entre COUNT y COUNTA?", options: ["COUNT cuenta números y COUNTA todo tipo de datos", "Son iguales", "COUNTA solo texto", "COUNT solo texto"], answer: "COUNT cuenta números y COUNTA todo tipo de datos", explanation: "COUNT solo cuenta números, COUNTA cuenta todo tipo de celdas no vacías." },
    { q: "¿Qué hace el formato condicional?", options: ["Cambia color según criterios", "Cambia tamaño de texto", "Oculta celdas", "Ordena filas"], answer: "Cambia color según criterios", explanation: "El formato condicional permite cambiar colores de celdas según reglas definidas." },
    { q: "¿Qué herramienta se usa para resumir datos rápidamente?", options: ["Gráficos", "Tablas dinámicas", "Filtros", "Escenarios"], answer: "Tablas dinámicas", explanation: "Las tablas dinámicas resumen grandes cantidades de datos fácilmente." },
    { q: "¿Qué función busca un valor en una columna?", options: ["VLOOKUP", "SUMIF", "MATCH", "FILTER"], answer: "VLOOKUP", explanation: "VLOOKUP permite buscar un valor específico en una columna y devolver datos relacionados." },
    { q: "¿Qué función redondea un número?", options: ["ROUND", "INT", "DECIMAL", "FLOOR"], answer: "ROUND", explanation: "ROUND redondea un número al número de decimales especificado." },
    { q: "¿Qué herramienta agrupa datos numéricos por intervalos?", options: ["Agrupar en tabla dinámica", "Buscar objetivo", "Solver", "Formato condicional"], answer: "Agrupar en tabla dinámica", explanation: "Agrupar permite organizar datos por rangos dentro de tablas dinámicas." },
    { q: "¿Qué hace Ctrl + Shift + L?", options: ["Aplica filtros", "Abre cuadro de nombre", "Cierra Excel", "Selecciona hoja"], answer: "Aplica filtros", explanation: "Esta combinación activa o desactiva los filtros en la hoja." },
    { q: "¿Qué es un rango con nombre?", options: ["Conjunto de celdas nombradas", "Una celda bloqueada", "Un filtro", "Un gráfico"], answer: "Conjunto de celdas nombradas", explanation: "Un rango con nombre permite referirse a un conjunto de celdas fácilmente." }
  ],

  avanzado: [
    { q: "¿Qué función reemplaza VLOOKUP en versiones modernas?", options: ["MATCH", "XLOOKUP", "FILTER", "SEARCH"], answer: "XLOOKUP", explanation: "XLOOKUP reemplaza VLOOKUP y permite búsquedas más flexibles." },
    { q: "¿Qué herramienta optimiza resultados con restricciones?", options: ["Solver", "Escenarios", "Buscar objetivo", "Filtros"], answer: "Solver", explanation: "Solver encuentra la mejor solución cumpliendo restricciones." },
    { q: "¿Qué hace la función INDEX?", options: ["Devuelve valor en posición específica", "Cuenta filas", "Ordena datos", "Busca duplicados"], answer: "Devuelve valor en posición específica", explanation: "INDEX devuelve el valor de una celda en un rango según fila y columna." },
    { q: "¿Qué combinación permite búsquedas dinámicas?", options: ["INDEX + MATCH", "IF + OR", "VLOOKUP + OFFSET", "FILTER + SORT"], answer: "INDEX + MATCH", explanation: "INDEX + MATCH permite búsquedas más flexibles que VLOOKUP." },
    { q: "¿Qué hace TRIM?", options: ["Elimina espacios extra", "Convierte texto en número", "Redondea valores", "Combina texto"], answer: "Elimina espacios extra", explanation: "TRIM elimina espacios iniciales, finales y dobles dentro de un texto." },
    { q: "¿Qué hace INDIRECT?", options: ["Devuelve referencia de texto", "Cuenta celdas", "Copia valores", "Convierte número en texto"], answer: "Devuelve referencia de texto", explanation: "INDIRECT convierte un texto en referencia válida a celdas." },
    { q: "¿Qué función extrae texto desde el medio de una celda?", options: ["LEFT", "MID", "RIGHT", "TEXT"], answer: "MID", explanation: "MID extrae una cantidad de caracteres desde el medio de un texto." },
    { q: "¿Qué función convierte texto en número?", options: ["VALUE", "TEXT", "NUM", "FORMAT"], answer: "VALUE", explanation: "VALUE convierte texto que representa un número en un valor numérico." },
    { q: "¿Qué tipo de gráfico muestra participación porcentual?", options: ["Circular", "Barras", "Líneas", "Histograma"], answer: "Circular", explanation: "Los gráficos circulares muestran la proporción de cada parte respecto al total." },
    { q: "¿Qué hace 'Actualizar todo' en tabla dinámica?", options: ["Refresca datos origen", "Ordena campos", "Agrega campos", "Duplica tabla"], answer: "Refresca datos origen", explanation: "Actualizar todo actualiza los datos que la tabla dinámica utiliza como origen." }
  ]
};
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const playerName = document.getElementById("playerName");
  const playerEmail = document.getElementById("playerEmail");
  const levelSelect = document.getElementById("level");
  const loginEl = document.getElementById("login");
  const gameEl = document.getElementById("game");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const explanationEl = document.getElementById("explanation");
  const timerEl = document.getElementById("timer");
  const progressEl = document.getElementById("progress");
  const resultEl = document.getElementById("result");

  let current = 0, score = 0, nivel = "", player = "", email = "", timer, timeLeft = 20, canAnswer = true;

  startBtn.addEventListener("click", () => {
    player = playerName.value.trim();
    email = playerEmail.value.trim();
    nivel = levelSelect.value;

    if (player === "" || email === "") {
      alert("Por favor ingresa tu nombre y correo electrónico.");
      return;
    }

    loginEl.style.display = "none";
    gameEl.style.display = "block";
    current = 0; score = 0;
    showQuestion();
  });

  function showQuestion() {
    const set = preguntas[nivel];
    if (current >= set.length) return endGame();
    const q = set[current];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    explanationEl.textContent = "";
    canAnswer = true;

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.classList.add("btn", "btn-outline-primary", "m-1");
      btn.onclick = () => checkAnswer(opt);
      optionsEl.appendChild(btn);
    });

    resetTimer();
    progressEl.style.width = `${(current / set.length) * 100}%`;
  }

  function resetTimer() {
    clearInterval(timer);
    timeLeft = 20;
    timerEl.textContent = `⏱️ Tiempo: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `⏱️ Tiempo: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        feedbackEl.textContent = "⏰ Tiempo agotado!";
        feedbackEl.className = "feedback incorrect";
        explanationEl.textContent = preguntas[nivel][current].explanation;
        canAnswer = false;
        setTimeout(() => { current++; showQuestion(); }, 2000);
      }
    }, 1000);
  }

  function checkAnswer(selected) {
    if (!canAnswer) return;
    canAnswer = false;
    clearInterval(timer);
    const set = preguntas[nivel];
    const correct = set[current].answer;
    if (selected === correct) {
      score++;
      feedbackEl.textContent = "✅ Correcto!";
      feedbackEl.className = "feedback correct";
    } else {
      feedbackEl.textContent = "❌ Incorrecto!";
      feedbackEl.className = "feedback incorrect";
    }
    explanationEl.textContent = set[current].explanation;
    setTimeout(() => { current++; showQuestion(); }, 2000);
  }

  function endGame() {
    clearInterval(timer);
    const set = preguntas[nivel];
    const percentage = Math.round((score / set.length) * 100);
    const emoji = percentage >= 80 ? "🏆" : percentage >= 60 ? "💪" : "🥲";
    resultEl.innerHTML = `
      <h3>Tu puntaje final: ${percentage}% ${emoji}</h3>
      <p>${percentage >= 80 ? "¡Felicidades!" : "Inténtalo nuevamente."}</p>
      <button onclick="location.reload()" class="btn btn-secondary">Inicio</button>
    `;
    gameEl.style.display = "none";
    saveResult(player, email, nivel, percentage);
  }

  // ✅ Guardar resultados en base de datos
  async function saveResult(name, email, level, score) {
    const formData = new FormData();
    formData.append("nombre", name);
    formData.append("correo", email);
    formData.append("nivel", level);
    formData.append("puntaje", score);
    await fetch("includes/funciones.php", { method: "POST", body: formData });
  }
});