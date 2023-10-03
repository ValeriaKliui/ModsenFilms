import { useAppDispatch } from '../../store/hooks/hooks';
import { toggleMenu } from '../../store/slices/ModalsSlice';
import { BurgerLine, BurgerContainer } from './styled';

interface BurgerProps {
  isMenuOpened: boolean;
}

export const Burger: React.FC<BurgerProps> = ({ isMenuOpened }) => {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(toggleMenu());
  };

  return (
      <BurgerContainer onClick={handleClick}>
          <BurgerLine $isMenuOpened={isMenuOpened} />
          <BurgerLine $isMenuOpened={isMenuOpened} />
          <BurgerLine $isMenuOpened={isMenuOpened} />
      </BurgerContainer>
  );
};
