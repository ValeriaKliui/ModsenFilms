import { type FilmI } from '../../utils/FilmsApi/types';
import { SearchedFilm } from '../SearchedFilm';
import { Spinner } from '../Spinner';
import { Info, InfoContainer, SearchedFilmsContainer } from './styled';

interface SearchedFilmProps {
  searchedFilms: FilmI[];
  isFetching: boolean;
  searchedFilmsAmount: number | undefined;
  isError: boolean;
  isSuccess: boolean;
}

export const SearchedFilms: React.FC<SearchedFilmProps> = ({
  searchedFilms,
  isFetching,
  isError,
  searchedFilmsAmount,
  isSuccess,
}) => {
  return (
      <SearchedFilmsContainer $isScrolled={!isFetching && searchedFilms.length > 0}>
          <InfoContainer>
              {isFetching && <Spinner size={50} />}
              {!isError && !isFetching && isSuccess && searchedFilmsAmount !== searchedFilms.length && (
              <Info>Found: {searchedFilmsAmount} films.</Info>
        )}
              {!isFetching && searchedFilms.length === 0 && <Info>Nothing was found.</Info>}
          </InfoContainer>
          {!isFetching && searchedFilms.map((film) => <SearchedFilm key={film.id} film={film} />)}
      </SearchedFilmsContainer>
  );
};
