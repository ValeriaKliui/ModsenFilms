import React from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { Genres, Container } from './styled';
import { genres, type GenresType } from '../../constants/types/genres';
import { Genre } from '../Genre/index';
import { setGenre } from '../../store/slices/filmsSlice';

export const Sort: React.FC = () => {
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
