const folio = document.getElementById("folio");
const borrar = document.getElementById("borrar");
const activar = document.getElementById("activarEscritura");
const desactivar = document.getElementById("desactivarEscritura");

let folioActivo = true;

// Botón borrar
borrar.addEventListener("click", () => {
  folio.innerHTML = "";
});

// Botón desactivar escritura
desactivar.addEventListener("click", () => {
  folioActivo = false;
});

// Botón activar escritura
activar.addEventListener("click", () => {
  folioActivo = true;
});

// Manejador de teclado
document.addEventListener("keydown", (e) => {
  console.log("Entrando en función manejadora del teclado.");
  console.log(`folioActivo vale ${folioActivo}`);

  if (folioActivo) {
    if (e.key === "Backspace") {
      folio.innerHTML = folio.innerHTML.slice(0, -1);
    } else if (!["Shift","Control","Alt","Enter","Tab","CapsLock"].includes(e.key)) {
      folio.innerHTML += e.key;
    }
  }
});