import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import {
  chooseGenre,
  displayMoreFilms,
  increasePage,
  selectNewFilms,
  selectPage,
  selectShowingFilms,
  setFilms,
  setMoviesInitial,
  setNewFilms,
} from '../../../store/slices/ShowingFilms';
import { useGetFilmsQuery } from '../FilmsApi';
import { type FilmType } from '../types';

interface hookProps {
  films: FilmType[];
  isLoading: boolean;
  isFetching: boolean;
  showingFilms: FilmType[];
  showMoreFilms: () => void;
}

export const useShowingFilms = (): hookProps => {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const { isLoading, data, isFetching } = useGetFilmsQuery(page);
  const films = data && data.results;
  const showingFilms = useAppSelector(selectShowingFilms);

  const showMoreFilms = () => {
    dispatch(increasePage());
    const films = data.results;
    console.log(films[0].title);
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(setFilms(films));
    }
  }, [isLoading]);

  return { showingFilms, isLoading, showMoreFilms, isFetching, films };
};
