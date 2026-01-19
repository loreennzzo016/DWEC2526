let padre = document.getElementById("padre")

// Hijo 1
let hijo1 = document.createElement("div")
hijo1.innerHTML = "Hola Mundo"
padre.appendChild(hijo1)

// Hijo 2
let hijo2 = document.createElement("div")
hijo2.className = "circulo"
padre.appendChild(hijo2)

// Hijo 3
let hijo3 = document.createElement("div")
hijo3.className = "circuloRojo"
padre.appendChild(hijo3)

// Hijo 4 y Nieto
let hijo4 = document.createElement("ul")
padre.appendChild(hijo4)

let nieto1 = document.createElement("li")
nieto1.innerHTML = "Soy un nieto"
hijo4.appendChild(nieto1)

// Hijo 5
let hijo5 = document.createElement("div")
hijo5.className = "cuadrado"
padre.appendChild(hijo5)

// Botón
let cain = document.createElement("input")
cain.type = "button"
cain.value = "Eliminar"
cain.id = "eliminar"
cain.className = "circulo"
padre.appendChild(cain)

// Cain Mata Abel
cain.addEventListener("click", function() {
    padre.removeChild(hijo3)
})

// Revive Abel
let abel = document.createElement("input")
abel.type = "button"
abel.value = "Agregar"
abel.id = "agregar"
abel.className = "circulo"
padre.appendChild(abel)

abel.addEventListener("click", function() {
    padre.removeChild(hijo3)
})