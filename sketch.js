var player1, player1SImg;
var player2, player2SImg;
var dragon1, dragon1Img;
var gameState = 0;
var form;
var game; 

function preload(){
player1SImg =loadImage("images/standing.png");
player2SImg = loadImage("images/rons.png");
dragon1Img = loadAnimation("images/D11.gif", "images/D12.gif", "images/D13.gif","images/D14.gif","images/D15.gif");
}

function setup() {
  createCanvas(1500,600);
  player1 =  new Player(850, 500);
  player1.body.addImage("player1S", player1SImg);
  player1.body.scale = 0.35;

  player2 = new Player(400, 500);
  player2.body.addImage("player2S", player2SImg);
  player2.body.scale = 0.5;

  // dragon1 = createSprite(400, 400);
  // dragon1.addAnimation("dragon1", dragon1Img);

  game = new Game();
  game.register();
}

function draw() {
  background(45, 183, 139);  
  // drawSprites();
}