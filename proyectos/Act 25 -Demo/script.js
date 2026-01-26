var estado = 0;

function cambiar() {
  document.getElementById("rojo").style.background = "grey";
  document.getElementById("amarillo").style.background = "grey";
  document.getElementById("verde").style.background = "grey";

  if (estado === 0) {
    document.getElementById("rojo").style.background = "red";
    estado = 1;
  } else if (estado === 1) {
    document.getElementById("amarillo").style.background = "yellow";
    estado = 2;
  } else {
    document.getElementById("verde").style.background = "green";
    estado = 0;
  }
}