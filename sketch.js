var car,wall,weight,speed;

function setup() {

  createCanvas(1600,400);

  speed=random(60,95);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1400,200,50,200);
  
  car.velocityX=speed
  car.shapeColor=color(255);
}

function draw() {
  background(0,0,0); 
  if(wall.x-car.x<wall.width/2+car.width/2)
  {
    car.velocityX=0;
  }

  drawSprites();
}