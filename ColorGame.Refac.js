
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//starts the game;
init();

//Reset button functionality 
resetButton.addEventListener("click", function(){
	reset();
});

function init() {
		//adding mode buttons functionality
		setupModeButtons();
		//seting the squares, colors, reset of colors etc...
		setupSquares();
		reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				//how many squares to show
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //same as bellow with if statement
				// if(this.textContent === "Easy"){
				// 	numSquares = 3;
				// } else {
				// 	numSquares = 6;
				// }
				reset();
			});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
			//add click listeners to squares
			squares[i].addEventListener("click", function(){
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
				if(clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct"
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor; 
					resetButton.textContent = "Play Again?";
				} else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
			});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
	if(colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}	
   }
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < colors.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	//pick random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}