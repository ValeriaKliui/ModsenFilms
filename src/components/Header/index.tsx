import LogoPic from '@assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle, Theme } from './styled';
import { NavLink } from 'react-router-dom';
import { ThemeToggler } from '@components/ThemeToggler';
import { Search } from '@components/Search';
import { Menu } from '@components/Menu';
import { Burger } from '@components/Burger';
import { type FC } from 'react';

export const Header: FC = () => {
  return (
      <StyledHeader>
          <Container>
              <NavLink to="/">
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
