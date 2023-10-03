import { useAppSelector } from '../../store/hooks/hooks';
import { selectIsMenuOpened } from '../../store/slices/ModalsSlice';
import { Toggler } from '../Toggler';
import { MenuStyled } from './styled';

export const Menu: React.FC = () => {
  const isMenuOpened = useAppSelector(selectIsMenuOpened);
  return (
      <MenuStyled $isOpened={isMenuOpened}>
          <Toggler />
      </MenuStyled>
  );
};
