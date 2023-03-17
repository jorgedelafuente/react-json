import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import type { PostModel } from '../models/postModels';
import type { UserModel } from '../models/userModels';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<PostModel[], void>({
      query: () => '/posts',
    }),
    getUsers: builder.query<UserModel[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetPostsQuery, useGetUsersQuery } = apiSlice;
