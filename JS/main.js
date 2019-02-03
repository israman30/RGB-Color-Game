// variables
var colors = [];
var pickedColor;
var numberOfSquares = 6;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#displayColor');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');
var modeBtn = document.querySelectorAll('.mode');

// initalizer function
init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener('click', function(){
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');

            this.classList.add('selected');
            // check if section is easy or hard
            // easy 3 section, hard 6 sections

            this.textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
            
            // after select level, game is rested
            reset();
        });
    }
}

function setupSquares(){
    // fill the squares using a loop
    for (var i = 0; i < squares.length; i++){
        // add initial colors to the squares
        squares[i].style.backgroundColor = colors[i];
        // add click listener to squares
        squares[i].addEventListener('click', function(){
            // grab color when click a square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if (clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!';
                resetBtn.textContent = 'Play again';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try again';
            }
        });
    }
}

function reset(){
    // generate new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new color from array
    pickedColor = pickColor();
    //change color display to match the result
    colorDisplay.textContent = pickedColor;
    // reset text
    resetBtn.textContent = 'New Colors';
    // reset messageDisplay text
    messageDisplay.textContent = '';

    for (var i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    // reset background color of RGB text
    h1.style.backgroundColor = 'steelblue';
}

// BUTTON: ========= reset ========================
// reset button clicks and generate new random colors.
resetBtn.addEventListener('click', () => {
    // reset game
    reset();
})

// this function changes the color of the squares
function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        // change each color to match the one given
        squares[i].style.backgroundColor = color;
    }
}

// Pick random color
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// This funciont will generate random colors adding it to an array
function generateRandomColors(number){
    var colorsArray = [];
    for (var i = 0; i < number; i++){
        colorsArray.push(randomColor());
    }
    return colorsArray;
}

// Function creates random color
function randomColor(){
    // red 0 -255
    var red = Math.floor(Math.random() * 256);
    // green 0 -255
    var green = Math.floor(Math.random() * 256);
    // blue 0 -255
    var blue = Math.floor(Math.random() * 256);

    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    
    return color;
}