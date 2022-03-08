
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")
// context.translate(0.5, 0.5);
// context.scale(4, 4)


/********************
 *    一. Shapes    *
 ********************/

// 1. 直线Shape: draw a line from the point(50, 100) to the point(400, 200)
const line = () => {
	context.moveTo(50, 150);
	context.lineTo(250, 300);
	context.stroke();
}
// line()

const triangle = () => {
    context.moveTo(100, 100)
    context.lineTo(50, 200)
    context.lineTo(150, 200)
    context.lineTo(100, 100)
    context.stroke()
}
// triangle()

// 2. 矩形 Rectangle
const rectangle = () => {
	context.rect(x ,y , width , height)
	context.rect(50, 150, 200, 150)
	context.stroke()
}
// rectangle()

/**
 * 3. 圆 Circle: Arc
 * context.arc(centerX, centerY, radius, startAngle, endAngle, counterclockwise)
 * 180° = PI * radians,  PI ≈ 3.14159
 */

const semiCircle = () => {
	context.arc(150, 150, 100, 0, 1 * Math.PI)
	context.stroke()
}
// semiCircle()

const circle = () => {
    context.arc(350, 150, 100, 0, 2 * Math.PI)
	context.stroke()
}
// circle()


// 4. Style
// recommended fill() before stroke() in order to render the stroke correctly.
const rectangleStyle = () => {
	context.rect(50, 50, 200, 150);

	// 内部填充
	context.fillStyle = "#de4646"
	context.fill()

	// 外边框
	context.strokeStyle = "skyblue"
    context.lineWidth = 10;
	context.stroke()
}
// rectangleStyle()


// 5. Multpie Shapes

const multpieShapes = () => {
    context.beginPath() // important!
    context.rect(50, 50, 300, 200)
    context.fillStyle = "#1775b7"
    context.fill()

    context.beginPath()
    context.arc(300, 200, 100, 0, 2 * Math.PI)
    context.fillStyle = "#de4646"
    context.fill()
}
// multpieShapes()





/********************
 *    二. Text      *
 ********************/

const text = () => {
    context.font = "62px Arial"
    context.fillStyle = "red"
    // 必须放在最后！！
    context.fillText("Hello, world!", 150, 200)
    // 文本外边框
    context.strokeStyle = "blue"
    context.lineWidth = 2
    context.strokeText("Hello, world!", 150, 200)

}
// text()

const textOutline = () => {
    context.font = "62px Arial"
    context.strokeStyle = "gray"
    context.lineWidth = 2
    context.strokeText("Hello, world!", 150, 200)
}
// textOutline()





// 三. Images
const image = () => {
    var img = new Image()
    img.src = 'https://blob.sololearn.com/avatars/sololearn.jpg'

    // context.drawImage(img, x, y, width, height)
    img.onload = function() {
        // 关闭反锯齿
        // context.imageSmoothingEnabled = false;
        context.drawImage(img, 250, 150, 100, 100);
    }
}
// image()







/**
 * 四. Animate
 * To create an animation, we need to continuously draw on our canvas, updating the position of our objects.
 */


const animate = () => {
	var x = 0;
	var y = 100;
	function draw() {
		// step1. clear the canvas
		context.clearRect(0, 0, 600, 400);
		// step2. draw the object
		context.beginPath();
		context.rect(x, y, 100, 100);
		context.fillStyle = "skyblue";
		context.fill();
		// step3. update the position
		x += 10;
		if (x >= 600) x = -100;
	}
    // step4. repeat the process
	setInterval(draw, 16);   // 浏览器运行不流畅！！

}
// animate()

const circleAnimate = () => {
    var size = 50;
    var step = 10;
    function draw() {
        context.clearRect(0, 0, 600, 400);
        context.beginPath();
        context.arc(300, 200, size, 0, 2 * Math.PI);
        context.fillStyle = "skyblue";
        context.fill();

        size += step;
        if (size >= 150 || size <= 50) step *= -1;
    }
    setInterval(draw, 100);
}
// circleAnimate()



/**
 * 五. 游戏
 * 1. Game Loops
 * window.requestAnimationFrame() function adjusts its frame rate based on the device resources.
 * use window.requestAnimationFrame() to replace setInterval() function.
 */

const gameAnimate = () => {
	var x = 0;
	var y = 100;
	function draw() {
		// step1. clear the canvas
		context.clearRect(0, 0, 600, 400);
		// step2. draw the object
		context.beginPath();
		context.rect(x, y, 100, 100);
		context.fillStyle = "skyblue";
		context.fill();
		// step3. update the position
		x += 10;
		if (x >= 600) x = -100;
        window.requestAnimationFrame(draw);
	}
	draw()
};
// gameAnimate();

/**
 * frame: Each update of canvas.
 * fps: frames per seconds.
 * Higher frame rate results in smoother animations!
 * window.requestAnimationFrame() usually runs at 60 frames per second(fps)
 * setInterval(fun, 50) means 1000ms/50ms = 20 fps, so 16ms ≈ 60fps.
 */


/**
 * 2.Frame Rate
 * 不同设备帧率不同
 */

