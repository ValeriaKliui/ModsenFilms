import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
  displayMoreFilms,
  increasePage,
  selectPage,
  selectShowingFilms,
  setMoviesInitial,
} from '../../store/slices/ShowingFilms';
import { useGetFilms } from './FilmsApi';
import { type FilmType } from './types';

interface hookProps {
  films: FilmType[];
  isLoading: boolean;
  showingFilms: FilmType[];
  showMoreFilms: () => void;
}

export const useShowingFilms = (): hookProps => {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const { isLoading, data } = useGetFilms(page);
  const films = data && data.results;
  const showingFilms = useAppSelector(selectShowingFilms);
  const showMoreFilms = () => {
    dispatch(increasePage());
    dispatch(displayMoreFilms(films));
  };

  useEffect(() => {
    if (films?.length) {
      dispatch(setMoviesInitial(films));
      dispatch(increasePage());
    }
  }, [isLoading]);

  return { films, isLoading, showingFilms, showMoreFilms };
};
