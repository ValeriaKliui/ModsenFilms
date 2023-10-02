import { Film } from '../Film';
import { FilmsStyled } from './styled';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { Error } from '../Error';
export const Films: React.FC = () => {
  const { showingFilms, isError, isFetching, page } = useShowingFilms();

  const isLoaded = (!isFetching && page === 1) || page > 1;
  return (
      <>
          <FilmsStyled $isError={isError}>
              {isError && <Error />}
              {isLoaded && showingFilms.map((film) => <Film film={film} key={film.id} isFetching={false} />)}
              {isFetching &&
          new Array(16).fill({}).map((film, index) => <Film film={film} isFetching={isFetching} key={index} />)}
          </FilmsStyled>
      </>
  );
};
