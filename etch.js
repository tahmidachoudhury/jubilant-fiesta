const content = document.querySelector('.content')
const grid = document.querySelector('.grid');
const inputSize = document.getElementById('numOfBoxes');
const displaySize = document.querySelector('.grid-size');
const displaygridSize = document.createElement('p');
displaySize.appendChild(displaygridSize);
const defaultSquares = 8;
const color = document.getElementById('boxColor');
let drawingOn = false;
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


//draw!-----------------------------------------------
function hover(e){  
    if (drawingOn){
        e.target.style.backgroundColor = color.value;
    }  
}

function startDrawing(gSquare){
    gSquare.addEventListener('mouseenter', hover);
    gSquare.addEventListener('mousedown', () => drawingOn = true);
    gSquare.addEventListener('mouseup', () => drawingOn = false);
    if (drawingOn){
        gSquare.style.backgroundColor = color.value;
    }
}


grid.addEventListener('click', function(e){   
    if(e.target == grid) return;
    e.target.style.backgroundColor = color.value;
});
//----------------------------------------------


//toggle controls
const controls = document.querySelector('.controls');
let isDisplayed = true;
function controlsOn(e){
    if (e.code == 'Escape'){
        if (isDisplayed){
            grid.classList.toggle('slide-left');
            controls.classList.toggle('slide-right');
            isDisplayed = false;
        } else{
            grid.classList.toggle('slide-left');
            controls.classList.toggle('slide-right');
            isDisplayed = true;         
        }
    }
}

window.addEventListener('keydown', controlsOn);
//-----------------------------------------------

//color options ---------------------------------

const warmOptions = document.querySelector('.warm');
warmOptions.addEventListener('click', function(){
    //warmColors = []
    //make array of #000000 hex values for 'warm'
    //and randomize the value
    console.log(color.value);
})


const pencilOptions = document.querySelector('.pencil');
pencilOptions.addEventListener('click', function(e){
    //make array of different opacity of black for 'pencil'
    //and randomize the value
    //look at solution for help
    console.log(color.value);
})

const randomOptions = document.querySelector('.random');

const userOptions = document.querySelector('.user');


//highlight
let highlightOn = false;
colorOptions = document.querySelector('.options');
colorOptions.addEventListener('click', function(e){
    if(e.target.classList.contains('button')) e.target.classList.add('highlight');  
    if (e.target == warmOptions){
        pencilOptions.classList.remove('highlight');
        randomOptions.classList.remove('highlight');
        userOptions.classList.remove('highlight');
    } else if (e.target == pencilOptions){
        warmOptions.classList.remove('highlight');
        randomOptions.classList.remove('highlight');
        userOptions.classList.remove('highlight');
    } else if (e.target == randomOptions){
        pencilOptions.classList.remove('highlight');
        warmOptions.classList.remove('highlight');
        userOptions.classList.remove('highlight');
    } else if (e.target == userOptions){
        warmOptions.classList.remove('highlight');
        randomOptions.classList.remove('highlight');
        pencilOptions.classList.remove('highlight');
    }
})

credTag = document.querySelector('.anchor');
credTag.addEventListener('mouseenter', function(e){
    e.target.classList.toggle('highlight');
})
credTag.addEventListener('mouseout', function(e){
    e.target.classList.toggle('highlight');
})