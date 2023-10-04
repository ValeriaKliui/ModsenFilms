import LogoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle, Theme } from './styled';
import { NavLink } from 'react-router-dom';
import { Toggler } from '../Toggler';
import { Search } from '../Search';
import { Menu } from '../Menu';
import { Burger } from '../Burger';
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
          <Toggler />
        </Theme>
        <Burger />
        <Menu />
      </Container>
    </StyledHeader>
  );
};
