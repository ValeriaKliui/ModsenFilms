import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectFilmLimit, selectFilms, selectGenre, selectPage } from '@store/selectors/filmsSelectors';
import { type UseFilmsI } from './interface';

export const useFilms = (): UseFilmsI => {
  const page = useAppSelector(selectPage);
  const filmLimitPerPage = useAppSelector(selectFilmLimit);
  const films = useAppSelector(selectFilms);
  const genre = useAppSelector(selectGenre);
  return { page, filmLimitPerPage, films, genre };
};
