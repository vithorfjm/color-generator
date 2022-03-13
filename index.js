document.querySelector("button").addEventListener("click", generateColor);
// window.onload = generateColor

function generateColor () {
    let red = generateNum();
    let green = generateNum();
    let blue = generateNum();
    let rgbCode = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('main').style.backgroundColor = rgbCode;
    document.querySelector('#rgb').innerHTML = rgbCode
    document.querySelector('#random').style.setProperty('--button-color', rgbCode); // Deixa a cor do "Random" igual a do fundo quando passa o mouse por cima
    document.querySelector('a').style.color = rgbCode;
}   

const generateNum = () => {
    return Math.floor(Math.random() * 256)
}