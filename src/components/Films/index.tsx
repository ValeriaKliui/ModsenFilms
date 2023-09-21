import { Film } from '../Film';
import { FilmsSection, FilmsStyled } from './styled';
import { type FilmType } from '../../utils/FilmsApi/types';
import { useShowingFilms } from '../../utils/FilmsApi/hooks';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';
export const Films = () => {
  const { isLoading, showingFilms } = useShowingFilms();
  return (
    <FilmsStyled>
      {isLoading
        ? new Array(8).fill(1).map((e, index) => <SkeletonLoader key={index} />)
        : showingFilms.map(({ title, released, imageurl, imdbid }: FilmType) => (
            <Film imageurl={imageurl} title={title} released={released} key={imdbid} />
          ))}
    </FilmsStyled>
  );
};
