
var monkey , monkey_running
var banana ,bananaImage, rock, rockImage
var rockGroup
var score=0; 
var ground,groundImage,scene,sceneImage,monkeydash,monkeydashImage
var bananasGroup

function preload(){

 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
  sceneImage = loadImage("tree.png");
  rockImage = loadImage("obstacle.png");  
  monkeydashImage = loadImage("sprite_3.png")
  
  
}



function setup() {
  createCanvas(600,400)
  
 scene=createSprite(300,200,100,100);
 scene.addImage(sceneImage);
 scene.scale=0.3 
 scene.velocityX=-4
 
 monkey=createSprite(100,350,10,10) 
 monkey.addAnimation("running",monkey_running)
 monkey.scale=0.1
 
 
 invisiblewall=createSprite(300,385,600,10)
 invisiblewall.visible=false;
 
  
  
  
 rock=createSprite(600,360,10,10);
 rock.addImage(rockImage);
 rock.scale=0.13
 rock.velocityX=-4
  
 bananasGroup = new Group();
  
 score = 0;
}


function draw() {
background (1);
  //monkey.debug=true;
  //rock.debug=true;
rock.setCollider("circle",10,50,150);
  
monkey.setCollider("circle",10,50,200);
monkey.collide(invisiblewall);
  
if(scene.x<0) {
  scene.x=scene.width/10
}  
if(rock.x<-20) {
 rock.x=rock.width/0.8
}
  
if(keyDown("space")){
 if(monkey.y>349){ 
  monkey.velocityY=-11.5
 } 
}
monkey.velocityY = monkey.velocityY + 0.6 
  
  
 if(monkey.isTouching(rock)){
  // rock.velocityX=0
  // scene.velocityX=0
  // monkey.visible=false;
  // monkeydash=createSprite(100,350,10,10)
  // monkeydash.addImage(monkeydashImage)
  // monkeydash.scale=0.1
  // bananasGroup.setVelocityEach(0,0)
   monkey.scale=0.1;
   score=score-1
 } 
  
 if(monkey.isTouching(bananasGroup)) {
   bananasGroup.destroyEach();
   score=score+10
   monkey.scale=monkey.scale+0.005
   
 }
  
 spawnbananas(); 
  
drawSprites();
fill(0);
textSize(15)
text("Score:  "+score,500,70);
}

function spawnbananas() {
  
  if(frameCount % 90 === 0){
    var banana=createSprite(630,random(200,380),50,50); 
   banana.addImage(bananaImage)
   banana.scale=0.1  
   banana.velocityX=-4 
   bananasGroup.add(banana);
 }
 
}




