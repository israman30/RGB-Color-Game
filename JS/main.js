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

function init(){

}

function setupModeButtons(){

}

function setupSquares(){

}

function reset(){

}

// BUTTON: ========= reset ========================
resetBtn.addEventListener('click', () => {
    // reset game
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
    console.log(colorsArray);
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