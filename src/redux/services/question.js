
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const questionAPI = createApi({
    reducerPath: 'getQuestion',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
    endpoints: (build) => ({
        fetchQuestion: build.query({
            query: ({ key, title }) => ({
                url: `/questions/${key === '' || key === undefined ? '' : `search/${key}`}${
                    title === '' || title === undefined ? '' : `?title=${title}`
                }`,
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
export const { useFetchQuestionAnswerQuery, useFetchDivisionsByIdQuery } = questionAPI;
