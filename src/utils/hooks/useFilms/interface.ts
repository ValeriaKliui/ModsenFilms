import { type IFilm } from '../../FilmsApi/interface';

export interface UseFilmsI {
  page: number;
  filmLimitPerPage: number;
  filmsReceived: IFilm[];
  genre: number | null;
}
