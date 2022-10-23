/* Etch-a-Sketch
   Art pad drawing app
   by Maxi Kaye 2022 */

let gridUnit = 16;

function createGrid(size) {
    const artGrid = document.querySelector('.art-grid');
    const artGridProps = window.getComputedStyle(artGrid);
    const gridSideLength = parseInt(artGridProps.getPropertyValue('width'));
    const gridGap = parseInt(artGridProps.getPropertyValue('gap'));
    
    for (let i = 0; i < size ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.setAttribute('style', 
        'width:' + (gridSideLength / size - gridGap) + 'px;' +
        'height:' + (gridSideLength / size - gridGap) + 'px;');
        artGrid.appendChild(gridSquare);
    }
}

function changeColor() {}

createGrid(gridUnit);

// on mouseover 