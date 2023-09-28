import { type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { selectSearchQuery, setFilms, setSearchQuery } from '../../store/slices/ShowingFilmsSlice';
import { useSearchedFilms } from '../../utils/FilmsApi/hooks/useSearchedFilms';
import { Input, SearchButton, SearchContainer, SearchField, SearchedFilms } from './styled';
import { SearchedFilm } from '../SearchedFilm';
import searchIcon from '../../assets/img/search.svg';
import { useClickOutside } from '../../utils/Modals/hooks/useClickOutside';
import { selectIsSearchOpened, setIsSearchOpened } from '../../store/slices/ModalsSlice';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const isSearchOpened = useAppSelector(selectIsSearchOpened);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (searchQuery.length > 3) dispatch(setIsSearchOpened(true));
    dispatch(setSearchQuery(e.target.value));
  };

  const { searchedFilms, searchedFilmsAmount } = useSearchedFilms({ searchQuery });
  const handleClick = (): void => {
    if (searchedFilms.length > 1) {
      dispatch(setFilms(searchedFilms));
      dispatch(setIsSearchOpened(false));
    }
  };

  const { ref, toIgnoreRef } = useClickOutside({
    isOpened: isSearchOpened,
    setIsOpened: setIsSearchOpened,
  });

  return (
      <SearchContainer ref={ref}>
          <SearchField>
              <Input onChange={handleChange} placeholder="Search" value={searchQuery} />
              <SearchButton onClick={handleClick} ref={toIgnoreRef}>
                  <img src={searchIcon} alt="search by title" />
              </SearchButton>
          </SearchField>
          {isSearchOpened && (
          <SearchedFilms>
              {searchedFilms.map((film) => (
                  <SearchedFilm key={film.id} film={film} />
          ))}
              {searchQuery.length > 3 && searchedFilms.length === 0 && (
              <SearchedFilm replacementText="Film wasn't found." />
          )}
              {searchedFilms.length > 0 && searchedFilms.length !== searchedFilmsAmount && (
              <SearchedFilm replacementText={`We found ${searchedFilmsAmount} films.`} />
          )}
          </SearchedFilms>
      )}
      </SearchContainer>
  );
};
