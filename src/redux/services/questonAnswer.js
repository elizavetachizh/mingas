import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../backend';
export const questionAnswerAPI = createApi({
    reducerPath: 'getQuestionAnswer',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
    endpoints: (build) => ({
        fetchQuestionAnswer: build.query({
            query: ({ key, title }) => ({
                url: `/themes/${key === '' || key === undefined ? '' : `search/${key}`}${
                    title === '' || title === undefined ? '' : `?title=${title}`
                }`,
                headers: {
                    Authorization: 'Bearer ',
                    'Content-type': 'application/json',
                },
            }),
        }),
        fetchQuestionAnswerById: build.query({
            query: (id) => ({
                url: `/themes/${id}`,
                headers: {
                    Authorization: 'Bearer ',
                    'Content-type': 'application/json',
                },
            }),
        }),
    }),
});
export const { useFetchQuestionAnswerQuery, useFetchQuestionAnswerByIdQuery } = questionAnswerAPI;
