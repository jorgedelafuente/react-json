import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import userReducer from './userSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      posts: postReducer.reducer,
      users: userReducer.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
