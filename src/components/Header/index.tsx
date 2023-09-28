import logoPic from '../../assets/img/logo.svg';
import { StyledHeader, Logo, Container } from './styled';
import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';
import { Button } from '../Button';
import { Search } from '../Search';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
      <StyledHeader>
          <Container>
              <Logo>
                  <img src={logoPic} alt="ModsenFilms" />
                  <h1>ModsenFilms</h1>
              </Logo>
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
