import { rtkApi } from '../../store/rtkApi/rtkApi';
import { FilmsResponse } from './types';

interface Params {
  genre: number | null;
  page: number;
}

const filmsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<FilmsResponse, Params>({
      query: ({ page, genre }) => ({
        method: 'GET',
        url: '/discover/movie',
        params: {
          page: page,
          language: 'en-US',
          include_video: true,
          with_genres: genre,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetFilmsQuery = filmsApi.useGetFilmsQuery;
