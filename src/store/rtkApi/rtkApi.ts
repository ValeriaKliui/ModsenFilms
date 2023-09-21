import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb-top-100-movies.p.rapidapi.com/' }),
  endpoints: (builder) => ({}),
});
