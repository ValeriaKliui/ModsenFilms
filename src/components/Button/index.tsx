import { ButtonStyled } from './styled';
import { type FC } from 'react';
import { type IButtonProps } from '@constants/types/interfaces';

export const Button: FC<IButtonProps> = ({ text, onClick, isHidden }) => {
  return (
      <ButtonStyled onClick={onClick} $isHidden={isHidden} data-testid="button-show-more">
          {text}
      </ButtonStyled>
  );
};
