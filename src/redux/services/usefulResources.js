import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const usefulResourcesAPI = createApi({
  reducerPath: 'getUsefulResources',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (build) => ({
    fetchUsefulResourcesById: build.query({
      query: (id) => ({
        url: `/useful_resources/${id === undefined ? '' : `${id}`}`,
        headers: {
          Authorization: 'Bearer ',
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useFetchUsefulResourcesByIdQuery } = usefulResourcesAPI;
