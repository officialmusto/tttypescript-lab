"use strict";
// --------- VARIABLES ---------
let board;
let turn, hasWinner, hasTie;
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
// --------- CACHED ELEMENTS ---------
const squares = document.querySelectorAll('.sqr');
const message = document.querySelector('#message');
const reset = document.querySelector('button');
const boardEl = document.querySelector('.board');
// -------- EVENT LISTENERS ---------
squares.forEach(function square(idx) {
    idx.addEventListener('click', handleClick);
});
reset.addEventListener('click', init);
// --------- FUNCTIONS ---------
init();
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    hasWinner = false;
    hasTie = false;
    render();
}
function render() {
    updateBoard(), updateMessage();
}
function handleClick(evt) {
    if (!(evt.target instanceof HTMLElement))
        return;
    const sqIdx = parseInt(evt.target.id.replace('sq', ''));
    if (isNaN(sqIdx) || board[sqIdx] || hasWinner)
        return;
    placePiece(sqIdx);
    checkTie();
    checkForWinner();
    switchPTurn();
    render();
}
function checkTie() {
    if (board.includes(0))
        return;
    hasTie = true;
}
function updateBoard() {
    board.forEach((current, idx) => {
        if (current === 1) {
            squares[idx].textContent = '❌';
        }
        else if (current === -1) {
            squares[idx].textContent = '⭕️';
        }
        else {
            squares[idx].textContent = '';
        }
    });
}
function placePiece(idx) {
    board[idx] = turn;
}
function switchPTurn() {
    if (hasWinner)
        return;
    turn *= -1;
}
function updateMessage() {
    if (!hasWinner && !hasTie) {
        message.textContent = `${turn === 1 ? '❌' : '⭕'}, MAKE YOUR MOVE.`;
    }
    else if (!hasWinner && !hasTie) {
        message.textContent = 'TIE.';
    }
    else {
        message.textContent = `${turn === 1 ? '❌' : '⭕'} WON.`;
    }
}
function checkForWinner() {
    winningCombos.forEach(combo => {
        if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
            hasWinner = true;
        }
    });
}
// --------- INITIALIZER ---------
