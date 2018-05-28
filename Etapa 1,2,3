var x = 400;
var y = 250;
var yi = 120

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW))
    x-=5;
  
  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
  
  rect(10,yi, 50, 50);
  yi+=2;
  if(yi>height){
    yi=random(-500,-50);
  }
  ellipse(x,y,70,40);  

}
