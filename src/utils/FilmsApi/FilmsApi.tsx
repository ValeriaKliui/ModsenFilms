import { rtkApi } from '../../store/rtkApi/rtkApi';
import { FilmType, FilmsResponse } from './types';

interface Params {
  genre: string | null;
  page: number;
}

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
      }),
    }),
    fetchByGenre: build.query<FilmsResponse, Params>({
      query: ({ genre, page }) => ({
        method: 'GET',
        url: '/discover/movie',
        params: {
          page,
          with_genres: genre,
          include_video: true,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetFilmsQuery = filmsApi.useGetFilmsQuery;
export const useFetchByGenre = filmsApi.useFetchByGenreQuery;
