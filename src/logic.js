const Rune = require('rune-games-sdk');

Rune.initLogic({
  minPlayers: 4,
  maxPlayers: 4,
  setup: () => {
    return {
      currentPlayers: [],
      startGame: true,
      gameOver: false,
      judge: undefined,
      pickedWords: new Set(),
      definitions: [],
      word: '',
      winner: '',
    };
  },
  actions: {
    startGame: () => {
      //assign the players to the player array with the score of 0
      //assign judge to index 0
    },
    incrementScore: () => {
      //adds scores to the winner
      //check to see if anybody has reached 3, if so game ends
    },
    switchJudge: () => {
      //if its undefined randomly pick a number from 0-3
      //increment the judge if its 3 then set to 0
    },
    generateWord: () => {
      //Math.trunc(math.random) from 0-100
      //check to see if pickedWord set has that number. If it does pick another number again
      //if not then put it into the set and spit out the word and add it to the word variable
    },
    storeDefinitions: () => {
      //store all the inputs as objects in the definition array in game state
    },
    showDefinitions: () => {
      //shows the definitions. WE MIGHT NOT NEED THIS.
    },
  },
  events: {
    playerJoined: (playerId, { game }) => {
      game.currentPlayers.push({ playerId, score: 0 });
    },
  },
});
