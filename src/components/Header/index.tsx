import LogoPic from '@assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle, Theme } from './styled';
import { NavLink } from 'react-router-dom';
import { ThemeToggler } from '@components/ThemeToggler';
import { Search } from '@components/Search';
import { Menu } from '@components/Menu';
import { Burger } from '@components/Burger';
import { type FC } from 'react';
import { useAppDispatch } from '@utils/hooks/reduxHooks/hooks';
import {
  clearFilms,
  setFilmsPerPage,
  setFirstPage,
  setGenre,
  setSearchQuery,
  setSearchTitle,
} from '@store/slices/filmsSlice';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { useSearch } from '@utils/hooks/useSearch/useSearch';

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
              <NavLink to="/" onClick={handleClick}>
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
