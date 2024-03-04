import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const servicesAPI = createApi({
  reducerPath: 'getServices',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchServices: build.query({
      query: () => ({
        url: `/services`,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    fetchServicesById: build.query({
      query: (id) => ({
        url: `/services/${id === undefined ? '' : `${id}`}`,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchServicesQuery, useFetchServicesByIdQuery } = servicesAPI;
