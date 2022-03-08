var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d");  
var devicePixelRatio = window.devicePixelRatio || 1;
var backingStoreRatio = context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1;
var ratio = devicePixelRatio / backingStoreRatio;
canvas.width = canvas.width * ratio;
canvas.width = canvas.height* ratio;
context.scale(ratio, ratio);
context.translate(0.5, 0.5);
context.lineWidth = 1;
// context.fillStyle = "green"
context.moveTo(2.5, 2);
context.lineTo(98.5, 2);
context.lineTo(98.5, 98);
context.lineTo(2.5, 98);
context.lineTo(2.5, 2);
context.stroke();