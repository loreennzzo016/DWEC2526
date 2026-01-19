const contenedor = document.getElementById('container');
const textoPuntos = document.getElementById('puntuacion');
const btnEmpezar = document.getElementById('btnEmpezar');
const btnReiniciar = document.getElementById('btnReiniciar');

let puntos = 0;

function crearBicho(color) {
    // PASO 1: Crear el elemento (createElement)
    const bicho = document.createElement('div');

    // PASO 2: Configurar (Clase, Color y Listener)
    bicho.className = 'bicho';
    bicho.style.backgroundColor = color;
    
    // Posición inicial
    let x = Math.random() * 400;
    let y = Math.random() * 300;
    bicho.style.left = x + "px";
    bicho.style.top = y + "px";

    // Evento para eliminar (removeChild) y sumar puntos
    bicho.addEventListener('click', function() {
        contenedor.removeChild(bicho);
        puntos++;
        textoPuntos.innerHTML = puntos;
    });

    // PASO 3: Colocar en el DOM (appendChild)
    contenedor.appendChild(bicho);

    // MOVIMIENTO (Fase 4: Rebote)
    let vx = 3;
    let vy = 3;

    setInterval(function() {
        x += vx;
        y += vy;

        if (x > 460 || x < 0) { vx *= -1; }
        if (y > 360 || y < 0) { vy *= -1; }

        bicho.style.left = x + "px";
        bicho.style.top = y + "px";
    }, 20);
}

// Lógica del botón jugar
btnEmpezar.addEventListener('click', function() {
    // Limpiamos todo para que no se acumulen si pulsan varias veces
    contenedor.innerHTML = ""; 
    puntos = 0;
    textoPuntos.innerHTML = puntos;

    // Fase 2: Aparecen con retardo
    setTimeout(function() { crearBicho('red'); }, 1000);
    setTimeout(function() { crearBicho('blue'); }, 3000);
});

// Lógica del botón reiniciar
btnReiniciar.addEventListener('click', function() {
    contenedor.innerHTML = ""; // Solo vaciamos el cuadro
    puntos = 0;
    textoPuntos.innerHTML = puntos;
});