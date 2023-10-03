import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { selectSearchQuery } from '../../../store/selectors/filmsSelectors';
import { clearFilms, setFilmsReceived, setSearchQuery } from '../../../store/slices/filmsSlice';
import { type FilmI } from '../../FilmsApi/types';
import { useDebounce } from '../useDebounce';
import { type useSearchI } from './interface';
import { type ChangeEvent } from 'react';

export const useSearch = (): useSearchI => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const debouncedValue = useDebounce(searchQuery);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchQuery(event.target.value));
  };
  const onClick = (films: FilmI[]): void => {
    dispatch(clearFilms());
    dispatch(setFilmsReceived(films));
  };

  return { searchQuery, onChange, debouncedValue, onClick };
};
