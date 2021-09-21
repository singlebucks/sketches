
let x = 50;
let y = 50;
let dx = 5;
let dy = 3;

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
  
  ellipse(x,y,30,30);
  
  if(x >= 380 || x == 20) {
    dx = -dx;
  }
  if(y >= 380 || y == 20) {
    dy = -dy;
  }
   
  x = x + dx;
  y = y + dy;
  
}
