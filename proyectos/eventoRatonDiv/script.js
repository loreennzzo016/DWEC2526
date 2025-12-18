let contador = 0;
const div = document.getElementById("target");
const p = document.getElementById("contador");

div.addEventListener("mouseover", () => {
  p.innerText = `Has pasado el ratón ${++contador} veces`;
  if (contador % 10 === 0) alert(`Lo has hecho ${contador} veces`);
});

div.addEventListener("mouseout", () => {
  div.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

div.addEventListener("click",clickDiv)
div.addEventListener("contextmenu",clickDiv)

function clickDiv(e){
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);
}