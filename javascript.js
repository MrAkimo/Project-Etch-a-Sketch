const button = document.querySelector('#btn');
let questionGrids = 'prompt("What number of squares per side do you want for the grid?")';

button.setAttribute('onclick', questionGrids);
console.log(questionGrids)

createGridDivs();

function createGridDivs() {
    let container = document.querySelector('#container');

    for(i=0; i < 16; i++) {
        let div = document.createElement('div');
        div.textContent = 'hello World';
        container.appendChild(div);
    }
}