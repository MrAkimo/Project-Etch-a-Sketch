const button = document.querySelector('#btn');
const container = document.querySelector('#container');

let questionGrids;

button.addEventListener('click', () => {
    container.innerHTML = '';
    questionGrids = prompt("What number of squares per side do you want for the grid?");
    questionGrids > 100 ? questionGrids = 100 : '';
    createGridDivs(questionGrids);
    paintPixels()
})


function createGridDivs(cantSideDivs) {

    container.style.cssText += `grid-template-columns: repeat(${cantSideDivs}, auto); grid-gap: 1px;`;

    for(x=0; x < cantSideDivs; x++) {
        for(y = 0; y < cantSideDivs; y++) {
            let div = document.createElement('div');
            //div.textContent = 'hello World';
            //div.style.textAlign = 'center';
            div.setAttribute('id', 'pixel')
            //div.style.height = '100px';
            div.style.borderRadius = '6px'
            container.appendChild(div);
        }
    }
}

function paintPixels() {
    const divs = document.querySelectorAll('#pixel');
    const divsArray = [...divs]

    divsArray.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            let actualOpacity = +pixel.style.opacity;
            pixel.style.backgroundColor = randomcolor();
            
            actualOpacity < '1' ? pixel.style.opacity = actualOpacity + 0.1 : '';
        })
    })
}

function randomcolor() {
    let hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    return color;
}