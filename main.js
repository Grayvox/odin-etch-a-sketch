const container = document.querySelector('#container');
const gridLength = 16;
const gridWidth = 16;
let drawingState;

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

function setDrawEffect() {
    let getBoxes = document.querySelectorAll('.grid-box');

    let mouseOverEvent = (e) => {
        e.target.style.cssText = `background-color: #000000`;
    }

    getBoxes.forEach((item) => {
        item.addEventListener('mouseover', mouseOverEvent)
    });
}

// sketch.addEventListener('click', setSketchMode());
// eraser.addEventListener('click', setEraserMode());

function setSize() {
    let size = parseInt(prompt('Thou must entereth a new size! (Maximum: 100)'));
    if (size <= 100) {
        container.innerHTML = '';
        generateGrid(size, size);
        setDrawEffect();
    } else {
        alert('Thou did not heed my warning!');
    }
}

function resetSketch() {
    const boxes = document.querySelectorAll(".grid-box");
    Array.from(boxes).forEach(box =>
        box.setAttribute("style", "background-color: white;")
    );
}

generateGrid(gridLength, gridWidth);
setDrawEffect();



