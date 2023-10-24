import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import LogoPic from '@assets/img/logo.svg';
import { Burger } from '@components/Burger';
import { Menu } from '@components/Menu';
import { Search } from '@components/Search';
import { ThemeToggler } from '@components/ThemeToggler';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useCatalog } from '@hooks/useCatalog/useCatalog';
import { useSearch } from '@hooks/useSearch/useSearch';
import { clearFilms, setGenre } from '@store/slices/filmsSlice';

import { Container, Logo, LogoTitle, StyledHeader, Theme } from './styled';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { searchTitle } = useSearch();
  const { setInitCatalog } = useCatalog();
  const handleClick = (): void => {
    searchTitle.length > 0 && dispatch(clearFilms());
    dispatch(setGenre(null));
    setInitCatalog();
  };

  return (
    <StyledHeader>
      <Container>
        <NavLink to='/' onClick={handleClick}>
          <Logo>
            <LogoPic />
            <LogoTitle>ModsenFilms</LogoTitle>
          </Logo>
        </NavLink>
        <Search />
        <Theme>
          <ThemeToggler />
        </Theme>
        <Burger />
        <Menu />
      </Container>
    </StyledHeader>
  );
};
