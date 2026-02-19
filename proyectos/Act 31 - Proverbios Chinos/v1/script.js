let DannyDaniel = "A buen hambre no hay mal pan.";
let Lorenzo = "Más vale tarde que nunca.";
let Carlos = "El que mucho abarca, poco aprieta.";
let Marcos = "No hay mal que por bien no venga.";
let Antonio = "En casa de herrero, cuchillo de palo.";
let Virginia = "Dime con quién andas y te diré quién eres.";
let DanielGalan = "Cría cuervos y te sacarán los ojos.";
let Jesus = "Quien mucho abarca, poco aprieta.";

const proverbios = [
    DannyDaniel,
    Lorenzo,
    Carlos,
    Marcos,
    Antonio,
    Virginia,
    DanielGalan,
    Jesus
];

const contenedor = document.getElementById("lista-proverbios");

for (let i = 0; i < proverbios.length; i++) {
    contenedor.innerHTML += `<p>${proverbios[i]}</p>`;
}

console.log(proverbios[2]);