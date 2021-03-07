var movingrect,fixedrect;

function setup() {
 createCanvas(400,400);
 movingrect = createSprite(50, 200, 50, 50);
 movingrect.shapeColor="red";

 fixedrect = createSprite(200, 200, 50, 50);
 fixedrect.shapeColor="blue";
}

function draw() {
  background("yellow");
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  // m.x-f.x=fixedwidth/2 + movingwidth/2  right
  //f.x-m.x=fixedwidth/2 + movingwidth/2  left
  //m.y-f.y<fixed.height/2+moving.height/2  bottom   
  //f.y-m.y<fixed.height/2+moving.height/2  top

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
}
else{
  movingrect.shapeColor="red";
  fixedrect.shapeColor="blue";
}
  
  drawSprites();
}