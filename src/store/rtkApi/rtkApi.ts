import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_TMDB_BASE_URL,
    prepareHeaders: headers => {
      headers.set('accept', 'application/json');
      headers.set('Authorization', process.env.REACT_APP_TMDB_KEY ?? '');
    },
  }),
  endpoints: builder => ({}),
});
