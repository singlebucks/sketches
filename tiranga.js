let cx, cy;
let radius;




function setup() {
    createCanvas(900, 600);

    noStroke();
    radius = min(width, height) / 2;
    text(radius, 100,100);

    cx = width / 2;
    cy = height / 2;

}


function draw() {

    push();
    fill(255, 153, 51);
    rect(0, 0, 900, 200);

    fill(255, 255, 255);
    rect(0, 200, 900, 200);

    fill(19, 136, 8);
    rect(0, 400, 900, 200);
    pop();


    fill(0, 0, 128);
    ellipse(cx, cy, 195, 195);


    fill(255, 255, 255);
    ellipse(cx, cy, 180, 180);

    fill(0, 0, 128);
    ellipse(cx, cy, 35, 35);

    push();
    stroke(0, 0, 128);
    strokeWeight(2);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 15) {
        let angle = radians(a);
        let x = cx + cos(angle) * (radius * 0.3);
        let y = cy + sin(angle) * (radius * 0.3);
        vertex(x, y);
        line(x, y, cx, cy);

    }
    endShape();
    pop();

}

