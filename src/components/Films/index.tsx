import { Film } from '../Film';
import { FilmsStyled } from './styled';
import { useGetFilmsQuery } from '../../utils/FilmsApi/FilmsApi';
import { type FilmI } from '../../utils/FilmsApi/types';
import { useAppDispatch } from '../../store/hooks/hooks';
import { useEffect } from 'react';
import { clearFilms, setFilmsReceived } from '../../store/slices/filmsSlice';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { useSearch } from '../../utils/hooks/useSearch/useSearch';
import { Error } from '../Error';
import { FILMS_LIMIT } from '../../constants/filmsConstants';
export const Films: React.FC = () => {
  const dispatch = useAppDispatch();
  const { page, filmLimitPerPage, filmsReceived, genre } = useFilms();
  const { searchQuery } = useSearch();

  const { data, isError, isFetching } = useGetFilmsQuery({ page, genre }, { skip: searchQuery.length > 0 });
  const films: FilmI[] = data?.results ?? [];
  useEffect(() => {
    dispatch(clearFilms());
  }, [genre]);

  useEffect(() => {
    dispatch(setFilmsReceived(films));
  }, [data]);

  return (
    <>
      <FilmsStyled $isError={isError}>
        {isError && <Error text="Sorry, you have to enable VPN for this site to run" />}
        {filmsReceived.slice(0, filmLimitPerPage).map((film) => (
          <Film film={film} key={film.id} />
        ))}
        {isFetching &&
          new Array(FILMS_LIMIT).fill({}).map((film, index) => <Film film={film} isFetching={true} key={index} />)}
      </FilmsStyled>
    </>
  );
};
