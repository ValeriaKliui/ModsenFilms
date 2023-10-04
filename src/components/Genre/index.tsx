import { genres } from '../../constants/types/genres';
import { type IGenreProps } from '../../constants/types/interfaces';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { GenreStyled } from './styled';
import { type FC } from 'react';

export const Genre: FC<IGenreProps> = ({ onClick, genre }) => {
  const { genre: genreActive } = useFilms();
  const isActiveGenre = (): boolean => {
    if (genres[genre] === 0 && genreActive === null) return true;
    else return genreActive === genres[genre];
  };

  return (
    <GenreStyled onClick={onClick} $isActive={isActiveGenre()}>
      {genre.toLowerCase()}
    </GenreStyled>
  );
};
