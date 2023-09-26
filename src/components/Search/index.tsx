import { type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { selectSearchQuery, setFilms, setIsSearching, setSearchQuery } from '../../store/slices/ShowingFilmsSlice';
import { useSearchedFilms } from '../../utils/FilmsApi/hooks/useSearchedFilms';
import { Input, SearchButton, SearchContainer, SearchField, SearchedFilms } from './styled';
import { SearchedFilm } from '../SearchedFilm';
import searchIcon from '../../assets/img/search.svg';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setIsSearching(true));
    dispatch(setSearchQuery(e.target.value));
  };

  const { searchedFilms, searchedFilmsAmount } = useSearchedFilms({ searchQuery });
  const handleClick = (): void => {
    dispatch(setFilms(searchedFilms));
  };

  return (
      <SearchContainer>
          <SearchField>
              <Input onChange={handleChange} placeholder="Search" />
              <SearchButton onClick={handleClick}>
                  <img src={searchIcon} alt="search by title" />
              </SearchButton>
          </SearchField>
          <SearchedFilms>
              {searchedFilms.map(({ title, id, overview, poster_path, release_date, vote_average }) => (
                  <SearchedFilm
                      key={id}
                      title={title}
                      overview={overview}
                      poster_path={poster_path}
                      release_date={release_date}
                      vote_average={vote_average}
          />
        ))}
              {searchQuery.length > 3 && searchedFilms.length === 0 && <SearchedFilm noFilm />}
              {searchedFilms.length > 0 && searchedFilms.length !== searchedFilmsAmount && (
              <SearchedFilm amount={searchedFilmsAmount} />
        )}
          </SearchedFilms>
      </SearchContainer>
  );
};
