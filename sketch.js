var radioMayor = 0;
var x = radioMayor;
var velocidad = 1;
var direccion =1;
var anguloRotacion = 0;

function setup() {
  
  createCanvas(400, 400);
 
  
  
  stroke (255)
  
  background(255);
 
}

function draw() {
  
  console.log("x:"+ mouseX + "y:"+ mouseY)
  
  background(255);
  stroke(0,0,0)
  //LINEAS//
  line(50,0,50,4000);
   line(400,50,0,50);
  stroke(0,0,0)
  line(200,0,200,400);
  stroke(0,0,0)
  line(0,100,400,100);
  stroke(0,0,0)
 line(0,190,200,190);
  line(200,230,400,230);
   line(0,340,400,340);
  

  //RECTANGULOS//
  rect(200,300,180,100)
  fill(200,0,0);
rect(200,0,150,100);
  fill(0,0,150);
  rect(0,0,50,50);
  fill(0,0,0);
  rect(64, 160, 100, 55);
  fill(0,0,0)
  rect(270,200,90,60)
  fill(255,204,0)
  
   //x += velocidad * direccion; // Cambio de direccion
  x += velocidad; // Aumenta el valor de x
  push(); //--------monacho
  
  //Transformaciones --------------  
  translate(x, height / 10);
  rotate(radians(anguloRotacion));
  
  ellipseMode(RADIUS);
 //translate(mouseX,mouseY)
  
   rect(100,70,20,70);
  ellipse(110,70,50,50);

  ellipse(96,70,10,30);
  ellipse(119,70,10,30);
  line(105,140,100,160);
  line(115,140,120,160);
  
  
  if (mouseIsPressed){
    noLoop()
    
  }
  
  
  
}