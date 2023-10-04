import { type RootState } from '..';
import { type IFilm } from '../../utils/FilmsApi/interface';

export const selectPage = (state: RootState): number => state.films.page;
export const selectFilmLimit = (state: RootState): number => state.films.filmsPerPage;
export const selectFilmsReceived = (state: RootState): IFilm[] => state.films.filmsReceived;
export const selectGenre = (state: RootState): number | null => state.films.genre;
export const selectSearchQuery = (state: RootState): string => state.films.searchQuery;
export const selectMovieID = (state: RootState): number | null => state.films.movieID;
