// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://65.108.148.136:8072' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/Product/get-products',
        method: 'GET',
        params: {
          pageNumber: 1,
          pageSize: 10,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = api;
