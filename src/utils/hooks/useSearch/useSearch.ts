import { clearFilms, setFirstPage, setGenre, setSearchQuery, setSearchTitle } from '@store/slices/filmsSlice';
import { type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useDebounce } from '@hooks/useDebounce/useDebounce';
import { useModals } from '@hooks/useModals/useModals';
import { type useSearchI } from './interface';

export const useSearch = (): useSearchI => {
  const dispatch = useAppDispatch();
  const { searchQuery, searchTitle } = useAppSelector((store) => store.films);
  const debouncedValue = useDebounce(searchTitle);
  const { openSearch, closeSearch } = useModals();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    openSearch();
    dispatch(setSearchTitle(event.target.value));
  };

  const onClick = (): void => {
    closeSearch();
    if (searchTitle !== searchQuery) {
      dispatch(clearFilms());
    }
    dispatch(setSearchQuery(searchTitle));
    dispatch(setFirstPage());
    dispatch(setGenre(null));
  };

  return { searchQuery, onChange, debouncedValue, onClick, searchTitle };
};
