import {
  type IFilmsResponse,
  type IFilmsParams,
  type ISearchParams,
  type IVideoResponse,
  type IVideoParams,
} from '@constants/types/interfaces';
import { rtkApi } from '@store/rtkApi/rtkApi';

const filmsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<IFilmsResponse, IFilmsParams>({
      query: ({ page, genre }) => ({
        method: 'GET',
        url: '/discover/movie',
        params: {
          page,
          language: 'en-US',
          include_video: true,
          with_genres: genre,
        },
      }),
    }),
    getFilmsByTitle: build.query<IFilmsResponse, ISearchParams>({
      query: ({ searchQuery, page = 1 }) => ({
        method: 'GET',
        url: '/search/movie',
        params: {
          page,
          language: 'en-US',
          include_video: true,
          query: searchQuery,
        },
      }),
    }),
    getFilmVideo: build.query<IVideoResponse, IVideoParams>({
      query: ({ movieID }) => ({
        method: 'GET',
        url: `/movie/${movieID}/videos`,
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetFilmsQuery = filmsApi.useGetFilmsQuery;
export const useGetFilmsByTitleQuery = filmsApi.useGetFilmsByTitleQuery;
export const useGetFilmVideoQuery = filmsApi.useGetFilmVideoQuery;
