import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/state/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
