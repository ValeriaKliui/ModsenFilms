import { Input, SearchButton, SearchContainer, SearchForm, SearchedFilmsContainer, Info } from './styled';
import SearchIcon from '@assets/img/search.svg';
import { useSearch } from '@hooks/useSearch/useSearch';
import { useGetFilmsByTitleQuery } from '@utils/FilmsApi/FilmsApi';
import { SearchedFilm } from '@components/SearchedFilm';
import { Spinner } from '@components/Spinner';
import { type FC } from 'react';
import { useModals } from '@hooks/useModals/useModals';
import { useClickOutside } from '@hooks/useClickOutside/useClickOutside';

export const Search: FC = () => {
  const { isSearchOpened, closeSearch, openSearch } = useModals();
  const { debouncedValue, onChange, onClick, searchTitle } = useSearch();
  const ref = useClickOutside<HTMLFormElement>(closeSearch);

  const { data, isFetching, isError, isUninitialized } = useGetFilmsByTitleQuery(
    { searchQuery: debouncedValue, page: 1 },
    { skip: debouncedValue.length < 2 || !isSearchOpened },
  );
  console.log(isSearchOpened);
  const { results: searchedFilms, total_results: filmsAmount } = data ?? { results: [] };
  const badSearchResult = isError || (searchedFilms.length < 1 && !isFetching && !isUninitialized);

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    searchedFilms.length > 0 && onClick();
  };
  const handleFocus = (): void => {
    searchTitle.length > 3 && openSearch();
  };

  return (
    <SearchContainer>
      <SearchForm ref={ref}>
        <Input placeholder="Search" value={searchTitle} onChange={onChange} onFocus={handleFocus} />
        <SearchButton onClick={handleClick}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      {isSearchOpened && (
        <SearchedFilmsContainer $isScrolled={searchedFilms.length > 2 && !isFetching}>
          {isFetching && <Spinner size={50} />}
          {badSearchResult && <Info>Nothing was found.</Info>}
          {!isFetching && searchedFilms.length > 0 && <Info>Found: {filmsAmount} films.</Info>}
          {!isFetching && searchedFilms.map((film) => <SearchedFilm key={film.id} film={film} />)}
        </SearchedFilmsContainer>
      )}
    </SearchContainer>
  );
};
