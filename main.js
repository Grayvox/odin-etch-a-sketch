const container = document.querySelector('#container');
const adjustSizeBtn = document.querySelector('#adjust-size-button');

function generateGrid(rowSize, colSize) {
    let grid = [];
    for (let i = 0; i < rowSize; i++) {
        grid[i] = document.createElement('div');
        grid[i].setAttribute('class', 'grid-row');

        let boxes = [];
        for (let j = 0; j < colSize; j++) {
            boxes[j] = document.createElement('div');
            boxes[j].setAttribute('class', 'grid-box');
        }

        grid[i].append(...boxes);

    }
    container.append(...grid);
}

generateGrid(16, 16);



