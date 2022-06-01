// global const
const randomBtn = document.querySelector('#random');
const copyBtn = document.querySelector('#copy');
const result = document.querySelector('#rgb');

// Executa o programa
function runProgram() {
    randomBtn.addEventListener('click', changeColor);
    copyBtn.classList.add("hidden-btn");
    copyBtn.addEventListener('click', copyToClipBoard);
}

// Mudar a cor do fundo geral e do fundo dos botões
function changeColor () {
    const main = document.querySelector('main');
    const rgbCode = generateRGB();
    const name = document.querySelector('#name');
    main.style.backgroundColor = rgbCode;
    result.innerHTML = rgbCode;
    randomBtn.style.setProperty('--button-color', rgbCode);  
    copyBtn.style.setProperty('--button-color', rgbCode);
    name.style.color = rgbCode;
    copyBtn.classList.remove("hidden-btn");
}

// Gerar código RGB
function generateRGB () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Copiar o código para a área de transferência
function copyToClipBoard () {
    const textArea = document.createElement('textarea');
    textArea.value = result.innerHTML;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Copied to clipboard.');
}

runProgram();