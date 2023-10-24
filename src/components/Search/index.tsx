import { type FC } from 'react';
import SearchIcon from '@assets/img/search.svg';
import { SuggestedFilm } from '@components/SuggestedFilm';
import { Spinner } from '@components/Spinner';
import { useClickOutside } from '@hooks/useClickOutside/useClickOutside';
import { useModals } from '@hooks/useModals/useModals';
import { useSearch } from '@hooks/useSearch/useSearch';
import { useGetFilmsByTitleQuery } from '@utils/FilmsApi/FilmsApi';

import {
  Info,
  Input,
  SearchButton,
  SearchContainer,
  SuggestedFilmsContainer,
  SearchForm,
} from './styled';

export const Search: FC = () => {
  const { isSearchOpened, closeSearch, openSearch } = useModals();
  const { debouncedValue, onChange, onClick, searchTitle } = useSearch();
  const ref = useClickOutside<HTMLFormElement>(closeSearch);

  const { data, isFetching, isError, isUninitialized } = useGetFilmsByTitleQuery(
    { searchQuery: debouncedValue, page: 1 },
    { skip: debouncedValue.length < 2 || !isSearchOpened },
  );

  const suggestedFilms = data?.results ?? [];
  const badSearchResult =
    isError || (suggestedFilms.length < 1 && !isFetching && !isUninitialized);

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    onClick();
  };
  const handleFocus = (): void => {
    searchTitle.length > 3 && openSearch();
  };

  return (
    <SearchContainer data-testid='search'>
      <SearchForm ref={ref} data-testid='search-form'>
        <Input
          placeholder='Search...'
          value={searchTitle}
          onChange={onChange}
          onFocus={handleFocus}
          data-testid='search-input'
        />
        <SearchButton onClick={handleClick} data-testid='search-button'>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      {isSearchOpened && (
        <SuggestedFilmsContainer
          $isScrolled={suggestedFilms.length > 2 && !isFetching}
          $isSearchOpened={isSearchOpened}
          data-testid='suggested-films'
        >
          {isFetching && <Spinner size={50} />}
          {badSearchResult && <Info>Nothing was found.</Info>}
          {!isFetching && suggestedFilms.length > 0 && (
            <Info>Found: {data?.total_results} films.</Info>
          )}
          {!isFetching &&
            data?.results.map(film => <SuggestedFilm key={film.id} film={film} />)}
        </SuggestedFilmsContainer>
      )}
    </SearchContainer>
  );
};
