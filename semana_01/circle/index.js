let canvas=document.getElementById('mycanvas');
let context=canvas.getContext("2d");
let centerX=canvas.width / 2;
let centerY=canvas.height / 2;
let radius=70;

context.beginPath();
context.arc(centerX,centerY,radius,0,2*Math.PI,false);
context.fillStyle='green';
context.fill();
context.lineWidth=5;
context.stokeStyle= '#003300';
context.stroke();
