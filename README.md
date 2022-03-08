# Canvas

## Ⅰ Create a Canvas
::: warning
HTML5 webpage
::: 

```html
<canvas id="canvas" width="600" height="400">
    Your browser does not support the HTML5 canvas tag.
</canvas>
```

## 1.形状

### 1.1 线段 
> Line

::: tip
两点一线
```
起点: moveTo(x1, y1)
终点: lineTo(x2, y2)
线:   stroke()
```
:::

::: details 点击查看代码

```html
<canvas id="canvas" width="600" height="400">
    Your browser does not support the HTML5 canvas tag.
</canvas>
```

```js
// 1. 直线Shape: draw a line from the point(50, 100) to the point(400, 200)
const line = (x1, y1, x2, y2) => {
    var canvas = document.getElementById("canvas")
    var context = canvas.getContext("2d")
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}
line(50, 150, 250, 300)
```
:::


**三角形**
::: tip
起点，移动3次，连线
:::

::: details 点击查看代码
```html
<canvas id="canvas" width="600" height="400">
    Your browser does not support the HTML5 canvas tag.
</canvas>
```
```js
const triangle = () => {
    context.moveTo(100, 100)
    context.lineTo(50, 200)
    context.lineTo(150, 200)
    context.lineTo(100, 100)
    context.stroke()
}
triangle()
```
:::


### 1.2 矩形
::: details 点击查看代码
```html
<canvas id="canvas" width="600" height="400">
    Your browser does not support the HTML5 canvas tag.
</canvas>
```
```js
// 2. 矩形 Rectangle
const rectangle = () => {
	context.rect(x ,y , width , height)
	context.rect(50, 150, 200, 150)
	context.stroke()
}
rectangle()
```
:::

### 1.3 圆

::: tip
```
/**
 * 3. 圆 Circle: Arc
 * context.arc(centerX, centerY, radius, startAngle, endAngle, counterclockwise)
 * 180° = PI * radians,  PI ≈ 3.14159
 */
```
:::

**半圆**
```js
const semiCircle = () => {
	context.arc(150, 150, 100, 0, 1 * Math.PI)
	context.stroke()
}
// semiCircle()
```

**正圆**
```js
const circle = () => {
    context.arc(350, 150, 100, 0, 2 * Math.PI)
	context.stroke()
}
// circle()
```


### 1.4 Shape Style

```js
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
rectangleStyle()
```


### 1.5 Multpie Shapes
```js
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
```


## 2. Text 

```javascript
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
```

## 3. Images

```js
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
```


## 4. Animate


**Rect**

:::details 点击查看代码
```js
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
```
:::

**Circle**
::: details 点击查看代码
```js
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
```


##