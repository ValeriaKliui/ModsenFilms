import { useModals } from '@hooks/useModals/useModals';
import { ThemeToggler } from '@components/ThemeToggler';
import { MenuStyled, Theme } from './styled';
import { type FC } from 'react';

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
