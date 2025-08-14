import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';

export const ecoBoxContentAPI = createApi({
  reducerPath: 'getEcoBoxContent',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchEcoBoxContent: build.query({
      query: ({ theme }) => ({
        url: `/ecobox-content${theme === '' || theme === null ? '' : `?theme=${theme}`}`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchEcoBoxContentQuery } = ecoBoxContentAPI;
