import { useAppDispatch, useAppSelector } from './hooks';
import { fetchPosts } from './postSlice';
import { fetchUsers } from './userSlice';
import { RootState, AppDispatch } from './store';

export {
  useAppDispatch,
  useAppSelector,
  fetchPosts,
  fetchUsers,
  type RootState,
  type AppDispatch,
};
