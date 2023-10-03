import { type FilmI } from '../../FilmsApi/types';

export interface UseFilmsI {
  page: number;
  filmLimitPerPage: number;
  filmsReceived: FilmI[];
  genre: number | null;
}
