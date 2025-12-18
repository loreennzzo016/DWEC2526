function golpear() {
  const x = parseInt(document.getElementById('ancho').value);
  const y = parseInt(document.getElementById('alto').value);
  const bola = document.getElementById('bola');
  const campo = document.getElementById('campo');
  const hoyo = document.getElementById('hoyo');
  const mensaje = document.getElementById('mensaje');

  const maxX = campo.clientWidth - bola.offsetWidth;
  const maxY = campo.clientHeight - bola.offsetHeight;

  if (isNaN(x) || isNaN(y)) {
    mensaje.textContent = 'Introduce valores numéricos válidos.';
    mensaje.style.color = 'orange';
    return;
  }

  if (x < 0 || y < 0 || x > maxX || y > maxY) {
    mensaje.textContent = `Fuera de límites. Máximo permitido: ${maxX}px X, ${maxY}px Y.`;
    mensaje.style.color = 'red';
    return;
  }

  // Animación de movimiento
  const startX = bola.offsetLeft;
  const startY = bola.offsetTop;
  const deltaX = x - startX;
  const deltaY = y - startY;
  const duration = 500; // ms
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    bola.style.left = `${startX + deltaX * progress}px`;
    bola.style.top = `${startY + deltaY * progress}px`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      verificarHoyo(x, y);
    }
  }

  requestAnimationFrame(animate);

  function verificarHoyo(xFinal, yFinal) {
    const hoyoX = hoyo.offsetLeft;
    const hoyoY = hoyo.offsetTop;
    const distancia = Math.hypot(xFinal - hoyoX, yFinal - hoyoY);

    if (distancia < 15) {
      mensaje.textContent = '¡Hole in one! 🎉';
      mensaje.style.color = '#ff9800';
      bola.style.backgroundColor = '#ffd700';
      bola.style.transform = 'scale(1.2)';
    } else {
      mensaje.textContent = `Bola movida a (${xFinal}px, ${yFinal}px)`;
      mensaje.style.color = '#2e7d32';
      bola.style.backgroundColor = 'white';
      bola.style.transform = 'scale(1)';
    }
  }
}