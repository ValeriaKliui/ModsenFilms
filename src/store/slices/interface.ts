import { type IFilm } from '@constants/types/interfaces';
import { type DefaultTheme } from 'styled-components/dist/types';

export interface FilmsIState {
  filmsPerPage: number;
  page: number;
  films: IFilm[];
  genre: number | null;
  searchQuery: string;
  searchTitle: string;
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
