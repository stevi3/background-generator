var body = document.querySelector('#gradient');
var color1 = document.querySelector('.input1');
var color2 = document.querySelector('.input2');
var css = document.querySelector('p');

function backgroundGenerator(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
}


color1.addEventListener('input', backgroundGenerator);

color2.addEventListener('input', backgroundGenerator);


// body.style.background = "yellow";