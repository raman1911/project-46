var dom, domRunning
var backgroundImg, ground
var obstacle, obstacleImg, OB_Group
var doracake, doracake1Img, DC_Group


function preload(){

domRunning = loadAnimation("img/dom1.png","img/dom2.png","img/dom3.png","img/dom4.png","img/dom5.png");
backgroundImg = loadImage("img/background.jpg");
doracake1Img = loadImage("img/doracake1.png");
obstacleImg = loadImage("img/obstacle1.png");
 
}

function setup() {

 createCanvas(600, 400);
 
 ground = createSprite(200,200,600,100);
 ground.addImage(backgroundImg);
 ground.scale = 1.8;

 dom = createSprite(100,320,10,100);
 dom.addAnimation("running",domRunning);
 dom.scale = 0.5

 DC_Group = new Group();
 OB_Group = new Group();

}

function draw() {
 background(0);

 if(ground.x<100){
 ground.x = ground.width/2;
 }
 ground.velocityX = -3;

 spwanDoracake();
 spwanObstacle();

 drawSprites();
}

function spwanDoracake(){
  if(frameCount%300===0){
  var doracake = createSprite(460,370,5,80);
  doracake.velocityX = -5;
  doracake.addImage(doracake1Img);
  doracake.scale = 0.07;
  doracake.x = Math.round(random(590,600));
  doracake.y = Math.round(random(150,250));
  doracake.lifetime = 300;
  DC_Group.add(doracake);
  
  }
}

function spwanObstacle(){
  if(frameCount%210===0){
    var obstacle = createSprite(450,350,10,100);
    obstacle.addImage(obstacleImg);
    obstacle.velocityX = -5;
    obstacle.scale = 0.3;
    obstacle.x = Math.round(random(570,600));
    obstacle.lifetime = 300;
    OB_Group.add(obstacle);
    
  }
}