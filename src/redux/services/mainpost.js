import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const mainPostsAPI = createApi({
  reducerPath: 'getMainPosts',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchMainPostsByType: build.query({
      query: () => ({
        url: `/mainposts/type`,
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
export const { useFetchMainPostByIdQuery, useFetchMainPostsByTypeQuery } = mainPostsAPI;
