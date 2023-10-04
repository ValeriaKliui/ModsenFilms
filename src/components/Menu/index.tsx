import { useAppSelector } from '../../store/hooks/hooks';
import { selectIsMenuOpened } from '../../store/selectors/modalsSelectors';
import { useModals } from '../../utils/hooks/useModals/useModals';
import { Toggler } from '../Toggler';
import { MenuStyled, Theme } from './styled';
import { type FC } from 'react';

export const Menu: FC = () => {
  const { isMenuOpened } = useModals();

  return (
    <MenuStyled $isOpened={isMenuOpened}>
      <Theme>
        <Toggler />
      </Theme>
    </MenuStyled>
  );
};
