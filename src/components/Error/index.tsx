import ErrorPic from '../../assets/img/Error.svg';
import { ErrorStyled, ErrorTitle } from './styled';
export const Error: React.FC = () => {
  return (
      <ErrorStyled>
          <ErrorPic />
          <ErrorTitle>Sorry, you have to enable VPN for this site to run</ErrorTitle>
      </ErrorStyled>
  );
};
