window.onload = function () {


    let sololearn = true;

    let virat = new Zdog.Illustration({
        element: '.v',
        dragRotate: true,
        onDragStart: function () {
            sololearn = false;
        },
    });



    let body = new Zdog.Hemisphere({
        addTo: virat,
        diameter: 120,

        stroke: true,
        color: '#C25',
        backface: '#EA0',
        rotate: {
            x: -Zdog.TAU / 4
        },
        translate: {
            x: 0,
            y: 30,
            z: 0
        },
    });

    let neck = new Zdog.Cylinder({
        addTo: body,
        diameter: 80,
        length: 30,
        stroke: false,
        color: '#006666',
        frontFace: '#006666',
        backface: false,
        translate: {
            x: 0,
            y: 0,
            z: -15
        },
        // rotate: { x: -Zdog.TAU/1}
    });

    let neck1 = new Zdog.Cylinder({
        addTo: neck,
        diameter: 80,
        length: 100,
        stroke: false,
        color: '#FFCC66',
        frontFace: '#EA0',
        backface: 'red',
        translate: {
            x: 0,
            y: 0,
            z: -65
        },
        // rotate: { x: -Zdog.TAU/1}
    });

    let neck2 = new Zdog.Cylinder({
        addTo: neck1,
        diameter: 80,
        length: 40,
        stroke: false,
        color: 'red',
        frontFace: 'red',
        backface: 'red',
        translate: {
            x: 0,
            y: 0,
            z: -70
        },
        // rotate: { x: -Zdog.TAU/1}
    });




    let head = new Zdog.Hemisphere({
        addTo: neck2,
        diameter: 80,

        stroke: false,
        color: '#006666',
        backface: '#EA0',
        rotate: {
            x: -Zdog.TAU / 2
        },
        translate: {
            x: 0,
            y: 0,
            z: -20
        },

    });
    let beak = new Zdog.Cone({
        addTo: head,
        diameter: 20,
        length: 90,
        stroke: false,
        color: '#636',
        backface: '#C25',
        rotate: {
            x: Zdog.TAU / 4
        },
        translate: {
            x: 0,
            y: -40,
            z: -15
        },
    });

    let lefteye = new Zdog.Hemisphere({
        addTo: neck2,
        diameter: 10,

        stroke: false,
        color: '#000',
        backface: '#000',
        rotate: {
            x: -Zdog.TAU / 4
        },
        translate: {
            x: 23,
            y: 30,
            z: -15
        },
        //rotate: { z: -Zdog.TAU/9},
    });


    lefteye.copy({

        rotate: {
            x: -Zdog.TAU / 4
        },
        translate: {
            x: -23,
            y: 30,
            z: -15
        },
    });







    let leg1 = new Zdog.Shape({
        addTo: neck1,
        path: [{
                x: 60,
                y: -60
            },
            {
                bezier: [{
                        x: 20,
                        y: 60
                    },
                    {
                        x: 20,
                        y: 60
                    },
                    {
                        x: 60,
                        y: 60
                    },
                ]
            },
        ],
        closed: false,
        stroke: 20,
        color: '#636',

        rotate: {
            x: Zdog.TAU / 4,
            y: -Zdog.TAU / 5
        },
        translate: {
            x: 20,
            y: -60,
            z: 190
        },
        //rotate: { },


    });


    let leg2 = leg1.copy({
        translate: {
            x: -60,
            y: -60,
            z: 190
        },

    });





    let lefthand = new Zdog.Cylinder({
        addTo: neck1,
        diameter: 20,
        length: 80,
        stroke: false,
        color: '#C25',
        backface: '#E62',
        rotate: {
            y: Zdog.TAU / 4
        },
        translate: {
            x: -75,
            y: 0,
            z: 10
        },
    });


    let righthand = lefthand.copy({
        translate: {
            x: 75,
            y: 0,
            z: 10
        },

    });


    let circle = new Zdog.Ellipse({
        addTo: lefthand,
        diameter: 48,
        stroke: 10,
        color: 'mediumseagreen',
        translate: {
            x: -38,
            y: -0,
            z: 20
        },
    });

    let pentagon = new Zdog.Polygon({
        addTo: virat,
        radius: 20,
        sides: 5,
        stroke: 20,
        color: '#EA0',
        translate: {
            x: 105,
            y: -76,
            z: 0
        },
    });


    function animate() {
        // rotate
        if (sololearn) {
            virat.rotate.y += 0.03;
        }
        virat.updateRenderGraph();
        requestAnimationFrame(animate);
    }
    animate();
}