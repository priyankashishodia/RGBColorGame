var colors = [];
var pickedColor;
var num = 6;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var colorD = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");

init();

function init()
{
	setupModes();
	setupSquares();
	reset();

}

//Function to set up mode listeners
function setupModes()
{
	for(var i = 0; i < modeButton.length; i++)
	{
		modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? num = 3: num = 6;
		reset(num);
	    });
	}	
}

//Add click listeners to squares
function setupSquares()
{
	for (var i = 0; i < squares.length; i++)
	{	
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!"
				changeColor(clickedColor);
				resetButton.textContent = "Play Again?"
			}
			else
			{
				//Fading out of the incorrect square
				this.style.backgroundColor = "rgb(38, 38, 38)";
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
}

//Function to update values
function reset()
{
	colors = generateRandomColor(num);
	pickedColor = colors[pickColor(num)];
	colorD.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelBlue";
	for(var i =0; i < squares.length; i++)
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
}

// Function to generate random RGB colors
function random_color()
{
	return "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
}

//Function to generate random colors.
function generateRandomColor(x)
{
	var a = [];
	for(var i = 0; i < x; i++ )
	{
		a.push(random_color());
	}
	return a;
}

//Function to pick a random color
function pickColor(length)
{
	return Math.floor(Math.random() * length)
}

//Function to change all the colors to the right one
function changeColor(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}

resetButton.addEventListener("click", function(){
	reset(num);
});














