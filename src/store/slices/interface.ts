import { type DefaultTheme } from 'styled-components/dist/types';
import { type IFilm } from '@constants/types/interfaces';

export interface FilmsIState {
  filmsPerPage: number;
  page: number;
  filmsReceived: IFilm[];
  genre: number | null;
  searchQuery: string;
  movieID: number | null;
}

export interface ThemeState {
  theme: DefaultTheme;
}
export interface ModalsState {
  isSearchOpened: boolean;
  isModalOpened: boolean;
  isMenuOpened: boolean;
}
