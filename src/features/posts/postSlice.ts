import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PostArrayModel, PostModel } from '../../models/postModels';

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
    },
    setPosts(state, action: PayloadAction<PostModel[]>) {
      state.all_posts = action.payload;
    },
  },
});

export const { deletePost } = postSlice.actions;

export default postSlice;
