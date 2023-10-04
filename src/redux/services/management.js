import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const managementAPI = createApi({
  reducerPath: 'getManagement',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchManagement: build.query({
      query: () => ({
        url: `/management/`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchManagementQuery } = managementAPI;
