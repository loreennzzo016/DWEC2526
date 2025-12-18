var divFoto = document.getElementById("foto");
var miElemento = document.getElementById("miElemento");

divFoto.style.width = "300px";
divFoto.style.height = "200px";
divFoto.style.backgroundColor = "lightgreen";
divFoto.style.border = "2px solid green";
divFoto.style.borderRadius = "10px";
divFoto.style.display = "flex";
divFoto.style.alignItems = "center";
divFoto.style.justifyContent = "center";
divFoto.style.fontWeight = "bold";
divFoto.style.color = "darkgreen";
divFoto.style.visibility = "hidden";
divFoto.style.opacity = "0";

function mostrarTrump() {
  divFoto.style.visibility = "visible";
  divFoto.style.opacity = "1";
  divFoto.innerText = "Cargando...";

  setTimeout(function () {
    divFoto.style.backgroundColor = "transparent";
    divFoto.style.border = "none";
    divFoto.innerText = "";
    divFoto.style.backgroundImage = "url('foto.jpg')";
    divFoto.style.backgroundSize = "cover";
    divFoto.style.backgroundPosition = "center";
  }, 2000);
}

function ocultarTrump() {
  divFoto.style.opacity = "0";
  divFoto.style.visibility = "hidden";
  divFoto.style.backgroundImage = "none";
  divFoto.style.backgroundColor = "lightgreen";
  divFoto.style.border = "2px solid green";
  divFoto.innerText = "";
}
