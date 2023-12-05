const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++) {
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('grid-box');
    container.appendChild(containerDiv);
}

let elements = document.querySelectorAll('.grid-box');

let mouseOverEvent = (e) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.cssText = `background-color: #${randomColor}`;
}

elements.forEach((item) => { 
    item.addEventListener('mouseover', mouseOverEvent)
});




