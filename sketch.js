var ground, groundImg;
var backgroundImg;
var mario, marioImg;
var pipe, pipeImg1, pipeImg2, pipeImg3;
var pipeGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var invisibleGround;

function preload(){
    backgroundImg = loadImage("images/Background.png");
    groundImg = loadImage("images/Background2.png");
    marioImg = loadAnimation("images/Mario 1.png","images/Mario 2.png","images/Mario 3.png", 
    "images/Mario 4.png","images/Mario 5.png","images/Mario 6.png","images/Mario 7.png","images/Mario 8.png");
    pipeImg1 = loadImage("images/Pipe 1.png");
    pipeImg2 = loadImage("images/Pipe 2.png");
    pipeImg3 = loadImage("images/Pipe 3.png");
}

function setup(){
    createCanvas(1200,500);

    ground = createSprite(800, 450, 1200, 100);
    ground.addImage(groundImg);
    //ground.x = ground.width/2;  
    ground.velocityX = -5;
    ground.scale = 3;

    mario = createSprite(180, 330, 80, 150);
    mario.scale = 0.6;
    mario.addAnimation("running", marioImg);

    invisibleGround = createSprite(400,500,1200,100);
    invisibleGround.visible = false;

    pipeGroup = new Group();
}

function draw(){
    background(backgroundImg);

    
    //console.log(ground.x);
    spawnPipes();

    if(gameState === PLAY){
        ground.velocityX = -5;
        if(ground.x < 0){
            ground.x = ground.width/2;
        }
        if(keyDown("space")&& mario.y >= 160){
            mario.velocityY = -10;
        }
        mario.velocityY = mario.velocityY+ 0.5;

    }
   else if(gameState === END){
    ground.velocityX = 0;

   }

    mario.collide(invisibleGround);
    drawSprites();
}

function spawnPipes(){
    if(frameCount % 100 === 0){
    var pipe = createSprite(1200, 370, 50, 80);
    pipe.velocityX = -4;
    
    var randomNumber = Math.round(random(1, 3));
    switch(randomNumber){
        case 1: pipe.addImage(pipeImg1); 
        break;
        case 2: pipe.addImage(pipeImg2);
        break;
        case 3: pipe.addImage(pipeImg3);
        break;
        default: break;
    }
    pipe.scale = 0.3;
    pipeGroup.add(pipe);
    }

}