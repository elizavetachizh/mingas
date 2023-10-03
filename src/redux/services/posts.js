import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const postsAPI = createApi({
  reducerPath: 'getPosts',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchPosts: build.query({
      query: () => ({
        url: `/posts`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const {
  useFetchPostsQuery,
  useFetchDepartmentByIdQuery,
  useFetchArrayDepartmentsByOrganizationQuery,
} = postsAPI;
