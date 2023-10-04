import { Input, SearchButton, SearchContainer, SearchForm, SearchedFilmsContainer, Info } from './styled';
import SearchIcon from '../../assets/img/search.svg';
import { useSearch } from '../../utils/hooks/useSearch/useSearch';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { useGetFilmsByTitleQuery } from '../../utils/FilmsApi/FilmsApi';
import { SearchedFilm } from '../SearchedFilm';
import { Spinner } from '../Spinner';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setFilmsReceived } from '../../store/slices/filmsSlice';
import { useEffect, type FC } from 'react';
import { useModals } from '../../utils/hooks/useModals/useModals';
import { useClickOutside } from '../../utils/hooks/useClickOutside/useClickOutside';

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
    dispatch(setFilmsReceived(searchedFilms));
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