const calcFps = () => {
    let x = 0;
	let y = 100;
    let t;
	function draw() {
		// 1. to convert it to seconds
		let timePassed = (Date.now() - t) / 1000;
		t = Date.now(); //1646665308511
        // 2. calc fps
		let fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);
		context.font = "25px Arial";
		context.fillStyle = "#fff";
		context.fillText("FPS: " + fps, 20, 30);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = "skyblue";
        context.fill();

        x += 10;
        if (x >= 600) x = -100;
		window.requestAnimationFrame(draw);
	}
	draw();
}
// calcFps()



/**
 * 3.Dynamic FrameRate
 * 使不同设备上帧率相同
 * 3D games always use window.requestAnimationFrame()
 * let speed = 100
 * this makes the animation work the same on different with different frame rates.
 */


const fpsAdjust = () => {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

	let x = 0;
	let y = 100;
    // 3.
	let t = Date.now();
    // 4. 100px per second, 100/60 = 1.666 per fps
    let speed = 100;

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

		x += (speed * timePassed);
        if (x >= 600) x = -100;
		window.requestAnimationFrame(draw);
	}
	draw();
};
// fpsAdjust();


/**
 * 4.Collision Detection
 * 游戏碰撞循环
 */
const fpsAdjustLoop = () => {
    var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
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


/**
 * 5.点击按钮控制物体移动
 * dir = 1: move to right
 * dir = 2: left
 * dir = 3: up
 * dir = 4: down
 * dir = 0: stop
 */
const userInputFps = () => {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 0;
    var y = 100;

    var t = Date.now();
    let speed = 300;
    let dir = 0;

    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    up.onmousedown = function () {
        dir = 4;
    };
    down.onmousedown = function () {
        dir = 3;
    };
    left.onmousedown = function () {
        dir = 2;
    };
    right.onmousedown = function () {
        dir = 1;
    };

    up.ontouchstart = function () {
        dir = 4;
    };
    down.ontouchstart = function () {
        dir = 3;
    };
    left.ontouchstart = function () {
        dir = 2;
    };
    right.ontouchstart = function () {
        dir = 1;
    };

    up.onmouseup = function () {
        dir = 0;
    };
    down.onmouseup = function () {
        dir = 0;
    };
    left.onmouseup = function () {
        dir = 0;
    };
    right.onmouseup = function () {
        dir = 0;
    };

    up.ontouchend = function () {
        dir = 0;
    };
    down.ontouchend = function () {
        dir = 0;
    };
    left.ontouchend = function () {
        dir = 0;
    };
    right.ontouchend = function () {
        dir = 0;
    };

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);

        context.font = "25px Arial";
        context.fillStyle = "black";
        context.fillText("FPS: " + fps, 20, 30);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = "red";
        context.fill();

        switch(dir) {
            case 1: x += speed * timePassed; break;
            case 2: x -= speed * timePassed; break;
            case 3: y += speed * timePassed; break;
            case 4: y -= speed * timePassed;
        }

        /*
        if (dir == 1) {
            x += speed * timePassed;
        } else if (dir == 2) {
            x -= speed * timePassed;
        } else if (dir == 3) {
            y += speed * timePassed;
        } else if (dir == 4) {
            y -= speed * timePassed;
        }
        */
        window.requestAnimationFrame(draw);
    }
    draw();
}
// userInputFps()



/**
 * 物体移动碰撞
 */
const moveFpsAdjust = () => {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;

    var t = Date.now();
    let speed = 300;
    let dir = 0;

    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    up.onmousedown = function () {
        dir = 4;
    };
    down.onmousedown = function () {
        dir = 3;
    };
    left.onmousedown = function () {
        dir = 2;
    };
    right.onmousedown = function () {
        dir = 1;
    };

    up.ontouchstart = function () {
        dir = 4;
    };
    down.ontouchstart = function () {
        dir = 3;
    };
    left.ontouchstart = function () {
        dir = 2;
    };
    right.ontouchstart = function () {
        dir = 1;
    };

    up.onmouseup = function () {
        dir = 0;
    };
    down.onmouseup = function () {
        dir = 0;
    };
    left.onmouseup = function () {
        dir = 0;
    };
    right.onmouseup = function () {
        dir = 0;
    };

    up.ontouchend = function () {
        dir = 0;
    };
    down.ontouchend = function () {
        dir = 0;
    };
    left.ontouchend = function () {
        dir = 0;
    };
    right.ontouchend = function () {
        dir = 0;
    };

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);

        context.font = "25px Arial";
        context.fillStyle = "black";
        context.fillText("FPS: " + fps, 20, 30);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = "red";
        context.fill();

        if (dir == 1) {
            if (x + 100 < 600) {
                x += speed * timePassed;
            }
        } else if (dir == 2) {
            if (x > 0) {
                x -= speed * timePassed;
            }
        } else if (dir == 3) {
            if (y + 100 < 400) {
                y += speed * timePassed;
            }
        } else if (dir == 4) {
            if (y > 0) {
                y -= speed * timePassed;
            }
        }

        window.requestAnimationFrame(draw);
    }
    draw();
}

// moveFpsAdjust()


