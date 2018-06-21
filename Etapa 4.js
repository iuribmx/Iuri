var xi=479
var yi=250
var x =20
var qy = 250
var y = 260
var u= 5
var dt=5
var dx=x
var disparo = false
var dy= y
var qy2=0
var u2=7
var ui=5

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  x=10
}

function keyPressed(){
  if((keyCode  === CONTROL)&&(!disparo)){
  disparo=true
  dx= x
  dy= y
  }
}

function draw() {
  background(50);
  rect(280,qy2,10,40);
  qy2= qy2+u2
   if(qy2>460)
  {u2= -u2
  }
  if(qy2<0)
  {u2= -u2
  }
  rect(150,qy,10,40);
  qy= qy+u
  if(disparo){
    dx= dx+20
  }
  if(dx>width){
    disparo = false
  }
  
  if(qy>height)
  {qy = random(-500,0)
  }
 
    
  

  ellipse(x, y, 20, 40)
  fill(200,20,90);
  if(keyIsDown(DOWN_ARROW))
  { y += 5
  }
  if(keyIsDown(UP_ARROW))
  {y -= 5
  }
  if(y<=20){
    y=20
  }
  if(y>=480){
    y=480
  }
 
  ellipse(dx,dy,10,5)

  
  
  rect(xi, yi,20,20)
  yi=yi+ui
  if(yi>350){
    ui= -ui
  }
  if(yi<150){
    ui= -ui
  }
  fill(20,200,80);
  
  fill(255);
  

 
 
}
