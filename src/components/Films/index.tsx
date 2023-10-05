import { Film } from '@components/Film';
import { FilmsStyled } from './styled';
import { useGetFilmsQuery } from '@utils/FilmsApi/FilmsApi';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useEffect, type FC } from 'react';
import { clearFilms, setFilmsPerPage, setFilms, setFirstPage, setSearchQuery } from '@store/slices/filmsSlice';
import { useFilms } from '@hooks/useFilms/useFilms';
import { useSearch } from '@utils/hooks/useSearch/useSearch';
import { Error } from '@components/Error';
import { FILMS_LIMIT } from '@constants/filmsConstants';

export const Films: FC = () => {
  const dispatch = useAppDispatch();
  const { page, filmLimitPerPage, films, genre } = useFilms();
  const { searchQuery } = useSearch();

  const { data, isError, isFetching } = useGetFilmsQuery({ page, genre }, { skip: searchQuery.length > 0 });
  const { results: filmsReceived } = data ?? { results: [] };

  useEffect(() => {
    dispatch(setFilmsPerPage(FILMS_LIMIT));
    dispatch(clearFilms());
    dispatch(setFirstPage());
    dispatch(setSearchQuery(''));
  }, [genre]);

  useEffect(() => {
    dispatch(setFilms(filmsReceived));
  }, [data]);

  return (
      <>
          <FilmsStyled $isError={isError}>
              {isError && <Error text="Sorry, you have to enable VPN for this site to run" />}
              {films.slice(0, filmLimitPerPage).map((film) => (
                  <Film film={film} key={film.id} />
        ))}
              {isFetching &&
          new Array(FILMS_LIMIT).fill({}).map((film, index) => <Film film={film} isFetching={true} key={index} />)}
          </FilmsStyled>
      </>
  );
};
