"use strict";
// --------- VARIABLES ---------
let board, turn, hasWinner, hasTie;
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
// --------- CACHED ELEMENTS ---------
const squares = document.querySelectorAll('.sqr');
const message = document.querySelector('#message');
const reset = document.querySelector('button');
// --------- FUNCTIONS ---------
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    hasWinner = false;
    hasTie = false;
}
// --------- INITIALIZER ---------
