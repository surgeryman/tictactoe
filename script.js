const cells = document.querySelectorAll('[data-cell]');
const X_PLAYER = 'X';
const O_PLAYER = 'O';
let currentPlayer = X_PLAYER;
let moves = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    cell.textContent = currentPlayer;
    cell.dataset.player = currentPlayer;
    moves++;

    if (checkWinner(currentPlayer)) {
        alert(`${currentPlayer} выиграл!`);
        location.reload();
        return;
    }

    if (moves === 9) {
        alert('Ничья!');
        location.reload();
        return;
    }

    currentPlayer = currentPlayer === X_PLAYER ? O_PLAYER : X_PLAYER;
}

function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].dataset.player === player;
        });
    });
}