/**
 * 多个物体，无相互碰撞
 */
const multiMoveFpsAdjust = () => {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600 - 50);
    var coiny = Math.random() * (400 - 50);

    var t = Date.now();
    let speed = 300;
    let dir = 0;

    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    up.onmousedown = function () {
        dir = 4;
    };
    down.onmousedown = function () {
        dir = 3;
    };
    left.onmousedown = function () {
        dir = 2;
    };
    right.onmousedown = function () {
        dir = 1;
    };

    up.ontouchstart = function () {
        dir = 4;
    };
    down.ontouchstart = function () {
        dir = 3;
    };
    left.ontouchstart = function () {
        dir = 2;
    };
    right.ontouchstart = function () {
        dir = 1;
    };

    up.onmouseup = function () {
        dir = 0;
    };
    down.onmouseup = function () {
        dir = 0;
    };
    left.onmouseup = function () {
        dir = 0;
    };
    right.onmouseup = function () {
        dir = 0;
    };

    up.ontouchend = function () {
        dir = 0;
    };
    down.ontouchend = function () {
        dir = 0;
    };
    left.ontouchend = function () {
        dir = 0;
    };
    right.ontouchend = function () {
        dir = 0;
    };

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);

        context.font = "25px Arial";
        context.fillStyle = "black";
        context.fillText("FPS: " + fps, 20, 30);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = "red";
        context.fill();

        context.beginPath();
        context.rect(coinx, coiny, 50, 50);
        context.fillStyle = "#e3c228";
        context.fill();

        if (dir == 1) {
            if (x + 100 < 600) {
                x += speed * timePassed;
            }
        } else if (dir == 2) {
            if (x > 0) {
                x -= speed * timePassed;
            }
        } else if (dir == 3) {
            if (y + 100 < 400) {
                y += speed * timePassed;
            }
        } else if (dir == 4) {
            if (y > 0) {
                y -= speed * timePassed;
            }
        }

        window.requestAnimationFrame(draw);
    }
    draw();
}
// multiMoveFpsAdjust();


/**
 * 多个物体，移动碰撞
 */
const multiMove2 = () => {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = 250;
	var y = 150;
	var coinx = Math.random() * (600 - 50);
	var coiny = Math.random() * (400 - 50);

	var t = Date.now();
	let speed = 300;
	let dir = 0;
	let score = 0;

	let up = document.getElementById("up");
	let down = document.getElementById("down");
	let left = document.getElementById("left");
	let right = document.getElementById("right");

	// PC
	up.onmouseup = function () {
		dir = 0;
	};
	down.onmouseup = function () {
		dir = 0;
	};
	left.onmouseup = function () {
		dir = 0;
	};
	right.onmouseup = function () {
		dir = 0;
	};

	up.onmousedown = function () {
		dir = 4;
	};
	down.onmousedown = function () {
		dir = 3;
	};
	left.onmousedown = function () {
		dir = 2;
	};
	right.onmousedown = function () {
		dir = 1;
	};

	// mobile
	up.ontouchstart = function () {
		dir = 4;
	};
	down.ontouchstart = function () {
		dir = 3;
	};
	left.ontouchstart = function () {
		dir = 2;
	};
	right.ontouchstart = function () {
		dir = 1;
	};

	up.ontouchend = function () {
		dir = 0;
	};
	down.ontouchend = function () {
		dir = 0;
	};
	left.ontouchend = function () {
		dir = 0;
	};
	right.ontouchend = function () {
		dir = 0;
	};

	function draw() {
		var timePassed = (Date.now() - t) / 1000;
		t = Date.now();
		var fps = Math.round(1 / timePassed);

		context.clearRect(0, 0, 600, 400);

		context.font = "25px Arial";
		context.fillStyle = "black";
		// context.fillText("FPS: " + fps, 20, 30);
		context.fillText("Score: " + score, 20, 30);

		context.beginPath();
		context.rect(x, y, 100, 100);
		context.fillStyle = "red";
		context.fill();

		context.beginPath();
		context.rect(coinx, coiny, 50, 50);
		context.fillStyle = "#e3c228";
		context.fill();

		if (dir == 1) {
			if (x + 100 < 600) {
				x += speed * timePassed;
			}
		} else if (dir == 2) {
			if (x > 0) {
				x -= speed * timePassed;
			}
		} else if (dir == 3) {
			if (y + 100 < 400) {
				y += speed * timePassed;
			}
		} else if (dir == 4) {
			if (y > 0) {
				y -= speed * timePassed;
			}
		}

		if (
			coinx <= x + 100 &&
			x <= coinx + 50 &&
			coiny <= y + 100 &&
			y <= coiny + 50
		) {
			score++;
			coinx = Math.random() * (600 - 50);
			coiny = Math.random() * (400 - 50);
		}

		window.requestAnimationFrame(draw);
	}
	draw();
}
// multiMove2();



/*************************/



const font = (text, fontSize, color) => {
	context.font = fontSize + " Arial";
	context.fillStyle = color;
	// 必须放在最后！！
	context.fillText(text, 50, 100);
};
// font("My Jumper Game", "32px", "red")




