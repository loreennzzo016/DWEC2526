// CASO 1: Objeto literal jugador con vida y eventos de teclado
const jugador = {
    nombre: "Spider-Man",
    vida: 100,
    subirVida(cant) {
        this.vida += cant;
        if (this.vida > 200) this.vida = 200;
        console.log(`${this.nombre} sube vida → ${this.vida}`);
        document.getElementById("vida").textContent = this.vida;
    },
    bajarVida(cant) {
        this.vida -= cant;
        if (this.vida < 0) this.vida = 0;
        console.log(`${this.nombre} baja vida → ${this.vida}`);
        document.getElementById("vida").textContent = this.vida;
    }
};

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") {
        jugador.subirVida(10);
    } else if (e.key === "ArrowDown") {
        jugador.bajarVida(10);
    }
});

// CASO 2: Teletransporte de Flash con objeto literal
const flash = {
    html: document.getElementById("flash"),
    teletransporta(x, y) {
        const rect = document.getElementById("escenario").getBoundingClientRect();
        const posX = x - rect.left - this.html.offsetWidth / 2;
        const posY = y - rect.top - this.html.offsetHeight / 2;
        this.html.style.left = posX + "px";
        this.html.style.top = posY + "px";
    }
};

document.getElementById("escenario").addEventListener("click", e => {
    flash.teletransporta(e.clientX, e.clientY);
});