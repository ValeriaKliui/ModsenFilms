import { Input, SearchButton, SearchContainer, SearchForm } from './styled';
import SearchIcon from '../../assets/img/search.svg';
import { useSearch } from '../../utils/hooks/useSearch/useSearch';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { useGetFilmsByTitleQuery } from '../../utils/FilmsApi/FilmsApi';
import { type FilmI } from '../../utils/FilmsApi/types';
import { SearchedFilm } from '../SearchedFilm';

export const Search: React.FC = () => {
  const { page } = useFilms();
  const { debouncedValue } = useSearch();
  const { data } = useGetFilmsByTitleQuery({ searchQuery: debouncedValue, page }, { skip: debouncedValue.length < 4 });
  const searchedFilms: FilmI[] = data?.results ?? [];

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    onClick(searchedFilms);
  };

  const { searchQuery, onChange, onClick } = useSearch();

  return (
      <SearchContainer>
          <SearchForm>
              <Input placeholder="Search" value={searchQuery} onChange={onChange} />
              <SearchButton onClick={handleClick}>
                  <SearchIcon />
              </SearchButton>
          </SearchForm>
          {searchedFilms.map((film) => (
              <SearchedFilm key={film.id} film={film} />
      ))}{' '}
      </SearchContainer>
  );
};
