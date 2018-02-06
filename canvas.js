var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
context.fillStyle = "#ff0000";
context.strokeStyle = "#ff0000"; 

var reset = document.getElementById("reset");
var toggle = document.getElementById("toggle");

var shape = 0; //default circle, 1 for square 
var count = 0; //number of circles in canvas

var resetCanvas = function(e){
    context.beginPath(); 
    context.clearRect(0, 0, canvas.width, canvas.height);
    count = 0; 
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
	if (count > 0){
	    context.lineTo(e.offsetX, e.offsetY);
	    context.stroke();
	}
	context.beginPath();
	context.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
	context.stroke();
	context.fill();
	context.moveTo(e.offsetX, e.offsetY); 
	count += 1;
    }
    else{
	context.rect(e.offsetX, e.offsetY, 20, 20);
	context.fill();
    }
}


canvas.addEventListener("click", drawShape); 
reset.addEventListener("click", resetCanvas);
toggle.addEventListener("click", toggleShape); 
