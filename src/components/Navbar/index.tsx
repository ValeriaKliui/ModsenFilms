import { type FC, useCallback } from 'react';
import { GenreButton } from '@components/GenreButton';
import { genres, type GenresType } from '@constants/types/genres';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useCatalog } from '@hooks/useCatalog/useCatalog';
import { setGenre } from '@store/slices/filmsSlice';

import { Container, NavbarStyled } from './styled';

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { setInitCatalog } = useCatalog();

  const handleClickGenre = useCallback((genre: GenresType): void => {
    dispatch(setGenre(genres[genre] === genres.ALL ? null : genres[genre]));
    setInitCatalog();
  }, []);

  return (
    <NavbarStyled data-testid='navbar'>
      <Container>
        {Object.keys(genres)
          .filter(key => Number.parseInt(key) !== Number(key))
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
