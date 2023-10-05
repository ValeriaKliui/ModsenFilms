import { Input, SearchButton, SearchContainer, SearchForm, SearchedFilmsContainer, Info } from './styled';
import SearchIcon from '@assets/img/search.svg';
import { useSearch } from '@hooks/useSearch/useSearch';
import { useFilms } from '@hooks/useFilms/useFilms';
import { useGetFilmsByTitleQuery } from '@utils/FilmsApi/FilmsApi';
import { SearchedFilm } from '@components/SearchedFilm';
import { Spinner } from '@components/Spinner';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { setFilms } from '@store/slices/filmsSlice';
import { useEffect, type FC } from 'react';
import { useModals } from '@hooks/useModals/useModals';
import { useClickOutside } from '@hooks/useClickOutside/useClickOutside';

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { isSearchOpened, closeSearch, openSearch } = useModals();
  const { page } = useFilms();
  const { debouncedValue, searchQuery, onChange, onClick } = useSearch();
  const ref = useClickOutside<HTMLFormElement>(closeSearch);

  const { data, isFetching, isError, isUninitialized } = useGetFilmsByTitleQuery(
    { searchQuery: debouncedValue, page },
    { skip: debouncedValue.length < 2 },
  );
  const { results: searchedFilms, total_results: filmsAmount } = data ?? { results: [] };
  const badSearchResult = isError || (searchedFilms.length < 1 && !isFetching && !isUninitialized);

  useEffect(() => {
    if (data) dispatch(setFilms(searchedFilms));
  }, [data]);

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    searchedFilms.length > 0 && onClick(searchedFilms);
  };
  const handleFocus = (): void => {
    openSearch();
  };

  return (
      <SearchContainer>
          <SearchForm ref={ref}>
              <Input placeholder="Search" value={searchQuery} onChange={onChange} onFocus={handleFocus} />
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
