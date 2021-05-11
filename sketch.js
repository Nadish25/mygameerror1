var canvas, backgroundImage;
var carsAtEnd;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playerInfoRef;
var form, player, game;
var bike;

var cars, car1, car2, car3;

var car1Img,car2Img,car3Img;
var groundImg;
var track;

var test;

function preload(){

  
}

function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  test=new Test();
}


function draw(){
  
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
