// Rune.initLogic({
//   minPlayers: 2,
//   maxPlayers: 2,
//   setup: () => {
//     return {
//       cells: Array(9).fill(null),
//       // Allow either player to start
//       lastPlayerTurn: undefined,
//     };
//   },
//   actions: {
//     markCell: ({ cellId }, { game, playerId }) => {
//       // Check it's not the other player's turn and unmarked cell
//       if (game.lastPlayerTurn !== playerId || game.cells[cellId]) {
//         throw Rune.invalidAction();
//       }

//       // Update cell and switch turn
//       game.cells[cellId] = playerId;
//       game.lastPlayerTurn = playerId;

//       // Determine if game has ended
//       const winner = isVictoryOrDraw(game);
//       if (winner !== undefined) {
//         Rune.gameOver();
//       }
//     },
//   },
// });
