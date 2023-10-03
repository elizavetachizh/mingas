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
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
    // fetchDepartmentById: build.query({
    //     query: (id) => ({
    //         url: `/${typeBookDepartment}/${id === undefined ? "" : `${id}`}`,
    //         headers: {
    //             Authorization: "Bearer " + token,
    //             "Content-type": "application/json",
    //         },
    //     }),
    // }),
  }),
});
export const {
  useFetchServicesQuery,
  useFetchDepartmentByIdQuery,
  useFetchArrayDepartmentsByOrganizationQuery,
} = servicesAPI;
