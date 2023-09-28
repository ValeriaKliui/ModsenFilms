import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setFilms, setFirstPage, setGenre, setSearchQuery } from '../../store/slices/ShowingFilmsSlice';
import { Genres, Container } from './styled';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { genres, type GenresType } from '../../constants/types/genres';
import { Genre } from '../Genre/index';
export const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { page, films, genre, isLoading, isSuccess } = useShowingFilms();

  const handleClickGenre = (genre: GenresType): void => {
    dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
  };

  useEffect(() => {
    if (page === 1 && !isLoading && isSuccess) {
      dispatch(setFilms(films));
    }
    dispatch(setSearchQuery(''));
  }, [genre, isLoading, films]);

  useEffect(() => {
    dispatch(setFirstPage());
  }, [genre]);

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
