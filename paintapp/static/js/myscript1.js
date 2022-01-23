var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let hello="#FFFFFF";
shape=0;
let t=40;
let s=150;
ctx.beginPath();
ctx.stroke();
c.addEventListener("click", myClickEvent);
document
.getElementById("shape")
.addEventListener("click", circleclicked);
document
.getElementById("shape1")
.addEventListener("click", squareclicked);
document
.getElementById("shape2")
.addEventListener("click", lineclicked);
document
.getElementById("shape3")
.addEventListener("click", triangleclicked);
document
.getElementById("shape4")
.addEventListener("click", rectangleclicked);