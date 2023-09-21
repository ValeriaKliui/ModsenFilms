import { Film } from '../Film';
import * as S from './styled';
import { FilmType } from '../../utils/FilmsApi/types';
import { useShowingFilms } from '../../utils/FilmsApi/hooks';
export const Films = () => {
  const { isLoading, showingFilms } = useShowingFilms();
  return (
    <S.FilmsStyled>
      {isLoading ? (
        <div>loading</div>
      ) : (
        showingFilms.map(({ title, released, imageurl, imdbid }: FilmType) => (
          <Film imageurl={imageurl} title={title} released={released} key={imdbid} />
        ))
      )}
    </S.FilmsStyled>
  );
};
