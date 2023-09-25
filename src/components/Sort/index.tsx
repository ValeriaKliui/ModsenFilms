import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setFilms, setFirstPage, setGenre } from '../../store/slices/ShowingFilmsSlice';
import { Genres } from './styled';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { genres, GenresType } from '../../constants/types/genres';
import { Genre } from '../Genre/index';
export const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { page, films, genre, isLoading } = useShowingFilms();

  const handleClickGenre = (genre: GenresType) => {
    dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
  };

  useEffect(() => {
    if (page === 1 && films && !isLoading) {
      dispatch(setFilms(films));
    }
  }, [genre, isLoading, films]);

  useEffect(() => {
    dispatch(setFirstPage());
  }, [genre]);

  return (
    <Genres>
      {Object.keys(genres)
        .filter((key) => Number.parseInt(key) !== +key)
        .map((genre) => (
          <Genre key={genre} onClick={() => handleClickGenre(genre as GenresType)} genre={genre as GenresType} />
        ))}
    </Genres>
  );
};
