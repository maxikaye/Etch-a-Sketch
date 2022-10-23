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

function toggleColors() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
        square.classList.add('grid-square-black');
        });
    });
}

createGrid(gridUnit);
toggleColors();

slider.oninput = () => {
    sliderValue.innerHTML = slider.value;
    removeOldGrid(gridUnit);
    gridUnit = slider.value;
    createGrid(gridUnit);
    toggleColors();
}


