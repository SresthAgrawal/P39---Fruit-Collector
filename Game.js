class Game {
  constructor() {}

  getState() {
    var getStateRef = database.ref("getState");
    getStateRef.on("value", (data)=>{
      gameState = data.val();
    })
  }

  updateState() {
    database.ref('/').update({
      gameState: state
    })
  }

  async start() {
    if(gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");

      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form();
      form.display();
    }
    
    player1 = createSprite(200, 500);
    player2 = createSprite(800, 500);

    player1.addImage("player1", player1Image);
    player2.addImage("player2", player2Image);

    players = [player1, player2];
  }
  
  play() {
    form.hide();
    Player.getPlayerInfo();
    var x = 100;
    var y = 100;
    var index = 0;
    drawSprites();

    if(frameCount % 30 === 0) {
      fruits = createSprite(random(100,800),0,100,100);
      fruits.velocityY = random(4,7);
      var rand = Math.round(random(1,5));
      switch(rand) {
        case 1: fruits.addImage("apple", apple);
        break;
        case 2: fruits.addImage("banana", banana);
        break;
        case 3: fruits.addImage("orange", orange);
        break;
        case 4: fruits.addImage("melon", melon);
        break;
        case 5: fruits.addImage("pineapple", pineapple);
        break;
        default: break;
      }
    }

    for(var plr in allPlayers) {
      index += 1;
      x = 500 - allPlayers[plr].distance;
      y = 300;
      players[index - 1].x = x;
      players[index - 1].y = y;
      
      if(index === player.index) {
        text(allPlayers[plr].name, x-20, y+20);
      }
    }
  }
} 