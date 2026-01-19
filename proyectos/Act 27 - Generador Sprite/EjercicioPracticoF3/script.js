let padre = document.getElementById("padre");

let cuadrado1, cuadrado2, cuadrado3, cuadrado4, cuadrado5;

function crearSprites() {
    borrarSprites();

    const anchoPadre = padre.clientWidth;
    const altoPadre = padre.clientHeight;
    const size = 200;

    function crearDiv(clase) {
        let div = document.createElement("div");
        div.className = "cuadrado " + clase;

        let maxX = anchoPadre - size;
        let maxY = altoPadre - size;

        div.style.left = Math.random() * maxX + "px";
        div.style.top = Math.random() * maxY + "px";

        padre.appendChild(div);
        return div;
    }

    cuadrado1 = crearDiv("cuadrado1");
    cuadrado2 = crearDiv("cuadrado2");
    cuadrado3 = crearDiv("cuadrado3");
    cuadrado4 = crearDiv("cuadrado4");
    cuadrado5 = crearDiv("cuadrado5");
}

function borrarSprites() {
    if (cuadrado1) padre.removeChild(cuadrado1);
    if (cuadrado2) padre.removeChild(cuadrado2);
    if (cuadrado3) padre.removeChild(cuadrado3);
    if (cuadrado4) padre.removeChild(cuadrado4);
    if (cuadrado5) padre.removeChild(cuadrado5);
}