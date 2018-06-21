var yq = 100
var xi=479
var yi=250
var x =20
var qy = 250
var xvida = 250
var yvida = 250
var y = 260
var a 
var b
var ao
var bo
var yq = 100
var u= 2
var dt=5
var dx=x
var disparo = false
var disparoo = false
var dy= y
var qy2=0
var u2=3
var ui=1
var colisao = false
var colisaoo = false
var raioi = 10
var raio= 10
var raio2 = 5
var largi = 20
var comprimentoi = 20
var vidas = 3; 
var pontos = 0; 
var nivel = 1;
var tempo = 0
var tempodisparo = 60
var vdo = 19
var barreiraDePontos = 50
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
if (tempo%tempodisparo==0){ //DISPARO DO INIMIGO//
    disparoo = true; 
    ao=xi;
    bo=yi;
    
  }
}

function draw() {
  background(0);

  rect(280,qy2,10,80);
  qy2= qy2+u2
   if(qy2>430)
  {u2= -u2
  }
  if(qy2<0)
  {u2= -u2
  }
  rect(150,qy,10,80);
  qy= qy+u
  
  if(qy>height)
  {qy = random(-500,0)
  }
   fill(255,255,0)
  ellipse(xvida,yvida,10,10);
  //VIDAS//
 	fill(255)
  xvida= xvida-u
  if(xvida<0)
  {xvida = random(500,2000)
  xvida= xvida-u
  yvida = random(0,500)
  }
 
  if(disparo){
    //VELOCIDADE DO DISPARO//
    dx= dx+20
  }
  if(dx>width){
    disparo = false
  }
  
  
  
 if (disparoo) {
   //VELOCIDADE DO DISPARO DO INIMIGO//
    ao=ao-vdo;
    if (ao> width) {
       disparoo = true; 
    }
      ellipse(ao,bo,1*raioi,1*raioi); //isso é o desenho do disparo oponente

  }
    
  
fill(255)
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
  //COLISAO NO INIMIGO//
  if(dy>yi && dy<(20+yi)){
  if(dist(dx+5,0,xi,0)>0 &&dist(dx+5,0,xi,0)<20){
    colisao = true
    c=c+1
    pontos = pontos + 5;
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
  //INIMIGO//
  yi=yi+ui
  if(yi>350){
    ui= -ui
  }
  if(yi<150){
    ui= -ui
  }
  fill(20,200,80);
  
  fill(255);
  
 
  textSize(20);
  fill(255);
  text("Vidas: "+vidas, 10, 30);
  text("Pontos: "+pontos, 100, 30);
  text("Nivel : "+nivel, 220,30);;
  // incremento de pontos 
  //pontos = pontos + 10; 
  if (pontos>barreiraDePontos) {
    nivel=nivel+1;
    barreiraDePontos = barreiraDePontos + 50; 

  }
}
 
