import LogoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo, Container, LogoTitle } from './styled';
import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';
import { Button } from '../Button';
import { Search } from '../Search';
import { NavLink } from 'react-router-dom';
import { setFirstPage, setGenre } from '../../store/slices/ShowingFilmsSlice';

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
              <Button
                  text="change theme"
                  onClick={() => {
            dispatch(toggleTheme());
          }}
        />
          </Container>
      </StyledHeader>
  );
};
