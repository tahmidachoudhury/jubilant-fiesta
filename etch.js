const grid = document.querySelector('.grid');
const inputSize = document.getElementById('numOfBoxes');
const displaySize = document.querySelector('.grid-size');
const displaygridSize = document.createElement('p');
displaySize.appendChild(displaygridSize)
const defaultSquares = 8;



function getSquareSize(sqrs){
    const gridSize = sqrs*sqrs;
    const totalPixels = 250000;
    let squareSize = Math.sqrt(totalPixels/gridSize);
    return squareSize
}

function buildGrid(squares){
    for (let row = 0; row < squares; row++) {
        for (let col = 0; col < squares; col++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('grid-squares');
            gridElement.style.height = `${getSquareSize(squares)}px`;
            gridElement.style.width = `${getSquareSize(squares)}px`;
            grid.appendChild(gridElement);
        }
    }    
}

inputSquareSize = function(e){
    sqrSize = e.target.value;
    displaygridSize.textContent = `${sqrSize}x${sqrSize}`;
}

inputSize.addEventListener('input', inputSquareSize);

buildGrid(defaultSquares);



