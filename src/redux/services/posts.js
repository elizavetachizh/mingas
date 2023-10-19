import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const postsAPI = createApi({
  reducerPath: 'getPosts',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchPosts: build.query({
      query: ({ page }) => ({
        url: `/posts${page === null || page === undefined ? '' : `?page=${page}&limit=5`}`,
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
