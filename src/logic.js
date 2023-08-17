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
      startGame: 0,
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
      // console.log(game);
      // console.log(game.allPlayerIds);

      //This is the logic to make sure all players have entered and then when all players have entered then we create the randome judge index.
      if (game.startGame < 3) {
        game.startGame++;
      } else {
        if (!game.judgeIndex) {
          const initialIndex = Math.floor(Math.random() * 3);
          game.judgeIndex = initialIndex;

          // game.judgeOrder = Object.values(allPlayerIds);
          // console.log('gaame ORDER', game.judgeOrder);
        }

        //assigns the next judge index during the game.
        if (game.judgeIndex > 3) {
          game.judgeIndex = 0;
        } else {
          game.judgeIndex++;
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
      if (Object.keys(game.definitions).length > 3) {
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
