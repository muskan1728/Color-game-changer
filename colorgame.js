var numSquares =6
var colors= []
var pickedColor;
var square=document.querySelectorAll('.square');
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay=document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton =document.querySelector("#reset");
var modeButtons=document.querySelectorAll('.mode')

init();

function init(){
	// mode buttons event listener
	setupModeButtons();
	setupSquares();
    reset();

}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click',function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			// this.textContent=== "Easy" ? numSquares=3 : numSquaresm=6;
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
			reset();
			// figure out how many square to show
			// pick new colors
			// pick a new pickedColor
			// update page to reflect chnages
	    });
    }
}

function setupSquares(){
	for (var i = 0; i < square.length; i++) {
	// add click listeners to squares
		square[i].addEventListener('click' ,function(){
			// grab color of clicked square
			var clickedColor=this.style.backgroundColor;
			// compare color to PickedColor
			if(clickedColor===pickedColor){
				messageDisplay.textContent='correct'
				resetButton.textContent="Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor =clickedColor;
			}
			else{
				this.style.backgroundColor='#232323';
				messageDisplay.textContent='Try Again!'
			}
		});
    }
}

function reset(){
	colors=generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor=pickColor();
	// change color display to match picked color
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Color";
	messageDisplay.textContent="";
	// change colors at squares
	for (var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.display='block';
			square[i].style.backgroundColor=colors[i];
		}
		else{
            square[i].style.display='none';
		}
	 
	}
	h1.style.backgroundColor='steelblue';
}
// easyBtn.addEventListener('click', function(){
// 	easyBtn.classList.add('selected');
// 	hardBtn.classList.remove('selected');
// 	numSquares=3
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < square.length; i++) {
//     	if(colors[i]){
//     		square[i].style.backgroundColor=colors[i];
//     	}
//     	else{
//     		square[i].style.display='none';
//     	}
    	
//     }
	
// })
// hardBtn.addEventListener('click', function(){
// 	easyBtn.classList.remove('selected')
// 	hardBtn.classList.add('selected')
// 	numSquares=6
// 	colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < square.length; i++) {
    	
//     		square[i].style.backgroundColor=colors[i];
//     		square[i].style.display='block'	
//     }
// })

resetButton.addEventListener('click',function(){
	reset();
})

function changeColors(color){
	//loop through al squares
	for (var i = 0; i < square.length; i++) {
		// change each color to given color
	 	square[i].style.backgroundColor=color;
	}
	// change each color to given color

}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length )
	return colors[random]
}
function generateRandomColors(num){
	// make an array
	var arr=[]
	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColors())
	}
	// return the array
	return arr;
}
function randomColors(){
	// pick a red from 0-255
	var r=Math.floor(Math.random()*256)
	// pick a green from 0-255
	var g=Math.floor(Math.random()*256)
	// pick a blue from 0-255
	var b=Math.floor(Math.random()*256)
	return "rgb(" + r + ", " +g+", "+b+")"
}