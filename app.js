/* Etch-a-Sketch
   Art pad drawing app
   by Maxi Kaye 2022 */

let gridUnit = 16;
const artGrid = document.querySelector('.art-grid');
const artGridProps = window.getComputedStyle(artGrid);
const gridSideLength = parseInt(artGridProps.getPropertyValue('width'));
const gridGap = parseInt(artGridProps.getPropertyValue('gap'));
const slider = document.getElementById('resolution');
const sliderValue = document.querySelector('.resolution-value');
const colorSwatches = document.querySelectorAll('.swatch')
let currentColor = 'swatch-black';

function createGrid(size) {  
    for (let i = 0; i < size ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.setAttribute('style', 
        'width:' + (gridSideLength / size - gridGap) + 'px;' +
        'height:' + (gridSideLength / size - gridGap) + 'px;');
        artGrid.appendChild(gridSquare);
    }
}

function removeOldGrid(size) {
    for (let i = 0; i < size ** 2; i ++) {
        const squaresToRemove = document.querySelectorAll('.grid-square');
        squaresToRemove.forEach(square => artGrid.removeChild(square));
    }
}

function randomColorValue() {
    return Math.floor(Math.random() * 255)
}

function addColor(color = 'swatch-black') {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', e => {
            square.classList.remove(currentColor);
            console.log(e.target.classList)
            if (color === 'swatch-rainbow') {
                square.style.backgroundColor = 'rgb(' +
                    randomColorValue() + ',' +
                    randomColorValue() + ',' +
                    randomColorValue() + ')';
            } else if (color === 'swatch-black-low-opacity') {
                square.style.backgroundColor = null;
                square.classList.add(color);
            } else {
                square.style.backgroundColor = null;
                square.classList.add(color);
            }
            currentColor = color;
        });
    });
}

createGrid(gridUnit);
addColor();

slider.oninput = () => {
    sliderValue.innerHTML = slider.value;
    removeOldGrid(gridUnit);
    gridUnit = slider.value;
    createGrid(gridUnit);
    addColor();
}

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', e => {
        addColor(e.target.classList[1]);
    }) 
});
