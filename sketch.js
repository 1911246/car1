var wall,car
var speed,weight,deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100,200,60,400);
  wall.shapeColor = "gray";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;
  collide(car,wall);
  deformation = (0.5 * weight * speed * speed)/22500;

  if(deformation < 100){
    car.shapeColor = "green";
  }
  if(deformation > 100 && deformation < 180 ){
    car.shapeColor = "yellow";
  }
  if(deformation > 180){
    car.shapeColor = "red";
  }
}

function collide(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = 0;
    }
}