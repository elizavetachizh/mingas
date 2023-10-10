import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const ogonekAPI = createApi({
  reducerPath: 'getOgonek',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchOgonek: build.query({
      query: ({ typeBranch }) => ({
        url: `/ogonek${typeBranch ? `?typeBranch=${typeBranch}` : ''}`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchOgonekQuery } = ogonekAPI;
