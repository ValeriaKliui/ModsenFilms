import { rtkApi } from '../../store/rtkApi/rtkApi';
import { FilmsResponse } from './types';

interface filmsParams {
  genre: number | null;
  page: number;
}
interface searchParams {
  searchQuery: string;
  page?: number;
}

const filmsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<FilmsResponse, filmsParams>({
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
    getFilmsByTitle: build.query<FilmsResponse, searchParams>({
      query: ({ searchQuery, page = 1 }) => ({
        method: 'GET',
        url: '/search/movie',
        params: {
          page: page,
          language: 'en-US',
          include_video: true,
          query: searchQuery,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetFilmsQuery = filmsApi.useGetFilmsQuery;
export const useGetFilmsByTitleQuery = filmsApi.useGetFilmsByTitleQuery;
