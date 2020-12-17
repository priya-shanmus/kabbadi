class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("KABBADI");
      this.title.position(250,20);
  
      this.input.position(250,100);
      this.button.position(250,150);
      this.reset.position(500,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);


        this.greeting.html("Hello " + player.name)
        this.greeting.position(250,200);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  