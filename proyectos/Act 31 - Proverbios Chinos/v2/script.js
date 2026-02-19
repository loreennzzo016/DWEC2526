const proverbios = [
    "A buen hambre no hay mal pan.",
    "Más vale tarde que nunca.",
    "El que mucho abarca, poco aprieta.",
    "No hay mal que por bien no venga.",
    "En casa de herrero, cuchillo de palo.",
    "Dime con quién andas y te diré quién eres.",
    "Cría cuervos y te sacarán los ojos.",
    "Quien mucho abarca, poco aprieta."
];

const boton = document.getElementById("fortune-btn");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    const indice = Math.floor(Math.random() * proverbios.length);
    resultado.textContent = proverbios[indice];
});