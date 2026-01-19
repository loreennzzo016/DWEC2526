const teclaQ = document.getElementById('Q');
const teclaW = document.getElementById('W');
const teclaE = document.getElementById('E');
const teclaR = document.getElementById('R');
const teclaT = document.getElementById('T');
const teclaY = document.getElementById('Y');
const teclaA = document.getElementById('A');
const teclaS = document.getElementById('S');
const teclaD = document.getElementById('D');
const teclaF = document.getElementById('F');
const teclaG = document.getElementById('G');
const teclaZ = document.getElementById('Z');
const teclaX = document.getElementById('X');
const teclaC = document.getElementById('C');
const teclaV = document.getElementById('V');

const sonidoQ = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
const sonidoW = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
const sonidoE = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
const sonidoR = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
const sonidoT = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
const sonidoY = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');

const sonidoA = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
const sonidoS = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
const sonidoD = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
const sonidoF = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');
const sonidoG = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3');

const sonidoZ = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3');
const sonidoX = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3');
const sonidoC = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3');
const sonidoV = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');

function activarTecla(tecla, sonido) {  
  sonido.currentTime = 0;
  sonido.play();
  tecla.style.transform = "scale(1.2)";
  tecla.style.boxShadow = "0 0 15px black";
  document.getElementById('info').innerHTML = "Tecla pulsada: " + tecla.id;
}

function desactivarTecla(tecla, sonido) {
  tecla.style.transform = "scale(1)";
  tecla.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  sonido.pause();
  sonido.currentTime = 0;
}

document.addEventListener('keydown', function(e) {
  const key = e.key.toLowerCase();
  if (key === 'q') activarTecla(teclaQ, sonidoQ);
  if (key === 'w') activarTecla(teclaW, sonidoW);
  if (key === 'e') activarTecla(teclaE, sonidoE);
  if (key === 'r') activarTecla(teclaR, sonidoR);
  if (key === 't') activarTecla(teclaT, sonidoT);
  if (key === 'y') activarTecla(teclaY, sonidoY);
  if (key === 'a') activarTecla(teclaA, sonidoA);
  if (key === 's') activarTecla(teclaS, sonidoS);
  if (key === 'd') activarTecla(teclaD, sonidoD);
  if (key === 'f') activarTecla(teclaF, sonidoF);
  if (key === 'g') activarTecla(teclaG, sonidoG);
  if (key === 'z') activarTecla(teclaZ, sonidoZ);
  if (key === 'x') activarTecla(teclaX, sonidoX);
  if (key === 'c') activarTecla(teclaC, sonidoC);
  if (key === 'v') activarTecla(teclaV, sonidoV);
});

document.addEventListener('keyup', function(e) {
  const key = e.key.toLowerCase();
  if (key === 'q') desactivarTecla(teclaQ, sonidoQ);
  if (key === 'w') desactivarTecla(teclaW, sonidoW);
  if (key === 'e') desactivarTecla(teclaE, sonidoE);
  if (key === 'r') desactivarTecla(teclaR, sonidoR);
  if (key === 't') desactivarTecla(teclaT, sonidoT);
  if (key === 'y') desactivarTecla(teclaY, sonidoY);
  if (key === 'a') desactivarTecla(teclaA, sonidoA);
  if (key === 's') desactivarTecla(teclaS, sonidoS);
  if (key === 'd') desactivarTecla(teclaD, sonidoD);
  if (key === 'f') desactivarTecla(teclaF, sonidoF);
  if (key === 'g') desactivarTecla(teclaG, sonidoG);
  if (key === 'z') desactivarTecla(teclaZ, sonidoZ);
  if (key === 'x') desactivarTecla(teclaX, sonidoX);
  if (key === 'c') desactivarTecla(teclaC, sonidoC);
  if (key === 'v') desactivarTecla(teclaV, sonidoV);
});


const coords = document.getElementById('coordenadas');
document.addEventListener('mousemove', function(e) {
  coords.innerHTML = "X=" + e.clientX + " Y=" + e.clientY;
});