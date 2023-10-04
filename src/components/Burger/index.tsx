import { useModals } from '../../utils/hooks/useModals/useModals';
import { BurgerLine, BurgerContainer } from './styled';
import { type FC } from 'react';

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
