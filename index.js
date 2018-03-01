svg = document.getElementById("svg_id");
button = document.getElementById("button");

var x = -1; var y = -1;

button.addEventListener("click", function(){
    while (svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
    x = -1; y = -1;
});

var drawCircle = function(){
    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir.setAttribute("cx", event.offsetX);
    cir.setAttribute("cy", event.offsetY);
    cir.setAttribute("r", "10");
    svg.appendChild(cir);
};

var drawLine = function(){
    if (x != -1){
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", x);
	line.setAttribute("y1", y);
	line.setAttribute("x2", event.offsetX);
	line.setAttribute("y2", event.offsetY);
	line.setAttribute("stroke", "black");
	svg.appendChild(line);
    }
    //updates x, y values
    x = event.offsetX; y = event.offsetY;
};

svg.addEventListener("click", function(){
    drawCircle();
    drawLine();
});


