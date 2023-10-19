import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const mainCorruptionAPI = createApi({
  reducerPath: 'getCorruption',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchCorruption: build.query({
      query: () => ({
        url: `/corruption`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchCorruptionQuery } = mainCorruptionAPI;
