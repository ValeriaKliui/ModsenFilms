import type { ChangeEvent, ReactNode } from 'react';
import { type DefaultTheme } from 'styled-components/dist/types';

import { type GenresType } from './genres';

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    font: string;
    fontActive: string;
    bgActive: string;
    border: string;
    videoBg: string;
    shadow: string;
    lightest: string;
    copyright: string;
  };
  fontSizes: {
    medium: string;
    large: string;
  };
  fontWeight: {
    semibold: number;
    bold: number;
  };
  gaps: {
    gap4: string;
    gap8: string;
    gap16: string;
    gap32: string;
  };
  zIndexes: {
    burger: number;
    menu: number;
    search: number;
    modalOpened: number;
    modalClosed: number;
  };
}
export interface IButtonProps {
  text: string;
  onClick?: () => void;
  isHidden?: boolean;
}
export interface IErrorProps {
  text?: string;
}
export interface IFilmProps {
  film: IFilm;
}
export interface IGenreProps {
  genre: GenresType;
}
export interface IModalProps {
  children: ReactNode;
}
export interface ISearchedFilmProps {
  film: IFilm;
}

export interface IFilm {
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  id: number;
  overview?: string;
}
export interface IFilmsResponse {
  results: IFilm[];
  total_results: number;
}
export interface IFilmsParams {
  genre: number | null;
  page: number;
}
export interface IVideo {
  id: number;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  size: number;
  type: string;
}
export interface ISearchParams {
  searchQuery: string;
  page: number;
}
export interface IVideoResponse {
  id: number;
  results: IVideo[];
}
export interface IVideoParams {
  movieID: number | null;
}
export interface DarkThemeProviderProps {
  children?: ReactNode;
}
export interface IUseVideoResponse {
  src: string;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
}
export interface IUseCatalogProps {
  genre: number | null;
}

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
export interface IErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
}
export interface IErrorBoundaryState {
  hasError: boolean;
  errorInfo: string;
}
export interface useModalI {
  openModal: () => void;
  closeModal: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMenu: () => void;
  isModalOpened: boolean;
  isSearchOpened: boolean;
  isMenuOpened: boolean;
}
export interface useSearchI {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  searchTitle: string;
  onClick: () => void;
}
