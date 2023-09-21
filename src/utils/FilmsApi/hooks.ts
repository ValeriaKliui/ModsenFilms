import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
  addShowingFilms,
  increasePage,
  selectPage,
  selectShowingFilms,
  selectStep,
} from '../../store/slices/ShowingFilms';
import { useGetFilms } from './FilmsApi';
import { FilmType } from './types';
import { FILM_LOADING_AMOUNT } from '../../constants/constants';

type hookProps = {
  films: FilmType[];
  isLoading: boolean;
  showingFilms: FilmType[];
  showMoreFilms: () => void;
};

export const useShowingFilms = (): hookProps => {
  const page = useAppSelector(selectPage);
  const step = useAppSelector(selectStep);
  const dispatch = useAppDispatch();
  const { isLoading, data } = useGetFilms(page);
  //   const films = data && data.results;
  const films = data && data;
  const showingFilms = useAppSelector(selectShowingFilms);

  useEffect(() => {
    if (films && films.length) dispatch(addShowingFilms(films));
  }, [isLoading]);

  useEffect(() => {
    if (films && (step + 2) * FILM_LOADING_AMOUNT > films.length) dispatch(increasePage());
  }, [step]);

  const showMoreFilms = () => {
    dispatch(addShowingFilms(films));
  };

  return { films, isLoading, showingFilms, showMoreFilms };
};
