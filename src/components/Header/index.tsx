import LogoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle, Burger, BurgerLine } from './styled';
import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';
import { setFirstPage, setGenre } from '../../store/slices/ShowingFilmsSlice';
import { Toggler } from '../Toggler';
import { Search } from '../Search';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(setGenre(null));
    dispatch(setFirstPage);
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
        <Toggler />
        <Burger>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </Burger>
      </Container>
    </StyledHeader>
  );
};
