import ErrorPic from '../../assets/img/Error.svg';
import { ErrorStyled, ErrorTitle } from './styled';
interface ErrorProps {
  text: string;
}
export const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <ErrorStyled>
      <ErrorPic />
      <ErrorTitle>{text}</ErrorTitle>
    </ErrorStyled>
  );
};
