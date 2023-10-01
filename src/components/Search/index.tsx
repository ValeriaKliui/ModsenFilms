import { type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { selectSearchQuery, setFilms, setSearchQuery } from '../../store/slices/ShowingFilmsSlice';
import { useSearchedFilms } from '../../utils/FilmsApi/hooks/useSearchedFilms';
import { Input, SearchButton, SearchContainer, SearchForm } from './styled';
import SearchIcon from '../../assets/img/search.svg';
import { useClickOutside } from '../../utils/Modals/hooks/useClickOutside';
import { selectIsSearchOpened, setIsSearchOpened } from '../../store/slices/ModalsSlice';
import { SearchedFilms } from '../SearchedFilms';
import { useDebounce } from '../../utils/hooks/useDebounce';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const isSearchOpened = useAppSelector(selectIsSearchOpened);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchQuery(e.target.value));
    if (searchQuery.length > 3) dispatch(setIsSearchOpened(true));
  };
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { searchedFilms, searchedFilmsAmount, isFetching, isSuccess, isError } = useSearchedFilms({
    searchQuery: debouncedSearchQuery,
  });

  const handleClick = (): void => {
    console.log('j');
    if (searchedFilms.length > 1) {
      dispatch(setFilms(searchedFilms));
      dispatch(setIsSearchOpened(false));
    }
  };
  const ref = useClickOutside(() => dispatch(setIsSearchOpened(false)));
  return (
      <SearchContainer ref={ref} onSubmit={handleClick}>
          <SearchForm>
              <Input onChange={handleChange} placeholder="Search" value={searchQuery} />
              <SearchButton onClick={handleClick}>
                  <SearchIcon />
              </SearchButton>
          </SearchForm>
          {isSearchOpened && (
          <SearchedFilms
              searchedFilms={searchedFilms}
              isFetching={isFetching}
              searchedFilmsAmount={searchedFilmsAmount}
              isError={isError}
              isSuccess={isSuccess}
        />
      )}
      </SearchContainer>
  );
};
