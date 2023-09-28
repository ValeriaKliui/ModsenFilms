import ErrorPic from '../../assets/img/Error.svg';
import { ErrorImg, ErrorStyled, ErrorTitle } from './styled';
export const Error: React.FC = () => {
  return (
      <ErrorStyled>
          <ErrorImg src={ErrorPic} alt="error" />
          <ErrorTitle>Sorry, you have to enable VPN for site to run</ErrorTitle>
      </ErrorStyled>
  );
};
