// Constantes globais
const randomBtn = document.querySelector('#random');
const result = document.querySelector('#hex');
const copyBtn = document.querySelector('#copy');

// Executar o programa
function runProgram () {
    randomBtn.addEventListener('click', changeColor);
    copyBtn.classList.add('hidden-btn');
    copyBtn.addEventListener('click', copyToClipBoard);
};

// Mudar a cor do fundo geral e dos botões
function changeColor () {
    const main = document.querySelector('main');
    const hexCode = generateHexColor();
    const name = document.querySelector('#name');
    result.innerHTML = hexCode;
    main.style.backgroundColor = hexCode;
    name.style.color = hexCode;
    randomBtn.style.setProperty('--button-color', hexCode);
    copyBtn.style.setProperty('--button-color', hexCode);
    copyBtn.classList.remove("hidden-btn");
}

// Gerar o código hexadecimal
function generateHexColor () {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const red = `${values[Math.floor(Math.random() * values.length)]}${values[Math.floor(Math.random() * values.length)]}`;
    const green = `${values[Math.floor(Math.random() * values.length)]}${values[Math.floor(Math.random() * values.length)]}`;
    const blue = `${values[Math.floor(Math.random() * values.length)]}${values[Math.floor(Math.random() * values.length)]}`;
    return `#${red}${green}${blue}`;
}

// Copiar o código para a área de transferência
function copyToClipBoard () {
    const textArea = document.createElement('textarea');
    textArea.value = result.innerHTML;
    document.body.appendChild(textArea);
    console.log(textArea.value);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Copied to clipboard.');
}

runProgram();