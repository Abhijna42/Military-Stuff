var bullet;
 var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 60, 50);
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor = (80,80,80);
  speed = random(223,321 );
  weight = random(30,52);
  thickness = random(22,83);
  bullet.velocityX = speed;

}
 

function draw() {
  background(0);
  hasCollided();
  if(hasCollided(bullet,wall){
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
      bullet.velocityX=0;
      var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/thickness *thickness*thickness;
      if(damage>180){
         wall.shapeColor = color(255,0,0);
          }
      if(damage<180&&damage>100){
    wall.shapeColor = color(230,230,0);
  }
  if (damage<100){
    wall.shapeColor = color(0,255,0);
  }
  } 
    
  }
}
 function hasCollided(Lbullet,Lwall){
    bulletRightEdge=Lbullet.x+Lbullet.width;
    wallLeftEdge = Lwall.x;
    if(bulletRightEdge){
return true;
    }
    else{
      return false
    }

    drawSprites();
  }
 
