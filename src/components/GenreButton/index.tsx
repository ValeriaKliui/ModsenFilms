import { type FC, memo } from 'react';
import { genres } from '@constants/types/genres';
import { type IGenreProps } from '@constants/types/interfaces';
import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectGenre } from '@store/selectors/filmsSelectors';

import { GenreStyled } from './styled';

export const GenreButton: FC<IGenreProps> = memo(({ onClick, genre }) => {
  const genreActive = useAppSelector(selectGenre);
  const isActiveGenre = (): boolean => {
    if (genres[genre] === 0 && genreActive === null) return true;
    else return genreActive === genres[genre];
  };

  return (
    <GenreStyled onClick={onClick} $isActive={isActiveGenre()} data-testid='genre-button'>
      {genre.toLowerCase()}
    </GenreStyled>
  );
});
