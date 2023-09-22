import { rtkApi } from '../../store/rtkApi/rtkApi';

const filmsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query({
      query: (page: number) => ({
        method: 'GET',
        url: '/discover/movie',
        params: {
          page: page,
          language: 'en-US',
          include_video: true,
        },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWE4ZDhkODE5ZmZkMGQyYjQ5Y2VjMzFiZDNmOTdlZCIsInN1YiI6IjY1MGQ0MmM2ZjkyNTMyMDBjOTRhM2Y5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7LA5lTIaIErCDA1dko8s8akXGco6zojahF-tsWPa9GA',
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetFilms = filmsApi.useGetFilmsQuery;
