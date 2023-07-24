import { createSlice } from '@reduxjs/toolkit';

export const gameStateSlice = createSlice({
  name: 'active players',
  initialState: {
    currentPlayers: [],
    day: true,
    gameOver: true,
  },
  reducers: {
    incrementPlayer: (state, action) => {
      state.currentPlayers.push(action.payload);
    },
    deactivePlayer: (state, action) => {
      state.currentPlayers[action.payload].active = false;
    },
    switchDay: (state) => {
      state.day = !state.day;
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
  incrementPlayer,
  deactivePlayer,
  switchDay,
  switchGameOverFalse,
  switchGameOverTrue,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
