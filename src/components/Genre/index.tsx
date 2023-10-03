import { genres, type GenresType } from '../../constants/types/genres';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { GenreStyled } from './styled';

interface GenreProps {
  onClick: () => void;
  genre: GenresType;
}

export const Genre: React.FC<GenreProps> = ({ onClick, genre }) => {
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
