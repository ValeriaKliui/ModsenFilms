import { type ChangeEvent } from 'react';
import { FILMS_LIMIT } from '@constants/dataConstants/filmConstants';
import { type useSearchI } from '@constants/types/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useDebounce } from '@hooks/useDebounce/useDebounce';
import { useModals } from '@hooks/useModals/useModals';
import { selectSearchQuery, selectSearchTitle } from '@store/selectors/filmsSelectors';
import {
  clearFilms,
  setFilmsPerPage,
  setFirstPage,
  setGenre,
  setSearchQuery,
  setSearchTitle,
} from '@store/slices/filmsSlice';

export const useSearch = (): useSearchI => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const searchTitle = useAppSelector(selectSearchTitle);
  const debouncedValue = useDebounce(searchTitle);
  const { openSearch, closeSearch } = useModals();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.value.length > 3 && openSearch();
    event.target.value.length <= 3 && closeSearch();
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
    dispatch(setFilmsPerPage(FILMS_LIMIT));
  };

  return { searchQuery, onChange, debouncedValue, onClick, searchTitle };
};
