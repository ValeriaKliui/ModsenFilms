import { type ISpinnerProps } from '@constants/types/interfaces';
import { type FC } from 'react';

import { SpinnerStyled } from './styled';

export const Spinner: FC<ISpinnerProps> = ({ size }) => {
  return <SpinnerStyled $size={size} />;
};
