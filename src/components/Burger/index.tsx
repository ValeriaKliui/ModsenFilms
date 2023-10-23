import { type FC } from 'react';
import { useModals } from '@hooks/useModals/useModals';

import { BurgerContainer, BurgerLine } from './styled';

export const Burger: FC = () => {
  const { toggleMenu, isMenuOpened } = useModals();

  return (
    <BurgerContainer onClick={toggleMenu}>
      <BurgerLine $isMenuOpened={isMenuOpened} />{' '}
      <BurgerLine $isMenuOpened={isMenuOpened} />
      <BurgerLine $isMenuOpened={isMenuOpened} />
    </BurgerContainer>
  );
};
