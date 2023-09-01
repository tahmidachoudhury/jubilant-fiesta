const container = document.querySelector('.grid');
const defaultSquares = 31

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
            container.appendChild(gridElement);
        }
    }    
}

buildGrid(defaultSquares)

