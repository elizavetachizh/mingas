import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const documentsEDIAPI = createApi({
    reducerPath: 'getDocuments',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
    endpoints: (build) => ({
        fetchDocuments: build.query({
            query: () => ({
                url: `/documents_edi`,
                headers: {
                    Authorization: 'Bearer ',
                    'Content-type': 'application/json',
                },
            }),
        }),
    }),
});
export const { useFetchDocumentsQuery } = documentsEDIAPI;
