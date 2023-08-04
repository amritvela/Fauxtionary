const { Rune } = window;

Rune.initLogic({
  minPlayers: 4,
  maxPlayers: 4,
  setup: (allPlayerIds) => {
    const scores = {};
    for (let playerId of allPlayerIds) {
      scores[playerId] = 0;
    }
    return {
      scores,
      startGame: true,
      gameOver: false,
      judge: undefined,
      pickedWords: {},
      definitions: {},
      canShowDefinitions: false, 
      index: undefined,
      word: '',
      winner: '',
    };
  },
  actions: {
    startGame: (_, { game }) => {
      if (!game.judge) {
        game.judge = Math.floor(Math.random() * 3);
      } else if (game.judge === 3) {
        game.judge = 0;
      } else {
        game.judge++;
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
      //Math.trunc(math.random) from 0-100
      let possibleIndex = Math.floor(Math.random() * 100);
      console.log(game.pickedWords);
      console.log(possibleIndex);
      while (game.pickedWords[possibleIndex]) {
        possibleIndex = Math.floor(Math.random() * 100);
      }
      game.pickedWords[possibleIndex] = possibleIndex;
      game.index = possibleIndex;
    },
    addDefinition: (playerInputAndIdObj, {game}) => {
      //store all the inputs as objects in the definition array in game state
      const {currentPlayerId, inputVal} = playerInputAndIdObj
      game.definitions[currentPlayerId] = inputVal 
      if(Object.keys(game.definitions).length > 3) {
        game.canShowDefinitions = true
      }
    },

    // showDefinitions: () => {
    //   //shows the definitions. WE MIGHT NOT NEED THIS.
    // },
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
