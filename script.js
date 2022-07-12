var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var rndBtn = document.getElementById('randomize');
randomGradient();

css.textContent = body.style.background + ";";

function gradientChange() {
	body.style.background="linear-gradient(to right, "+ color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColor(){
	var red=("0"+Math.floor(Math.random()*256).toString(16)).slice(-2);
	var green=("0"+Math.floor(Math.random()*256).toString(16)).slice(-2);
	var blue=("0"+Math.floor(Math.random()*256).toString(16)).slice(-2);
	return "#"+red+green+blue;
}

function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	gradientChange();
}

color1.addEventListener('input', gradientChange);
color2.addEventListener('input', gradientChange);
rndBtn.addEventListener('click', randomGradient);