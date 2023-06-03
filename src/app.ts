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
  updateBoard(), updateMessage()
}

function handleCLick(evt: MouseEvent): void {
  if (!(evt.target instanceof HTMLElement)) return
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (isNaN(sqIdx) || board[sqIdx] || hasWinner) return
  switchPTurn()
  render()
}

function checkTie(): void {
  if (board.includes(0)) return
  hasTie = true
}

function updateBoard(): void {
  board.forEach((current, idx) => {
    if (current === 1) {
      squares[idx].textContent = '❌'
    } else if (current === -1) {
      squares[idx].textContent = '⭕️'
    }
  })
}

function placePiece(): void {

}

function switchPTurn(): void {

}
function updateMessage(): void {

}

function checkForWinner(): void {

}

// --------- INITIALIZER ---------
init()