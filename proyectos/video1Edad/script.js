function edad() {
  const edad = prompt("¿Cuántos años tienes?");
  const contenedor = document.querySelector(".contenedor_ppal");
  let mensaje = "";

  if (edad >= 18) {
    mensaje = "Ya eres mayor de edad";
  } else if (edad >= 12) {
    mensaje = "Eres adolescente";
  } else {
    mensaje = "Eres un niño";
  }

  contenedor.innerHTML = mensaje;
}
