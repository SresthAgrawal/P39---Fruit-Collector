class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("NAME");
    this.greeting = createElement('h1')
    this.play = createButton("PLAY");
    this.restart = createButton("RESTART");
  }

  display() {
    this.title.html("FRUIT COLLECTOR");
    this.title.position(400, 50);
    this.input.position(400, 300);
    this.input.style('width', '250px');
    this.input.style('height', '250px');
    this.greeting.position(400, 300);

    this.play.mousePressed(()=>{
      this.input.hide();
      this.play.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(400, 400);
    })

    this.restart.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
  }

  hide() {
    this.title.hide();
    this.input.hide();
    this.greeting.hide();
    this.play.hide();
  }
}