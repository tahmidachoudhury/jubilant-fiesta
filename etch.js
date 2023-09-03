const content = document.querySelector('.content')
const grid = document.querySelector('.grid');
const inputSize = document.getElementById('numOfBoxes');
const displaySize = document.querySelector('.grid-size');
const displaygridSize = document.createElement('p');
displaySize.appendChild(displaygridSize);
const defaultSquares = 8;
displaygridSize.textContent = `${defaultSquares} x ${defaultSquares}`;



function getSquareSize(sqrs){
    const gridSize = sqrs*sqrs;
    const totalPixels = 250000;
    let squareSize = Math.sqrt(totalPixels/gridSize);
    return squareSize
}


function buildGrid(squares){
    for (let row = 0; row < squares; row++) {
        for (let col = 0; col < squares; col++) {
            gridElement = document.createElement('div');
            gridElement.classList.add('grid-squares');
            gridElement.style.height = `${getSquareSize(squares)}px`;
            gridElement.style.width = `${getSquareSize(squares)}px`;
            startDrawing(gridElement);
            grid.appendChild(gridElement);
        }
    }    
}

//initial grid size from when the page refreshes
buildGrid(defaultSquares);



function removeGrid(){
    const allGridSquares = document.querySelectorAll('.grid-squares');
    const gridSquaresArray = Array.from(allGridSquares);
    gridSquaresArray.forEach(element => {
        grid.removeChild(element);
    });
}



//changes grid size to input---------------------------
inputSquareSize = function(e){
    sqrSize = e.target.value;
    displaygridSize.textContent = `${sqrSize} x ${sqrSize}`;
    removeGrid();
    buildGrid(Number(inputSize.value));
}
inputSize.addEventListener('input', inputSquareSize);
//-----------------------------------------------------




//clears screen --------------------------------------
const clearScreen = function(e){
    removeGrid();
    buildGrid(Number(inputSize.value));
}
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);
//-----------------------------------------------------


//draw!
function startDrawing(gSquare){
    const color = document.getElementById('boxColor');
    gSquare.addEventListener('mouseenter', function(){
        gSquare.style.backgroundColor = color.value;
    })
}
//----------------------------------------------



