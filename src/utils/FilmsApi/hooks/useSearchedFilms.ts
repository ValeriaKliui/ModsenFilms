import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { useGetFilmsByTitleQuery } from '../FilmsApi';
import { type FilmI } from '../types';
import { selectPage, selectShowingFilms, setSearchedFilms } from '../../../store/slices/ShowingFilmsSlice';

interface hookReturned {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  searchedFilms: FilmI[];
  searchedFilmsAmount: number | undefined;
  isSuccess: boolean;
  showingFilmsSearched: FilmI[];
  page: number;
}
interface hookProps {
  searchQuery: string;
}

export const useSearchedFilms = ({ searchQuery }: hookProps): hookReturned => {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const { isLoading, data, isFetching, isError, isSuccess } = useGetFilmsByTitleQuery(
    { searchQuery, page },
    { skip: searchQuery.length < 4 },
  );
  const searchedFilms: FilmI[] = data?.results ?? [];
  const searchedFilmsAmount = data?.total_results ?? undefined;
  const showingFilmsSearched = useAppSelector(selectShowingFilms);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setSearchedFilms(searchedFilms));
    }
  }, [isLoading]);

  return { searchedFilms, page, showingFilmsSearched, isSuccess, isLoading, isFetching, isError, searchedFilmsAmount };
};
