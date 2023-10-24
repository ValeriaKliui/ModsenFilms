import type { IFilm } from '@constants/types/interfaces';
import type { RootState } from '@store/index';

export const selectPage = (state: RootState): number => state.films.page;
export const selectGenre = (state: RootState): number | null => state.films.genre;
export const selectFilms = (state: RootState): IFilm[] => state.films.films;
export const selectFilmsPerPage = (state: RootState): number => state.films.filmsPerPage;
export const selectMovieID = (state: RootState): number | null => state.films.movieID;
export const selectSearchQuery = (state: RootState): string => state.films.searchQuery;
export const selectSearchTitle = (state: RootState): string => state.films.searchTitle;
