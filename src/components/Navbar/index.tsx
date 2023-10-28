import { type FC } from 'react';
import { GenreButton } from '@components/GenreButton';
import { genres, type GenresType } from '@constants/types/genres';

import { Container, NavbarStyled } from './styled';

export const Navbar: FC = () => {
  return (
    <NavbarStyled data-testid='navbar'>
      <Container>
        {Object.keys(genres)
          .filter(key => Number.parseInt(key) !== Number(key))
          .map(genre => (
            <GenreButton key={genre} genre={genre as GenresType} />
          ))}
      </Container>
    </NavbarStyled>
  );
};
