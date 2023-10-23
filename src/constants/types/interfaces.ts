import { type ReactNode } from 'react';

import { type GenresType } from './genres';

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
  onClick: () => void;
  genre: GenresType;
}
export interface IModalProps {
  children: ReactNode;
}
export interface ISearchedFilmProps {
  film: IFilm;
}
export interface ISpinnerProps {
  size: number;
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
