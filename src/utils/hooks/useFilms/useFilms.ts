import { useAppSelector } from '../../../store/hooks/hooks';
import { selectFilmLimit, selectFilmsReceived, selectGenre, selectPage } from '../../../store/selectors/filmsSelectors';
import { type UseFilmsI } from './interface';

export const useFilms = (): UseFilmsI => {
  const page = useAppSelector(selectPage);
  const filmLimitPerPage = useAppSelector(selectFilmLimit);
  const filmsReceived = useAppSelector(selectFilmsReceived);
  const genre = useAppSelector(selectGenre);
  return { page, filmLimitPerPage, filmsReceived, genre };
};
