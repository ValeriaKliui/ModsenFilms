import { type ISpinnerProps } from '../../constants/types/interfaces';
import { SpinnerStyled } from './styled';
import { type FC } from 'react';

export const Spinner: FC<ISpinnerProps> = ({ size }) => {
  return <SpinnerStyled $size={size} />;
};
