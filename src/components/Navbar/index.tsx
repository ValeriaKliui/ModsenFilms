import { type FC } from 'react';
import { GenreButton } from '@components/GenreButton';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { genres, type GenresType } from '@constants/types/genres';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import {
  setFilmsPerPage,
  setFirstPage,
  setGenre,
  setSearchQuery,
  setSearchTitle,
} from '@store/slices/filmsSlice';

import { Container, NavbarStyled } from './styled';

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const handleClickGenre = (genre: GenresType): void => {
    dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
    dispatch(setFirstPage());
    dispatch(setFilmsPerPage(FILMS_LIMIT));
    dispatch(setSearchTitle(''));
    dispatch(setSearchQuery(''));
  };

  return (
    <NavbarStyled data-testid='navbar'>
      <Container>
        {Object.keys(genres)
          .filter(key => Number.parseInt(key) !== +key)
          .map(genre => (
            <GenreButton
              key={genre}
              onClick={() => {
                handleClickGenre(genre as GenresType);
              }}
              genre={genre as GenresType}
            />
          ))}
      </Container>
    </NavbarStyled>
  );
};
