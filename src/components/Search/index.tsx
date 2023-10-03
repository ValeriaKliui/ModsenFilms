import { Input, SearchButton, SearchContainer, SearchForm, SearchedFilmsContainer, Info } from './styled';
import SearchIcon from '../../assets/img/search.svg';
import { useSearch } from '../../utils/hooks/useSearch/useSearch';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { useGetFilmsByTitleQuery } from '../../utils/FilmsApi/FilmsApi';
import { type FilmI } from '../../utils/FilmsApi/types';
import { SearchedFilm } from '../SearchedFilm';
import { Spinner } from '../Spinner';

export const Search: React.FC = () => {
  const { page } = useFilms();
  const { debouncedValue } = useSearch();
  const { data, isFetching, isError, isUninitialized } = useGetFilmsByTitleQuery(
    { searchQuery: debouncedValue, page },
    { skip: debouncedValue.length < 4 },
  );
  const { results: searchedFilms, total_results: filmsAmount } = data ?? { results: [] };

  // const searchedFilms: FilmI[] = data?.results ?? [];

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    onClick(searchedFilms);
  };

  const { searchQuery, onChange, onClick } = useSearch();

  const badSearchResult = isError || (searchedFilms.length < 1 && !isFetching && !isUninitialized);
  console.log(filmsAmount);
  return (
    <SearchContainer>
      <SearchForm>
        <Input placeholder="Search" value={searchQuery} onChange={onChange} />
        <SearchButton onClick={handleClick}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      <SearchedFilmsContainer $isScrolled={searchedFilms.length > 3}>
        {isFetching && <Spinner size={50} />}
        {badSearchResult && <Info>Nothing was found.</Info>}
        {!isFetching && searchedFilms.map((film) => <SearchedFilm key={film.id} film={film} />)}
        {!isFetching && filmsAmount && <Info>Found: {filmsAmount} films.</Info>}
      </SearchedFilmsContainer>
    </SearchContainer>
  );
};
