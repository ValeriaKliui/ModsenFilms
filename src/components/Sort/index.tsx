import { Genre } from '@components/Genre';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { genres, type GenresType } from '@constants/types/genres';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { setFilmsPerPage, setFirstPage, setGenre, setSearchQuery, setSearchTitle } from '@store/slices/filmsSlice';
import { type FC } from 'react';

import { Container,Genres } from './styled';

export const Sort: FC = () => {
  const dispatch = useAppDispatch();
  const handleClickGenre = (genre: GenresType): void => {
    dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
    dispatch(setFirstPage());
    dispatch(setFilmsPerPage(FILMS_LIMIT));
    dispatch(setSearchTitle(''));
    dispatch(setSearchQuery(''));
  };

  return (
      <Genres data-testid="sort">
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
