import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_ENDPOINT } from '../services/consts';

export const usersAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (pageNumber) => `${API_ENDPOINT}?page=${pageNumber}&limit=3`,
      providesTags: ['Users'],
    }),

    updateUserByID: builder.mutation({
      query: ({ id, body }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: 'PUT',
        body: { followers: body },
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserByIDMutation } = usersAPI;
