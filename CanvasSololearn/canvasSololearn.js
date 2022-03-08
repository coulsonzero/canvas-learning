"use strict";

let c, ctx, W, H;
let sl, widthImg, interval;
let PI = Math.PI;
let balls = [];

const random = (max = 1, min = 0) => Math.random() * (max - min) + min;

const checkBoxes = () => document.getElementById("rangeVal").value;

const clear = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, .15)';
    ctx.fillRect(0, 0, W, H);
};

const getColor = (angle) => {
    let part = PI * 2 / 6;
    let color = angle < part ? '#e9589f' : angle < 2 * part ? '#34b6e7' : angle < 3 * part ? '#138994' : angle < 4 * part ? '#6db64c' : angle < 5 * part ? 'rgba(235, 116, 66, 1)' : '#e6545d';
    return color;
};

class Ball {
    constructor(angle) {
        this.angle = angle;
        this.radPos = widthImg / 2;
        this.rad = 0.1 + random(0.5);
        this.color = getColor(this.angle);
        this.speed = 0.1 + random(0.5);
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.angle += 0.005 * Math.cos(this.angle * checkBoxes());
        this.speed += 0.005;
        this.radPos += 1.5 * this.speed;
        this.rad += 0.01 * this.speed;
        this.x = W / 2 + this.radPos * Math.cos(this.angle);
        this.y = H / 2 + this.radPos * Math.sin(this.angle);
        this.draw();
    }
}

const newSeries = () => {
    for (let i = 0; i < PI * 2; i += 0.1) balls.push(new Ball(i));
};

const update = () => {
    for (var i = balls.length - 1; i >= 0; i--) {
        balls[i].update();
        if (balls[i].x < 0 || balls[i].x > W || balls[i].y < 0 || balls[i].y > H) balls.splice(i, 1);
    }
};

const init = () => {
    c = document.getElementById("canvas");
    c.width = W = window.innerWidth;
    c.height = H = window.innerHeight;
    ctx = c.getContext("2d");
    widthImg = 40;
    sl = document.getElementById('sololearn');
    sl.style.top = H / 2 - widthImg / 2 + 'px';
    sl.style.left = W / 2 - widthImg / 2 + 'px';
    sl.style.width = widthImg + 'px';
    sl.style.height = widthImg + 'px';
    interval = setInterval(newSeries, 200);
    animate();
};


const animate = () => {
    clear();
    update();
    window.requestAnimationFrame(animate);
};

window.onload = init;