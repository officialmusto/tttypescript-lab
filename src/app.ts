// --------- VARIABLES ---------
let board: number[], 
turn: number, 
hasWinner: boolean, 
hasTie: boolean

const winningCombos: (number[])[] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

// --------- CACHED ELEMENTS ---------
const squares = document.querySelectorAll<HTMLDivElement>('.sqr')
const message = document.querySelector<HTMLHeadingElement>('#message')!
const reset = document.querySelector('button') as HTMLButtonElement



// --------- FUNCTIONS ---------

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  hasWinner = false
  hasTie = false
  updateBoard()
  render()
}

function render(): void {
  
}

function updateBoard(): void {

}
function handleCLick(): void {

}

function placePiece(): void {

}
function checkTie(): void {

}

function switchPTurn(): void {

}

// --------- INITIALIZER ---------
init()