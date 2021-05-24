var fixedRect, movingRect;
var box1
var box2 
var box3
var box4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(400, 100, 50, 50)
  box1.shapeColor = "red"
  box1.debug = true
  box2 = createSprite(300, 200, 70, 70)
  box2.shapeColor = "blue"
  box2.debug = true
  box3 = createSprite(200, 300, 90, 90)
  box3.shapeColor = "orange"
  box3.debug = true
  box4 = createSprite(75, 400, 120, 120)
  box4.shapeColor = "yellow"
  box4.debug = true
}

function draw() {
  background(0,0,0); 
  movingRect.velocityX=3 
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
function isTouching(arg1,arg2) {
  if (arg1.x - arg2.x < arg2.width/2 + arg1.width/2
    && arg2.x - arg1.x < arg2.width/2 + arg1.width/2
    && arg2.y - arg1.y < arg2.height/2 + arg1.height/2
    && arg2.y - arg1.y < arg2.height/2 + arg1.height/2) {
  return true
}
else {
  return false
}
}
function bounceOff(arg1,arg2){
  if (arg1.x - arg2.x < arg2.width/2 + arg1.width/2
    && arg2.x - arg1.x < arg2.width/2 + arg1.width/2){
      arg1.velocityX=arg1.velocityX*(-1);
      arg2.velocityX=arg2.velocityX*(-1)
    }
    if (  arg2.y - arg1.y < arg2.height/2 + arg1.height/2
      && arg2.y - arg2.y < arg2.height/2 + arg1.height/2){
       arg1.velocityY=arg1.velocityY*(-1);
      } 
    
}