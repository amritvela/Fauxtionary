import { configureStore } from '@reduxjs/toolkit';
import gameStateSlice from '../src/features/gameStateSlice';

export const store = configureStore({
  reducer: {
    gameState: gameStateSlice,
  },
});
