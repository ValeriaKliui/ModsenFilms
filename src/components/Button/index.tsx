import { type IButtonProps } from '@constants/types/interfaces';
import { type FC } from 'react';

import { ButtonStyled } from './styled';

export const Button: FC<IButtonProps> = ({ text, onClick, isHidden }) => {
  return (
    <ButtonStyled onClick={onClick} $isHidden={isHidden} data-testid="button-show-more">
      {text}
    </ButtonStyled>
  );
};
