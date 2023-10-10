import { GenreStyled } from './styled';
import { type FC } from 'react';
import { type IGenreProps } from '@constants/types/interfaces';
import { genres } from '@constants/types/genres';
import { useAppSelector } from '@utils/hooks/reduxHooks/hooks';

export const Genre: FC<IGenreProps> = ({ onClick, genre }) => {
  const { genre: genreActive } = useAppSelector((store) => store.films);
  const isActiveGenre = (): boolean => {
    if (genres[genre] === 0 && genreActive === null) return true;
    else return genreActive === genres[genre];
  };

  return (
    <GenreStyled onClick={onClick} $isActive={isActiveGenre()} data-testid="genre">
      {genre.toLowerCase()}
    </GenreStyled>
  );
};
