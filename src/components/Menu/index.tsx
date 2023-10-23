import { type FC } from 'react';
import { ThemeToggler } from '@components/ThemeToggler';
import { useModals } from '@hooks/useModals/useModals';

import { MenuStyled, Theme } from './styled';

export const Menu: FC = () => {
  const { isMenuOpened } = useModals();

  return (
    <MenuStyled $isOpened={isMenuOpened}>
      <Theme>
        <ThemeToggler />
      </Theme>
    </MenuStyled>
  );
};
