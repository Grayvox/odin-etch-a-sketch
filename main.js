const container = document.querySelector('#container');

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
    return grid;
}

const sketch = document.querySelector('#sketch-button');
const eraser = document.querySelector('#erase-button');
const adjustSize = document.querySelector('#adjust-size-button');
const startOver = document.querySelector('#start-over-button');

sketch.addEventListener('click', setSketch());
eraser.addEventListener('click', setEraser());
adjustSize.addEventListener('click', setSize());
startOver.addEventListener('click', reset());

generateGrid(16, 16);



