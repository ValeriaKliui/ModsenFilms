import { genres, type GenresType } from '../../constants/types/genres';
import { useAppSelector } from '../../store/hooks/hooks';
import { selectGenre } from '../../store/slices/ShowingFilmsSlice';
import { GenreStyled } from './styled';

interface GenreProps {
  onClick: () => void;
  genre: GenresType;
}

export const Genre: React.FC<GenreProps> = ({ onClick, genre }) => {
  const genreActive = useAppSelector(selectGenre);
  const isActiveGenre = (): boolean => {
    if (genres[genre] === 0 && !genreActive) return true;
    else return genreActive === genres[genre];
  };

  return (
      <GenreStyled onClick={onClick} $isActive={isActiveGenre()}>
          {genre.toLowerCase()}
      </GenreStyled>
  );
};
