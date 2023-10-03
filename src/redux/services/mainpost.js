import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const mainPostsAPI = createApi({
  reducerPath: 'getMainPosts',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchMainPosts: build.query({
      query: () => ({
        url: `/mainposts`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
    fetchMainPostById: build.query({
      query: (id) => ({
        url: `/mainposts/${id === undefined ? '' : `${id}`}`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const {
  useFetchMainPostsQuery,
  useFetchMainPostByIdQuery,
} = mainPostsAPI;
