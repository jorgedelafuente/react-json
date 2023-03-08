import { createSlice } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { PostArrayModel, PostModel } from '../../models/postModels';
import getPosts from '../../service/getPosts';

const initialPostState: PostArrayModel = {
  all_posts: [],
  particular_post: {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  },
};

export const postSlice = createSlice({
  name: 'post',
  initialState: initialPostState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1;
    },
    decrement: (state) => {
      // state.value -= 1;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      // state.value += action.payload;
    },
    setPosts(state, action: PayloadAction<PostModel[]>) {
      state.all_posts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deletePost } = postSlice.actions;

// export const selectPost = (state: RootState) => state.posts;

export default postSlice;
