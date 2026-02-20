// Arrays de datos base con información de héroes y villanos
const heroes = [
    { nombre: "Ryu", vida: 120, ataque1: "Kamehameha", danio1: 25, ataque2: "Golpe", danio2: 15, img: "Ryu.jpg" },
    { nombre: "Chun-Li", vida: 100, ataque1: "Salto", danio1: 20, ataque2: "Fuego", danio2: 18, img: "Chun-Li.webp" },
    { nombre: "Dhalsim", vida: 115, ataque1: "Shoryuken", danio1: 24, ataque2: "Tatsumaki", danio2: 17, img: "Dhalsim.webp" },
    { nombre: "Sakura", vida: 95, ataque1: "Hadoken", danio1: 22, ataque2: "Shunpukyaku", danio2: 16, img: "Sakura.webp" }
];

const villanos = [
    { nombre: "Guile", vida: 110, ataque1: "Garlick", danio1: 22, ataque2: "Final", danio2: 28, img: "Guile.jpg" },
    { nombre: "Blanka", vida: 130, ataque1: "Llamarada", danio1: 20, ataque2: "Garra", danio2: 15, img: "Blanka.webp" },
    { nombre: "M. Bison", vida: 125, ataque1: "Psycho Crusher", danio1: 26, ataque2: "Scissor Kick", danio2: 19, img: "M_Bison.jpg" },
    { nombre: "Sagat", vida: 120, ataque1: "Tiger Shot", danio1: 25, ataque2: "Tiger Uppercut", danio2: 21, img: "Sagat.webp" }
];

// Clase base Personaje
class Personaje {
    constructor(nombre, vida, ataque1, danio1, ataque2, danio2) {
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMax = vida;      // para limitar curación
        this.ataque1 = ataque1;
        this.danio1 = danio1;
        this.ataque2 = ataque2;
        this.danio2 = danio2;
    }

    recibeDanio(danio) {
        this.vida = Math.max(0, this.vida - danio);
    }

    // Método especial base (será sobrescrito)
    usarEspecial(objetivo) {
        // No hace nada por defecto
    }
}

// Clase Heroe (hereda de Personaje)
class Heroe extends Personaje {
    usarEspecial(objetivo) {
        const curacion = 20;
        this.vida = Math.min(this.vidaMax, this.vida + curacion);
        mostrarMensaje(`${this.nombre} se cura ${curacion} puntos de vida.`);
    }
}

// Clase Villano (hereda de Personaje)
class Villano extends Personaje {
    usarEspecial(objetivo) {
        const danio = 30;
        objetivo.recibeDanio(danio);
        mostrarMensaje(`${this.nombre} lanza su ataque especial causando ${danio} de daño.`);
    }
}

let heroeActual;
let villanoActual;
let turnoHeroe = true;   // true = turno del héroe, false = turno del villano
let juegoActivo = true;

// Muestra mensajes en pantalla
function mostrarMensaje(texto) {
    document.getElementById('mensajes-juego').innerHTML = `<p>${texto}</p>`;
}

// Actualiza nombres y vidas en el HTML
function actualizarVidas() {
    document.getElementById('heroe-vida').textContent = heroeActual.vida;
    document.getElementById('villano-vida').textContent = villanoActual.vida;
    document.getElementById('heroe-nombre').textContent = heroeActual.nombre;
    document.getElementById('villano-nombre').textContent = villanoActual.nombre;
}

// Habilita/deshabilita botones según turno y estado (ahora con forEach)
function deshabilitarBotones() {
    const botonesHeroe = document.querySelectorAll('#heroe-ataques button');
    const botonesVillano = document.querySelectorAll('#villano-ataques button');

    botonesHeroe.forEach(btn => {
        btn.disabled = !turnoHeroe || !juegoActivo || heroeActual.vida <= 0;
    });

    botonesVillano.forEach(btn => {
        btn.disabled = turnoHeroe || !juegoActivo || villanoActual.vida <= 0;
    });
}

// Comprueba si alguien ha ganado
function comprobarFin() {
    if (heroeActual.vida <= 0) {
        juegoActivo = false;
        mostrarMensaje(`El Villano ${villanoActual.nombre} ha ganado`);
        return true;
    }
    if (villanoActual.vida <= 0) {
        juegoActivo = false;
        mostrarMensaje(`El Héroe ${heroeActual.nombre} ha ganado`);
        return true;
    }
    return false;
}

