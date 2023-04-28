function createGrid(gridSize) {
    const grid = document.querySelector('.container');
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

createGrid(16);