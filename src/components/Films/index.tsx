import { Film } from '../Film';
import { FilmsStyled } from './styled';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { Error } from '../Error';
export const Films: React.FC = () => {
  const { showingFilms, isError: isFilmsError, isFetching: isFilmsFetching, page: filmsPage } = useShowingFilms();

  const isLoaded = (!isFilmsFetching && filmsPage === 1) || filmsPage > 1;
  return (
    <>
      <FilmsStyled $isError={isFilmsError}>
        {isFilmsError && <Error />}
        {!isFilmsError && isLoaded && showingFilms.map((film) => <Film film={film} key={film.id} isFetching={false} />)}
        {isFilmsFetching &&
          new Array(16).fill({}).map((film, index) => <Film film={film} isFetching={isFilmsFetching} key={index} />)}
      </FilmsStyled>
    </>
  );
};