// Ataque normal
function atacar(atacante, objetivo, danio) {
    if (!juegoActivo) return;

    if (atacante === "heroe" && turnoHeroe && heroeActual.vida > 0) {
        villanoActual.recibeDanio(danio);
        mostrarMensaje(`${heroeActual.nombre} ataca con ${danio} de daño.`);
    } else if (atacante === "villano" && !turnoHeroe && villanoActual.vida > 0) {
        heroeActual.recibeDanio(danio);
        mostrarMensaje(`${villanoActual.nombre} ataca con ${danio} de daño.`);
    } else {
        return;
    }

    actualizarVidas();
    if (!comprobarFin()) {
        turnoHeroe = !turnoHeroe;
        deshabilitarBotones();
        mostrarMensaje(turnoHeroe ? `Turno de ${heroeActual.nombre}` : `Turno de ${villanoActual.nombre}`);
    } else {
        deshabilitarBotones();
    }
}

// Ataque especial (usa polimorfismo)
function usarEspecial(atacante) {
    if (!juegoActivo) return;

    if (atacante === "heroe" && turnoHeroe && heroeActual.vida > 0) {
        heroeActual.usarEspecial(villanoActual);  // el héroe se cura a sí mismo
    } else if (atacante === "villano" && !turnoHeroe && villanoActual.vida > 0) {
        villanoActual.usarEspecial(heroeActual);  // el villano daña al héroe
    } else {
        return;
    }

    actualizarVidas();
    if (!comprobarFin()) {
        turnoHeroe = !turnoHeroe;
        deshabilitarBotones();
        mostrarMensaje(turnoHeroe ? `Turno de ${heroeActual.nombre}` : `Turno de ${villanoActual.nombre}`);
    } else {
        deshabilitarBotones();
    }
}

// Crea dinámicamente los botones de ataque (dos normales + uno especial)
function crearBotones() {
    const divHeroe = document.getElementById('heroe-ataques');
    const divVillano = document.getElementById('villano-ataques');

    divHeroe.innerHTML = '';
    divVillano.innerHTML = '';

    // Botones del héroe
    const botonH1 = document.createElement('button');
    botonH1.textContent = `${heroeActual.ataque1} (${heroeActual.danio1})`;
    botonH1.onclick = () => atacar("heroe", villanoActual, heroeActual.danio1);
    divHeroe.appendChild(botonH1);

    const botonH2 = document.createElement('button');
    botonH2.textContent = `${heroeActual.ataque2} (${heroeActual.danio2})`;
    botonH2.onclick = () => atacar("heroe", villanoActual, heroeActual.danio2);
    divHeroe.appendChild(botonH2);

    const botonHEspecial = document.createElement('button');
    botonHEspecial.textContent = "Especial (cura)";
    botonHEspecial.onclick = () => usarEspecial("heroe");
    divHeroe.appendChild(botonHEspecial);

    // Botones del villano
    const botonV1 = document.createElement('button');
    botonV1.textContent = `${villanoActual.ataque1} (${villanoActual.danio1})`;
    botonV1.onclick = () => atacar("villano", heroeActual, villanoActual.danio1);
    divVillano.appendChild(botonV1);

    const botonV2 = document.createElement('button');
    botonV2.textContent = `${villanoActual.ataque2} (${villanoActual.danio2})`;
    botonV2.onclick = () => atacar("villano", heroeActual, villanoActual.danio2);
    divVillano.appendChild(botonV2);

    const botonVEspecial = document.createElement('button');
    botonVEspecial.textContent = "Especial (daño 30)";
    botonVEspecial.onclick = () => usarEspecial("villano");
    divVillano.appendChild(botonVEspecial);
}

// Inicia el juego seleccionando personajes aleatorios
function iniciarJuego() {
    const indiceHeroe = Math.floor(Math.random() * heroes.length);
    const indiceVillano = Math.floor(Math.random() * villanos.length);

    // Crear instancias de las clases hijas (herencia)
    heroeActual = new Heroe(
        heroes[indiceHeroe].nombre, heroes[indiceHeroe].vida,
        heroes[indiceHeroe].ataque1, heroes[indiceHeroe].danio1,
        heroes[indiceHeroe].ataque2, heroes[indiceHeroe].danio2
    );

    villanoActual = new Villano(
        villanos[indiceVillano].nombre, villanos[indiceVillano].vida,
        villanos[indiceVillano].ataque1, villanos[indiceVillano].danio1,
        villanos[indiceVillano].ataque2, villanos[indiceVillano].danio2
    );

    // Asignar las fotos
    document.getElementById('heroe-img').src = heroes[indiceHeroe].img;
    document.getElementById('villano-img').src = villanos[indiceVillano].img;

    turnoHeroe = true;
    juegoActivo = true;

    actualizarVidas();
    crearBotones();
    deshabilitarBotones();
    mostrarMensaje(`${heroeActual.nombre} vs ${villanoActual.nombre} - Turno de ${heroeActual.nombre}`);
}

// Eventos al cargar la página y al pulsar reiniciar
window.addEventListener('load', () => {
    iniciarJuego();
    document.getElementById('btn-reiniciar').addEventListener('click', iniciarJuego);
});