const ancho = document.getElementById("ancho");
const alto = document.getElementById("alto");
const cuadrado = document.getElementById("cuadrado");

function moverCuadrado() {
  cuadrado.style.top = alto.value + "px";
  cuadrado.style.left = ancho.value + "px";
  cuadrado.style.backgroundColor = "lightgreen";
}
