import { BurgerLine, BurgerContainer } from './styled';
import { type FC } from 'react';
import { useModals } from '@hooks/useModals/useModals';

export const Burger: FC = () => {
  const { toggleMenu, isMenuOpened } = useModals();
  return (
      <BurgerContainer onClick={toggleMenu}>
          <BurgerLine $isMenuOpened={isMenuOpened} />
          <BurgerLine $isMenuOpened={isMenuOpened} />
          <BurgerLine $isMenuOpened={isMenuOpened} />
      </BurgerContainer>
  );
};
