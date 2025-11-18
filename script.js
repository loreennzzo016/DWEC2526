function calcular(op) {
  let a = Number(document.getElementById('op1').value);
  let b = Number(document.getElementById('op2').value);
  let resDiv = document.getElementById('resultado');
  let logDiv = document.getElementById('log');

  if (!document.getElementById('op1').value || !document.getElementById('op2').value) {
    resDiv.textContent = "Introduce números válidos";
    resDiv.style.color = "black";
    resDiv.style.background = "none";
    return;
  }

  let colores = { "+": "blue", "-": "red", "*": "green", "/": "violet" };
  let resultado = op === "/" ? (b ? a / b : "∞") : eval(a + op + b);
  resDiv.textContent = "Resultado: " + resultado;
  resDiv.style.color = colores[op];
  resDiv.style.background = "none";

  logDiv.innerHTML += `<div style="color:${colores[op]}">🔹 ${a} ${op} ${b} = ${resultado}</div>`;

  if (typeof resultado === "number") {
    document.body.style.background = resultado % 2 === 0 ? randCol() : "#006400";
  }
}

function borrarLog() {
  document.getElementById('log').innerHTML = "";
}

function randCol() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}