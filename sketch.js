var hypnoticBall, database;
var position;
var game, form, player;
var gameState = 0;
var playerCount;
var distance = 0;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  drawSprites();
}