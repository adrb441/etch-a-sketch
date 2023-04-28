function createGrid(gridSize) {
    const grid = document.querySelector('.container');
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

function changeSquareColor(e) {
    const square = e.target.className;
    if (square === 'square') {
        e.target.style.backgroundColor = 'blue';
    }
}

createGrid(16);
window.addEventListener('mouseover', changeSquareColor);