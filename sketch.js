var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var xPosition = 0,yPosition = 0;
var database;

var form, player, game;

var pl,pl1,pl2;
var pl1img,pl2img;
var redScore= 0;
var score = 0;
var yellowScore = 0;
function preload(){
    pl1img = loadImage("player1a.png");
    pl2img = loadImage("player2a.png");
    track = loadImage("track.jpg");
  
}

function setup(){
  canvas = createCanvas(600,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(track);

  if(playerCount === 2){
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