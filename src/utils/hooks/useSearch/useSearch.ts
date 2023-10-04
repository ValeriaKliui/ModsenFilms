import { type IFilm } from '@constants/types/interfaces';
import { selectSearchQuery } from '@store/selectors/filmsSelectors';
import { clearFilms, setFilmsReceived, setFirstPage, setSearchQuery } from '@store/slices/filmsSlice';
import { type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useDebounce } from '@hooks/useDebounce/useDebounce';
import { useModals } from '@hooks/useModals/useModals';
import { type useSearchI } from './interface';

export const useSearch = (): useSearchI => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const debouncedValue = useDebounce(searchQuery);
  const { openSearch, closeSearch } = useModals();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    openSearch();
    dispatch(setFirstPage());
    dispatch(setSearchQuery(event.target.value));
  };

  const onClick = (films: IFilm[]): void => {
    closeSearch();
    dispatch(clearFilms());
    dispatch(setFilmsReceived(films));
  };

  return { searchQuery, onChange, debouncedValue, onClick };
};
