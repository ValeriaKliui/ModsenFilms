import { type FC, memo, useCallback } from 'react';
import { genres, type GenresType } from '@constants/types/genres';
import { type IGenreProps } from '@constants/types/interfaces';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks/hooks';
import { useCatalog } from '@hooks/useCatalog/useCatalog';
import { selectGenre } from '@store/selectors/filmsSelectors';
import { setGenre } from '@store/slices/filmsSlice';

import { GenreStyled } from './styled';

export const GenreButton: FC<IGenreProps> = memo(({ genre }) => {
  const dispatch = useAppDispatch();
  const { setInitCatalog } = useCatalog();

  const handleClickGenre = useCallback(
    (genre: GenresType) => () => {
      dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
      setInitCatalog();
    },
    [],
  );

  const genreChoosen = useAppSelector(selectGenre);
  const isActiveGenre = (): boolean => {
    if (genres[genre] === 0 && genreChoosen === null) return true;
    else return genreChoosen === genres[genre];
  };

  return (
    <GenreStyled
      onClick={handleClickGenre(genre)}
      $isActive={isActiveGenre()}
      data-testid='genre-button'
    >
      {genre.toLowerCase()}
    </GenreStyled>
  );
});
