import LogoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle } from './styled';
import { useAppSelector } from '../../store/hooks/hooks';
import { NavLink } from 'react-router-dom';
import { Toggler } from '../Toggler';
import { Search } from '../Search';
import { selectIsMenuOpened } from '../../store/slices/ModalsSlice';
import { Menu } from '../Menu';
import { Burger } from '../Burger';

export const Header: React.FC = () => {
  const isMenuOpened = useAppSelector(selectIsMenuOpened);

  return (
      <StyledHeader $isMenuOpened={isMenuOpened}>
          <Container>
              <NavLink to="/">
                  <Logo>
                      <LogoPic />
                      <LogoTitle>ModsenFilms</LogoTitle>
                  </Logo>
              </NavLink>
              <Search />
              <Toggler shouldBeHidden={true} />
              <Burger isMenuOpened={isMenuOpened} />
              <Menu />
          </Container>
      </StyledHeader>
  );
};
