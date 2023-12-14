import knightMoves from "./knight-moves.js";

const mainCont = document.querySelector('.main-cont');
const startSquareInput = document.querySelector('#start-square');
const endSquareInput = document.querySelector('#end-square');
const submit = document.querySelector('.submit');
const result = document.createElement('h3');

submit.addEventListener('click', travail);

function travail() {
    if (startSquareInput.value !== '' && endSquareInput.value !== '') {
        result.textContent = knightMoves(startSquareInput.value, endSquareInput.value);
        mainCont.appendChild(result);
    }
}

