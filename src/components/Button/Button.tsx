import React from 'react';
import * as S from './styles';

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <S.ButtonStyled>{text}</S.ButtonStyled>;
};
