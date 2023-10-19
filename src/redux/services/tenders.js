import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const tendersAPI = createApi({
  reducerPath: 'getTenders',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchTenders: build.query({
      query: () => ({
        url: `/tenders`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchTendersQuery } = tendersAPI;
