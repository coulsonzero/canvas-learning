"use strict";

let c, ctx, W, H;
let touchx, touchy;
let camera, e;
let mouse = {
    x: 0,
    y: 0
};
let speed = 2;
let size = 1;
let move = false;
let fill = true;
let dots = [];

const random = (max = 1, min = 0) => Math.random() * (max - min) + min;

const clear = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, W, H);
};

const createDots = () => {
    let cptX = 0;
    let cptY = 0;
    for (let y = 100; y < 800; y += 10) {
        cptY += 0.4;
        for (let x = 0; x < 5000; x += 80) {
            cptX += 0.3;
            dots.push(new Dot(x, y, y / 8, cptX, cptY));
        }
    }
};

const updateDots = () => {
    for (let i = dots.length - 1; i >= 0; i--) {
        dots[i].update();
    }
};

const eventsListener = () => {
    c.addEventListener("touchstart", function (e) {
        touchx = e.touches[0].pageX;
        touchy = e.touches[0].pageY;
    });
    c.addEventListener("touchmove", function (e) {
        camera.x += 10 * (e.touches[0].pageX - touchx);
        touchx = e.touches[0].pageX;
        camera.y += 10 * (e.touches[0].pageY - touchy);
        touchy = e.touches[0].pageY;
    });
    c.addEventListener("mousemove", function (e) {
        if (move) {
            camera.x += 10 * (e.clientX - mouse.x);
            camera.y += 10 * (e.clientY - mouse.y);
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
    });
    c.addEventListener("mousedown", function (e) {
        move = true;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    c.addEventListener("mouseup", function () {
        move = false
    });

    let fillStroke = document.getElementById("fillstroke");
    fillStroke.addEventListener('change', function (event) {
        if (fillStroke.checked) fill = true;
        else fill = false;
    });

    let speedVave = document.getElementById("speedwave");
    speedVave.addEventListener('change', function (event) {
        speed = speedVave.value;
    });

    let sizedDots = document.getElementById("sizedots");
    sizedDots.addEventListener('change', function (event) {
        size = sizedDots.value / 10;
    });
};


class Dot {
    constructor(x, y, z, cptX, cptY) {
        this.x = x;
        this.y = y + 20 * Math.cos(cptX);
        this.z = z;
        this.cptX = cptX;
        this.cptY = cptY;
        this.color = 'rgba(' + (255 - cptY * 8) + ',255,255,' + (1 - this.y / 900) + ')';
    }
    projection(x, y, z) {
        this.dx = this.x - camera.x;
        this.dy = this.y - camera.y;
        this.dz = this.z - camera.z;
        this.bx = (e.z * this.dx / this.dz + e.x);
        this.by = (e.z * this.dy / this.dz + e.y);
        return [this.bx + W / 2, this.by + H / 2];
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(...this.projection(this.x, this.y, 10), this.size * (100 / this.dz), 0, 2 * Math.PI);
        fill ? ctx.fill() : ctx.stroke();
    }
    update() {
        this.size = size;
        this.cptX += 0.05 * speed / 2;
        this.cptY += 0.05 * speed / 2;
        this.y = 80 * Math.cos(this.cptX) + 80 * Math.cos(this.cptY);
        this.draw();
    }
}

const init = () => {
    c = document.getElementById("canvas");
    c.width = W = window.innerWidth;
    c.height = H = window.innerHeight;
    ctx = c.getContext("2d");
    camera = {
        x: W * 5,
        y: H * 3,
        z: -15
    };
    e = {
        x: 0,
        y: 0,
        z: -5
    };
    eventsListener();
    createDots();
    animate();
};

const animate = () => {
    clear();
    updateDots();
    window.requestAnimationFrame(animate);
};

window.onload = init;