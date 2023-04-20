// THIS SECTION IS FOR INITIAL SETUP DATA FOR GRID
let container = document.querySelector('.grid-container');

//Instantiates the selected size to 0 and then has a while loop
// set to ask for the size until it receives a value of 1 through 32
let selectedSize;
while (selectedSize === undefined || selectedSize === null || selectedSize < 1 || selectedSize > 32) {
    selectedSize = prompt('Select your grid size - enter a number between 1 and 32');
}


// THIS SECTION IS FOR THE CONTROL BUTTONS AT THE TOP \\
// Selects the reset button on the pages and wipes it clean
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid);


// Selects the resize button and prompts user for the new size and creates the new
const resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', resizeGrid);


//THIS SECTION IS FOR GRID & GRID RELATED FUNCTIONS
//creates the grid using the requested size above
createGrid(selectedSize);

function createGrid(size) {
    
    //Creating our rows from the size value entered
    for(let i = 0 ; i < size; i++){ 
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('row');
        // Loops through the size size value creating each pixel to make up our grid
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            // adding pixel to class for css
            pixel.classList.add('pixel');
            pixelRow.appendChild(pixel);
            // adding event listeners for mouse behavior over the pixel
            addEventListener('click', mouseClicked);
        }
        // ending the loop by adding the row the container of our grid
        container.appendChild(pixelRow);
    } 
}

function mouseClicked(event) {
    //Checks if the mouse is clicked over a div classified as pixel
    if (event.target.classList[0] === 'pixel'){    
        event.target.style.backgroundColor = 'black';
    }
}

// Used to reset all the background values of each pixel to white
function resetGrid() {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
}

// Obtains new size and redraws the grid
function resizeGrid() {
    let newSize;
    container.innerHTML = '';
    while (newSize === undefined || newSize === null || newSize < 1 || newSize > 32) {
        newSize = prompt('Select a new size for the grid between 1-32')
        createGrid(newSize);
    }
}