import { type IFilm } from '@constants/types/interfaces';

export interface UseFilmsI {
  page: number;
  filmLimitPerPage: number;
  filmsReceived: IFilm[];
  genre: number | null;
}
