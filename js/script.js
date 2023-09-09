function createGrid(size = 16) {
    const DIV_LENGTH = (1 / size) * 100;
    const gridContainer = document.getElementById('grid-container');

    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.height = `${DIV_LENGTH}%`;
        rowDiv.classList.add('grid-row');

        for (let column = 0; column < size; column++) {
            const squareDiv = document.createElement('div');
            squareDiv.style.width = `${DIV_LENGTH}%`;
            squareDiv.classList.add('grid-square', 'border');
            rowDiv.appendChild(squareDiv);
        };

        gridContainer.appendChild(rowDiv);
    };
}

createGrid();