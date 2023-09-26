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
    return showingFilms.map(({ title, backdrop_path, poster_path, id, release_date, vote_average }: FilmType) => (
      <Film
        backdrop_path={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
        poster_path={`https://image.tmdb.org/t/p/w300${poster_path}`}
        title={title}
        release_date={release_date}
        key={id}
        vote_average={vote_average}
      />
    ));
  };

  return <FilmsStyled>{filmsToRender()}</FilmsStyled>;
};
