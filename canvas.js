var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
context.fillStyle = "#ff0000"; 

var reset = document.getElementById("reset");
var toggle = document.getElementById("toggle");

var shape = 0; 


var resetCanvas = function(e){
    context.beginPath(); 
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var toggleShape = function(e){
    if (shape == 0){
	shape = 1;
    }
    else{
	shape = 0;
    }
}

var drawShape = function(e){
    if (shape == 0){
	context.beginPath();
	context.arc(e.clientX, e.clientY, 10, 0, 2*Math.PI);
	context.stroke();
	context.fill();
    }
    else{
	context.beginPath();
	context.rect(e.clientX, e.clientY, 20, 20);
	context.stroke();
	context.fill();
    }
}


canvas.addEventListener("click", drawShape); 
reset.addEventListener("click", resetCanvas);
toggle.addEventListener("click", toggleShape); 
