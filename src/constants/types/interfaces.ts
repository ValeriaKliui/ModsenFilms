import { type IFilm } from '../../utils/FilmsApi/interface';
import { type GenresType } from '../filmsConstants';
import { type ReactNode } from 'react';

export interface IButtonProps {
  text: string;
  onClick?: () => void;
}
export interface IErrorProps {
  text?: string;
}
export interface IFilmProps {
  film: IFilm;
  isFetching?: boolean;
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
