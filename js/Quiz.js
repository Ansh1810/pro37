class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
background ("yellow")
  Contestant.getPlayerInfo();
  textSize(34)
  text("Result of the quiz", 340, 50);
   
    if(allContestants !== undefined){
      var display_position = 230;
      textSize(23);
      text("Contestants that answered correct are highlighted in green color", 130, 230)
      for(var plr in allContestants){
      var ans = "2";
        if (ans === allContestants[plr].answer){
          fill ("green");
        }
        else{
          fill ("red"); 
        }
      
       display_position = display_position + 30
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_position)
      }

    }

  
 
    
  }

}
