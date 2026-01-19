var edad = "9";
prompt("¿Cuantos años tienes?");
console.log("Hola tu edad es: " + edad);

var nombre = "Lorenzo Pérez Carbonell";
prompt("¿Como te llamas?");
console.log("Tu nombre es: " + nombre);

// Solicita la edad al usuario
var edad = prompt("¿Cuántos años tienes?");

if (!/^\d+$/.test(edad)) {
  console.error("Error: La edad debe ser un número entero positivo.");
} else {
  console.log("Hola, tu edad es: " + edad);
}

// Solicita el nombre al usuario
var nombre = prompt("¿Cómo te llamas?");

if (/\d/.test(nombre)) {
  console.error("Error: El nombre no debe contener números.");
} else {
  console.log("Tu nombre es: " + nombre);
}
