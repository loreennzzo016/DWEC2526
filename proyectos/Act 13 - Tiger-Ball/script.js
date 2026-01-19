function moverBola() {
  const izquierda = parseInt(document.getElementById('izquierda').value);
  const arriba = parseInt(document.getElementById('arriba').value);
  const bola = document.getElementById('bola');
  const escenario = document.getElementById('escenario');
  const mensaje = document.getElementById('mensaje');

  const limiteX = escenario.clientWidth - bola.clientWidth;
  const limiteY = escenario.clientHeight - bola.clientHeight;

  const fueraLimite = izquierda > limiteX || arriba > limiteY;

if (fueraLimite) {
  mensaje.textContent = `Fuera de límites. Máximo: ${limiteX}px izquierda, ${limiteY}px arriba.`;
  mensaje.style.color = 'red';
} else {
  bola.style.left = `${izquierda}px`;
  bola.style.top = `${arriba}px`;
  mensaje.textContent = `Bola movida a (${izquierda}px, ${arriba}px)`;
  mensaje.style.color = 'green';
}

return false;
}