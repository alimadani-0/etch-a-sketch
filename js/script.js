let gridSize = 0;
let squareColor = null;
let darkness = 1.0;

function generateSquareColor() {
    const rgb = [];
    for (let i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 255));
    return rgb;
}

function updateColorVariables() {
    if (darkness >= 1.0) {
        darkness = 0.0;
        const rgb = generateSquareColor();
        squareColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.0)`;
    } else {
        darkness = ((darkness * 10) + 1) / 10;
        squareColor = squareColor.slice(0, -4)
            + darkness
            + ')';
    };

}

function changeSquareColor(e) {
    const square = e.target;
    if (!square.classList.contains('colored')){
        square.classList.add('colored');
        updateColorVariables();
        square.style.backgroundColor = squareColor;
    };
}

function createGrid(size = 16) {
    gridSize = size;
    const DIV_LENGTH = (1 / size) * 100;
    const gridContainer = document.getElementById('grid-container');
    gridContainer.replaceChildren();

    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.height = `${DIV_LENGTH}%`;
        rowDiv.classList.add('grid-row');

        for (let column = 0; column < size; column++) {
            const squareDiv = document.createElement('div');
            squareDiv.style.width = `${DIV_LENGTH}%`;
            squareDiv.classList.add('grid-square', 'border', 'white');
            squareDiv.addEventListener('mouseover', changeSquareColor);
            rowDiv.appendChild(squareDiv);
        };

        gridContainer.appendChild(rowDiv);
    };
}

function getGridSizeFromUser() {
    let size = null;
    while (size < 1 || size > 100 || !size) {
        size = parseInt(
            prompt("Please choose a grid size (for one side) between 1 and 100", "16")
        );
    };
    return size;
}

function changeGridSize() {
    createGrid(getGridSizeFromUser());
}

function resetGrid() {
    createGrid(gridSize);
}

createGrid();

const changeGridButton = document.getElementById('change-grid');
changeGridButton.addEventListener('click', changeGridSize);

const resetGridButton = document.getElementById('reset-grid');
resetGridButton.addEventListener('click', resetGrid);