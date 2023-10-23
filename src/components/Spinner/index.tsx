import { type FC } from 'react';
import { type ISpinnerProps } from '@constants/types/interfaces';

import { SpinnerStyled } from './styled';

export const Spinner: FC<ISpinnerProps> = ({ size }) => {
  return <SpinnerStyled $size={size} />;
};
