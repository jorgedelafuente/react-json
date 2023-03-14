import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { UserArrayModel } from '../models/userModels';
import apiService from '../services';

interface UserState extends UserArrayModel {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const UnitialuserState: UserState = {
  all_users: [],
  loading: 'idle',
};

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
  const response = await apiService().get('users');
  return response.data;
});

export const userSlice = createSlice({
  name: 'users',
  initialState: UnitialuserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.all_users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = 'failed';
    });
  },
});

export default userSlice;
