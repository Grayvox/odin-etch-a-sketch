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
    container.append(...grid);
}

const sketch = document.querySelector('#sketch-button');
const eraser = document.querySelector('#erase-button');
const adjustSize = document.querySelector('#adjust-size-button');
const startOver = document.querySelector('#start-over-button');

// sketch.addEventListener('click', setSketch());
// eraser.addEventListener('click', setEraser());
// adjustSize.addEventListener('click', setSize());

function setSize() {
    let size = parseInt(prompt('Thou must entereth a new size! (Maximum: 100)'));
    if (size <= 100) {
        container.innerHTML = '';
        generateGrid(size, size);
    } else {
        alert('Thou did not heed my warning!');
    }
}

function resetSketch() {
    const boxes = document.querySelectorAll(".boxes");
    Array.from(boxes).forEach((box) =>
        box.setAttribute("style", "background-color: white;")
    );
}

generateGrid(16, 16);



