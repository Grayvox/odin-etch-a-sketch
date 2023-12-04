const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++) {
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('grid-box');
    container.appendChild(containerDiv);
}