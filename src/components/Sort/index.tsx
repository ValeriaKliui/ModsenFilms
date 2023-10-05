import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { Genres, Container } from './styled';
import { Genre } from '@components/Genre';
import { setGenre } from '@store/slices/filmsSlice';
import { type FC } from 'react';
import { genres, type GenresType } from '@constants/types/genres';

export const Sort: FC = () => {
  const dispatch = useAppDispatch();
  const handleClickGenre = (genre: GenresType): void => {
    dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
  };

  return (
      <Genres>
          <Container>
              {Object.keys(genres)
          .filter((key) => Number.parseInt(key) !== +key)
          .map((genre) => (
              <Genre
                  key={genre}
                  onClick={() => {
                handleClickGenre(genre as GenresType);
              }}
                  genre={genre as GenresType}
            />
          ))}
          </Container>
      </Genres>
  );
};
