import { type FC } from 'react';
import { genres } from '@constants/types/genres';
import { type IGenreProps } from '@constants/types/interfaces';
import { useAppSelector } from '@hooks/reduxHooks/hooks';

import { GenreStyled } from './styled';

export const Genre: FC<IGenreProps> = ({ onClick, genre }) => {
  const { genre: genreActive } = useAppSelector(store => store.films);
  const isActiveGenre = (): boolean => {
    if (genres[genre] === 0 && genreActive === null) return true;
    else return genreActive === genres[genre];
  };

  return (
    <GenreStyled onClick={onClick} $isActive={isActiveGenre()} data-testid='genre'>
      {genre.toLowerCase()}
    </GenreStyled>
  );
};
