import { type IFilm } from '@constants/types/interfaces';

export interface UseFilmsI {
  page: number;
  filmLimitPerPage: number;
  films: IFilm[];
  genre: number | null;
}
