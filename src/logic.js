const { Rune } = window;
/** 
* declared a const to define different stages of the game 
* which will then help us conditionally render views in different components
*/
const ROUND_STAGE_MAP = ["acceptingPlayers", "awaitingStart", "submitDefinition", "decisionMaking", "announcement"]

Rune.initLogic({
  minPlayers: 4,
  maxPlayers: 4,
  setup: (allPlayerIds) => {
    const scores = {};
    for (let playerId of allPlayerIds) {
      scores[playerId] = 0;
    }
    return {
      startGame: 0,
      currentRoundStage: 'acceptingPlayers',
      gameOver: false,
      judgeOrder: [],
      currentJudge: '',
      judgeIndex: undefined,
      pickedWords: {},
      definitions: {},
      canShowDefinitions: false,
      word: '',
      winner: '',
    };
  },


  actions: {
    assignRoles: (_, { game, allPlayerIds }) => {
      //This is the logic to make sure all players have entered and then when all players have entered then we create the randome judge index.
      if (game.startGame < 4) {
        game.startGame++;
      }
       if(game.startGame === 4) {
        if (!game.judgeIndex) {
          const initialIndex = Math.floor(Math.random() * 3);
          game.judgeIndex = initialIndex;
        }

        //assigns the next judge index during the game.
        if (game.judgeIndex > 3) {
          game.judgeIndex = 0;
        } else {
          game.judgeIndex++;
        }}

    },
    /** 
    * Created this Rune action to update the current game stage in the game state 
    * as per other parts of the game state 
    */
    determineRoundStage: (_, {game}) =>{ 

      switch(game.currentRoundStage) {
        case "acceptingPlayers":{
          if(game.startGame === 4){
            game.currentRoundStage = ROUND_STAGE_MAP[1]
          }
          break
        }
        case "awaitingStart":{
          game.currentRoundStage = ROUND_STAGE_MAP[2]
          break
        }
        case "submitDefinition":{
          if(game.canShowDefinitions) game.currentRoundStage = ROUND_STAGE_MAP[3]
          break
        }
        case "decisionMaking":{

          break
        }
        case "announcement":{

          break
        }
        default: {
          game.currentRoundStage = ROUND_STAGE_MAP[0]
        }
      }
    },

    assignJudgeArray: (currentPlayerID, { game, allPlayerIds }) => {
      game.judgeOrder = [...game.judgeOrder, currentPlayerID];
      if (game.judgeIndex) {
        game.currentJudge = game.judgeOrder[game.judgeIndex];
      }
    },
    // incrementScore: () => {
    //   //adds scores to the winner
    //   //check to see if anybody has reached 3, if so game ends
    // },
    // switchJudge: () => {
    //   //if its undefined randomly pick a number from 0-3
    //   //increment the judge if its 3 then set to 0
    // },
    generateWord: (_, { game }) => {
      let possibleIndex = Math.floor(Math.random() * 100);
      while (game.pickedWords[possibleIndex]) {
        possibleIndex = Math.floor(Math.random() * 100);
      }
      game.pickedWords[possibleIndex] = possibleIndex;
      game.wordIndex = possibleIndex;
    },
    addDefinition: (playerInputAndIdObj, { game }) => {
      //store all the inputs as objects in the definition array in game state
      const { currentPlayerId, inputVal } = playerInputAndIdObj;
      game.definitions[currentPlayerId] = inputVal;
      if (Object.keys(game.definitions).length === 3) {
        game.canShowDefinitions = true;
      }
    },
  },
  events: {
    /**
     * This callback runs when additional players join after the server is running.
     */
    playerJoined: (playerId, { game }) => {
      game.playerScore[playerId] = 0;
    },
  },
});

/*

runeState.players */
