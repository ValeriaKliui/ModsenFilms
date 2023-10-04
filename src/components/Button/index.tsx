import { ButtonStyled } from './styled';
import { type FC } from 'react';
import { type IButtonProps } from '@constants/types/interfaces';

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};
