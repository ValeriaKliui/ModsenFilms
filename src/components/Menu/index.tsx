import { useModals } from '@hooks/useModals/useModals';
import { Toggler } from '@components/Toggler';
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
