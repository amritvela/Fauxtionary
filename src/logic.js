const { Rune } = window;
/**
 * declared a const to define different stages of the game
 * which will then help us conditionally render views in different components
 */

const ROUND_STAGE_MAP = [
  'acceptingPlayers',
  'displayRole',
  'awaitingStart',
  'submitDefinition',
  'decisionMaking',
  'announcement',
  'announceWinner'
];

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
      continueGame: 0, 

      scores: {},
      currentRoundStage: 'acceptingPlayers',
      gameOver: false,
      judgeOrder: [], //Judge order prevents the same person from being the judge again - We follow this judge order with the rounds - And Reset this judge order once the game is over - I think Rune does the resetting of the state for us 
      currentJudge: '', // This the string that represents the currentPlayerId of the Judge
      judgeIndex: null, //Is a randomly assigned index between 0 and 3 
      pickedWords: {},
      definitions: {},
      canShowDefinitions: false,
      word: '',
      winner: '',
      currentRoundWinner: undefined,
      roundNum: 1
    };
  },

  actions: {
    assignRoles: (_, { game, allPlayerIds }) => {
      //This is the logic to make sure all players have entered and then when all players have entered then we create the random judge index. Once the game begins, this function will reassign increment the judget index which in turn will change judge.
      if (game.startGame < 4) {
        game.startGame++;
      }
      if (game.startGame === 4) {
        // if (!game.judgeIndex && game.judgeIndex !== 0) {
        if (game.judgeIndex === null) {
          const initialIndex = Math.floor(Math.random() * 3);
          game.judgeIndex = initialIndex;
        }

        //assigns the next judge index during the game.
        // else if (game.judgeIndex > 3) {
        else if (game.judgeIndex === 3) {
          game.judgeIndex = 0;
        } else {
          game.judgeIndex++;
        }
      }
      // console.log('judgeIndex in assignRoles', game.judgeIndex)

    },

    continueToNextScreen: (_, {game, allPlayerIds}) => {
      if(game.continueGame < 4) {
        game.continueGame++
      }
    },

    //This logic adds the order in which the judges will be picked throughout the game.
    assignJudgeArray: (currentPlayerID, { game, allPlayerIds }) => {
      /**
       * We only want to set up the initial judge order array
       * in round 1 when players haven't been added to it yet.
       * After the initial judge order array is setup, we do not need
       * to modify it again.
       */
      if (game.roundNum === 1) {
        game.judgeOrder = [...game.judgeOrder, currentPlayerID];
      }
      // console.log('judgeIndex in assignJudgeArray', game.judgeIndex)
      if (game.judgeIndex !== null) {
        game.currentJudge = game.judgeOrder[game.judgeIndex];
      }
    },

    //initial scores
    assignInitialScores: (currentPlayerID, { game, allPlayerIds }) => {
      // console.log(Object.values(allPlayerIds));
      for (let player in allPlayerIds) {
        if (!game.scores[allPlayerIds[player]]) {
          game.scores[allPlayerIds[player]] = 0;
        }
      }
    },

    //this function will add to the players score as the game progresses.
    incrementScore: (currentPlayerID, { game, allPlayerIds }) => {
      game.scores[currentPlayerID]++;

      //Once the jude picks a winning answer, This line updates the currently picked winner Id in Rune state
      game.currentRoundWinner = currentPlayerID
      game.currentRoundStage = ROUND_STAGE_MAP[5]

    },

    continueToNextRound: (_,{game}) => {
      const {scores } = game
      game.roundNum = game.roundNum + 1
      game.startGame = 0
      game.continueGame = 0
      game.definitions = {}
      game.canShowDefinitions = false
      
      for(let player in scores) {
        if(scores[player] >= 3) {
          game.winner = player
        }
      }
      if(game.winner !== '') {
        game.gameOver = true
        game.currentRoundStage = ROUND_STAGE_MAP[6]
      } else {
        game.currentRoundStage = ROUND_STAGE_MAP[0]
      }
    },
    
    //This function generates a random index that corresponds to our random word array. It checks to see if the index has already been generated, if not, it submits the new word, if it has then it regerates index.
    
     determineRoundStage: (_, { game }) => {
      switch (game.currentRoundStage) {
        case 'acceptingPlayers': {
          if (game.startGame === 4) {
            game.currentRoundStage = ROUND_STAGE_MAP[1];
          }
          break;
        }
        case 'displayRole':{
          if(game.continueGame === 4) {
          game.currentRoundStage = ROUND_STAGE_MAP[2]
          }
          break
        }
        case 'awaitingStart': {
            game.currentRoundStage = ROUND_STAGE_MAP[3];
          break;
        }
        case 'submitDefinition': {
          if (game.canShowDefinitions)
            game.currentRoundStage = ROUND_STAGE_MAP[4];
          break;
        }
        case 'decisionMaking': {
          break;
        }
        case 'announcement': {
          break;
        }
        case 'announceWinner':{
          break;
        }
        default: {
          game.currentRoundStage = ROUND_STAGE_MAP[0];
        }
      }
    },
    
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
