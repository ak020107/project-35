var balloon, balloonImg
var background, backgroundImg
var database
var position
var balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition, showError);
function preload(){
backgroundImg=loadImage("sprites/Hot Air Ballon-01.png")
balloonImg=loadImage("sprites/Hot Air Ballon-02.png")
}
function setup() {
  createCanvas(500,500);
  balloon=createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg)
  balloon.scale=.5
  database=firebase.database()
  
}

function draw() {
  background(backgroundImg); 
  textSize(20)
  fill("red")
  stroke("white")
  text("Use WASD to move the Hot Air Balloon!", 25,25) 
  if(keyDown("a")){
    balloon.x= balloon.x-10
  }
  else if(keyDown("d")){
    balloon.x = balloon.x+10
  }
  else if(keyDown("w")){
    balloon.y = balloon.y-10
  }
  else if(keyDown("s")){
    balloon.y = balloon.y+10
  }
 

  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x':height.x+x,
    'y':height.y+y
  })
}
function readHeight(data){
  height = data.val()
  balloon.x=height.x
  balloon.y=height.y
}
function showError(){
  console.log("Error in writing to the database")
}