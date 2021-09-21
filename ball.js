
let x = 40;
let y = 40;
let dx = 2;
let dy = 4;

function setup() {
  createCanvas(400, 400);
  
}

function draw() { 
  background(220);
  noStroke();
  // strokeWeight(8)
  // stroke(255,0,0);
  fill(25,0,100);
  // noFill();
  
  x = x + dx;
  y = y + dy;
  
  ellipse(x,y,50,50);
  
  if(x >= 380 || x == 20) {
    dx = -dx;
  }
  if(y >= 380 || y == 20) {
    dy = -dy;
  }
  
  
}
