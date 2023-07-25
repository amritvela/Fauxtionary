import { createSlice } from '@reduxjs/toolkit';

export const gameStateSlice = createSlice({
  name: 'active players',
  initialState: {
    currentPlayers: [],
    day: true,
    startGame: true,
    gameOver: false,
  },
  reducers: {
    clearPlayers: (state) => {
      state.currentPlayers = [];
    },
    incrementPlayer: (state, action) => {
      state.currentPlayers.push(action.payload);
    },
    deactivePlayer: (state, action) => {
      state.currentPlayers[action.payload].active = false;
    },
    switchDay: (state) => {
      state.day = !state.day;
    },
    switchStartGame: (state) => {
      state.gameOver = false;
    },
    switchGameOverTrue: (state) => {
      state.gameOver = true;
    },
    switchGameOverFalse: (state) => {
      state.gameOver = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  clearPlayers,
  incrementPlayer,
  switchStartGame,
  deactivePlayer,
  switchDay,
  switchGameOverFalse,
  switchGameOverTrue,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
