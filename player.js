class Player {
    constructor(){
      this.index = null;
      this.x = 0;
      this.y = 0;
      this.name = null;
      this.score = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        xPosition:this.x,
        yPosition:this.y,
        score:this.score
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
}