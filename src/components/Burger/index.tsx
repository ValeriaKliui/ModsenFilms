import { useModals } from '@hooks/useModals/useModals';
import { type FC } from 'react';

import { BurgerContainer, BurgerLine } from './styled';

export const Burger: FC = () => {
  const { toggleMenu, isMenuOpened } = useModals();

  return (
    <BurgerContainer onClick={toggleMenu}>
      <BurgerLine $isMenuOpened={isMenuOpened} /> <BurgerLine $isMenuOpened={isMenuOpened} />
      <BurgerLine $isMenuOpened={isMenuOpened} />
    </BurgerContainer>
  );
};
