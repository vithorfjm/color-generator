document.querySelector("button").addEventListener("click", generateColor);
// window.onload = generateColor

function generateColor () {
    let red = generateNum();
    let green = generateNum();
    let blue = generateNum();
    let rgbCode = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('main').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector("#rgb").innerHTML = rgbCode
    hover = document.querySelector('#random');
    hover.style.setProperty('--button-color', rgbCode);
}

const generateNum = () => {
    return Math.floor(Math.random() * 256)
}