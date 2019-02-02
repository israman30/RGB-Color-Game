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

function changeColors(color){

}

function pickColor(){

}

function generateRandomColors(number){

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
    console.log(color);

    return color;
}