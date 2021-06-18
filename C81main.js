canvas = document.getElementById("canvas1");
ctx=canvas.getContext("2d");
colour="blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    colour= document.getElementById("colour").value;
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}