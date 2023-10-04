import { type IButtonProps } from '../../constants/types/interfaces';
import { ButtonStyled } from './styled';
import { type FC } from 'react';

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};
