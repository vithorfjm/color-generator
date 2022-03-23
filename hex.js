/* Mudar com Hex */

document.querySelector('#random').addEventListener('click', () => {
    const red = generateHexNum();
    const green = generateHexNum();
    const blue = generateHexNum();
    const hexCode = `#${red}${green}${blue}`;
    document.querySelector('main').style.backgroundColor = hexCode;
    document.querySelector('#hex').innerHTML = hexCode
    document.querySelector('#random').style.setProperty('--button-color', hexCode);
    document.querySelector('#name').style.color = hexCode
});

/* Geradores dos números isolados */

function generateHexNum () {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const num = `${values[Math.floor(Math.random() * values.length)]}${values[Math.floor(Math.random() * values.length)]}`;
    return `${num}`;
}

document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });