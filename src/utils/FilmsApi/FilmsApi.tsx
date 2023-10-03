import { rtkApi } from '../../store/rtkApi/rtkApi';
import { type VideoI, type FilmsResponse } from './types';

interface filmsParams {
  genre?: number | null;
  page?: number;
}
interface searchParams {
  searchQuery: string;
  page?: number;
}
interface VideoResponse {
  id: number;
  results: VideoI[];
}
interface VideoParams {
  movieID: number | null;
}

const filmsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getFilms: build.query<FilmsResponse, filmsParams>({
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
    getFilmsByTitle: build.query<FilmsResponse, searchParams>({
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
    getFilmVideo: build.query<VideoResponse, VideoParams>({
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
