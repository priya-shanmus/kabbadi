class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
     async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      pl1 = createSprite(200,300,20,20);
     pl1.addImage(pl1img);
     pl1.scale = 0.3;
      pl2 = createSprite(400,300,20,20);
     pl2.addImage(pl2img);
     pl2.scale = 0.3;
      pl = [pl1,pl2];
      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      
    if(allPlayers !== undefined){
        background(track);
        textSize(25);
        fill("white");
        text("RED: " + redScore,200,70);
      text("YELLOW: "+ yellowScore,350,70);
    
       
        if(keyDown(RIGHT_ARROW) && player.index!== null){
          player.x +=10
          player.update();
        }
        if(keyDown(LEFT_ARROW) && player.index !== null){
          player.x -=10
          player.update();
        }
        if(keyDown(UP_ARROW) && player.index !== null){
          player.y -=10
          player.update();
        }
        if(keyDown(DOWN_ARROW) && player.index !== null){
          player.y +=10
          player.update();
        }
    }
  
    
     
      drawSprites();
    }
  
   
  }
 