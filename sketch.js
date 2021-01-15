var player, game, form;
var player1, player2, fruits;
var player1Image, player2Image, apple, banana, orange, melon, pineapple, jungle;
var players;
var fruitGroup;
var database;
var allPlayers;
var gameState = 0, playerCount = 0;

function preload() {
  player1Image = loadImage("images/basket2.png");
  player2Image = loadImage("images/basket2.png");
  apple = loadImage("images/apple2.png");
  banana = loadImage("images/banana2.png");
  orange = loadImage("images/orange2.png");
  melon = loadImage("images/melon2.png");
  pineapple = loadImage("images/pineapple2.png");
  jungle = loadImage("images/jungle.jpg");
}

function setup() {
  createCanvas(1000, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("jungle");
  
  if(playerCount === 2) {
    game.update(1);
  }

  if(gameState === 1) {
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}