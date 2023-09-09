function createGrid(size = 16) {
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

createGrid();

const changeGridButton = document.getElementById('change-grid');
changeGridButton.addEventListener('click', changeGridSize)