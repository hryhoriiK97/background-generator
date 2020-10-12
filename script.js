const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector('.btn-random');

//event listener

//event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener('click', random);
console.log(newColor());

//function
//functions
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    h3.textContent = body.style.background + ";";
}


function newColor(){
  return '#' + Math.random().toString(16).substring(2, 8);
}

function random(){
  color1.value = newColor();
  color2.value = newColor();

  setGradient();
}

body.onload = function(){
  setGradient();
}