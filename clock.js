function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
}

function draw() {
    
    background(255);

    let hr = hour();
    let mn = minute();
    let sc = second();
    
    
   
    stroke(0, 0, 25);
    strokeWeight(2);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
 
    
    if(hr>12){
      
     text(hr%12 + ' : ' + mn + ' : ' + sc, width/2, 35);
   
    } else {
     text(hr + ' : ' + mn + ' : ' + sc, width/2, 35 );
      
     }


    
    translate(200,200);
    rotate(-90);
    
    fill(0);
    arc(0, 0, 250, 250, 0, 360);

    push();
    rotate(90);
    fill(255);
    textAlign(CENTER,CENTER);
    
    
    translate(-100,-100);
   
    text("12",100,0);
    text("9",0,100);
    text("3",200,100);
    text("6",100,200);
    
    pop();
  
    
    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    
    
   

    let secondAngle = map(sc, 0, 60, 0, 360);
    //  arc(0, 0, 300, 300, 0, secondAngle);


    stroke(150, 100, 255);
    let minuteAngle = map(mn, 0, 60, 0, 360);
    // arc(0, 0, 280, 280, 0, minuteAngle);

    stroke(150, 255, 100);
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    // arc(0, 0, 260, 260, 0, hourAngle);



    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 80, 0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(150, 100, 255);
    line(0, 0, 60, 0);
    pop();

    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 40, 0);
    pop();


    stroke(255);
    point(0, 0);


}





