import { Film } from '@components/Film';
import { FilmsContainer, FilmsStyled } from './styled';
import { useGetFilmsByTitleQuery, useGetFilmsQuery } from '@utils/FilmsApi/FilmsApi';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useEffect, type FC } from 'react';
import { addFilms, clearFilms, increasePage, setFilmsPerPage } from '@store/slices/filmsSlice';
import { useSearch } from '@utils/hooks/useSearch/useSearch';
import { Error } from '@components/Error';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { type IFilmsResponse } from '@constants/types/interfaces';
import { Button } from '@components/Button';

export const Films: FC = () => {
  const dispatch = useAppDispatch();
  const { page, films, genre, filmsPerPage } = useAppSelector((store) => store.films);
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
    if (filmsData !== undefined) {
      dispatch(addFilms(filmsData.results));
    }
  }, [filmsCatalog, filmsByTitle, genre, searchQuery]);

  const isFetching = isFetchingCatalog || isFetchingByTitle;
  const isError = isErrorCatalog || isErrorByTitle;

  const increaseFilms = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT + filmsPerPage));
    if ((films.length - 2 * filmsPerPage) / filmsPerPage < 0) dispatch(increasePage());
  };

  return (
      <FilmsContainer>
          <FilmsStyled $isError={isError} data-testid="films-container">
              {isError && <Error text="Sorry, you have to enable VPN for this site to run" />}
              {filmsByTitle?.results.length === 0 && <Error text="Nothing was found." />}
              {films.slice(0, filmsPerPage).map((film) => (
                  <Film film={film} key={film.id} />
        ))}
              {isFetching &&
          new Array(FILMS_LIMIT).fill({}).map((film, index) => <Film film={film} isFetching={true} key={index} />)}
          </FilmsStyled>
          <Button text="Show More" onClick={increaseFilms} isHidden={films.length < filmsPerPage} />
      </FilmsContainer>
  );
};
