// Primero pedimos confirmación
let mivariable = confirm("¿Estás de acuerdo?");
alert("Hola " + mivariable);
console.log(mivariable);

// Luego pedimos el nombre
let nombre = prompt("¿Cuál es tu nombre?");
alert("Bienvenido, " + nombre);

// Función para cambiar el párrafo y añadir listeners
function cambiarParrafo() {
  document.getElementById("parrafito").innerHTML = "LAMMM";

  document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("texto2").textContent = "pedro";
  });

  document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("texto3").textContent = "pablo";
  });
}
