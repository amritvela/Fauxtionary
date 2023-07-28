import {
  switchDay,
  clearPlayers,
  incrementPlayer,
  switchGameOverFalse,
} from './features/gameStateSlice';
const Rune = require('rune-games-sdk');

Rune.initLogic({
  minPlayers: 4,
  maxPlayers: 4,
  setup: () => {
    return {
      // Allow either player to start
      currentPlayers: [],
      startGame: true,
      gameOver: false,
      vote: Array(4).fill(null),
    };
  },
  actions: {
    startGame: ({ day }, { game, playerId }) => {
      //game logic for day
      //game logic for night
      //   // Check it's not the other player's turn and unmarked cell
      //   if (game.lastPlayerTurn !== playerId || game.cells[cellId]) {
      //     throw Rune.invalidAction();
      //   }
      //   // Update cell and switch turn
      //   game.cells[cellId] = playerId;
      //   game.lastPlayerTurn = playerId;
      // Determine if game has ended
      //   const winner = isVictoryOrDraw(game);
      //   if (winner !== undefined) {
      //     Rune.gameOver();
      //   }
    },
    events: (playerId, { game }) => {
      //
    },
  },
});
