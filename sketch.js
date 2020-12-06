var gameState = "PLAY"

var monkey , monkeyDude;

var banana ,bananaImage, obstacle, obstacleImage;

var foodGroup, obstacleGroup;

var score, survivalTime;


function preload(){
  monkeyDude = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",  "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
  createCanvas(600,600);
  
  monkey = createSprite(50,430,10,10);
  monkey.addAnimation("something",monkeyDude);
  monkey.scale = 0.1;
  
  ground = createSprite(1000,500,750,10);  
  ground.x = ground.width /2;
  ground.velocityX = -5;
  
  obstacleGroup = new Group();
   
  foodGroup = new Group();
  
  survivalTime = 0;
}



function draw(){
  background(0);
  
  if(gameState === "PLAY"){
    if(ground.y > 500){
      ground.y = 250;
    }
    
    if (ground.x < 200){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")){
      monkey.velocityY = -10;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    monkey.collide(ground);
    
    obstacles();
    bananas();
    
    fill("white");
    textFont("Segoe UI");
    textSize(30);
    survivalTime = Math.round(frameCount/100);
    text("Survival Time = " + survivalTime, 150,100);
    
   drawSprites();
 }
  else if(gameState === "END"){
    fill("red");
    textSize(50);
    textFont("Segoe UI");
    text("Game Over!", 175,300);
    }
}


function obstacles(){
  if(frameCount % 80 === 0){
    var rock = createSprite(600,470,10,10);
    rock.addImage(obstacleImage);
    rock.velocityX = -5;
    rock.lifetime = 700;
    rock.scale = 0.2;
    
    obstacleGroup.add(rock);
  }
}


function bananas(){
  if(frameCount % 150 === 0){
    var fruit = createSprite(600,410,10,10);
    fruit.addImage(bananaImage);
    fruit.velocityX = -5;
    fruit.lifetime = 700;
    fruit.scale = 0.1;
    
    foodGroup.add(fruit);
  }
}