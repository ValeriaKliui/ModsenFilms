import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWE4ZDhkODE5ZmZkMGQyYjQ5Y2VjMzFiZDNmOTdlZCIsInN1YiI6IjY1MGQ0MmM2ZjkyNTMyMDBjOTRhM2Y5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7LA5lTIaIErCDA1dko8s8akXGco6zojahF-tsWPa9GA`,
      );
    },
  }),
  endpoints: (builder) => ({}),
});
