function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
// var ctx = setupCanvas(document.querySelector('#canvas'));
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.stroke();


/**
 * 4.Collision Detection
 * 游戏碰撞循环
 */
const fpsAdjustLoop = () => {
  var canvas = document.getElementById("canvas");
  var context = setupCanvas(canvas);
  let x = 0;
  let y = 100;
  // 设置不同设备相同帧率
  let t = Date.now();
  let speed = 300;
  // step 1 设置loop
  let dir = 1;

  function draw() {
    let timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    let fps = Math.round(1 / timePassed);

    context.clearRect(0, 0, 600, 400);
    context.font = "25px Arial";
    context.fillStyle = "#fff";
    context.fillText("FPS: " + fps, 20, 30);
    context.beginPath();
    context.rect(x, y, 100, 100);
    context.fillStyle = "skyblue";
    context.fill();

    // x += speed * timePassed;
    // if (x >= 600) x = -100;
    // step 2
    x += dir * (speed * timePassed);
    if (x >= 600 - 100 || x <= 0) dir *= -1;

    window.requestAnimationFrame(draw);
  }
  draw();
};
fpsAdjustLoop();