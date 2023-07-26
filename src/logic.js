import {
  switchDay,
  clearPlayers,
  incrementPlayer,
  switchGameOverFalse,
} from './features/gameStateSlice';

Rune.initLogic({
  minPlayers: 7,
  maxPlayers: 7,
  setup: () => {
    return {
      // Allow either player to start
      currentPlayers: [],
      day: true,
      startGame: true,
      activePlayers: 0,
      gameOver: false,

      //key players still in the game
      doctor: true,
      scientist: true,
      busybody: true,
      //in each round who was voted to be eliminated, who was voted to be saved

      //who was voted as the scientists
      vote: Array(7).fill(null),
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
