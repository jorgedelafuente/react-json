import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import type { PostArrayModel, PostModel } from '../../../models/postModels';
import { apiSlice } from '../../../services/apiSlice';

const initialPostState: PostArrayModel = {
  all_posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState: initialPostState,
  reducers: {
    deletePost: (state, action: PayloadAction<number>) => {
      state.all_posts = state.all_posts.filter(
        (post) => post.id !== action.payload
      );
      toast.success(`Post with Id ${action.payload} was deleted successfully.`);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        state.all_posts = payload;
      }
    );
  },
});

export const { deletePost } = postSlice.actions;

export default postSlice;
