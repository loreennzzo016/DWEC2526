let personajes = ["Ferrari", "Lamborghini", "Mercedes", "Porsche",  "Bugatti",  "McLaren"];

function actualizar() {
  document.getElementById("resultado").innerText = "Coches: " + personajes.join("; ");
}

function obtenerNombre() {
  return document.getElementById("nombre").value.trim();
}

function agregarFinal() {
  const nombre = obtenerNombre();
  if (nombre) personajes.push(nombre);
  actualizar();
}

function eliminarFinal() {
  personajes.pop();
  actualizar();
}

function agregarInicio() {
  const nombre = obtenerNombre();
  if (nombre) personajes.unshift(nombre);
  actualizar();
}

function eliminarInicio() {
  personajes.shift();
  actualizar();
}

function ordenar() {
  personajes.sort();
  actualizar();
}

function limpiar() {
  personajes = [];
  actualizar(); 
}

function mostrar() {
  actualizar();
}