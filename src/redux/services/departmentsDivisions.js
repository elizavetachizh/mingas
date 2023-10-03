import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const divisionsAPI = createApi({
  reducerPath: 'getDivisions',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchDepartments: build.query({
      query: ({ key, nameMen, name }) => ({
        url: `/departament/${key === '' || key === undefined ? '' : `search/${key}`}${
          nameMen === '' ? '' : `?nameMen=${nameMen}`
        }${name === '' || name === null ? '' : `?name=${name}`}`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
    fetchDivisionsById: build.query({
      query: (id) => ({
        url: `/departament/${id}`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchDepartmentsQuery, useFetchDivisionsByIdQuery } = divisionsAPI;
