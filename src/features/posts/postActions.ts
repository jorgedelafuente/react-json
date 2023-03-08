import postSlice from './postSlice';
import type { PostModel } from '../../models/postModels';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import getPosts from '../../service/getPosts';

export const postActions = postSlice.actions;

export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().posts.all_posts.length === 0) {
      const response: PostModel[] = await getPosts();
      dispatch(postActions.setPosts(response));
    }
  };
};
