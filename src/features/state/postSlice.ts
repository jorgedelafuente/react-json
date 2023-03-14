import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import type { PostArrayModel, PostModel } from '../../models/postModels';
import apiService from '../../service/Api';
interface PostState extends PostArrayModel {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialPostState: PostState = {
  all_posts: [],
  loading: 'idle',
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await apiService().get('posts');
  return response.data;
});

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
    setPosts(state, action: PayloadAction<PostModel[]>) {
      state.all_posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.all_posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = 'failed';
    });
  },
});

export const { deletePost } = postSlice.actions;

export default postSlice;
