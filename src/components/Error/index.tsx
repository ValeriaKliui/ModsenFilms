import ErrorPic from '@assets/img/Error.svg';
import { ErrorStyled, ErrorTitle } from './styled';
import { type FC } from 'react';
import { type IErrorProps } from '@constants/types/interfaces';

export const Error: FC<IErrorProps> = ({ text = 'Something went wrong' }) => {
  return (
      <ErrorStyled>
          <ErrorPic />
          <ErrorTitle>{text}</ErrorTitle>
      </ErrorStyled>
  );
};
