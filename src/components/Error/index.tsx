import ErrorPic from '@assets/img/Error.svg';
import { type IErrorProps } from '@constants/types/interfaces';
import { type FC } from 'react';

import { ErrorStyled, ErrorTitle } from './styled';

export const Error: FC<IErrorProps> = ({ text = 'Something went wrong' }) => {
    return (
        <ErrorStyled>
            <ErrorPic />
            <ErrorTitle>{text}</ErrorTitle>
        </ErrorStyled>
    );
};
