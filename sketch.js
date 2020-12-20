



function setup() {
  createCanvas(1600,400);
 bullet= createSprite(500, 200, 50, 50);
bullet.velocityX=5;

 wall= createSprite(1200, 200, 60, 100);

speed=random(223,321);
weight=random(25,30);

thickness=random(22,83)

}

function draw() {
  background("black");  

if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage 0.5 * weight * speed * speed(thickness*thickness*thickness)
|
if(damage>10);
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}


  drawSprites();

  hasCollided(bullet,wall);
}

function hasCollided(lbullet,lwall)
{

bulletRightEdge=1bullet.x+1bullet.width;















