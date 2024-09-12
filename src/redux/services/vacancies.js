import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const vacanciesAPI = createApi({
  reducerPath: 'getTenders',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchVacancies: build.query({
      query: () => ({
        url: `/vacancies`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchVacanciesQuery } = vacanciesAPI;
