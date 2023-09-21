import logoPic from '../../assets/img/logo.svg';
import * as S from './styled';
import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleTheme } from '../../store/slices/ThemeSlice';
import { Button } from '../Button';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <S.StyledHeader>
      <S.Logo>
        <img src={logoPic} alt="ModsenFilms" />
        <h1>ModsenFilms</h1>
      </S.Logo>
      <Button
        text="change theme"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </S.StyledHeader>
  );
};
