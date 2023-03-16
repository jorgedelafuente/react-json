import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import type { PostModel } from '../models/postModels';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    // ? Query: Get All Products
    getProducts: builder.query<PostModel[], void>({
      query() {
        return 'products';
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Products' as const,
                id,
              })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
      // ? Transform the result to prevent nested data
      transformResponse: (response: { data: { products: PostModel[] } }) =>
        response.data.products,
    }),

    // ? Mutation: Delete product
    deleteProduct: builder.mutation<null, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: 'DELETE',
          credentials: 'include',
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
});

export const { useDeleteProductMutation, useGetProductsQuery, usePrefetch } =
  postApi;
