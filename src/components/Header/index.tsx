import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import LogoPic from '@assets/img/logo.svg';
import { Burger } from '@components/Burger';
import { Menu } from '@components/Menu';
import { Search } from '@components/Search';
import { ThemeToggler } from '@components/ThemeToggler';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useSearch } from '@hooks/useSearch/useSearch';
import {
  clearFilms,
  setFilmsPerPage,
  setFirstPage,
  setGenre,
  setSearchQuery,
  setSearchTitle,
} from '@store/slices/filmsSlice';

import { Container, Logo, LogoTitle, StyledHeader, Theme } from './styled';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { searchTitle } = useSearch();
  const handleClick = (): void => {
    searchTitle.length > 0 && dispatch(clearFilms());
    dispatch(setGenre(null));
    dispatch(setFirstPage());
    dispatch(setFilmsPerPage(FILMS_LIMIT));
    dispatch(setSearchTitle(''));
    dispatch(setSearchQuery(''));
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
