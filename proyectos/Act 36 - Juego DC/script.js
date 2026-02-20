// DOM PRIMERO (IMPORTANTE)
const heroName = document.getElementById("hero-name");
const heroLife = document.getElementById("hero-life");
const villainName = document.getElementById("villain-name");
const villainLife = document.getElementById("villain-life");
const logDiv = document.getElementById("log");

// FUNCIONES DE LOG Y UI
function log(texto) {
    const p = document.createElement("p");
    p.textContent = texto;
    logDiv.appendChild(p);
    logDiv.scrollTop = logDiv.scrollHeight;
}

function actualizarUI() {
    heroName.textContent = ironman.nombre;
    heroLife.textContent = ironman.vida;
    villainName.textContent = joker.nombre;
    villainLife.textContent = joker.vida;
}

function comprobarFin() {
    if (joker.vida <= 0) {
        log("El héroe ha ganado la batalla.");
        desactivarBotones();
    }
    if (ironman.vida <= 0) {
        log("El villano ha ganado la batalla.");
        desactivarBotones();
    }
}

function desactivarBotones() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

// CLASES
class Personaje {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
        log(`Se ha creado ${this.nombre} con ${this.vida} de vida`);
    }

    atacar(objetivo, daño) {
        log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} de daño`);
        objetivo.recibirDaño(daño);
    }

    recibirDaño(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) this.vida = 0;
        log(`${this.nombre} queda con ${this.vida} de vida`);
        actualizarUI();
    }
}

class Heroe extends Personaje {
    constructor(nombre, vida) {
        super(nombre, vida);
        log(`${this.nombre} es un héroe`);
    }

    superAtaque() {
        log(`${this.nombre} usa su super ataque`);
        return 15;
    }
}

class Villano extends Personaje {
    constructor(nombre, vida) {
        super(nombre, vida);
        this.esquivando = false;
        log(`${this.nombre} es un villano`);
    }

    teletransportarse() {
        this.esquivando = true;
        log(`${this.nombre} se teletransporta y esquivará el próximo ataque`);
    }

    recibirDaño(cantidad) {
        if (this.esquivando) {
            log(`${this.nombre} esquiva el ataque gracias al teletransporte`);
            this.esquivando = false;
            return;
        }
        super.recibirDaño(cantidad);
    }
}

// INSTANCIAS
const ironman = new Heroe("Iron Man (Marvel)", 40);
const joker = new Villano("Joker (DC)", 35);

// EVENTOS
document.getElementById("hero-attack").addEventListener("click", () => {
    ironman.atacar(joker, 8);
    comprobarFin();
});

document.getElementById("hero-super").addEventListener("click", () => {
    ironman.atacar(joker, ironman.superAtaque());
    comprobarFin();
});

document.getElementById("villain-attack").addEventListener("click", () => {
    joker.atacar(ironman, 7);
    comprobarFin();
});

document.getElementById("villain-teleport").addEventListener("click", () => {
    joker.teletransportarse();
});

// INICIALIZACIÓN
actualizarUI();