function girar() {
  let flecha = document.getElementById("flecha");
  let colores = ["Amarillo", "Rojo", "Verde", "Azul"];
  let lados = ["Izquierda", "Derecha"];
  let angulos = [45, 135, 225, 315];
  let i = Math.floor(Math.random() * 4);
  flecha.style.transform = "translate(-50%, -50%) rotate(" + (720 + angulos[i]) + "deg)";
  document.getElementById("resultado").textContent = colores[i] + " - Mano: " + lados[Math.floor(Math.random() * 2)] + ", Pie: " + lados[Math.floor(Math.random() * 2)];
}