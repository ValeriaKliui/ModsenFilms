import { Film } from '../Film';
import { FilmsStyled } from './styled';
import { type FilmType } from '../../utils/FilmsApi/types';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';
import { Error } from '../Error';
export const Films = () => {
  const { isLoading, showingFilms, isError } = useShowingFilms();

  const filmsToRender = () => {
    if (isError) return <Error />;
    if (isLoading) return new Array(8).fill(1).map((e, index) => <SkeletonLoader key={index} />);
    return showingFilms.map(({ title, released, backdrop_path, id }: FilmType) => (
      <Film
        backdrop_path={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
        title={title}
        released={released}
        key={id}
      />
    ));
  };

  return <FilmsStyled>{filmsToRender()}</FilmsStyled>;
};
