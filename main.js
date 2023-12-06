const container = document.querySelector('#container');
const adjustSizeBtn = document.querySelector('#adjust-size-button');
let defaultSize = 16;

let mouseOverEvent = (e) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.cssText = `background-color: #${randomColor}`;
}

let adjustSize = () => {
    resetGrid();
    defaultSize = prompt(`Adjust thou's Etch-a-Sketchington size!\nProvide thy number of choice for thy toy's number of squares per side.`, 16)
    defaultSize = Number(defaultSize);
    setGrid();
}

function setGrid() {
    for (let i = 1; i <= defaultSize * defaultSize; i++) {

        let containerDiv = document.createElement('div');

        containerDiv.classList.add('grid-box');
        container.appendChild(containerDiv);
        containerDiv.style.cssText = `background-color: white`;

        let elements = document.querySelectorAll('.grid-box');
        elements.forEach((item) => { 
            item.addEventListener('mouseover', mouseOverEvent)
        });

    }
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

setGrid();

adjustSizeBtn.addEventListener('click', adjustSize);





