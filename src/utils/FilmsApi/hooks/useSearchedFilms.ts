import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { useGetFilmsByTitleQuery } from '../FilmsApi';
import { type FilmType } from '../types';
import { setSearchedGilms } from '../../../store/slices/ShowingFilmsSlice';

interface hookReturned {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  searchedFilms: FilmType[];
  searchedFilmsAmount: number | undefined;
}
interface hookProps {
  searchQuery: string;
}

export const useSearchedFilms = ({ searchQuery }: hookProps): hookReturned => {
  const dispatch = useAppDispatch();
  const { isLoading, data, isFetching, isError } = useGetFilmsByTitleQuery(
    { searchQuery },
    { skip: searchQuery.length < 4 },
  );
  const searchedFilms: FilmType[] = (data && data.results) || [];
  const searchedFilmsAmount = (data && data.total_results) || undefined;

  useEffect(() => {
    if (!isLoading) {
      dispatch(setSearchedGilms(searchedFilms));
    }
  }, [isLoading]);

  return { searchedFilms, isLoading, isFetching, isError, searchedFilmsAmount };
};
