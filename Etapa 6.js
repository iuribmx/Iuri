var xi=479
var yi=250
var x =20
var qy = 250
var y = 260
var u= 2
var dt=5
var dx=x
var disparo = false
var dy= y
var qy2=0
var u2=3
var ui=1
var colisao = false
var raio= 10
var raio2 = 5
var largi = 20
var comprimentoi = 20
var vidas = 3; 
var pontos = 0; 


var c = 0


function setup() {
  createCanvas(500, 500);
  frameRate(60);
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
  background(0);
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
  //COLISAO//
  if(dy>yi && dy<(20+yi)){
  if(dist(dx+5,0,xi,0)>0 &&dist(dx+5,0,xi,0)<20){
    colisao = true
    c=c+1
  }
    
  }
  else {
    colisao = false
  }
  if(c==0){
    fill(255)
  }
  else if(c==2){
    fill(255,0,0)
  }
  else if(c==4)
  { fill(0,104,139)
  }
  else if(c==6){
    largi=0
  comprimentoi=0
  }
 
  
  
  rect(xi, yi,largi,comprimentoi)
  yi=yi+ui
  if(yi>350){
    ui= -ui
  }
  if(yi<150){
    ui= -ui
  }
  fill(20,200,80);
  
  fill(255);
  
 
  textSize(32);
  fill(255);
  text("Vidas: "+vidas, 10, 60);
  text("Pontos: "+pontos, 10, 90);;
  

 
 
}
