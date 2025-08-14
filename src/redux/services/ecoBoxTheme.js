import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const ecoBoxThemeAPI = createApi({
  reducerPath: 'getEcoBoxTheme',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchEcoBoxTheme: build.query({
      query: () => ({
        url: `/ecobox-themes`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchEcoBoxThemeQuery } = ecoBoxThemeAPI;
