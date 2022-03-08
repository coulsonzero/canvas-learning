var roo = 0;

window.onload = function () {
    var x = 0;
    var y = 0;
    var rest = true
    var wx = 0;
    var wy = 0;
    var dx = 1;
    var speed = 1;
    var score = 0;
    var plus = 0;
    var tr = false;
    var canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 150;

    var div = document.querySelector("dl");
    var ctx = canvas.getContext("2d");
    var playing = true;
    var m = [];
    time = 0;
    while (m.length < 255) {

        while (m.includes(val = Math.floor(Math.random() * 255)));
        m.push(val);
    }
    var lurp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
    var noise = x => {
        x = x * 0.01 % 255;
        return lurp(m[Math.floor(x)], m[Math.ceil(x)], x - Math.floor(x));
    }

    var player = new function () {
        this.x = canvas.width / 2;
        this.y = canvas.height * 0.6;
        this.rot = 0;
        this.ySpeed = 0;
        this.rSpeed = 0;
        this.img = new Image();
        this.img.src = "http://icons.iconarchive.com/icons/icons8/android/512/Transport-Motorcycle-icon.png";
        this.draw = function () {

            var p1 = canvas.height - noise(t + this.x) * 0.25;
            var p2 = canvas.height - noise(t + 5 + this.x) * 0.25;
            var grounded = 0;
            if (rest) {

                speed = 0;
                time = 0;
                x = 0;
                y = 0;


                this.rot = 0;
                this.rSpeed = 0;

                this.y = canvas.height * 0.7;
                this.x = canvas.width * 0.5;
                wx = 0;
                wy = 0;
                dx = 1;
                speed = 1;
                roo = 0;
                score = 0;
                plus = 0;
                playing = true;
                rest = false;
                tr = false;

            }


            this.rot += roo;
            if (p1 - 15 > this.y) {
                this.ySpeed += 0.1;

            } else {
                this.ySpeed -= this.y - (p1 - 15)
                this.y = p1 - 15;
                grounded = 1;

            }
            //GAME OVER --------------------------------------------

            if (!grounded && Math.abs(this.rot) >= 6) {
                this.rot = 0;

            }
            if (!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {


                this.x -= 6;
                playing = false;

                ctx.font = "50px Arial"
                ctx.fillStyle = "red";
                speed = 0;
                ctx.fillText("Game Over", canvas.width * 0.5 - 100, canvas.height * 0.5 - 10);
                window.again.style.display = "block";
            }

            //CLASE GAME OVER ------------------------------------------


            this.y += this.ySpeed;
            var ang = Math.atan2((p2 - 15) - this.y, (this.x + 5) - this.x);



            //IS GROUNDED MOTOR ------------------------

            if (grounded && playing) {



                this.rot -= (this.rot - ang) * 0.5;
                this.rSpeed = this.rSpeed - (ang - this.rot);



            }
            //CLASE IS GROUNDED MOTOR ------------------



            //MOTOR
            if (this.rot > Math.IP) this.rot -= Math.IP;
            if (this.rot < -Math.IP) this.rot = Math.IP;

            this.rot -= this.rSpeed * 0.1;

            ctx.save()
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rot)
            ctx.drawImage(this.img, -15, -15, 30, 30);

            ctx.restore();

            if (time > 3) {

                //PLUS SCORE

                if (this.y < canvas.height * 0.7 && this.y) {
                    if (playing) {
                        score += plus;
                        ctx.font = "20px nurmal"
                        ctx.fillStyle = "#8881e1";
                        plus += 1;
                        ctx.fillText("+" + plus, this.x, this.y - 22);
                        if (plus > 5) {
                            plus = 1;
                        }
                    }

                } else {
                    plus = 0;
                }
            }






        }
    }




    var t = 0;

    function loop() {


        t += 1 * speed;
        this.ySpeed -= 1;


        if (x > 130) {
            window.de.style.marginLeft = 99 + "px";
            x = 130;
        }

        if (x < 0) {
            window.de.style.marginTop = 0 + "px";
            x = -1;
        }


        ctx.fillStyle = "#09f";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        var image = new Image();
        image.src = "https://cdn.pixabay.com/photo/2020/03/22/06/57/game-background-4956017_1280.jpg";
        ctx.drawImage(image, 0, 0, innerWidth, canvas.height);
        ctx.fillStyle = "#111";
        ctx.strokStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (var i = 0; i < canvas.width; i++)


            ctx.lineTo(i, canvas.height - noise(t + i) * 0.25);
        ctx.lineTo(canvas.width, canvas.height)

        ctx.fill();

        requestAnimationFrame(loop);
        player.draw();
        km = speed + speed * 9;

        ctx.font = "18px nurmal";
        ctx.save();
        ctx.fillStyle = "#fff";
        ctx.fillText("SCORE:" + score, 30, 30);
        ctx.fillText(km + "km/h", canvas.width - 100, 30);
        ctx.restore()
    }
    loop();




    div.addEventListener("mousemove", (e) => {
        e.preventDefault();

        x = e.pageX - canvas.offsetLeft - 75;
        y = e.pageY - canvas.offsetTop;
        if (x != NaN) {
            if (x > -1) {
                window.de.style.marginLeft = x + "px";
            }
            if (x >= 0) {
                speed = 1;
            }
            if (x >= 10) {
                speed = 2;
            }
            if (x >= 15) {
                speed = 3;
            }
            if (x >= 30) {
                speed = 4;
            }
            if (x >= 50) {
                speed = 5;
            }
            if (x >= 70) {
                speed = 6;
            }
            if (x >= 80) {
                speed = 7;
            }
            if (x >= 110) {
                speed = 8;
            }
            if (x >= 120) {
                speed = 9;
            }

        }
    })
}

function ag() {



}

time = 0;

function t() {
    time++;


}
setInterval(t, 700)

function UP() {

    roo -= 0.03;

}

function DOWN() {
    roo += 0.03;


}



/*canvas.addEventListener("touchmove",(e)=>{
   
   
    
    ctx.clearRect(0,0,innerWidth,innerHeight)
        ctx.fillRect(wx,wy,10,10)
     
     
    if(x<0){
  x=0;
  
 }
 if(x>canvas.width){
  x=canvas.width-10;
 }
  if(y<31){
   y=30;
  }
  if(y>canvas.height+20){
   y=canvas.height+20;
  }
    wx= x;
    wy= y-30;
       
    e.preventDefault();})*/