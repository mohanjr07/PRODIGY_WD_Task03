let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let statusDisplay = document.getElementById('status');
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.textContent = ${currentPlayer} has won!;
    gameActive = false;
    return;
  }

  if (!gameState.includes('')) {
    statusDisplay.textContent = 'It\'s a draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.textContent = ${currentPlayer}'s turn;
}

function handleCellClick(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  clickedCell.style.pointerEvents = 'none';
}

function handleClick(cellIndex) {
  const clickedCell = cells[cellIndex];
  if (gameState[cellIndex] !== '' || !gameActive) return;

  handleCellClick(clickedCell, cellIndex);
  handleResultValidation();
}

function reset() {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  statusDisplay.textContent = ${currentPlayer}'s turn;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.pointerEvents = 'auto';
  });
}

statusDisplay.textContent = ${currentPlayer}'s turn;