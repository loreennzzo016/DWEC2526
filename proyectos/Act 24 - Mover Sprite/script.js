// Elementos
let j = document.getElementById('jugador');
let m = document.getElementById('meta');
let msg = document.getElementById('mensaje');
let tTxt = document.getElementById('tiempo');

let x = 235, y = 135;
let tiempo = 30;
let jugando = true;

// Empezar
function empezar() {
    jugando = true;
    x = 235; 
    y = 135; 
    tiempo = 30;
    
    j.style.left = x + 'px';
    j.style.top = y + 'px';
    j.style.background = 'red';
    msg.textContent = 'Llega al verde';
    
    // Meta aleatoria
    m.style.left = Math.random() * 470 + 'px';
    m.style.top = Math.random() * 270 + 'px';
    
    // Piedras fijas
    let piedras = ['piedra1','piedra2','piedra3','piedra4','piedra5','piedra6'];
    let pos = [[100,50],[200,200],[300,100],[50,150],[400,50],[350,200]];
    
    for(let i=0; i<6; i++) {
        document.getElementById(piedras[i]).style.left = pos[i][0] + 'px';
        document.getElementById(piedras[i]).style.top = pos[i][1] + 'px';
    }
    
    // Tiempo
    clearInterval(window.timer);
    window.timer = setInterval(() => {
        tiempo--;
        tTxt.textContent = 'Tiempo: ' + tiempo;
        if(tiempo <= 0) {
            jugando = false;
            msg.textContent = 'Se acabó el tiempo';
            j.style.background = 'gray';
        }
    }, 1000);
}

// Mover
function mover(dx, dy) {
    if(!jugando) return;
    
    x += dx;
    y += dy;
    
    // Bordes
    if(x < 0 || x > 470 || y < 0 || y > 270) {
        jugando = false;
        msg.textContent = '¡Te saliste!';
        j.style.background = 'gray';
        return;
    }
    
    j.style.left = x + 'px';
    j.style.top = y + 'px';
    
    // Piedras
    let p = [[70,130,10,90],[170,230,160,240],[270,330,60,140],
             [20,80,110,190],[370,430,10,90],[320,380,160,240]];
    
    for(let i=0; i<6; i++) {
        if(x > p[i][0] && x < p[i][1] && y > p[i][2] && y < p[i][3]) {
            jugando = false;
            msg.textContent = '¡Chocaste!';
            j.style.background = 'gray';
            return;
        }
    }
    
    // Meta
    let mx = parseInt(m.style.left);
    let my = parseInt(m.style.top);
    if(Math.abs(x - mx) < 30 && Math.abs(y - my) < 30) {
        jugando = false;
        msg.textContent = '¡Ganaste!';
        j.style.background = 'green';
        clearInterval(window.timer);
    }
}

// Teclas
document.onkeydown = function(e) {
    if(e.key === 'ArrowUp') mover(0, -10);
    if(e.key === 'ArrowDown') mover(0, 10);
    if(e.key === 'ArrowLeft') mover(-10, 0);
    if(e.key === 'ArrowRight') mover(10, 0);
};

// Inicio
empezar();
window.reiniciar = empezar;