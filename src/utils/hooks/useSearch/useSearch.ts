import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { selectSearchQuery } from '../../../store/selectors/filmsSelectors';
import { clearFilms, setFilmsReceived, setFirstPage, setSearchQuery } from '../../../store/slices/filmsSlice';
import { type IFilm } from '../../FilmsApi/interface';
import { useDebounce } from '../useDebounce/useDebounce';
import { useModals } from '../useModals/useModals';
import { type useSearchI } from './interface';
import { type ChangeEvent } from 'react';

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
