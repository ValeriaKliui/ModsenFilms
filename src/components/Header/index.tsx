import LogoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle, Burger, BurgerLine } from './styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';
import { setFirstPage, setGenre } from '../../store/slices/ShowingFilmsSlice';
import { Toggler } from '../Toggler';
import { Search } from '../Search';
import { selectIsMenuOpened, toggleMenu } from '../../store/slices/ModalsSlice';
import { Menu } from '../Menu';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(setGenre(null));
    dispatch(setFirstPage);
  };
  const openMenu = (): void => {
    dispatch(toggleMenu());
  };
  const isMenuOpened = useAppSelector(selectIsMenuOpened);

  return (
    <StyledHeader $isMenuOpened={isMenuOpened}>
      <Container>
        <NavLink to="/" onClick={handleClick}>
          <Logo>
            <LogoPic />
            <LogoTitle>ModsenFilms</LogoTitle>
          </Logo>
        </NavLink>
        <Search />
        <Toggler shouldBeHidden={true} />
        <Burger onClick={() => openMenu()}>
          <BurgerLine $isMenuOpened={isMenuOpened} />
          <BurgerLine $isMenuOpened={isMenuOpened} />
          <BurgerLine $isMenuOpened={isMenuOpened} />
        </Burger>
        <Menu />
      </Container>
    </StyledHeader>
  );
};
