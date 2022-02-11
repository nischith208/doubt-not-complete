var PLAY=1;
var END=0;
var gameState=1

var bluebat2,redball,whiteball

function preload(){ 

bluebat2 = loadImage("blue_bat-2-removebg-preview.png")

redball = loadImage("red_ball_image-removebg-preview.png")

whiteball = loadImage("white_ball_image-removebg-preview.png")

}

function setup() {
 CreateCanvas(600,600)

 bluebat2=createSprite(40,200,20,20)
 bluebat2=addImage(bluebat2-removebg-preview)
 bluebat2.scale=0.7
 bluebat2.setCollider("rectangle",0,0,40,40)

 score=0
}

function draw() {
 background("yellow")

 if(gameState===PLAY){
  
  bluebat2.y=World.mouseY;
  bluebat2.x=World.mouseX;
  
  whiteball();
  redball();

  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+2
} 
else
{
    if(redball.isTouching(bluebat2)){
        gameState=END; 
        bluebat2.destroy
        whiteball.destroy
        redball.destroy
    }
}
 drawSprites();

 textSize(25);
 text("Score : "+ score,250,50);