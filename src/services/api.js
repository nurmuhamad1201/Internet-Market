import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosRequest } from '../utils/axiosRequest';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosRequest({
        url: baseUrl + (url.startsWith('/') ? url : `/${url}`), 
        method,
        data: method !== 'GET' ? data : undefined,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: 'Product/get-products',
        method: 'GET',
        params: {
          pageNumber: 1,
          pageSize: 10,
        },
      }),
    }),
    getCartProducts: builder.query({
      query: () => ({
        url: 'Cart/get-products-from-cart',
        method: 'GET',
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: 'Category/get-categories',
        method: 'GET',
      }),
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `Category/get-category-by-id`,
        method: 'GET',
        params: { id }, // Ensure id parameter is correctly passed
      }),
    }),
    getBrands: builder.query({
      query: () => ({
        url: 'Brand/get-brands',
        method: 'GET',
      }),
    }),
    getProfile: builder.query({
      query: (id) => ({
        url: `UserProfile/get-user-profile-by-id?id=${id}`,
        method: 'GET',
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ formData, accessToken }) => ({
        url: 'UserProfile/update-user-profile',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData
      }),
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: 'Cart/clear-cart',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCartProductsQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetBrandsQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useClearCartMutation, 
} = api;
