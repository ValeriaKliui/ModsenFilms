import { type FC, useEffect } from 'react';
import { Button } from '@components/Button';
import { Error } from '@components/Error';
import { FilmCard } from '@components/FilmCard';
import { SkeletonLoader } from '@components/SkeletonLoader/SkeletonLoader';
import { FILMS_LIMIT } from '@constants/dataConstants/filmConstants';
import { type IFilmsResponse } from '@constants/types/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useSearch } from '@hooks/useSearch/useSearch';
import {
  selectFilms,
  selectFilmsPerPage,
  selectGenre,
  selectPage,
} from '@store/selectors/filmsSelectors';
import {
  addFilms,
  clearFilms,
  increasePage,
  setFilmsPerPage,
} from '@store/slices/filmsSlice';
import { useGetFilmsByTitleQuery, useGetFilmsQuery } from '@utils/FilmsApi/FilmsApi';

import { FilmsContainer, FilmsStyled } from './styled';

export const FilmsCatalog: FC = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(selectFilms);
  const page = useAppSelector(selectPage);
  const genre = useAppSelector(selectGenre);
  const filmsPerPage = useAppSelector(selectFilmsPerPage);

  const { searchQuery } = useSearch();

  const {
    data: filmsCatalog,
    isError: isErrorCatalog,
    isFetching: isFetchingCatalog,
    isSuccess: isSuccessCatalog,
  } = useGetFilmsQuery({ page, genre }, { skip: searchQuery.length > 0 });

  const {
    data: filmsByTitle,
    isFetching: isFetchingByTitle,
    isError: isErrorByTitle,
    isSuccess: isSuccessByTitle,
  } = useGetFilmsByTitleQuery({ searchQuery, page }, { skip: searchQuery === '' });

  const isFetching = isFetchingCatalog || isFetchingByTitle;
  const isError = isErrorCatalog || isErrorByTitle;
  const isSuccess = isSuccessCatalog || isSuccessByTitle;

  const increaseFilms = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT + filmsPerPage));
    dispatch(increasePage());
  };

  const getDisplayedFilms = (): IFilmsResponse | undefined => {
    if (isSuccessCatalog) return filmsCatalog;
    if (isSuccessByTitle) return filmsByTitle;
  };
  const filmsData = getDisplayedFilms();

  useEffect(() => {
    dispatch(clearFilms());
  }, [genre]);

  useEffect(() => {
    if (filmsData !== undefined && filmsData !== null) {
      dispatch(addFilms(filmsData.results));
    }
  }, [filmsCatalog, filmsByTitle, genre, searchQuery]);

  const shortAmountOfFilms =
    filmsByTitle?.results.length === 0 &&
    searchQuery.length !== 0 &&
    films.length >= filmsPerPage;

  const noFilmsFound = !isFetching && isSuccess && films.length === 0;

  return (
    <FilmsContainer $isError={isError || noFilmsFound} data-testid='films-catalog'>
      <FilmsStyled $isError={isError || noFilmsFound}>
        {isError && <Error text='Sorry, you have to enable VPN for this site to run.' />}
        {(isSuccess && shortAmountOfFilms) ||
          (noFilmsFound && <Error text='Nothing was found.' />)}
        {films.slice(0, filmsPerPage).map(film => (
          <FilmCard film={film} key={film.id} />
        ))}
        {isFetching &&
          new Array(FILMS_LIMIT)
            .fill({})
            .map((f, index) => <SkeletonLoader key={index} />)}
      </FilmsStyled>
      <Button
        text='Show More'
        onClick={increaseFilms}
        isHidden={films.length <= filmsPerPage}
      />
    </FilmsContainer>
  );
};
