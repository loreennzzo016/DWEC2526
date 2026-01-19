const divRojo = document.getElementById("uno");

// Función para generar un color aleatorio en formato hexadecimal
function colorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Evento al hacer clic
divRojo.addEventListener("click", () => {
  const nuevoColor = colorAleatorio();
  document.body.style.backgroundColor = nuevoColor;

  // Cambiar también el color del div a otro tono aleatorio para más dinamismo
  divRojo.style.backgroundColor = colorAleatorio();
});
