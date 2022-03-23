/* Mudar cor RGB */

document.querySelector('#random').addEventListener('click', () => {
    const red = generateNum();
    const green = generateNum();
    const blue = generateNum();
    const rgbCode = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('main').style.backgroundColor = rgbCode;
    document.querySelector('#rgb').innerHTML = rgbCode;
    document.querySelector('#random').style.setProperty('--button-color', rgbCode); // Deixa a cor do "Random" igual a do fundo quando passa o mouse por cima
    document.querySelector('#name').style.color = rgbCode;
});

/* Gerar número para cada cor do RGB */

function generateNum () {
    return Math.floor(Math.random() * 256);
}

document.body.addEventListener('touchmove', function(){
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
});