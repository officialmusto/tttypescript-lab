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
// --------- FUNCTIONS ---------
// --------- INITIALIZER ---------
