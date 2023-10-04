import { SpinnerStyled } from './styled';
import { type FC } from 'react';
import { type ISpinnerProps } from '@constants/types/interfaces';

export const Spinner: FC<ISpinnerProps> = ({ size }) => {
  return <SpinnerStyled $size={size} />;
};
