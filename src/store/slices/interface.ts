import { type FilmI } from '../../utils/FilmsApi/types';

export interface FilmsIState {
  filmsPerPage: number;
  page: number;
  filmsReceived: FilmI[];
  genre: number | null;
  searchQuery: string;
  movieID: number | null;
}
