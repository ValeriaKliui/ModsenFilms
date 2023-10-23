import { type FC, useEffect } from 'react';
import { Button } from '@components/Button';
import { Error } from '@components/Error';
import { FilmCard } from '@components/FilmCard';
import { SkeletonLoader } from '@components/SkeletonLoader/SkeletonLoader';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { type IFilmsResponse } from '@constants/types/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useSearch } from '@hooks/useSearch/useSearch';
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
  const { page, films, genre, filmsPerPage } = useAppSelector(store => store.films);
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

  const getDisplayedFilms = (): IFilmsResponse | undefined => {
    if (isSuccessCatalog) return filmsCatalog;
    if (isSuccessByTitle) return filmsByTitle;
  };

  useEffect(() => {
    dispatch(clearFilms());
  }, [genre]);

  useEffect(() => {
    const filmsData = getDisplayedFilms();

    if (filmsData !== undefined && filmsData !== null) {
      dispatch(addFilms(filmsData.results));
    }
  }, [filmsCatalog, filmsByTitle, genre, searchQuery]);

  const isFetching = isFetchingCatalog || isFetchingByTitle;
  const isError = isErrorCatalog || isErrorByTitle;
  const isSuccess = isSuccessCatalog || isSuccessByTitle;

  const increaseFilms = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT + filmsPerPage));
    if ((films.length - 2 * filmsPerPage) / filmsPerPage < 0) dispatch(increasePage());
  };

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
