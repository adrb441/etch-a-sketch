function createGrid(size) {
    const grid = document.querySelector('.container');
    const gridSize = size * size;
    for (let x = 0; x < size; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let y = 0; y < size; y++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    /*
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);*/
}

function changeSquareColor(e) {
    const square = e.target.className;
    if (square === 'square') {
        e.target.style.backgroundColor = 'blue';
    }
}

function changeGridSize(e) {
    const gridSize = prompt("Enter new size for NxN grid:");
    const grid = document.querySelector('.container');
    if (gridSize === null) {
        return;
    } else if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Out of range please enter a number between 1 and 100.");
        return;
    }
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(gridSize);
}

createGrid(3);
const button = document.querySelector('#btn');
button.addEventListener('click', changeGridSize);
window.addEventListener('mouseover', changeSquareColor);