import { HTMLAttributes } from 'react';
import * as S from './styled';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({ text, ...props }) => {
  return <S.ButtonStyled {...props}>{text}</S.ButtonStyled>;
};
