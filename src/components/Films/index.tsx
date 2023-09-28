import { Film } from '../Film';
import { FilmsStyled } from './styled';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';
import { Error } from '../Error';
export const Films: React.FC = () => {
  const { isLoading, showingFilms, isError } = useShowingFilms();
  const filmsToRender = (): JSX.Element[] | JSX.Element => {
    if (isLoading) return new Array(8).fill(1).map((e, index) => <SkeletonLoader key={index} />);
    return showingFilms.map((film) => <Film film={film} key={film.id} />);
  };

  return <>{isError ? <Error /> : <FilmsStyled>{filmsToRender()}</FilmsStyled>}</>;
};
