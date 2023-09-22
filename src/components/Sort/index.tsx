import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { Genres, Genre } from './styled';
const genres = ['All', 'action', 'drama', 'crime', 'romantic', 'horror', 'documentary'];
export const Sort: React.FC = () => {
  return (
    <Genres>
      {genres.map((genre) => (
        <Genre key={genre}>{genre}</Genre>
      ))}
    </Genres>
  );
};
