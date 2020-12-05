var moving, fixed

function setup() {
  createCanvas(800,400);

  fixed=createSprite(400, 200, 70, 50);
  fixed.shapeColor="green";

  moving=createSprite(200,200,90,40);
  moving.shapeColor="green";
}

function draw() {
  background("black");  

  moving.x=mouseX;
  moving.y=mouseY;

  if(fixed.x-moving.x<moving.width/2+fixed.width/2 && 
    moving.x-fixed.x<moving.width/2+fixed.width/2 &&
    fixed.y-moving.y<moving.height/2+fixed.height/2 && 
    moving.y-fixed.y<moving.height/2+fixed.height/2){
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
  else {
    fixed.shapeColor="green";
    moving.shapeColor="green";     
  }



  drawSprites();
}