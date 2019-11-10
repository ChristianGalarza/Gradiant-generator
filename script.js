var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var coloractual = document.getElementById("colores");
var body = document.getElementById("back");

function setColorText() {
    coloractual.textContent="Color izquierda: ("+color1.value+") Color derecha: ("+color2.value+")";
}
function changeColor() {
    body.style.background= "linear-gradient(to left,"+ color1.value+", "+color2.value+")";
    setColorText();
}
setColorText();
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);