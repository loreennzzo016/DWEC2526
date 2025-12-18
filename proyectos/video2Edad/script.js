function edad() {
  var imagen = document.getElementById("uno");

  var edad = prompt("Que edad tienes");
  console.log(edad);

  if (edad >= 18) {
    imagen.style.backgroundImage = "url(coche.jpg)";
    imagen.style.backgroundSize = "cover";
  } else if (edad >= 12) {
    imagen.style.backgroundImage = "url(baloncesto.jpg)";
    imagen.style.backgroundSize = "cover";
  } else {
    imagen.style.backgroundImage = "url(peppa-pig.jpg)";
    imagen.style.backgroundSize = "cover";
  }
}
