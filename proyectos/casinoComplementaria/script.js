function lanzar() {
  const cantidad = parseInt(document.getElementById("numDados").value);
  const contenedor = document.getElementById("dados");
  const sumaTexto = document.getElementById("suma");

  contenedor.innerHTML = "";
  let suma = 0;

  for (let i = 0; i < cantidad; i++) {
    const valor = Math.floor(Math.random() * 6) + 1;
    suma += valor;

    let puntos = "";
    for (let j = 0; j < valor; j++) {
      puntos += `<div class="punto"></div>`;
    }

    contenedor.innerHTML += `
      <div class="dado">
        ${puntos}
        <div class="numero">${valor}</div>
      </div>
    `;
  }

  sumaTexto.textContent = "Suma total: " + suma;
}

function limpiar() {
  document.getElementById("dados").innerHTML = "";
  document.getElementById("suma").textContent = "";
}